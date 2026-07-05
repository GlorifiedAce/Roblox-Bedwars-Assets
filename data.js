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
    id: "grim-reaper_rigged",
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
    id: "milo_rigged",
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

  // ---------------- POSES (.blend) ----------------
  {
    id: "pose-victory-stance",
    category: "poses",
    name: "Victory Stance Pose",
    description: "Heroic victory pose rig, ready to drop into a GFX render.",
    fileType: "BLEND",
    fileSize: "4.1 MB",
    thumb: "",
    downloadUrl: "downloads/pose-victory-stance.blend",
    author: "",
    tags: ["pose", "blender", "victory", "gfx"]
  },
  {
    id: "pose-action-swing",
    category: "poses",
    name: "Action Swing Pose",
    description: "Mid-swing action pose for weapon showcase thumbnails.",
    fileType: "BLEND",
    fileSize: "3.8 MB",
    thumb: "",
    downloadUrl: "downloads/pose-action-swing.blend",
    author: "",
    tags: ["pose", "blender", "action", "swing", "gfx"]
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
    robux: 25,
    label: "Buy a Pickaxe",
    blurb: "A small tip to help keep the chest stocked.",
    gamepassId: ""
  },
  {
    id: "tip-medium",
    robux: 100,
    label: "Buy Iron Armor",
    blurb: "Covers a bit of time spent rigging and packaging assets.",
    gamepassId: ""
  },
  {
    id: "tip-large",
    robux: 500,
    label: "Buy Diamond Gear",
    blurb: "A big help — goes straight back into making more free assets.",
    gamepassId: ""
  },
  {
    id: "tip-huge",
    robux: 1000,
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
  psds:       { label: "PSD Templates",    code: "PSD", desc: "Layered source files, ready to edit." },
  tutorials:  { label: "Tutorials",        code: "TUT", desc: "Video walkthroughs and setup guides." },
  poses:      { label: "Poses",            code: "POS", desc: ".blend pose files for GFX renders." }
};
