(function () {
  "use strict";

  let activeCategory = "all";
  let searchTerm = "";

  const grid = document.getElementById("assetGrid");
  const hotbar = document.getElementById("hotbar");
  const statRow = document.getElementById("statRow");
  const categoryTitle = document.getElementById("categoryTitle");
  const categoryDesc = document.getElementById("categoryDesc");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const updatesList = document.getElementById("updatesList");
  const searchInput = document.getElementById("searchInput");
  const donateGrid = document.getElementById("donateGrid");

  function countByCategory(cat) {
    if (cat === "all") return ASSET_DATA.length;
    return ASSET_DATA.filter((a) => a.category === cat).length;
  }

  function buildHotbar() {
    const cats = Object.keys(CATEGORY_META);
    hotbar.innerHTML = cats
      .map((cat) => {
        const meta = CATEGORY_META[cat];
        return `
          <button class="hotbar-slot${cat === activeCategory ? " active" : ""}"
                  data-cat="${cat}" role="tab" aria-selected="${cat === activeCategory}">
            <span class="code">${meta.code}</span>${meta.label}
          </button>`;
      })
      .join("");

    hotbar.querySelectorAll(".hotbar-slot").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        render();
      });
    });
  }

  function buildStats() {
    const cats = Object.keys(CATEGORY_META).filter((c) => c !== "all");
    statRow.innerHTML = cats
      .map((cat) => {
        const meta = CATEGORY_META[cat];
        return `<span class="stat-pill"><b>${countByCategory(cat)}</b> ${meta.label}</span>`;
      })
      .join("");
  }

  function matchesSearch(asset, term) {
    if (!term) return true;
    const haystack = [asset.name, asset.description, ...(asset.tags || [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(term);
  }

  function getFiltered() {
    const term = searchTerm.trim().toLowerCase();
    return ASSET_DATA.filter((a) => {
      const catMatch = activeCategory === "all" || a.category === activeCategory;
      return catMatch && matchesSearch(a, term);
    });
  }

  function isVideo(asset) {
    return asset.category === "tutorials";
  }

  function cardTile(asset) {
    if (isVideo(asset)) {
      if (asset.youtubeId) {
        return `<img src="https://img.youtube.com/vi/${asset.youtubeId}/hqdefault.jpg" alt="${asset.name} video thumbnail" loading="lazy">`;
      }
      return `<div class="auto-tile cat-tutorials">VIDEO</div>`;
    }
    if (asset.thumb) {
      return `<img src="${asset.thumb}" alt="${asset.name} preview" loading="lazy">`;
    }
    return `<div class="auto-tile cat-${asset.category}">${asset.fileType}</div>`;
  }

  function buildGrid() {
    const items = getFiltered();

    resultCount.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;

    if (items.length === 0) {
      grid.innerHTML = "";
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    grid.innerHTML = items
      .map((a) => {
        if (isVideo(a)) {
          const ready = Boolean(a.youtubeId);
          const watchUrl = ready ? `https://www.youtube.com/watch?v=${a.youtubeId}` : "#";
          return `
        <article class="asset-card">
          <div class="card-tile${ready ? " card-tile--video" : ""}">${cardTile(a)}</div>
          <div class="card-name">${a.name}</div>
          <p class="card-desc">${a.description}</p>
          <div class="card-meta">
            <span class="filetype">VIDEO</span>
            <span>YouTube</span>
          </div>
          ${
            ready
              ? `<a class="card-download" href="${watchUrl}" target="_blank" rel="noopener">Watch on YouTube</a>`
              : `<span class="card-download card-download--disabled" aria-disabled="true">Coming soon</span>`
          }
        </article>`;
        }
        return `
        <article class="asset-card">
          <div class="card-tile">${cardTile(a)}</div>
          <div class="card-name">${a.name}</div>
          <p class="card-desc">${a.description}</p>
          <div class="card-meta">
            <span class="filetype">${a.fileType}</span>
            <span>${a.fileSize}</span>
          </div>
          <a class="card-download" href="${a.downloadUrl}" download>Download ${a.fileType}</a>
        </article>`;
      })
      .join("");
  }

  function buildHeader() {
    const meta = CATEGORY_META[activeCategory];
    categoryTitle.textContent = meta.label;
    categoryDesc.textContent = meta.desc;
  }

  function buildUpdates() {
    // Shows the most recently added items — currently the tail of the data array.
    // Add a real "dateAdded" field per asset later if you want true chronological sorting.
    const recent = ASSET_DATA.slice(-6).reverse();
    updatesList.innerHTML = recent
      .map(
        (a) => `
        <li>
          <span class="u-cat">${CATEGORY_META[a.category].code}</span>
          <span>${a.name}</span>
          <span class="u-date" style="margin-left:auto;">${isVideo(a) ? "VIDEO" : a.fileType}</span>
        </li>`
      )
      .join("");
  }

  function buildDonations() {
    if (!donateGrid) return;
    donateGrid.innerHTML = DONATION_TIERS.map((tier) => {
      const ready = Boolean(tier.gamepassId);
      const href = ready
        ? `https://www.roblox.com/game-pass/${tier.gamepassId}/`
        : "#";
      return `
        <article class="donate-card${ready ? "" : " donate-card--pending"}">
          <div class="donate-robux">
            <span class="robux-icon" aria-hidden="true">R$</span>${tier.robux}
          </div>
          <div class="donate-label">${tier.label}</div>
          <p class="donate-blurb">${tier.blurb}</p>
          ${
            ready
              ? `<a class="donate-btn" href="${href}" target="_blank" rel="noopener">Buy Gamepass</a>`
              : `<span class="donate-btn donate-btn--disabled" aria-disabled="true">Coming soon</span>`
          }
        </article>`;
    }).join("");
  }

  function render() {
    buildHotbar();
    buildStats();
    buildHeader();
    buildGrid();
  }

  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    // A search from the hero bar looks across the whole chest, not just the
    // currently selected hotbar slot — switch back to "All Items" so results
    // aren't silently hidden by a leftover category filter.
    if (searchTerm.trim() && activeCategory !== "all") {
      activeCategory = "all";
      render();
    } else {
      buildGrid();
    }
    if (searchTerm.trim()) {
      resultCount.textContent += ` matching "${searchTerm.trim()}"`;
    }
  });

  buildUpdates();
  buildDonations();
  render();
})();
