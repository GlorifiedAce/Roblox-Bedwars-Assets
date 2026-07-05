/*
  ============================================================
  ASSET DATA
  ============================================================
  This is the only file you need to edit to add your real assets.
  Copy an entry, fill in your own values, done — the site rebuilds
  the gallery, hotbar counts, and search index from this array
  automatically. No other files need to change.

  FIELD GUIDE
  ------------------------------------------------------------
  id          unique string, no spaces (e.g. "icon-sword-01")
  category    one of: "models", "rigs", "psds", "tutorials", "poses"
  name        display name shown on the card
  description short one-line description (shown on hover / detail)

  For every category EXCEPT "tutorials":
  fileType    the extension badge shown on the card, e.g. "PNG", "RBXM", "RBXL", "BLEND"
  fileSize    human readable size string, e.g. "2.4 MB"
  thumb       path to a preview image, put files in /thumbs
              (leave as "" to fall back to an auto-generated icon tile)
  downloadUrl path to the actual file, put files in /downloads

  For "tutorials" only (these are YouTube videos, not downloads):
  youtubeId   the 11-character ID from the video's URL, e.g. for
              https://www.youtube.com/watch?v=dQw4w9WgXcQ it's "dQw4w9WgXcQ"
              (leave as "" to show the card as "Coming soon")

  All categories:
  author      optional credit, leave "" to omit
  tags        array of lowercase search keywords
  ============================================================
*/

const ASSET_DATA = [
  // ---------------- MODELS (.rbxm / .rbxl) ----------------
  {
    id: "bedwars-assets-ultimate",
    category: "models",
    name: "Bedwars Assets Ultimate",
    description: " 3D model of the whole Roblox Bedwars Game",
    fileType: "RBXL",
    fileSize: "26 MB",
    thumb: "thumbs/Bedwars Assets Ultimate.png",
    downloadUrl: "https://drive.google.com/file/d/14qTK1XnBtO4ogiA-LddEamOLi8lTNm1t/view?usp=drive_link",
    author: "exactlygold",
    tags: ["model", "kit", "archer", "bow", "rbxm", "bedwars", "assets", "all"]
  },
  {
    id: "desert-shrine-map",
    category: "models",
    name: "Desert Shrine Map",
    description: "Full Desert Shrine Roblox Bedwars 5v5 map in blender",
    fileType: "BLEND",
    fileSize: "41 MB",
    thumb: "thumbs/Desert Shrine Map.png",
    downloadUrl: "https://drive.google.com/file/d/1zxqV9UY3Avrxpj33gdx6jF5fSKmwnNVl/view?usp=drive_link",
    author: "GlorifiedAce",
    tags: ["model", "kit", "map", "template", "rbxl", "island", "desert shrine"]
  },

  // ---------------- BLENDER RIGS (.blend) ----------------
  {
    id: "grim-reaper-rigged",
    category: "rigs",
    name: "Grim Reaper Rig",
    description: "Fully rigged model of Roblox Bedwars Grim Reaper kit",
    fileType: "BLEND",
    fileSize: "5.6 MB",
    thumb: "thumbs/Grim Reaper Rigged.png",
    downloadUrl: "downloads/Grim Reaper Rigged.blend",
    author: "GlorifiedAce",
    tags: ["rig", "blender", "grim reaper", "character", "kit"]
  },
  {
    id: "milo-rigged",
    category: "rigs",
    name: "Milo Rig",
    description: "Fully rigged model of Roblox Bedwars Milo kit",
    fileType: "BLEND",
    fileSize: "5.3 MB",
    thumb: "thumbs/Milo Rigged.png",
    downloadUrl: "downloads/Milo Rigged.blend",
    author: "GlorifiedAce",
    tags: ["rig", "blender", "sword", "weapon", "milo", "kit"]
  },
  {
    id: "trixie-rigged",
    category: "rigs",
    name: "Trixie Rig",
    description: "Fully rigged model of Roblox Bedwars Trixie kit",
    fileType: "BLEND",
    fileSize: "27 MB",
    thumb: "thumbs/Trixie Rigged.png",
    downloadUrl: "https://drive.google.com/file/d/1vDJXN1FOE5BA_mNzbQfHShZICKO9ncMZ/view?usp=drive_link",
    author: "GlorifiedAce",
    tags: ["rig", "blender", "sword", "weapon", "trixie", "kit"]
  },
  {
    id: "caitlyn-rigged",
    category: "rigs",
    name: "Caitlyn Rig",
    description: "Fully rigged model of Roblox Bedwars Caitlyn kit",
    fileType: "BLEND",
    fileSize: "3.9 MB",
    thumb: "thumbs/Caitlyn Rigged.png",
    downloadUrl: "downloads/Caitlyn Rigged.blend",
    author: "GlorifiedAce",
    tags: ["rig", "blender", "sword", "weapon", "caitlyn", "kit"]
  },
  {
    id: "fisherman-rigged",
    category: "rigs",
    name: "Fisherman Rig",
    description: "Fully rigged model of Roblox Bedwars Fisherman kit",
    fileType: "BLEND",
    fileSize: "8.6 MB",
    thumb: "thumbs/Fisherman Rigged.png",
    downloadUrl: "downloads/Fisherman Rigged.blend",
    author: "GlorifiedAce",
    tags: ["rig", "blender", "sword", "weapon", "fisherman", "kit"]
  },
  {
    id: "farmer-cletus-rigged",
    category: "rigs",
    name: "Farmer Cletus Rig",
    description: "Fully rigged model of Roblox Bedwars Farmer Cletus kit",
    fileType: "BLEND",
    fileSize: "0.4 MB",
    thumb: "thumbs/Farmer Cletus Rigged.png",
    downloadUrl: "downloads/Farmer Cletus Rigged.blend",
    author: "GlorifiedAce",
    tags: ["rig", "blender", "sword", "weapon", "farmer cletus", "kit"]
  },
  {
    id: "gompy-rigged",
    category: "rigs",
    name: "Gompy Rig",
    description: "Fully rigged model of Roblox Bedwars Farmer Gompy kit",
    fileType: "BLEND",
    fileSize: "4.2 MB",
    thumb: "thumbs/Gompy Rigged.png",
    downloadUrl: "downloads/Gompy Rigged.blend",
    author: "GlorifiedAce",
    tags: ["rig", "blender", "sword", "weapon", "gompy", "kit"]
  },


  // ---------------- POSES (.blend) ----------------
  {
    id: "midiar-flying-pose",
    category: "poses",
    name: "Midair Flying Pose",
    description: "A person flying midair can be used for kits like davey",
    fileType: "BLEND",
    fileSize: "2.3 MB",
    thumb: "thumbs/Midair Flying Pose.png",
    downloadUrl: "downloads/Midair Flying Pose.blend",
    author: "GlorifiedAce",
    tags: ["pose", "blender", "flying", "gfx", "davey"]
  },
  {
    id: "shrug-king-pose",
    category: "poses",
    name: "Shrug King Pose",
    description: "Pose for shrugging or for kings",
    fileType: "BLEND",
    fileSize: "1.5 MB",
    thumb: "thumbs/Shrug King Pose.png",
    downloadUrl: "downloads/Shrug King Pose.blend",
    author: "GlorifiedAce",
    tags: ["pose", "blender", "action", "king", "gfx", "shrug"]
  },
  {
    id: "holding-sword-sideways-pose",
    category: "poses",
    name: "Holding Sword Sideways Pose",
    description: "Pose for holding the sword sideways and looking menacing",
    fileType: "BLEND",
    fileSize: "23.8 MB",
    thumb: "thumbs/Holding Sword Sideways Pose.png",
    downloadUrl: "https://drive.google.com/file/d/1wpolVim3z3NHrCkMMjSDm4Oqhl2JJPug/view?usp=drive_link",
    author: "GlorifiedAce",
    tags: ["pose", "blender", "action", "sword", "gfx", "fight"]
  },

  // ---------------- PSD TEMPLATES ----------------
  {
    id: "roblox-bedwars-asset-pack-v2",
    category: "psds",
    name: "Roblox Bedwars Asset Pack V2",
    description: "Full asset pack with kit renders, backgrounds, skys, ranks for designers",
    fileType: "PSD",
    fileSize: "250 MB",
    thumb: "thumbs/Roblox Bedwars Asset Pack V2.png",
    downloadUrl: "https://drive.google.com/file/d/1k305ptdYfZnZBFE3d2iHebWf2-4kUI4U/view?usp=drive_link",
    author: "Sword Designs",
    tags: ["psd", "shop", "asset", "template", "skys", "renders", "ranks"]
  },
  {
    id: "swords-gfx-pack-v2",
    category: "psds",
    name: "Sword's GFX Pack V2",
    description: "Full asset pack for gfx designed by Sword, includes effects and helpful gfx assets",
    fileType: "PSD",
    fileSize: "353 MB",
    thumb: "thumbs/Sword's GFX Pack V2.png",
    downloadUrl: "https://drive.google.com/file/d/1jRA74_5LB0iuHl7kiwqgGMXJMeGSI_bY/view?usp=sharing",
    author: "Sword Designs",
    tags: ["psd", "icons", "source", "template", "ranks", "gfx", "asset", "text", "effects"]
  },

  // ---------------- TUTORIALS (YouTube videos) ----------------
  {
    id: "how-to-make-roblox-thumbnails-that-blow-up",
    category: "tutorials",
    name: "How To Make Roblox Thumbnails That BLOW UP! (Full Guide)",
    description: "Step-by-step video on making awesome roblox thumbnails and gfx",
    youtubeId: "kj7jDY2lZkI",
    author: "TD Games",
    tags: ["tutorial", "scripting", "bed", "guide", "video", "gfx", "beginner", "bedwars"]
  },
  {
    id: "how-i-make-my-roblox-thumbnails",
    category: "tutorials",
    name: "How I MAKE my roblox thumbnails.. (Advanced guide tutorial)",
    description: "Video guide for using blender and photopea to make eye-catching gfx",
    youtubeId: "xrYLPPsx15o",
    author: "Skyez",
    tags: ["tutorial", "shop", "guide", "setup", "video", "gfx", "beginner", "bedwars"]
  },
  {
    id: "how-i-make-my-roblox-bedwars-thumbnails-rylan",
    category: "tutorials",
    name: "How I make my Roblox BedWars THUMBNAILS…",
    description: "Beginner friendy guide to making thumbnails using photopea",
    youtubeId: "RUmgD_8F3Pg",
    author: "Rylan",
    tags: ["tutorial", "shop", "guide", "setup", "video", "gfx", "beginner", "bedwars"]
  },
   {
    id: "how-i-make-my-roblox-bedwars-thumbnails-lunarcrow",
    category: "tutorials",
    name: "How i MAKE my Roblox Bedwars THUMBNAILS.. (Tutorial)",
    description: "Beginner friendy guide to making bedwars cartoony thumbnails using photopea",
    youtubeId: "KTRcfrbyCmg",
    author: "LunarCrow",
    tags: ["tutorial", "shop", "guide", "setup", "video", "gfx", "beginner", "bedwars", "cartoony"]
  }
];

// ============================================================
// DONATION TIERS (Robux gamepasses)
// ------------------------------------------------------------
// Each tier links to a Roblox gamepass you create yourself.
// To set one up: go to your Roblox game's Configure page ->
// Passes -> Create a Pass, set the Robux price, then copy the
// gamepass ID from the URL (roblox.com/game-pass/<ID>/<name>)
// into gamepassId below. Leave gamepassId as "" to show the
// card as "Coming soon" until it's ready.
// ============================================================
const DONATION_TIERS = [
  {
    id: "tip-small",
    robux: 5,
    label: "Buy a Pickaxe",
    blurb: "A small tip to help keep the chest stocked.",
    gamepassId: ""
  },
  {
    id: "tip-medium",
    robux: 10,
    label: "Buy Iron Armor",
    blurb: "Covers a bit of time spent rigging and packaging assets.",
    gamepassId: ""
  },
  {
    id: "tip-large",
    robux: 50,
    label: "Buy Diamond Gear",
    blurb: "A big help — goes straight back into making more free assets.",
    gamepassId: ""
  },
  {
    id: "tip-huge",
    robux: 100,
    label: "Buy the Whole Kit",
    blurb: "Massive support. You're basically a chest sponsor now.",
    gamepassId: ""
  }
];

// Category metadata: label, short code shown on the hotbar slot, and description.
const CATEGORY_META = {
  all:        { label: "All Items",        code: "ALL", desc: "Everything in the chest." },
  models:     { label: "Models",           code: "MOD", desc: ".rbxm and .rbxl model and map files." },
  rigs:       { label: "Blender Rigs",     code: "RIG", desc: ".blend rigs for kits and characters." },
  poses:      { label: "Poses",            code: "POS", desc: ".blend pose files for GFX renders." },
  psds:       { label: "PSD Templates",    code: "PSD", desc: "Layered source files, ready to edit." },
  tutorials:  { label: "Tutorials",        code: "TUT", desc: "Video walkthroughs and setup guides." }
};
