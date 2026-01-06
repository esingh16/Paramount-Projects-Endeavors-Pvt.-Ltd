// script.js – map, directory, project detail, sample work, contact

// 1. Project directory data
// For now this has example rows; extend/replace with your full Dominos/KFC/BK/etc. list.
const projectDirectory = [
  {
    id: "2013-KFCH-KATRAJ-PUNE",
    year: 2013,
    client: "KFCH",
    brand: "KFC",
    city: "Pune",
    region: "West",
    location: "Katraj, Pune"
  },
  {
    id: "2013-KFCH-WAI-SATARA",
    year: 2013,
    client: "KFCH",
    brand: "KFC",
    city: "Satara",
    region: "West",
    location: "WAI, Satara"
  },
  {
    id: "2015-BK-JANAKPURI-DELHI",
    year: 2015,
    client: "Burger king",
    brand: "Burger King",
    city: "Delhi",
    region: "North",
    location: "Janakpuri, Delhi"
  },
  {
    id: "2015-CHAAYOS-TODI-MILLS",
    year: 2015,
    client: "Chaayos",
    brand: "Chaayos",
    city: "Mumbai",
    region: "West",
    location: "Todi mills, Lower Parel"
  },
  {
    id: "2018-MCD-VILE-PARLE-MUMBAI",
    year: 2018,
    client: "McDonalds",
    brand: "McDonald’s",
    city: "Mumbai",
    region: "West",
    location: "Vile Parle, Mumbai"
  },
  {
    id: "2022-SUBWAY-BANGALORE",
    year: 2022,
    client: "SUBWAY",
    brand: "Subway",
    city: "Bengaluru",
    region: "South",
    location: "Bangalore"
  },
  {
    id: "2023-CROMA-ANKLESHWAR",
    year: 2023,
    client: "CROMA",
    brand: "Croma",
    city: "Ankleshwar",
    region: "West",
    location: "Croma, Ankleshwar"
  },
  {
    id: "2023-PEPE-SOUTH-CITY-KOLKATA",
    year: 2023,
    client: "PEPE JEANS",
    brand: "Pepe Jeans",
    city: "Kolkata",
    region: "East",
    location: "South City, Kolkata"
  },
  {
    id: "2021-IZUMI-JUHU-MUMBAI",
    year: 2021,
    client: "IZUMI",
    brand: "Izumi",
    city: "Mumbai",
    region: "West",
    location: "Juhu, Mumbai"
  },
  {
    id: "2021-TACOBELL-PUNE",
    year: 2021,
    client: "TACO BELL",
    brand: "Taco Bell",
    city: "Pune",
    region: "West",
    location: "Pune"
  },
  {
    id: "2018-COPPER-CHIMNEY-DELUXE",
    year: 2018,
    client: "Copper Chimney",
    brand: "Copper Chimney",
    city: "Mumbai",
    region: "West",
    location: "Deluxe Caterers Pvt Ltd (Mumbai)"
  },
  {
    id: "2024-CTR-BANGALORE",
    year: 2024,
    client: "CTR",
    brand: "CTR",
    city: "Bengaluru",
    region: "South",
    location: "Bangalore"
  },
  {
    id: "2023-YOUMEE-INFINITI-ANDHERI",
    year: 2023,
    client: "LBF",
    brand: "YouMee",
    city: "Mumbai",
    region: "West",
    location: "YouMee, Infiniti Mall, Andheri"
  }
];

// 2. Sample images – using img1.png … img24.png
const sampleImages = [
  { brand: "Sample 1", file: "img1.png", label: "Sample project 1" },
  { brand: "Sample 2", file: "img2.png", label: "Sample project 2" },
  { brand: "Sample 3", file: "img3.png", label: "Sample project 3" },
  { brand: "Sample 4", file: "img4.png", label: "Sample project 4" },
  { brand: "Sample 5", file: "img5.png", label: "Sample project 5" },
  { brand: "Sample 6", file: "img6.png", label: "Sample project 6" },
  { brand: "Sample 7", file: "img7.png", label: "Sample project 7" },
  { brand: "Sample 8", file: "img8.png", label: "Sample project 8" },
  { brand: "Sample 9", file: "img9.png", label: "Sample project 9" },
  { brand: "Sample 10", file: "img10.png", label: "Sample project 10" },
  { brand: "Sample 11", file: "img11.png", label: "Sample project 11" },
  { brand: "Sample 12", file: "img12.png", label: "Sample project 12" },
  { brand: "Sample 13", file: "img13.png", label: "Sample project 13" },
  { brand: "Sample 14", file: "img14.png", label: "Sample project 14" },
  { brand: "Sample 15", file: "img15.png", label: "Sample project 15" },
  { brand: "Sample 16", file: "img16.png", label: "Sample project 16" },
  { brand: "Sample 17", file: "img17.png", label: "Sample project 17" },
  { brand: "Sample 18", file: "img18.png", label: "Sample project 18" },
  { brand: "Sample 19", file: "img19.png", label: "Sample project 19" },
  { brand: "Sample 20", file: "img20.png", label: "Sample project 20" },
  { brand: "Sample 21", file: "img21.png", label: "Sample project 21" },
  { brand: "Sample 22", file: "img22.png", label: "Sample project 22" },
  { brand: "Sample 23", file: "img23.png", label: "Sample project 23" },
  { brand: "Sample 24", file: "img24.png", label: "Sample project 24" }
];

// 3. Map & city aggregation
function buildCityAggregation() {
  const cityMap = new Map();
  projectDirectory.forEach((p) => {
    if (!p.city) return;
    const key = p.city.toLowerCase();
    if (!cityMap.has(key)) {
      cityMap.set(key, {
        city: p.city,
        region: p.region,
        projects: []
      });
    }
    cityMap.get(key).projects.push(p);
  });
  return Array.from(cityMap.values());
}

// City -> approximate coordinates
const cityCoordinates = {
  Mumbai: [19.076, 72.8777],
  "Navi Mumbai": [19.033, 73.0297],
  Pune: [18.5204, 73.8567],
  Satara: [17.6914, 74.0003],
  Thane: [19.2183, 72.9781],
  Delhi: [28.6139, 77.209],
  Gurgaon: [28.4595, 77.0266],
  Noida: [28.5355, 77.391],
  "Greater Noida": [28.4744, 77.503],
  Kanpur: [26.4499, 80.3319],
  Lucknow: [26.8467, 80.9462],
  Varanasi: [25.3176, 82.9739],
  Prayagraj: [25.4358, 81.8463],
  Jaipur: [26.9124, 75.7873],
  Indore: [22.7196, 75.8577],
  Ahmedabad: [23.0225, 72.5714],
  Surat: [21.1702, 72.8311],
  Ankleshwar: [21.6269, 72.9994],
  Kolkata: [22.5726, 88.3639],
  Siliguri: [26.7271, 88.3953],
  Guwahati: [26.1445, 91.7362],
  Dimapur: [25.9117, 93.7266],
  Itanagar: [27.0844, 93.6053],
  Gangtok: [27.3389, 88.6065],
  Bengaluru: [12.9716, 77.5946],
  Hyderabad: [17.385, 78.4867],
  Chennai: [13.0827, 80.2707],
  Mangalore: [12.9141, 74.856],
  Kochi: [9.9312, 76.2673],
  Hubli: [15.3647, 75.124]
};

let map;
const mapElement = document.getElementById("map");
if (mapElement && typeof L !== "undefined") {
  map = L.map("map", {
    zoomControl: false,
    zoomAnimation: true,
    zoomAnimationThreshold: 4,
    inertia: true,
    inertiaDeceleration: 2000
  }).setView([22.9734, 78.6569], 5);

  L.control.zoom({ position: "bottomright" }).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  const cityAgg = buildCityAggregation();
  cityAgg.forEach((c) => {
    const coords = cityCoordinates[c.city] || null;
    if (!coords) return;

    const marker = L.circleMarker(coords, {
      radius: 7,
      color: "#000",
      weight: 2,
      fillColor: "#34c0c9",
      fillOpacity: 0.9
    }).addTo(map);

    const brands = Array.from(
      new Set(c.projects.map((p) => p.brand || p.client))
    ).join(", ");
    const years = `${Math.min(
      ...c.projects.map((p) => p.year)
    )} – ${Math.max(...c.projects.map((p) => p.year))}`;

    marker.bindPopup(
      `<strong>${c.city}</strong><br/>Brands: ${brands}<br/>Years: ${years}`
    );

    marker.on("click", () => {
      const cityFilter = document.getElementById("filter-city");
      if (cityFilter) {
        cityFilter.value = c.city;
        applyDirectoryFilters();
        const directorySection =
          document.getElementById("projects-directory");
        if (directorySection) {
          directorySection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

// 4. Directory filters and rendering
const yearFilter = document.getElementById("filter-year");
const brandFilter = document.getElementById("filter-brand");
const cityFilter = document.getElementById("filter-city");
const regionFilter = document.getElementById("filter-region");
const searchInput = document.getElementById("filter-search");
const clearBtn = document.getElementById("filter-clear");
const resultsContainer = document.getElementById("directory-results");
const summaryEl = document.getElementById("directory-summary");

function initDirectoryFilters() {
  if (!resultsContainer) return;

  const years = Array.from(
    new Set(projectDirectory.map((p) => p.year).filter(Boolean))
  ).sort((a, b) => a - b);
  years.forEach((y) => {
    const opt = document.createElement("option");
    opt.value = String(y);
    opt.textContent = String(y);
    if (yearFilter) yearFilter.appendChild(opt);
  });

  const brands = Array.from(
    new Set(projectDirectory.map((p) => p.brand || p.client).filter(Boolean))
  ).sort();
  brands.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    if (brandFilter) brandFilter.appendChild(opt);
  });

  const cities = Array.from(
    new Set(projectDirectory.map((p) => p.city).filter(Boolean))
  ).sort();
  cities.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    if (cityFilter) cityFilter.appendChild(opt);
  });

  if (yearFilter) yearFilter.addEventListener("change", applyDirectoryFilters);
  if (brandFilter) brandFilter.addEventListener("change", applyDirectoryFilters);
  if (cityFilter) cityFilter.addEventListener("change", applyDirectoryFilters);
  if (regionFilter)
    regionFilter.addEventListener("change", applyDirectoryFilters);
  if (searchInput)
    searchInput.addEventListener("input", applyDirectoryFilters);
  if (clearBtn)
    clearBtn.addEventListener("click", () => {
      if (yearFilter) yearFilter.value = "";
      if (brandFilter) brandFilter.value = "";
      if (cityFilter) cityFilter.value = "";
      if (regionFilter) regionFilter.value = "";
      if (searchInput) searchInput.value = "";
      applyDirectoryFilters();
    });

  applyDirectoryFilters();
}

function applyDirectoryFilters() {
  if (!resultsContainer) return;

  const yearVal = yearFilter ? yearFilter.value : "";
  const brandVal = brandFilter ? brandFilter.value : "";
  const cityVal = cityFilter ? cityFilter.value : "";
  const regionVal = regionFilter ? regionFilter.value : "";
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  let filtered = projectDirectory.slice();

  if (yearVal) {
    filtered = filtered.filter((p) => String(p.year) === yearVal);
  }
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
  if (summaryEl) {
    summaryEl.textContent = `${items.length} site(s) matching current filters`;
  }

  if (!items.length) {
    resultsContainer.innerHTML =
      "<p>No projects match the selected filters.</p>";
    return;
  }

  items.forEach((p) => {
    const card = document.createElement("article");
    card.className = "directory-card";

    const header = document.createElement("div");
    header.className = "directory-card-header";

    const title = document.createElement("div");
    title.className = "directory-card-title";
    title.textContent = p.location || "(Location not specified)";

    const yearBadge = document.createElement("div");
    yearBadge.className = "directory-card-meta";
    yearBadge.textContent = p.year;

    header.appendChild(title);
    header.appendChild(yearBadge);

    const subtitle = document.createElement("div");
    subtitle.className = "directory-card-subtitle";
    subtitle.textContent = `${p.city || "City N/A"} • ${
      p.region || "Region N/A"
    }`;

    const brandEl = document.createElement("div");
    brandEl.className = "directory-card-brand";
    brandEl.textContent = p.brand || p.client;

    const meta = document.createElement("div");
    meta.className = "directory-card-meta";
    meta.textContent = `Client: ${p.client}`;

    const link = document.createElement("a");
    link.href = `projects.html?id=${encodeURIComponent(p.id)}`;
    link.className = "pill-button";
    link.style.marginTop = "6px";
    link.style.alignSelf = "flex-start";
    link.textContent = "View details";

    card.appendChild(header);
    card.appendChild(subtitle);
    card.appendChild(brandEl);
    card.appendChild(meta);
    card.appendChild(link);

    resultsContainer.appendChild(card);
  });
}

// 5. Project detail page
(function () {
  const container = document.getElementById("project-detail-container");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = projectDirectory.find((p) => p.id === id);

  if (!project) {
    container.innerHTML =
      "<p>Project details not found. Please return to the Projects Directory.</p>";
    return;
  }

  container.innerHTML = `
    <article class="project-detail-main">
      <h3>${project.brand || project.client}</h3>
      <p>${project.location || ""}</p>
    </article>
    <aside class="project-detail-sidebar">
      <h3>Key Metrics</h3>
      <ul class="project-metrics">
        <li><strong>Year:</strong> ${project.year}</li>
        <li><strong>Client:</strong> ${project.client}</li>
        <li><strong>Brand:</strong> ${project.brand || project.client}</li>
        <li><strong>City:</strong> ${project.city || "N/A"}</li>
        <li><strong>Region:</strong> ${project.region || "N/A"}</li>
      </ul>
    </aside>
  `;
})();

// 6. Sample work gallery
function renderSampleWork() {
  const grid = document.getElementById("sample-work-grid");
  if (!grid) return;

  grid.innerHTML = "";
  sampleImages.forEach((item) => {
    const card = document.createElement("article");
    card.className = "directory-card";

    const title = document.createElement("div");
    title.className = "directory-card-title";
    title.textContent = item.brand;

    const img = document.createElement("img");
    img.src = item.file;
    img.alt = item.label;

    const subtitle = document.createElement("div");
    subtitle.className = "directory-card-subtitle";
    subtitle.textContent = item.label;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(subtitle);

    grid.appendChild(card);
  });
}

// 7. Init on index.html
if (document.getElementById("directory-results")) {
  initDirectoryFilters();
}
if (document.getElementById("sample-work-grid")) {
  renderSampleWork();
}

// 8. Current year for footer
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// 9. Simple notification after form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function () {
    setTimeout(() => {
      alert("Thank you. Your enquiry has been submitted.");
    }, 400);
  });
}
