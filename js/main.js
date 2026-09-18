/**
 * Shared site chrome: header, footer, mobile menu, scroll behaviour,
 * reveal-on-scroll animation, WhatsApp floating button,
 * theme (dark/light) toggle, and preloader.
 * Injected on every page so header/footer stay a single source of truth.
 */

/* ---------- Theme (dark / light) ---------- */
function getTheme() {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  document
    .querySelectorAll(".theme-toggle i, .theme-toggle svg")
    .forEach((el) => el.remove());
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
    icon.className = "w-[18px] h-[18px]";
    btn.appendChild(icon);
  });
  if (window.lucide) window.lucide.createIcons();
}

function toggleTheme() {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
}

function initTheme() {
  applyTheme(getTheme());
  document.addEventListener("click", (e) => {
    if (e.target.closest(".theme-toggle")) toggleTheme();
  });
}

/* ---------- Preloader ---------- */
function initPreloader() {
  const pre = document.getElementById("preloader");
  if (!pre) return;
  document.body.classList.add("preloader-active");
  const fill = pre.querySelector(".preloader-bar-fill");
  const pct = pre.querySelector(".preloader-pct");
  let progress = 0;
  let loaded = document.readyState === "complete";
  window.addEventListener("load", () => {
    loaded = true;
  });

  const finish = () => {
    if (fill) fill.style.width = "100%";
    if (pct) pct.textContent = "100%";
    setTimeout(() => {
      pre.classList.add("preloader-hide");
      document.body.classList.remove("preloader-active");
      setTimeout(() => pre.remove(), 800);
    }, 250);
  };

  const timer = setInterval(() => {
    // simulate progress; accelerate to 100 once page fully loaded
    const target = loaded ? 100 : 88;
    progress = Math.min(
      progress + (loaded ? 14 : Math.random() * 9 + 3),
      target,
    );
    if (fill) fill.style.width = progress + "%";
    if (pct) pct.textContent = Math.round(progress) + "%";
    if (progress >= 100) {
      clearInterval(timer);
      finish();
    }
  }, 90);

  // safety fallback: never stuck more than 6s
  setTimeout(() => {
    if (document.getElementById("preloader")) {
      clearInterval(timer);
      finish();
    }
  }, 6000);
}

function currentPageId() {
  return document.body.getAttribute("data-page") || "";
}

function navItem(label, href, id) {
  const active = currentPageId() === id;
  return `<a href="${href}" class="nav-link py-2 ${active ? "font-semibold nav-active" : ""}">${label}</a>`;
}

function renderHeader() {
  const isHome = currentPageId() === "home";
  const headerEl = document.getElementById("site-header");
  if (!headerEl) return;

  headerEl.className = `fixed top-0 left-0 right-0 z-50 ${isHome ? "header-transparent" : "header-solid"}`;

  headerEl.innerHTML = `
    <div class="max-w-7xl mx-auto px-5 md:px-8">
      <div class="flex items-center justify-between h-[76px]">
        <a href="index.html" class="flex items-center gap-3 shrink-0">
          <span class="w-10 h-10 rounded-sm flex items-center justify-center font-extrabold text-white text-lg" style="background:var(--color-primary)">S</span>
          <span class="brand-name leading-tight">
            <span class="block font-bold text-[15px] tracking-tight">SINAR SURABAYASAKTI</span>
            <span class="block text-[11px] font-medium opacity-70 -mt-0.5">SUPREME Cable Distributor</span>
          </span>
        </a>

        <nav class="hidden lg:flex items-center gap-8">
          ${navItem("Home", "index.html", "home")}
          ${navItem("About Us", "about.html", "about")}
          <div class="relative group">
            <button class="nav-link py-2 flex items-center gap-1">Company <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i></button>
            <div class="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div class="nav-dropdown">
                <a href="company-profile.html">Company Profile</a>
                <a href="vision-mission.html">Vision &amp; Mission</a>
              </div>
            </div>
          </div>
          <div class="relative group">
            <button class="nav-link py-2 flex items-center gap-1">Products <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i></button>
            <div class="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div class="nav-dropdown">
                <a href="products.html?category=kabel-listrik">Kabel Listrik</a>
                <a href="products.html?category=kabel-telekomunikasi">Kabel Telekomunikasi</a>
                <div class="my-1 h-px" style="background:var(--color-line)"></div>
                <a href="products.html" class="font-semibold">View All Products</a>
              </div>
            </div>
          </div>
          ${navItem("Download Center", "downloads.html", "downloads")}
          ${navItem("Contact", "contact.html", "contact")}
        </nav>

        <div class="hidden lg:flex items-center gap-3">
          <button class="theme-toggle" aria-label="Toggle dark mode"></button>
          <a href="contact.html" class="btn btn-primary">Hubungi Kami</a>
        </div>

        <div class="flex items-center gap-1 lg:hidden">
          <button class="theme-toggle" aria-label="Toggle dark mode"></button>
          <button id="mobile-menu-btn" class="p-2 -mr-2" aria-label="Open menu">
            <i data-lucide="menu" class="w-6 h-6" style="color:${isHome ? "#fff" : "var(--color-ink)"}"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderMobileMenu() {
  const el = document.getElementById("mobile-menu");
  if (!el) return;
  el.innerHTML = `
    <div class="h-full flex flex-col">
      <div class="flex items-center justify-between h-[76px] px-5 border-b" style="border-color:var(--color-line)">
        <span class="font-bold text-sm">MENU</span>
        <button id="mobile-menu-close" class="p-2 -mr-2" aria-label="Close menu"><i data-lucide="x" class="w-6 h-6"></i></button>
      </div>
      <nav class="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1 text-[15px]">
        <a href="index.html" class="py-3 border-b font-medium">Home</a>
        <a href="about.html" class="py-3 border-b font-medium">About Us</a>
        <a href="company-profile.html" class="py-3 border-b font-medium">Company Profile</a>
        <a href="vision-mission.html" class="py-3 border-b font-medium">Vision &amp; Mission</a>
        <a href="products.html?category=kabel-listrik" class="py-3 border-b font-medium">Kabel Listrik</a>
        <a href="products.html?category=kabel-telekomunikasi" class="py-3 border-b font-medium">Kabel Telekomunikasi</a>
        <a href="downloads.html" class="py-3 border-b font-medium">Download Center</a>
        <a href="contact.html" class="py-3 border-b font-medium">Contact</a>
        <a href="contact.html" class="btn btn-primary mt-6 justify-center">Hubungi Kami</a>
      </nav>
    </div>
  `;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-10 h-10 rounded-sm flex items-center justify-center font-extrabold text-white text-lg" style="background:var(--color-primary)">S</span>
            <span class="font-bold text-sm">SINAR SURABAYASAKTI</span>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">Agen dan distributor kabel SUPREME yang melayani kebutuhan kelistrikan dan telekomunikasi sejak 1992, didukung oleh PT SUCACO Tbk.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Company</h4>
          <ul class="space-y-2.5 text-sm text-gray-400">
            <li><a href="about.html" class="link-underline hover:text-white transition-colors">About Us</a></li>
            <li><a href="company-profile.html" class="link-underline hover:text-white transition-colors">Company Profile</a></li>
            <li><a href="vision-mission.html" class="link-underline hover:text-white transition-colors">Vision &amp; Mission</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Products</h4>
          <ul class="space-y-2.5 text-sm text-gray-400">
            <li><a href="products.html?category=kabel-listrik" class="link-underline hover:text-white transition-colors">Electrical Cable</a></li>
            <li><a href="products.html?category=kabel-telekomunikasi" class="link-underline hover:text-white transition-colors">Telecommunication Cable</a></li>
            <li><a href="products.html" class="link-underline hover:text-white transition-colors">Product Catalog</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Contact</h4>
          <ul class="space-y-2.5 text-sm text-gray-400">
            <li class="flex gap-2"><i data-lucide="map-pin" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${companyInfo.address.line1}, ${companyInfo.address.line2}, ${companyInfo.address.line3}</span></li>
            <li class="flex gap-2"><i data-lucide="phone" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${companyInfo.phones[0]}</span></li>
            <li class="flex gap-2"><i data-lucide="mail" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${companyInfo.email}</span></li>
            <li class="flex gap-2"><i data-lucide="message-circle" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${companyInfo.whatsappNumber}</span></li>
          </ul>
        </div>
      </div>
      <div class="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>&copy; 2026 PT Sinar Surabayasakti. All Rights Reserved.</p>
        <p>Distributor resmi kabel SUPREME &mdash; didukung oleh PT SUCACO Tbk.</p>
      </div>
    </div>
  `;
}

function renderWhatsAppFloat() {
  const el = document.getElementById("wa-float-slot");
  if (!el) return;
  el.innerHTML = `
    <a id="wa-float" href="${getWhatsAppUrl()}" target="_blank" rel="noopener" aria-label="Chat via WhatsApp">
      <i data-lucide="message-circle" class="w-7 h-7 text-white"></i>
    </a>
  `;
}

function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-menu-close");
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("mobile-menu-overlay");
  if (!menu) return;
  const open = () => {
    menu.classList.add("open");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    menu.classList.remove("open");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  };
  btn && btn.addEventListener("click", open);
  closeBtn && closeBtn.addEventListener("click", close);
  overlay && overlay.addEventListener("click", close);
}

function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header || currentPageId() !== "home") return;
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.remove("header-transparent");
      header.classList.add("header-solid");
      const menuIcon = document.querySelector("#mobile-menu-btn i");
      if (menuIcon) menuIcon.style.color = "var(--color-ink)";
    } else {
      header.classList.add("header-transparent");
      header.classList.remove("header-solid");
      const menuIcon = document.querySelector("#mobile-menu-btn i");
      if (menuIcon) menuIcon.style.color = "#fff";
    }
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  // Auto-stagger: reveal siblings inside the same parent get incremental delay
  els.forEach((el) => {
    const parent = el.parentElement;
    if (!parent) return;
    const siblings = Array.from(parent.children).filter(
      (c) => c.classList && c.classList.contains("reveal"),
    );
    if (siblings.length > 1) {
      const idx = siblings.indexOf(el);
      el.style.setProperty("--reveal-delay", `${Math.min(idx * 90, 540)}ms`);
    }
  });
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Animated number counters ([data-count]) ---------- */
function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = parseInt(el.getAttribute("data-count"), 10);
        const suffix = el.getAttribute("data-count-suffix") || "";
        const dur = 1400;
        const start = performance.now();
        const step = (now) => {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Hero Interactive Ambience Light ---------- */
function initHeroAmbienceLight() {
  const heroSec = document.getElementById("hero-section");
  const cursorGlow = document.getElementById("hero-cursor-glow");
  if (!heroSec || !cursorGlow) return;

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;
  let isHovered = false;

  // Track cursor position inside hero section
  heroSec.addEventListener("mousemove", (e) => {
    const rect = heroSec.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    if (!isHovered) {
      isHovered = true;
      cursorGlow.style.opacity = "1";
    }
  });

  // Fade out light when cursor leaves the hero section
  heroSec.addEventListener("mouseleave", () => {
    isHovered = false;
    cursorGlow.style.opacity = "0";
  });

  // Smooth lerp (linear interpolation) animation loop for cursor tracking
  function tick() {
    // Smoothen the movement: currentPos = currentPos + (target - currentPos) * speedFactor
    // We adjust speedFactor based on hover state. If not hovered, let it idle or gently fade out
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;

    requestAnimationFrame(tick);
  }

  // Start the animation loop
  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPreloader();
  renderHeader();
  renderMobileMenu();
  renderFooter();
  renderWhatsAppFloat();
  initMobileMenu();
  initHeaderScroll();
  initReveal();
  initCounters();
  initHeroAmbienceLight();
  if (window.lucide) window.lucide.createIcons();
  if (window.initPage) window.initPage();
  applyTheme(getTheme()); // ensure toggle icons render after header exists
});
