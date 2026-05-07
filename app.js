const EMBEDDED_PROMPTS = {
  "assets/videos/global-editing/task-01-prompt.txt": "Relight the scene with warm, low artificial light to evoke a cozy, intimate nighttime atmosphere.",
  "assets/videos/global-editing/task-02-prompt.txt": "Make it cookierun kingdom style.",
  "assets/videos/global-editing/task-03-prompt.txt": "Change the weather to a fiery sunset with intense red-orange glow.",
  "assets/videos/global-editing/task-04-prompt.txt": "Recam: the camera steadily pulls back, revealing more parking lot while monument shrinks and background perspective changes.",
  "assets/videos/global-editing/task-05-prompt.txt": "VFX Editing: Add intense crystalline ice effects along the frost-covered forest path and surrounding trees, spreading outward from the ground with shimmering frozen mist drifting gently through the air.",
  "assets/videos/global-editing/task-06-prompt.txt": "Render this video in akihiko yoshida style.",
  "assets/videos/local-editing/task-01-prompt.txt": "Place a woman in a white dress.",
  "assets/videos/local-editing/task-02-prompt.txt": "Discard the picnic blanket on the grass",
  "assets/videos/local-editing/task-03-prompt.txt": "Make the bell tower white color.",
  "assets/videos/local-editing/task-04-prompt.txt": "Change the concrete ground's texture to a darker, rougher, and more grainy one.",
  "assets/videos/local-editing/task-05-prompt.txt": "Turn the british flag into a american flag.",
  "assets/videos/local-editing/task-06-prompt.txt": "Turn the background of the woman into a wide alpine valley with distant mountains and a cloudy sky.",
  "assets/videos/local-editing/task-07-prompt.txt": "Exchange the man’s brown corduroy jacket for a black formal jacket with gold embroidery, while he remains on the left.",
  "assets/videos/local-editing/task-08-prompt.txt": "Replace the man with a young woman, long dark hair, light top, side profile.",
  "assets/videos/local-editing/task-09-prompt.txt": "Remove all visible watermarks.",
  "assets/videos/local-editing/task-10-prompt.txt": "Erase subtitles.",
  "assets/videos/local-editing/task-11-prompt.txt": "Add a large light-tan dog leaning near the seated man.",
  "assets/videos/local-editing/task-12-prompt.txt": "Make the trailer blue opaque texture green matte texture.",
  "assets/videos/local-editing/task-13-prompt.txt": "Swap the volcanic crater for a crater.",
  "assets/videos/local-editing/task-14-prompt.txt": "Change the woman's light blue denim jacket into a beige blouse while she stands on the left.",
  "assets/videos/local-editing/task-15-prompt.txt": "Convert the right woman in yellow blazer into one wearing an orange blazer.",
  "assets/videos/controllable-editing/task-01-prompt.txt": "Make this video become colorful.",
  "assets/videos/controllable-editing/task-02-prompt.txt": "Make this footage clearer.",
  "assets/videos/controllable-editing/task-03-prompt.txt": "Enhance this video to hd.",
  "assets/videos/controllable-editing/task-04-prompt.txt": "Widen the view of this video. Person writes notes on notepad at wooden desk beside laptop and mug. Green plants frame scene. Warm lighting suggests focused work or planning session. Casual attire adds relaxed vibe to productive moment.",
  "assets/videos/controllable-editing/task-05-prompt.txt": "Inpainting Mannequin.",
  "assets/videos/controllable-editing/task-06-prompt.txt": "Follow the hed layout to create a video: Andean condor soars above rugged cliffs as tourists gather at a cliffside viewpoint, admiring the majestic bird against deep blue mountain valleys under bright sunlight.",
  "assets/videos/controllable-editing/task-07-prompt.txt": "Use depth as control to generate the original clip.",
  "assets/videos/controllable-editing/task-08-prompt.txt": "Generate the video result conditioned on this Canny input.",
  "assets/videos/controllable-editing/task-09-prompt.txt": "Use the scribble condition to guide video synthesis. Two people share tea during a quiet conversation. One gestures while seated comfortably; the other rests hands near documents on a wooden table. Warm tones and soft light create an intimate atmosphere.",
  "assets/videos/controllable-editing/task-10-prompt.txt": "Detect Crow in the clip.",
  "assets/videos/controllable-editing/task-11-prompt.txt": "Create the hed detector output video.",
  "assets/videos/controllable-editing/task-12-prompt.txt": "Make a depth control map sequence.",
  "assets/videos/controllable-editing/task-13-prompt.txt": "Generate the canny condition.",
  "assets/videos/controllable-editing/task-14-prompt.txt": "Turn this source clip into a fake scribble control clip.",
  "assets/images/image-editing/task-01-prompt.txt": "Change this to Street Photography style.",
  "assets/images/image-editing/task-02-prompt.txt": "Transform this into line Art style.",
  "assets/images/image-editing/task-03-prompt.txt": "Place a silver bracelet.",
  "assets/images/image-editing/task-04-prompt.txt": "Texture the cutting board with minimalist leather texture.",
  "assets/images/image-editing/task-05-prompt.txt": "Substitute vintage radio for portable space heater.",
  "assets/images/image-editing/task-06-prompt.txt": "Substitute antique pocket watch with pinecone.",
  "assets/images/image-editing/task-07-prompt.txt": "Swap Crimson velvet high-waisted pants for Denim skirt.",
  "assets/images/image-editing/task-08-prompt.txt": "Swap the businessman with a woman wearing jacket and scarf.",
};

const videoTasks = [
  {
    id: "global-01",
    type: "video",
    category: "global",
    title: "Global Task 01",
    subtitle: "Style transfer / overall appearance",
    prompt: "Convert the whole video into a cinematic golden-hour look.",
    source: "assets/videos/global-editing/task-01-source.mp4",
    result: "assets/videos/global-editing/task-01-result.mp4",
    tags: ["global editing", "style"],
    difficulty: "Medium",
    reference: "None",
  },
  {
    id: "global-02",
    type: "video",
    category: "global",
    title: "Global Task 02",
    subtitle: "Season or atmosphere change",
    prompt: "Turn the scene into a snowy winter environment.",
    source: "assets/videos/global-editing/task-02-source.mp4",
    result: "assets/videos/global-editing/task-02-result.mp4",
    tags: ["global editing", "weather"],
    difficulty: "Medium",
    reference: "None",
  },
  {
    id: "global-03",
    type: "video",
    category: "global",
    title: "Global Task 03",
    subtitle: "Tone remapping",
    prompt: "Make the video look like a retro film scan.",
    source: "assets/videos/global-editing/task-03-source.mp4",
    result: "assets/videos/global-editing/task-03-result.mp4",
    tags: ["global editing", "film"],
    difficulty: "Easy",
    reference: "None",
  },
  {
    id: "global-04",
    type: "video",
    category: "global",
    title: "Global Task 04",
    subtitle: "Domain adaptation",
    prompt: "Transform the scene into an anime-style rendering.",
    source: "assets/videos/global-editing/task-04-source.mp4",
    result: "assets/videos/global-editing/task-04-result.mp4",
    tags: ["global editing", "anime"],
    difficulty: "Medium",
    reference: "None",
  },
  {
    id: "global-05",
    type: "video",
    category: "global",
    title: "Global Task 05",
    subtitle: "Color climate shift",
    prompt: "Make the whole sequence cooler and moonlit.",
    source: "assets/videos/global-editing/task-05-source.mp4",
    result: "assets/videos/global-editing/task-05-result.mp4",
    tags: ["global editing", "lighting"],
    difficulty: "Easy",
    reference: "None",
  },
  {
    id: "global-06",
    type: "video",
    category: "global",
    title: "Global Task 06",
    subtitle: "Art-direction change",
    prompt: "Render the full video in watercolor style.",
    source: "assets/videos/global-editing/task-06-source.mp4",
    result: "assets/videos/global-editing/task-06-result.mp4",
    tags: ["global editing", "watercolor"],
    difficulty: "Medium",
    reference: "None",
  },
  {
    id: "global-07",
    type: "video",
    category: "global",
    title: "Global Task 07",
    subtitle: "Scene-wide semantic shift",
    prompt: "Change the city scene into a cyberpunk night version.",
    source: "assets/videos/global-editing/task-07-source.mp4",
    result: "assets/videos/global-editing/task-07-result.mp4",
    tags: ["global editing", "cyberpunk"],
    difficulty: "Hard",
    reference: "None",
  },
  {
    id: "global-08",
    type: "video",
    category: "global",
    title: "Global Task 08",
    subtitle: "Lens and grading effect",
    prompt: "Restyle the video with soft bloom and dramatic contrast.",
    source: "assets/videos/global-editing/task-08-source.mp4",
    result: "assets/videos/global-editing/task-08-result.mp4",
    tags: ["global editing", "grading"],
    difficulty: "Medium",
    reference: "None",
  },
  {
    id: "global-09",
    type: "video",
    category: "global",
    title: "Global Task 09",
    subtitle: "Texture translation",
    prompt: "Turn the footage into an oil-painting style animation.",
    source: "assets/videos/global-editing/task-09-source.mp4",
    result: "assets/videos/global-editing/task-09-result.mp4",
    tags: ["global editing", "oil painting"],
    difficulty: "Medium",
    reference: "None",
  },
  {
    id: "global-10",
    type: "video",
    category: "global",
    title: "Global Task 10",
    subtitle: "Weather transition",
    prompt: "Convert a sunny scene into a rainy day.",
    source: "assets/videos/global-editing/task-10-source.mp4",
    result: "assets/videos/global-editing/task-10-result.mp4",
    tags: ["global editing", "rain"],
    difficulty: "Hard",
    reference: "None",
  },
  {
    id: "local-01",
    type: "video",
    category: "local",
    title: "Local Task 01",
    subtitle: "Single-object addition",
    prompt: "Add a red umbrella to the person in the foreground.",
    source: "assets/videos/local-editing/task-01-source.mp4",
    result: "assets/videos/local-editing/task-01-result.mp4",
    tags: ["local editing", "addition"],
    difficulty: "Medium",
    reference: "Mask-guided",
  },
  {
    id: "local-02",
    type: "video",
    category: "local",
    title: "Local Task 02",
    subtitle: "Object replacement",
    prompt: "Replace the cup on the table with a glass bottle.",
    source: "assets/videos/local-editing/task-02-source.mp4",
    result: "assets/videos/local-editing/task-02-result.mp4",
    tags: ["local editing", "replacement"],
    difficulty: "Medium",
    reference: "Mask-guided",
  },
  {
    id: "local-03",
    type: "video",
    category: "local",
    title: "Local Task 03",
    subtitle: "Object removal",
    prompt: "Remove the pedestrian on the left side of the road.",
    source: "assets/videos/local-editing/task-03-source.mp4",
    result: "assets/videos/local-editing/task-03-result.mp4",
    tags: ["local editing", "removal"],
    difficulty: "Easy",
    reference: "Mask-guided",
  },
  {
    id: "local-04",
    type: "video",
    category: "local",
    title: "Local Task 04",
    subtitle: "Attribute editing",
    prompt: "Change the car color from white to matte black.",
    source: "assets/videos/local-editing/task-04-source.mp4",
    result: "assets/videos/local-editing/task-04-result.mp4",
    tags: ["local editing", "attribute"],
    difficulty: "Easy",
    reference: "Mask-guided",
  },
  {
    id: "local-05",
    type: "video",
    category: "local",
    title: "Local Task 05",
    subtitle: "Foreground edit",
    prompt: "Add sunglasses to the person's face.",
    source: "assets/videos/local-editing/task-05-source.mp4",
    result: "assets/videos/local-editing/task-05-result.mp4",
    tags: ["local editing", "face"],
    difficulty: "Medium",
    reference: "Mask-guided",
  },
  {
    id: "local-06",
    type: "video",
    category: "local",
    title: "Local Task 06",
    subtitle: "Fine-grained region edit",
    prompt: "Turn the flower in the center from yellow to blue.",
    source: "assets/videos/local-editing/task-06-source.mp4",
    result: "assets/videos/local-editing/task-06-result.mp4",
    tags: ["local editing", "color"],
    difficulty: "Easy",
    reference: "Mask-guided",
  },
  {
    id: "local-07",
    type: "video",
    category: "local",
    title: "Local Task 07",
    subtitle: "Part-based manipulation",
    prompt: "Put a hat on the dog without changing the background.",
    source: "assets/videos/local-editing/task-07-source.mp4",
    result: "assets/videos/local-editing/task-07-result.mp4",
    tags: ["local editing", "object part"],
    difficulty: "Medium",
    reference: "Mask-guided",
  },
  {
    id: "local-08",
    type: "video",
    category: "local",
    title: "Local Task 08",
    subtitle: "Insert local element",
    prompt: "Add a small campfire near the tent.",
    source: "assets/videos/local-editing/task-08-source.mp4",
    result: "assets/videos/local-editing/task-08-result.mp4",
    tags: ["local editing", "insertion"],
    difficulty: "Hard",
    reference: "Mask-guided",
  },
  {
    id: "local-09",
    type: "video",
    category: "local",
    title: "Local Task 09",
    subtitle: "Object reappearance",
    prompt: "Replace the book with a bouquet of flowers.",
    source: "assets/videos/local-editing/task-09-source.mp4",
    result: "assets/videos/local-editing/task-09-result.mp4",
    tags: ["local editing", "swap"],
    difficulty: "Medium",
    reference: "Mask-guided",
  },
  {
    id: "local-10",
    type: "video",
    category: "local",
    title: "Local Task 10",
    subtitle: "Multiple local edits",
    prompt: "Remove the chair and add a floor lamp in its place.",
    source: "assets/videos/local-editing/task-10-source.mp4",
    result: "assets/videos/local-editing/task-10-result.mp4",
    tags: ["local editing", "multi-region"],
    difficulty: "Hard",
    reference: "Mask-guided",
  },
  
];

const imageTasks = [
  {
    id: "image-01",
    type: "image",
    category: "image",
    title: "Image Pair 01",
    subtitle: "Reference-enhanced image editing",
    prompt: "Edit the source image by following the reference appearance.",
    source: "assets/images/image-editing/task-01-source.jpeg",
    result: "assets/images/image-editing/task-01-result.jpeg",
    refImage: "assets/images/image-editing/task-01-ref.jpeg",
    tags: ["image editing", "reference"],
    difficulty: "Medium",
    reference: "Ref image",
  },
  {
    id: "image-02",
    type: "image",
    category: "image",
    title: "Image Pair 02",
    subtitle: "Style or identity guidance",
    prompt: "Use the reference image to guide visual transformation.",
    source: "assets/images/image-editing/task-02-source.jpeg",
    result: "assets/images/image-editing/task-02-result.jpeg",
    refImage: "assets/images/image-editing/task-02-ref.jpeg",
    tags: ["image editing", "identity"],
    difficulty: "Medium",
    reference: "Ref image",
  },
  {
    id: "image-03",
    type: "image",
    category: "image",
    title: "Image Pair 03",
    subtitle: "Attribute transfer",
    prompt: "Transfer fine-grained visual attributes from the reference.",
    source: "assets/images/image-editing/task-03-source.jpeg",
    result: "assets/images/image-editing/task-03-result.jpeg",
    refImage: "assets/images/image-editing/task-03-ref.jpeg",
    tags: ["image editing", "attribute"],
    difficulty: "Easy",
    reference: "Ref image",
  },
  {
    id: "image-04",
    type: "image",
    category: "image",
    title: "Image Pair 04",
    subtitle: "Layout-aware editing",
    prompt: "Use reference guidance while preserving the source composition.",
    source: "assets/images/image-editing/task-04-source.jpeg",
    result: "assets/images/image-editing/task-04-result.jpeg",
    refImage: "assets/images/image-editing/task-04-ref.jpeg",
    tags: ["image editing", "layout"],
    difficulty: "Medium",
    reference: "Ref image",
  },
  {
    id: "image-05",
    type: "image",
    category: "image",
    title: "Image Pair 05",
    subtitle: "Texture guidance",
    prompt: "Use the reference image to guide the target texture generation.",
    source: "assets/images/image-editing/task-05-source.jpeg",
    result: "assets/images/image-editing/task-05-result.jpeg",
    refImage: "assets/images/image-editing/task-05-ref.jpeg",
    tags: ["image editing", "texture"],
    difficulty: "Easy",
    reference: "Ref image",
  },
  {
    id: "image-06",
    type: "image",
    category: "image",
    title: "Image Pair 06",
    subtitle: "Semantic reference control",
    prompt: "Generate a target image aligned with reference semantics.",
    source: "assets/images/image-editing/task-06-source.jpeg",
    result: "assets/images/image-editing/task-06-result.jpeg",
    refImage: "assets/images/image-editing/task-06-ref.jpeg",
    tags: ["image editing", "semantic"],
    difficulty: "Hard",
    reference: "Ref image",
  },
];

function taskSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function makeVideoTask(category, name, index) {
  const folder =
    category === "global"
      ? "global-editing"
      : category === "local"
        ? "local-editing"
        : "controllable-editing";
  const idPrefix =
    category === "global" ? "global" : category === "local" ? "local" : "control";
  const categoryName =
    category === "global"
      ? "Global Editing"
      : category === "local"
        ? "Local Editing"
        : "Controllable Editing";

  const indexStr = String(index).padStart(2, "0");
  const promptUrl = `assets/videos/${folder}/task-${indexStr}-prompt.txt`;
  return {
    id: `${idPrefix}-${indexStr}`,
    type: "video",
    category,
    title: name,
    subtitle: `${categoryName} task`,
    prompt: EMBEDDED_PROMPTS[promptUrl] || `Perform ${name.toLowerCase()} for the input video.`,
    promptUrl,
    source: `assets/videos/${folder}/task-${indexStr}-source.mp4`,
    result: `assets/videos/${folder}/task-${indexStr}-result.mp4`,
    refImage: `assets/videos/${folder}/task-${indexStr}-ref.jpeg`,
    bboxImage: `assets/videos/${folder}/task-${indexStr}-bbox.jpeg`,
    circleImage: `assets/videos/${folder}/task-${indexStr}-circle.jpeg`,
    tags: [categoryName.toLowerCase(), taskSlug(name)],
    reference: category === "global" || category === "controllable" ? "Text instruction" : "Reference-guided",
  };
}

async function hydratePrompts(tasks) {
  if (typeof window === "undefined" || !window.fetch || window.location.protocol === "file:") {
    return;
  }
  await Promise.all(
    tasks.map(async (task) => {
      if (!task.promptUrl) return;
      try {
        const response = await fetch(task.promptUrl);
        if (!response.ok) return;
        const text = (await response.text()).trim();
        if (text.length > 0) task.prompt = text;
      } catch {
        /* keep embedded prompt on failure */
      }
    }),
  );
}

function makeImageTask(name, index) {
  const imageCategory = name === "Style Transfer" ? "global" : "local";
  const indexStr = String(index).padStart(2, "0");
  const promptUrl = `assets/images/image-editing/task-${indexStr}-prompt.txt`;

  return {
    id: `image-${indexStr}`,
    type: "image",
    category: imageCategory,
    title: name,
    subtitle: `${categoryLabel(imageCategory)} image editing task for supplementary training`,
    prompt: EMBEDDED_PROMPTS[promptUrl] || `Perform ${name.toLowerCase()} for the input image using the reference image.`,
    promptUrl,
    source: `assets/images/image-editing/task-${indexStr}-source.jpeg`,
    result: `assets/images/image-editing/task-${indexStr}-result.jpeg`,
    refImage: `assets/images/image-editing/task-${indexStr}-ref.jpeg`,
    tags: ["image editing", imageCategory, taskSlug(name)],
    reference: "Ref image",
  };
}

const videoTaskGroups = {
  global: ["Relight", "Style Transfer", "Weather/Season", "Recam", "VFX Editing", "Style Transfer"],
  local: [
    "Object Addition",
    "Object Removal",
    "Object Recolor",
    "Object Retexture",
    "Object Swap",
    "Background Swap",
    "Tryon",
    "Human Swap",
    "Watermark Removal",
    "Subtitle Removal",
    "Object Addition",
    "Object Retexture",
    "Object Swap",
    "Tryon",
    "Human Swap",
  ],
  controllable: [
    "Colorization",
    "Deblur",
    "Upscale",
    "Outpainting",
    "Inpainting",
    "HED to Video",
    "Depth to Video",
    "Canny to Video",
    "Fake Scribble to Video",
    "Video Object Detection",
    "Video to HED",
    "Video to Depth",
    "Video to Canny",
    "Video to Fake Scribble",
  ],
};

const supplementaryImageTaskNames = [
  "Style Transfer",
  "Style Transfer",
  "Object Addition",
  "Object Retexture",
  "Object Swap",
  "Object Swap",
  "Tryon",
  "Human Swap",
];

videoTasks.length = 0;
Object.entries(videoTaskGroups).forEach(([category, names]) => {
  names.forEach((name, index) => {
    videoTasks.push(makeVideoTask(category, name, index + 1));
  });
});

imageTasks.length = 0;
supplementaryImageTaskNames.forEach((name, index) => {
  imageTasks.push(makeImageTask(name, index + 1));
});

const allTasks = [...videoTasks, ...imageTasks];
const citationBib = `@misc{zi2026refvideo6m,
  title={RefVideo-6M: A Reliable Reference-Based Dataset for Instructional Video Editing},
  author={Anonymous Team},
  year={2026},
  note={Project page},
}`;
const authors = [
  { name: "Anonymous 1" },
  { name: "Anonymous 2" },
  { name: "Anonymous 3" },
  { name: "Anonymous 4" },
  { name: "Anonymous 5" },
  { name: "Anonymous 6" },
  { name: "Anonymous 7" },
  { name: "Anonymous 8" },
  { name: "Anonymous 9" },
  { name: "Anonymous 10" },
];

const filters = {
  type: "all",
  category: "all",
};

const typeOptions = [
  { id: "all", label: "All Media" },
  { id: "video", label: "Video Tasks" },
  { id: "image", label: "Image Pairs" },
];

const categoryOptions = [
  { id: "all", label: "All Categories" },
  { id: "global", label: "Global Editing" },
  { id: "local", label: "Local Editing" },
  { id: "controllable", label: "Controllable Editing" },
];

const galleryGrid = document.getElementById("galleryGrid");
const typeFilters = document.getElementById("typeFilters");
const categoryFilters = document.getElementById("categoryFilters");
const authorList = document.getElementById("authorList");
const citationBibElement = document.getElementById("citationBib");
const copyCitationButton = document.getElementById("copyCitationButton");
const citationStatus = document.getElementById("citationStatus");
const modal = document.getElementById("previewModal");
const modalContent = document.getElementById("modalContent");
const closeModalButton = document.getElementById("closeModal");

// document.getElementById("videoTaskCount").textContent = String(videoTasks.length);
// document.getElementById("imageTaskCount").textContent = String(imageTasks.length);
if (citationBibElement) citationBibElement.textContent = citationBib;

function createFilters(target, options, key) {
  options.forEach((option) => {
    const button = document.createElement("button");
    const activeClass = filters[key] === option.id ? "active" : "";
    const colorClass = key === "category" && option.id !== "all" ? `cat-${option.id}` : "";
    button.className = `filter-button ${activeClass} ${colorClass}`.trim();
    button.textContent = option.label;
    button.addEventListener("click", () => {
      filters[key] = option.id;
      if (key === "type" && option.id === "image" && filters.category === "controllable") {
        filters.category = "all";
      }
      renderFilters();
      renderGallery();
    });
    target.appendChild(button);
  });
}

function renderFilters() {
  typeFilters.innerHTML = "";
  categoryFilters.innerHTML = "";
  const visibleCategoryOptions =
    filters.type === "image"
      ? categoryOptions.filter((option) => option.id === "global" || option.id === "local")
      : categoryOptions;

  createFilters(typeFilters, typeOptions, "type");
  createFilters(categoryFilters, visibleCategoryOptions, "category");
}

function closeAuthorMenus() {
  if (!authorList) return;
  document.querySelectorAll(".author-menu").forEach((menu) => {
    menu.classList.remove("open");
  });
  document.querySelectorAll(".author-button").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function renderAuthors() {
  if (!authorList) return;
  authorList.innerHTML = "";

  authors.forEach((author, index) => {
    const chip = document.createElement("div");
    chip.className = "author-chip";

    if (!author.links || author.links.length === 0) {
      const label = document.createElement("div");
      label.className = "author-button author-static";
      label.textContent = author.name;
      chip.appendChild(label);
      authorList.appendChild(chip);
      return;
    }

    const button = document.createElement("button");
    button.className = "author-button";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `author-menu-${index}`);

    const nameText = document.createElement("span");
    nameText.textContent = author.name;
    button.appendChild(nameText);

    if (author.marker) {
      const marker = document.createElement("span");
      marker.className = "author-marker";
      marker.textContent = author.marker;
      button.appendChild(marker);
    }

    const menu = document.createElement("div");
    menu.className = "author-menu";
    menu.id = `author-menu-${index}`;

    author.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      anchor.textContent = link.label;
      menu.appendChild(anchor);
    });

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const willOpen = !menu.classList.contains("open");
      closeAuthorMenus();
      if (willOpen) {
        menu.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });

    chip.append(button, menu);
    authorList.appendChild(chip);
  });
}

async function copyCitation() {
  const setCopied = () => {
    if (citationStatus) citationStatus.textContent = "BibTeX copied to clipboard.";
    if (copyCitationButton) copyCitationButton.textContent = "Copied";
    window.setTimeout(() => {
      if (copyCitationButton) copyCitationButton.textContent = "Copy BibTeX";
      if (citationStatus) citationStatus.textContent = "";
    }, 1800);
  };
  const setFailed = () => {
    if (citationStatus) {
      citationStatus.textContent = "Copy failed. You can still copy the BibTeX text below manually.";
    }
  };

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(citationBib);
      setCopied();
      return;
    }
  } catch {
    /* fall through to legacy fallback */
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = citationBib;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand && document.execCommand("copy");
    document.body.removeChild(textarea);
    if (ok) setCopied();
    else setFailed();
  } catch {
    setFailed();
  }
}

function filteredTasks() {
  return allTasks.filter((task) => {
    const typeMatch = filters.type === "all" || task.type === filters.type;
    const categoryMatch =
      filters.category === "all" || task.category === filters.category;
    return typeMatch && categoryMatch;
  });
}

function categoryLabel(category) {
  if (category === "global") return "Global Editing";
  if (category === "local") return "Local Editing";
  if (category === "controllable") return "Controllable Editing";
  return "Image Editing Pair";
}

function categoryClass(category) {
  if (category === "global") return "global";
  if (category === "local") return "local";
  if (category === "controllable") return "controllable";
  return "image";
}

function makeFallback(label, kind) {
  const fallback = document.createElement("div");
  fallback.className = "media-fallback";
  fallback.innerHTML = `<div><strong>${label}</strong><br /><span>${kind} file not found yet</span></div>`;
  return fallback;
}

const lazyVideoObserver =
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
              if (!video.src && video.dataset.src) {
                video.src = video.dataset.src;
              }
              const playPromise = video.play();
              if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(() => {});
              }
            } else {
              if (!video.paused) video.pause();
            }
          });
        },
        { rootMargin: "200px 0px", threshold: 0.15 },
      )
    : null;

function createMediaPanel(label, source, kind, isResult = false) {
  const panel = document.createElement("div");
  panel.className = `media-panel ${isResult ? "result-panel" : ""}`;
  panel.setAttribute("data-corner", isResult ? "after" : "source");

  if (kind === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = "none";
    video.dataset.src = source;
    video.addEventListener("error", () => {
      video.replaceWith(makeFallback(label, "Video"));
    });
    panel.appendChild(video);
    if (lazyVideoObserver) {
      lazyVideoObserver.observe(video);
    } else {
      video.src = source;
    }
    return panel;
  }

  const image = document.createElement("img");
  image.src = source;
  image.alt = label;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.replaceWith(makeFallback(label, "Image"));
  });
  panel.appendChild(image);
  return panel;
}

function attachSliderDrag(slider) {
  const handle = slider.querySelector(".slider-handle");
  const videoAfter = slider.querySelector(".video-after");
  if (!handle || !videoAfter) return;

  let isDragging = false;
  let dragMoved = false;

  const onDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
    if (clientX === undefined) return;
    dragMoved = true;
    const rect = slider.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    handle.style.left = `${percentage}%`;
    videoAfter.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
  };

  const startDrag = (e) => {
    isDragging = true;
    dragMoved = false;
    e.preventDefault();
    e.stopPropagation();
  };
  const stopDrag = () => { isDragging = false; };

  // Swallow the click that follows a drag, so the parent card doesn't open the modal.
  slider.addEventListener("click", (e) => {
    if (dragMoved) {
      e.stopPropagation();
      e.preventDefault();
      dragMoved = false;
    }
  }, true);

  handle.addEventListener("mousedown", startDrag);
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
  handle.addEventListener("touchstart", startDrag, { passive: false });
  document.addEventListener("touchmove", onDrag);
  document.addEventListener("touchend", stopDrag);
}

function createMediaElement(kind, src, fallbackLabel) {
  if (kind === "video") {
    const v = document.createElement("video");
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.autoplay = true;
    v.preload = "none";
    v.dataset.src = src;
    v.addEventListener("error", () => {
      v.replaceWith(makeFallback(fallbackLabel, "Video"));
    });
    if (lazyVideoObserver) lazyVideoObserver.observe(v);
    else v.src = src;
    return v;
  }
  const img = document.createElement("img");
  img.src = src;
  img.alt = fallbackLabel;
  img.loading = "lazy";
  img.addEventListener("error", () => {
    img.replaceWith(makeFallback(fallbackLabel, "Image"));
  });
  return img;
}

function createComparisonSlider(sourceSrc, resultSrc, kind, aspectClass = "aspect-16x10") {
  const slider = document.createElement("div");
  slider.className = `comparison-slider ${aspectClass}`;

  const beforeWrap = document.createElement("div");
  beforeWrap.className = "video-container video-before";
  const afterMedia = createMediaElement(kind, resultSrc, "Target");
  const afterTag = document.createElement("div");
  afterTag.className = "slider-tag";
  afterTag.textContent = "Target";
  beforeWrap.append(afterMedia, afterTag);

  const afterWrap = document.createElement("div");
  afterWrap.className = "video-container video-after";
  const beforeMedia = createMediaElement(kind, sourceSrc, "Source");
  const beforeTag = document.createElement("div");
  beforeTag.className = "slider-tag";
  beforeTag.textContent = "Source";
  afterWrap.append(beforeMedia, beforeTag);

  const handle = document.createElement("div");
  handle.className = "slider-handle";
  const grabber = document.createElement("div");
  grabber.className = "slider-grabber";
  handle.appendChild(grabber);

  slider.append(beforeWrap, afterWrap, handle);

  requestAnimationFrame(() => attachSliderDrag(slider));

  return slider;
}

function createCard(task) {
  const card = document.createElement("article");
  card.className = `glass-panel card cat-${categoryClass(task.category)}`;

  const header = document.createElement("div");
  header.className = "card-header";
  header.innerHTML = `
    <div>
      <h4 class="card-title">${task.title}</h4>
      <p class="card-subtitle">${task.subtitle}</p>
    </div>
  `;

  const pill = document.createElement("span");
  pill.className = `pill ${categoryClass(task.category)}`;
  pill.textContent = categoryLabel(task.category);
  header.appendChild(pill);

  const mediaWrap = document.createElement("div");
  mediaWrap.className = "card-media";
  const slider = createComparisonSlider(
    task.source,
    task.result,
    task.type,
    "aspect-16x10"
  );
  mediaWrap.appendChild(slider);

  const refRow = document.createElement("div");
  refRow.className = "card-meta card-meta-ref";

  const refImageText = (() => {
    switch (task.title) {
      case "Relight":
        return "Light direction";
      case "Style Transfer":
        return "Style image";
      case "Background Swap":
        return "Background image";
      case "Object Retexture":
        return "Texture image";
      default:
        return "Subject image";
    }
  })();

  const refCandidates = [
    { src: task.refImage, label: "Reference", text: refImageText },
    { src: task.circleImage, label: "Circle", text: "Circle image" },
    { src: task.bboxImage, label: "BBox", text: "BBox image" },
  ].filter((c) => c.src);

  refRow.innerHTML = `
    <div class="meta-box meta-ref-slot" style="display:none">
      <span class="meta-label">Reference</span>
      <strong>Text instruction</strong>
    </div>
    <div class="meta-box meta-prompt">
      <span class="meta-label">Prompt</span>
      <p class="meta-prompt-text">${task.prompt}</p>
    </div>
  `;
  const refSlot = refRow.querySelector(".meta-ref-slot");

  const renderNoReference = () => {
    refSlot.style.display = "none";
    refRow.classList.remove("has-ref-image");
    refRow.classList.remove("text-ref");
    refRow.classList.add("no-ref");
  };

  const tryCandidate = (i) => {
    if (i >= refCandidates.length) {
      renderNoReference();
      return;
    }
    const c = refCandidates[i];
    const probe = new Image();
    probe.onload = () => {
      refSlot.className = "meta-box meta-ref meta-ref-slot";
      refSlot.innerHTML = `
        <span class="meta-label">${c.label}</span>
        <div class="meta-ref-body">
          <img class="meta-ref-thumb" src="${c.src}" alt="${c.label}" loading="lazy" />
          <strong>${c.text}</strong>
        </div>
      `;
      refSlot.style.display = "";
      refRow.classList.remove("text-ref");
      refRow.classList.remove("no-ref");
      refRow.classList.add("has-ref-image");
    };
    probe.onerror = () => tryCandidate(i + 1);
    probe.src = c.src;
  };

  if (refCandidates.length === 0) {
    renderNoReference();
  } else {
    tryCandidate(0);
  }

  card.append(header, mediaWrap, refRow);
  card.addEventListener("click", (event) => {
    if (event.target.closest("video")) return;
    if (event.target.closest(".slider-handle")) return;
    openModal(task);
  });

  return card;
}

function renderGallery() {
  galleryGrid.innerHTML = "";

  const tasks = filteredTasks();
  const videoItems = tasks.filter((t) => t.type === "video");
  const imageItems = tasks.filter((t) => t.type === "image");

  const renderGroup = (items, kind) => {
    if (items.length === 0) return;

    const group = document.createElement("section");
    group.className = `gallery-group gallery-group-${kind}`;

    const heading = document.createElement("div");
    heading.className = "group-heading";
    const isVideo = kind === "video";
    heading.innerHTML = `
      <div class="group-heading-line">
        <span class="group-icon" aria-hidden="true">${isVideo ? "▶" : "❖"}</span>
        <div class="group-heading-text">
          <p class="eyebrow group-eyebrow">${isVideo ? "Video Examples" : "Image Examples"}</p>
          <h3 class="group-title">${isVideo ? "Video Tasks" : "Image Tasks"}</h3>
        </div>
        <span class="group-count">${items.length} ${items.length === 1 ? "sample" : "samples"}</span>
      </div>
      <p class="group-note">${
        isVideo
          ? "Source clip and edited result for each video task."
          : "Source image and edited result for each reference-based image pair."
      }</p>
      <div class="group-divider" aria-hidden="true"></div>
    `;
    group.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "gallery-grid group-grid";
    items.forEach((task) => grid.appendChild(createCard(task)));
    group.appendChild(grid);

    galleryGrid.appendChild(group);
  };

  renderGroup(videoItems, "video");
  renderGroup(imageItems, "image");

  if (videoItems.length === 0 && imageItems.length === 0) {
    const empty = document.createElement("p");
    empty.className = "section-note";
    empty.textContent = "No samples match the current filters.";
    galleryGrid.appendChild(empty);
  }
}

let savedScrollY = 0;

function lockBodyScroll() {
  savedScrollY = window.scrollY || window.pageYOffset || 0;
  const scrollbarComp = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  if (scrollbarComp > 0) {
    document.body.style.paddingRight = `${scrollbarComp}px`;
  }
}

function unlockBodyScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.paddingRight = "";
  window.scrollTo(0, savedScrollY);
}

function showModal() {
  if (!modal) return;
  lockBodyScroll();
  if (typeof modal.showModal === "function") {
    try {
      modal.showModal();
      return;
    } catch {
      /* fall through */
    }
  }
  modal.setAttribute("open", "");
  modal.classList.add("modal-open-fallback");
}

function closeModal() {
  if (!modal) return;
  if (typeof modal.close === "function") {
    try {
      modal.close();
    } catch {
      /* ignore */
    }
  }
  modal.removeAttribute("open");
  modal.classList.remove("modal-open-fallback");
  unlockBodyScroll();
}

function openModal(task) {
  if (!modal || !modalContent) return;
  modalContent.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "glass-panel";
  wrapper.innerHTML = `
    <p class="eyebrow">${categoryLabel(task.category)}</p>
    <h3>${task.title}</h3>
    <p class="section-note">${task.subtitle}</p>
    <p class="prompt">${task.prompt}</p>
  `;

  const mediaGrid = document.createElement("div");
  mediaGrid.className = "media-grid";

  if (task.type === "video") {
    mediaGrid.appendChild(createMediaPanel("Source", task.source, "video"));
    mediaGrid.appendChild(
      createMediaPanel("Edited Result", task.result, "video", true)
    );
  } else {
    mediaGrid.appendChild(createMediaPanel("Source", task.source, "image"));
    mediaGrid.appendChild(
      createMediaPanel("Edited Result", task.result, "image", true)
    );
  }
  const modalRefCandidates = [
    { src: task.refImage, label: "Reference", text: "Ref image" },
    { src: task.circleImage, label: "Circle", text: "Circle image" },
    { src: task.bboxImage, label: "BBox", text: "BBox image" },
  ].filter((c) => c.src);

  const modalRefSlot = document.createElement("div");
  modalRefSlot.className = "modal-ref-row";
  modalRefSlot.style.display = "none";
  wrapper.appendChild(modalRefSlot);

  const renderModalTextInstruction = () => {
    modalRefSlot.innerHTML = `
      <span class="meta-label">Reference</span>
      <strong class="modal-ref-text">Text instruction</strong>
    `;
    modalRefSlot.style.display = "";
  };

  const tryModalCandidate = (i) => {
    if (i >= modalRefCandidates.length) {
      renderModalTextInstruction();
      return;
    }
    const c = modalRefCandidates[i];
    const probe = new Image();
    probe.onload = () => {
      modalRefSlot.innerHTML = `
        <span class="meta-label">${c.label}</span>
        <img class="meta-ref-thumb modal-ref-thumb" src="${c.src}" alt="${c.label}" loading="lazy" />
        <strong class="modal-ref-text">${c.text}</strong>
      `;
      modalRefSlot.style.display = "";
    };
    probe.onerror = () => tryModalCandidate(i + 1);
    probe.src = c.src;
  };

  if (modalRefCandidates.length === 0) {
    renderModalTextInstruction();
  } else {
    tryModalCandidate(0);
  }

  wrapper.appendChild(mediaGrid);
  modalContent.appendChild(wrapper);
  showModal();
}

if (closeModalButton) {
  closeModalButton.addEventListener("click", () => closeModal());
}
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
      return;
    }
    const rect = modal.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.hasAttribute("open")) {
      closeModal();
    }
  });
}

function renderFeatured() {
  const wrapper = document.getElementById("featuredViewer");
  if (!wrapper) return;
  const refImage = document.getElementById("featuredRefImage");
  const slider = document.getElementById("featuredSlider");
  const beforeVideo = document.getElementById("featuredBeforeVideo");
  const afterVideo = document.getElementById("featuredAfterVideo");
  const promptBox = document.getElementById("featuredPrompt");
  const thumbs = document.getElementById("featuredThumbs");
  if (!slider || !beforeVideo || !afterVideo || !promptBox || !thumbs || !refImage) return;

  const candidates = allTasks
    .filter((t) => t.type === "video" && t.refImage)
    .slice(0, 6);

  if (candidates.length === 0) {
    wrapper.hidden = true;
    return;
  }

  const probeImage = (src) =>
    new Promise((resolve) => {
      const probe = new Image();
      probe.onload = () => resolve(true);
      probe.onerror = () => resolve(false);
      probe.src = src;
    });

  Promise.all(candidates.map((t) => probeImage(t.refImage))).then((oks) => {
    const usable = candidates.filter((_, i) => oks[i]);
    if (usable.length === 0) {
      wrapper.hidden = true;
      return;
    }

    wrapper.hidden = false;

    thumbs.innerHTML = "";
    usable.forEach((task, idx) => {
      const item = document.createElement("div");
      item.className = "thumbnail-item" + (idx === 0 ? " active" : "");
      const v = document.createElement("video");
      v.src = task.source;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.autoplay = true;
      item.appendChild(v);
      item.addEventListener("click", () => {
        thumbs.querySelectorAll(".thumbnail-item").forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
        loadFeatured(task);
      });
      thumbs.appendChild(item);
    });

    function loadFeatured(task) {
      refImage.src = task.refImage;
      refImage.alt = `${task.title} reference`;
      beforeVideo.src = task.source;
      afterVideo.src = task.result;
      beforeVideo.load();
      afterVideo.load();
      promptBox.innerHTML = `<strong>Instruction:</strong> "${task.prompt}"`;
      // reset slider to 50%
      const handle = slider.querySelector(".slider-handle");
      const after = slider.querySelector(".video-after");
      if (handle) handle.style.left = "50%";
      if (after) after.style.clipPath = "polygon(0 0, 50% 0, 50% 100%, 0 100%)";
    }

    attachSliderDrag(slider);
    loadFeatured(usable[0]);
  });
}

renderFilters();
renderAuthors();
renderGallery();
renderFeatured();

hydratePrompts([...videoTasks, ...imageTasks]).then(() => {
  renderGallery();
});

if (copyCitationButton) {
  copyCitationButton.addEventListener("click", () => {
    copyCitation();
  });
}

document.addEventListener("click", () => {
  closeAuthorMenus();
});
