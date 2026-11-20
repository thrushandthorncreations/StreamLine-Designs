const projects = window.PORTFOLIO_PROJECTS || [];
const grid = document.getElementById("project-grid");
const emptyNote = document.getElementById("empty-note");
const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");
const filters = document.getElementById("filters");

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function renderProjects(filter = "All") {
  const shown = projects.filter(p => filter === "All" || p.category === filter);
  document.getElementById("project-count").textContent = String(projects.length).padStart(2, "0");
  grid.innerHTML = shown.map(p => `
    <article class="project-card" tabindex="0" role="button" aria-label="View ${escapeHTML(p.title)}" data-id="${escapeHTML(p.id)}">
      <div class="project-image">
        ${p.image ? `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)} rendering" loading="lazy">` : `<div class="image-placeholder">PROJECT IMAGE / PLACEHOLDER</div>`}
        <span class="project-image-tag">${escapeHTML(p.type || p.category.toUpperCase())}</span>
      </div>
      <div class="project-info">
        <div class="project-category">${escapeHTML(p.category.toUpperCase())}</div>
        <h3>${escapeHTML(p.title)}</h3>
        <p>${escapeHTML(p.summary)}</p>
        <div class="project-card-bottom"><span>${escapeHTML((p.tags || []).join(" / "))}</span><span>↗</span></div>
      </div>
    </article>`).join("");
  emptyNote.hidden = shown.length !== 0;
  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProject(card.dataset.id));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(card.dataset.id); } });
  });
}
function openProject(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;
  const specs = [["Software",p.software],["Components",p.components],["Material",p.material],["Category",p.category]];
  dialogContent.innerHTML = `
    <div class="dialog-hero">
      <div class="eyebrow">${escapeHTML(p.type || "PROJECT")} / ${escapeHTML(p.category.toUpperCase())}</div>
      <h2>${escapeHTML(p.title)}</h2><p>${escapeHTML(p.summary)}</p>
    </div>
    <div class="dialog-body">
      ${p.model ? `<h3>Interactive 3D model</h3><model-viewer class="dialog-model" src="${escapeHTML(p.model)}" camera-controls auto-rotate shadow-intensity="1" exposure="1" alt="Interactive 3D model of ${escapeHTML(p.title)}"></model-viewer>` : `<h3>Project visualization</h3>${p.image ? `<img class="dialog-image" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)} rendering">` : `<div class="image-placeholder" style="height:240px">ADD A PROJECT RENDERING</div>`}`}
      <h3>Design overview</h3><p>${escapeHTML(p.overview)}</p>
      <h3>Process & considerations</h3><p>${escapeHTML(p.process)}</p>
      <h3>Project specifications</h3><div class="spec-list">${specs.map(([k,v]) => `<div><small>${escapeHTML(k)}</small><strong>${escapeHTML(v || "Not specified")}</strong></div>`).join("")}</div>
      ${p.drawing ? `<h3>Technical drawing</h3><p><a class="button button-primary" href="${escapeHTML(p.drawing)}" target="_blank" rel="noopener">View drawing ↗</a></p>` : ""}
      ${p.tags?.length ? `<h3>Topics</h3><p>${p.tags.map(t => `<span class="project-category">${escapeHTML(t)} &nbsp; / &nbsp;</span>`).join("")}</p>` : ""}
    </div>`;
  dialog.showModal();
}
filters.addEventListener("click", e => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  filters.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
  renderProjects(btn.dataset.filter);
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
renderProjects();
