# Bedwars Asset Chest

A static asset-gallery site for Roblox Bedwars creators, styled after a Minecraft
inventory: a category "hotbar" up top and asset cards laid out like inventory
slots. Same kind of site as squidward5's Roblox Rivals Assets, themed for Bedwars.

## Files

```
index.html    the page structure
style.css     all styling (Minecraft-panel bevels, colors, type)
script.js     renders the gallery/hotbar/search from data.js — you shouldn't need to touch this
data.js       <-- THE ONLY FILE YOU EDIT TO ADD ASSETS
downloads/    put your real .png / .rbxl / .rbxm / .blend / .psd files here
thumbs/       optional preview images for cards (falls back to a colored tile if omitted)
```

Categories are: `icons`, `models` (`.rbxm`/`.rbxl`), `rigs` (`.blend`), `psds`,
and `tutorials` (YouTube videos, not downloads — see below).

## Adding your real assets

1. Drop the actual file into `downloads/` (e.g. `downloads/kit-archer.rbxm`).
2. Optionally drop a preview image into `thumbs/` (e.g. `thumbs/kit-archer.png`).
3. Open `data.js` and either edit one of the example entries or copy one and fill
   in your own values:

```js
{
  id: "kit-archer",
  category: "models",            // icons | models | rigs | psds | tutorials
  name: "Archer Kit",
  description: "Bow-focused kit with tuned damage falloff.",
  fileType: "RBXM",               // RBXM or RBXL for the models category
  fileSize: "540 KB",
  thumb: "thumbs/kit-archer.png", // or "" to use the auto-generated tile
  downloadUrl: "downloads/kit-archer.rbxm",
  author: "YourName",
  tags: ["kit", "archer", "bow"]
}
```

4. Save and refresh — the gallery, hotbar counts, and search index all rebuild
   automatically from this array. No other file needs to change.

Remove the placeholder entries once you've swapped in your real ones (they're
grouped by category with comment headers to make this easy).

## Adding tutorial videos (YouTube)

The `tutorials` category doesn't use downloads — each entry embeds a YouTube
thumbnail and links out to the video instead. Add or edit entries in the
`tutorials` group in `data.js`:

```js
{
  id: "tut-bed-breaking",
  category: "tutorials",
  name: "Bed Breaking System Walkthrough",
  description: "Step-by-step video on scripting bed detection and elimination state.",
  youtubeId: "dQw4w9WgXcQ",   // the 11-character ID from the video URL
  author: "",
  tags: ["tutorial", "scripting", "bed", "guide"]
}
```

To get the ID: open the video on YouTube and copy the part of the URL after
`v=` — for `https://www.youtube.com/watch?v=dQw4w9WgXcQ` that's `dQw4w9WgXcQ`.
Leave `youtubeId` as `""` to show the card as "Coming soon" until the video
is ready.

## Setting up donations (Robux gamepasses)

The "Support the chest" section reads its tiers from the `DONATION_TIERS`
array in `data.js`. Each tier is a Robux amount that links to a Roblox
gamepass you create yourself:

1. In Roblox, open your game's **Create** page -> your experience ->
   **Monetization** -> **Passes** -> **Create a Pass**, and set the Robux
   price you want (e.g. 25, 100, 500, 1000).
2. Roblox gives the pass a URL like
   `https://www.roblox.com/game-pass/123456789/Pickaxe-Tip`. Copy just the
   numeric ID (`123456789`).
3. In `data.js`, find the matching tier in `DONATION_TIERS` and paste the
   ID into `gamepassId`:

```js
{
  id: "tip-small",
  robux: 25,
  label: "Buy a Pickaxe",
  blurb: "A small tip to help keep the chest stocked.",
  gamepassId: "123456789"
}
```

4. Save and refresh — the card automatically becomes a working "Buy
   Gamepass" button that opens the pass on Roblox in a new tab. Tiers left
   with `gamepassId: ""` show as "Coming soon" instead of a broken link.

You can add, remove, or reorder tiers freely — the grid rebuilds from
whatever is in the array.

## Running it locally

It's plain HTML/CSS/JS — no build step. Just open `index.html` in a browser,
or serve the folder locally:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Publishing with GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → set the source branch to `main` (or wherever you
   pushed) and the folder to `/ (root)`.
3. Your site goes live at `https://<username>.github.io/<repo-name>/`.

## Notes

- The Discord button in the header and footer currently points to `#` —
  swap in your real invite link in `index.html` (two spots).
- Large binary files (big `.blend` or `.psd` files) will make your repo heavy
  over time. If you outgrow plain GitHub file storage, consider Git LFS or
  linking `downloadUrl` to an external host (Google Drive, Dropbox, itch.io,
  etc.) instead of storing the file in `downloads/` directly.
