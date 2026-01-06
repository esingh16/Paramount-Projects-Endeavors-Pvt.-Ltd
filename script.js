// script.js

// Hero typewriter, scroll progress, active nav,
// clients directory data, map, directory, sample work, contact

// -----------------------------
// 0. Hero typewriter
// -----------------------------

const typewriterPhrases = [
  "End-to-end retail fitouts",
  "Pan-India QSR rollouts",
  "Multi-city project coordination",
  "On-ground execution across India"
];

function startTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = typewriterPhrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        setTimeout(() => { deleting = true; }, 1200);
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
      }
    }

    const speed = deleting ? 50 : 80;
    setTimeout(tick, speed);
  }

  tick();
}

// -----------------------------
// 1. Clients directory data
// -----------------------------

// (same big clientsDirectory array you already have)
const clientsDirectory = [
  // Domino's
  { brand: "Domino's", client: "Domino's", city: "Pune", region: "West", location: "Pune" },
  { brand: "Domino's", client: "Domino's", city: "Baramati", region: "West", location: "Baramati" },
  { brand: "Domino's", client: "Domino's", city: "Mumbai", region: "West", location: "Mumbai" },
  { brand: "Domino's", client: "Domino's", city: "Surat", region: "West", location: "Surat" },
  { brand: "Domino's", client: "Domino's", city: "Goa", region: "West", location: "Goa" },
  { brand: "Domino's", client: "Domino's", city: "Satara", region: "West", location: "Satara" },
  { brand: "Domino's", client: "Domino's", city: "New Delhi", region: "North", location: "New Delhi" },
  { brand: "Domino's", client: "Domino's", city: "Badlapur", region: "West", location: "Badlapur" },
  { brand: "Domino's", client: "Domino's", city: "Dehradun", region: "North", location: "Dehradun" },
  { brand: "Domino's", client: "Domino's", city: "Bhiwani", region: "North", location: "Bhiwani" },
  { brand: "Domino's", client: "Domino's", city: "Muzaffarnagar", region: "North", location: "Muzaffarnagar" },
  { brand: "Domino's", client: "Domino's", city: "Mandi", region: "North", location: "Mandi (HP)" },
  { brand: "Domino's", client: "Domino's", city: "Gorakhpur", region: "North", location: "Gorakhpur" },
  { brand: "Domino's", client: "Domino's", city: "Gurgaon", region: "North", location: "Gurgaon" },
  { brand: "Domino's", client: "Domino's", city: "Shahjahanpur", region: "North", location: "Shahjahanpur" },
  { brand: "Domino's", client: "Domino's", city: "Bhilwara", region: "North", location: "Bhilwara" },
  { brand: "Domino's", client: "Domino's", city: "Rishikesh", region: "North", location: "Rishikesh" },
  { brand: "Domino's", client: "Domino's", city: "Kashipur", region: "North", location: "Kashipur" },
  { brand: "Domino's", client: "Domino's", city: "Faridabad", region: "North", location: "Faridabad" },
  { brand: "Domino's", client: "Domino's", city: "Kanpur", region: "North", location: "Kanpur" },
  { brand: "Domino's", client: "Domino's", city: "Maliya", region: "West", location: "Maliya" },
  { brand: "Domino's", client: "Domino's", city: "Jaipur", region: "North", location: "Jaipur" },
  { brand: "Domino's", client: "Domino's", city: "Ambala", region: "North", location: "Ambala" },
  { brand: "Domino's", client: "Domino's", city: "Mugalsarai", region: "North", location: "Mugalsarai" },
  { brand: "Domino's", client: "Domino's", city: "Varanasi", region: "North", location: "Varanasi" },
  { brand: "Domino's", client: "Domino's", city: "Nagpur", region: "West", location: "Nagpur" },
  { brand: "Domino's", client: "Domino's", city: "Faridkot", region: "North", location: "Faridkot" },
  { brand: "Domino's", client: "Domino's", city: "Lucknow", region: "North", location: "Lucknow" },
  { brand: "Domino's", client: "Domino's", city: "Ludhiana", region: "North", location: "Ludhiana" },

  // KFC
  { brand: "KFC", client: "KFC", city: "Pune", region: "West", location: "Pune" },
  { brand: "KFC", client: "KFC", city: "Satara", region: "West", location: "Satara" },
  { brand: "KFC", client: "KFC", city: "Thane", region: "West", location: "Thane" },
  { brand: "KFC", client: "KFC", city: "Mumbai", region: "West", location: "Mumbai" },
  { brand: "KFC", client: "KFC", city: "Nagpur", region: "West", location: "Nagpur" },
  { brand: "KFC", client: "KFC", city: "Indore", region: "West", location: "Indore" },
  { brand: "KFC", client: "KFC", city: "Korum", region: "West", location: "Korum Mall, Thane" },
  { brand: "KFC", client: "KFC", city: "Chandigarh", region: "North", location: "Chandigarh" },
  { brand: "KFC", client: "KFC", city: "Chennai", region: "South", location: "Chennai" },
  { brand: "KFC", client: "KFC", city: "Hyderabad", region: "South", location: "Hyderabad" },
  { brand: "KFC", client: "KFC", city: "Vashi", region: "West", location: "Vashi, Navi Mumbai" },

  // ... (rest of your existing clientsDirectory entries unchanged)
];
// keep the rest of the array as in your current file

// -----------------------------
// 2. Map city aggregation
// -----------------------------

function buildCityAggregation() {
  const cityMap = new Map();

  clientsDirectory.forEach((p) => {
    if (!p.city) return;
    const key = p.city.toLowerCase();
    if (!cityMap.has(key)) {
      cityMap.set(key, {
        city: p.city,
        region: p.region,
        clients: []
      });
    }
    cityMap.get(key).clients.push(p);
  });

  return Array.from(cityMap.values());
}

// Basic city → coordinates mapping (same as your current one, unchanged)
const cityCoordinates = {
  // ... full mapping as in your file
};

// -----------------------------
// 3. Map initialisation (wrapped)
// -----------------------------

function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement || typeof L === "undefined") return;

  const map = L.map("map", {
    zoomControl: false,
    zoomAnimation: true,
    zoomAnimationThreshold: 4,
    inertia: true,
    inertiaDeceleration: 2000
  }).setView([22.9734, 78.6569], 5);

  L.control.zoom({ position: "bottomright" }).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "OpenStreetMap contributors"
  }).addTo(map);

  const cityAgg = buildCityAggregation();
  const allLatLngs = [];

  cityAgg.forEach((c) => {
    const coords =
      cityCoordinates[c.city] ||
      cityCoordinates[`${c.city} ${c.brand}`] ||
      null;

    if (!coords) return;

    const marker = L.circleMarker(coords, {
      radius: 7,
      color: "#020617",
      weight: 2,
      fillColor: "#22c55e",
      fillOpacity: 0.9
    }).addTo(map);

    const brands = Array.from(
      new Set(c.clients.map((p) => p.brand || p.client))
    ).join(", ");

    marker.bindPopup(
      `<strong>${c.city}</strong><br>Brands: ${brands}`
    );

    marker.onclick = () => {
      const cityFilter = document.getElementById("filter-city");
      if (cityFilter) {
        cityFilter.value = c.city;
        applyDirectoryFilters();
      }
      const directorySection = document.getElementById("clients");
      if (directorySection) {
        directorySection.scrollIntoView({ behavior: "smooth" });
      }
    };

    allLatLngs.push(coords);
  });

  if (allLatLngs.length) {
    const bounds = L.latLngBounds(allLatLngs);
    map.fitBounds(bounds, { padding: [30, 30] });
  }
}

// -----------------------------
// 4. Directory filters & rendering
// -----------------------------

const brandFilter = document.getElementById("filter-brand");
const cityFilter = document.getElementById("filter-city");
const regionFilter = document.getElementById("filter-region");
const searchInput = document.getElementById("filter-search");
const clearBtn = document.getElementById("filter-clear");
const resultsContainer = document.getElementById("directory-results");
const summaryEl = document.getElementById("directory-summary");

function initDirectoryFilters() {
  if (!resultsContainer) return;

  const brands = Array.from(
    new Set(
      clientsDirectory
        .map((p) => p.brand || p.client)
        .filter(Boolean)
    )
  ).sort();

  brands.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    brandFilter.appendChild(opt);
  });

  const cities = Array.from(
    new Set(clientsDirectory.map((p) => p.city).filter(Boolean))
  ).sort();

  cities.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    cityFilter.appendChild(opt);
  });

  const regions = Array.from(
    new Set(clientsDirectory.map((p) => p.region).filter(Boolean))
  ).sort();

  regions.forEach((r) => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    regionFilter.appendChild(opt);
  });

  brandFilter.addEventListener("change", applyDirectoryFilters);
  cityFilter.addEventListener("change", applyDirectoryFilters);
  regionFilter.addEventListener("change", applyDirectoryFilters);
  searchInput.addEventListener("input", applyDirectoryFilters);

  clearBtn.addEventListener("click", () => {
    brandFilter.value = "";
    cityFilter.value = "";
    regionFilter.value = "";
    searchInput.value = "";
    applyDirectoryFilters();
  });

  applyDirectoryFilters();
}

function applyDirectoryFilters() {
  if (!resultsContainer) return;

  const brandVal = brandFilter.value;
  const cityVal = cityFilter.value;
  const regionVal = regionFilter.value;
  const query = searchInput.value.trim().toLowerCase();

  let filtered = clientsDirectory.slice();

  if (brandVal) {
    filtered = filtered.filter(
      (p) => (p.brand || p.client) === brandVal
    );
  }

  if (cityVal) {
    filtered = filtered.filter((p) => p.city === cityVal);
  }

  if (regionVal) {
    filtered = filtered.filter((p) => p.region === regionVal);
  }

  if (query) {
    filtered = filtered.filter((p) =>
      (p.location || "").toLowerCase().includes(query)
    );
  }

  renderDirectoryResults(filtered);
}

function renderDirectoryResults(items) {
  resultsContainer.innerHTML = "";
  summaryEl.textContent = `${items.length} client site(s) matching current filters`;

  if (!items.length) {
    resultsContainer.innerHTML =
      "<p>No client locations match the selected filters.</p>";
    return;
  }

  items.forEach((p) => {
    const card = document.createElement("article");
    card.className = "directory-card";
    card.setAttribute("data-aos", "fade-up");

    const header = document.createElement("div");
    header.className = "directory-card-header";

    const title = document.createElement("div");
    title.className = "directory-card-title";
    title.textContent = p.location || "Location not specified";

    const metaRight = document.createElement("div");
    metaRight.className = "directory-card-meta";
    metaRight.textContent = p.city || "";

    header.appendChild(title);
    header.appendChild(metaRight);

    const subtitle = document.createElement("div");
    subtitle.className = "directory-card-subtitle";
    subtitle.textContent = `${p.city || "City NA"} • ${p.region || "Region NA"}`;

    const brandEl = document.createElement("div");
    brandEl.className = "directory-card-brand";
    brandEl.textContent = p.brand || p.client || "";

    const meta = document.createElement("div");
    meta.className = "directory-card-meta";
    meta.textContent = `Client: ${p.client || "-"}`;

    card.appendChild(header);
    card.appendChild(subtitle);
    card.appendChild(brandEl);
    card.appendChild(meta);

    resultsContainer.appendChild(card);
  });
}

// -----------------------------
// 5. Sample work gallery
// -----------------------------

const sampleImages = [
  { file: "images/img1.png", label: "Alfredo's" },
  { file: "images/img2.png", label: "Amoeba" },
  { file: "images/img3.png", label: "Burger King" },
  { file: "images/img4.png", label: "Burma Burma" },
  { file: "images/img5.png", label: "Chaayos" },
  { file: "images/img6.png", label: "Cinepolis" },
  { file: "images/img7.png", label: "Copper Chimney" },
  { file: "images/img8.png", label: "Croma" },
  { file: "images/img10.png", label: "Dominos" },
  { file: "images/img11.png", label: "Dr Agarwals" },
  { file: "images/img12.png", label: "Izumi" },
  { file: "images/img13.png", label: "KFC" },
  { file: "images/img14.png", label: "Punjab Grill" },
  { file: "images/img15.png", label: "You Mee" },
  { file: "images/img16.png", label: "McD" },
  { file: "images/img17.png", label: "Mr DIY" },
  { file: "images/img18.png", label: "Pepe Jeans" },
  { file: "images/img19.png", label: "Social" },
  { file: "images/img20.png", label: "Subway" },
  { file: "images/img21.png", label: "Taco Bell" },
  { file: "images/img22.png", label: "The Hazelnut Factory" },
  { file: "images/img23.png", label: "Timezone" },
  { file: "images/img24.png", label: "Third Wave Coffee" }
];

function renderSampleWork() {
  const grid = document.getElementById("sample-work-grid");
  if (!grid) return;

  grid.innerHTML = "";
  sampleImages.forEach((item) => {
    const card = document.createElement("article");
    card.className = "sample-card";
    card.setAttribute("data-aos", "zoom-in-up");

    const img = document.createElement("img");
    img.src = item.file;
    img.alt = item.label;
    img.className = "sample-image";

    const body = document.createElement("div");
    body.className = "sample-body";

    const title = document.createElement("div");
    title.className = "sample-title";
    title.textContent = item.label;

    const actions = document.createElement("div");
    actions.className = "sample-actions";

    const downloadLink = document.createElement("a");
    downloadLink.href = item.file;
    downloadLink.download = "";
    downloadLink.className = "pill-button pill-button-secondary";
    downloadLink.textContent = "Download image";

    actions.appendChild(downloadLink);
    body.appendChild(title);
    body.appendChild(actions);
    card.appendChild(img);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

// -----------------------------
// 6. Scroll progress + active section
// -----------------------------

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  function update() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + "%";
  }

  window.addEventListener("scroll", update);
  update();
}

function initActiveSectionHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a[href^='#']");
  if (!sections.length || !navLinks.length) return;

  const map = {};
  navLinks.forEach((link) => {
    const id = link.getAttribute("href").replace("#", "");
    map[id] = link;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((l) => l.classList.remove("active"));
        if (map[id]) map[id].classList.add("active");
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((sec) => observer.observe(sec));
}

// -----------------------------
// 7. DOM ready
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  if (resultsContainer) initDirectoryFilters();
  if (document.getElementById("sample-work-grid")) renderSampleWork();

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function () {
      setTimeout(() => {
        alert("Thank you. Your enquiry has been submitted.");
      }, 400);
    });
  }

  startTypewriter();
  initScrollProgress();
  initActiveSectionHighlight();
  initMap();
});
