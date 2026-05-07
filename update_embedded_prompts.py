#!/usr/bin/env python3
"""Sync EMBEDDED_PROMPTS in app.js with the *-prompt.txt files under assets/.

Scans every file matching `*-prompt.txt` inside `assets/`, reads its content,
and rewrites the `const EMBEDDED_PROMPTS = { ... };` block at the top of
`app.js` so that each key (relative path with forward slashes) maps to the
file's text. Keys are sorted to match the existing ordering convention:
videos first (global → local → controllable), then images, then anything else;
within each group, by filename.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
ASSETS_DIR = SCRIPT_DIR / "assets"
APP_JS = SCRIPT_DIR / "app.js"

# Order used by the existing EMBEDDED_PROMPTS block. Anything not listed here
# is appended after these in alphabetical order.
GROUP_ORDER = [
    "assets/videos/global-editing/",
    "assets/videos/local-editing/",
    "assets/videos/controllable-editing/",
    "assets/images/image-editing/",
]

BLOCK_RE = re.compile(
    r"const\s+EMBEDDED_PROMPTS\s*=\s*\{.*?\};\s*",
    re.DOTALL,
)


def js_string(value: str) -> str:
    """Return a double-quoted JS string literal for `value`.

    json.dumps with ensure_ascii=False keeps non-ASCII chars (e.g. curly
    quotes) intact and produces a valid JS string literal.
    """
    return json.dumps(value, ensure_ascii=False)


def group_index(key: str) -> int:
    for i, prefix in enumerate(GROUP_ORDER):
        if key.startswith(prefix):
            return i
    return len(GROUP_ORDER)


def collect_prompts() -> dict[str, str]:
    if not ASSETS_DIR.is_dir():
        sys.exit(f"assets directory not found: {ASSETS_DIR}")

    prompts: dict[str, str] = {}
    for path in ASSETS_DIR.rglob("*-prompt.txt"):
        rel = path.relative_to(SCRIPT_DIR).as_posix()
        text = path.read_text(encoding="utf-8").strip()
        prompts[rel] = text
    return prompts


def render_block(prompts: dict[str, str]) -> str:
    keys = sorted(prompts.keys(), key=lambda k: (group_index(k), k))
    lines = ["const EMBEDDED_PROMPTS = {"]
    for k in keys:
        lines.append(f"  {js_string(k)}: {js_string(prompts[k])},")
    lines.append("};\n")
    return "\n".join(lines)


def main() -> int:
    prompts = collect_prompts()
    if not prompts:
        sys.exit("No *-prompt.txt files found under assets/")

    if not APP_JS.is_file():
        sys.exit(f"app.js not found: {APP_JS}")

    original = APP_JS.read_text(encoding="utf-8")
    new_block = render_block(prompts)

    if BLOCK_RE.search(original):
        updated = BLOCK_RE.sub(lambda _: new_block + "\n", original, count=1)
    else:
        # No existing block — prepend.
        updated = new_block + "\n" + original

    if updated == original:
        print(f"No changes ({len(prompts)} prompts).")
        return 0

    APP_JS.write_text(updated, encoding="utf-8")
    print(f"Updated EMBEDDED_PROMPTS with {len(prompts)} entries.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
