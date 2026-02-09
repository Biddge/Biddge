/* =========================
   THEME (PERSISTENT)
========================= */
(function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

/* =========================
   SEARCH (SAFE PLACEHOLDER)
========================= */
function liveSearch(value) {
  // prevents JS crash until real search is implemented
  console.log("search:", value);
}

/* =========================
   MOBILE SIDE MENU
========================= */
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  if (!menu || !overlay) return;

  menu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  if (!menu || !overlay) return;

  menu.classList.remove("show");
  overlay.classList.remove("show");
}
