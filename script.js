// script.js
// Map, directory, project detail, sample work, contact

// 1. Project directory data
// IMPORTANT: Keep extending this array with ALL rows from Project-details.xlsx
// using the same structure (id, year, client, brand, city, region, location).
// City and region are normalized manually. This array is PURE DATA.

const projectDirectory = [
  // Existing examples
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
    client: "Burger King",
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
    brand: "McDonalds",
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
    location: "Deluxe Caterers Pvt Ltd Mumbai"
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

  // TODO: Add all remaining rows from Project-details.xlsx here,
  // following the same structure. Keep city spelling consistent with
  // cityCoordinates below so every city shows on the map.
];

// 2. Sample work images (large cards + download)
// These filenames must exist in your repo (e.g. images/img1.png ... images/img24.png)

const sampleImages = [
  { file: "images/img1.png", label: "Multi-brand QSR fit-out" },
  { file: "images/img2.png", label: "High-street retail facade" },
  { file: "images/img3.png", label: "Mall interior food court" },
  { file: "images/img4.png", label: "Electronics anchor store" },
  { file: "images/img5.png", label: "Premium casual dining" },
  { file: "images/img6.png", label: "Compact kiosk format" },
  { file: "images/img7.png", label: "Drive-thru prototype" },
  { file: "images/img8.png", label: "Flagship restaurant layout" },
  { file: "images/img9.png", label: "Fashion retail rollout" },
  { file: "images/img10.png", label: "Co-branded mall frontage" },
  { file: "images/img11.png", label: "Tier-2 city high street" },
  { file: "images/img12.png", label: "Transit hub outlet" },
  { file: "images/img13.png", label: "Food court island counter" },
  { file: "images/img14.png", label: "Café and bakery concept" },
  { file: "images/img15.png", label: "Electronics store remodel" },
  { file: "images/img16.png", label: "Quick renovation program" },
  { file: "images/img17.png", label: "High-visibility corner site" },
  { file: "images/img18.png", label: "Mall atrium installation" },
  { file: "images/img19.png", label: "Restaurant back-of-house" },
  { file: "images/img20.png", label: "Facade refresh before/after" },
  { file: "images/img21.png", label: "Compact high street box" },
  { file: "images/img22.png", label: "Hospitality lobby area" },
  { file: "images/img23.png", label: "Fit-out progress snapshot" },
  { file: "images/img24.png", label: "Completed multi-store rollout" }
];

// 3. City aggregation for map markers

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

// City → approximate coordinates
// Extend this list whenever a new city is added in projectDirectory.
const cityCoordinates = {
  "Mumbai": [19.076, 72.8777],
  "Navi Mumbai": [19.033, 73.0297],
  "Pune": [18.5204, 73.8567],
  "Satara": [17.6914, 74.0003],
  "Thane": [19.2183, 72.9781],
  "Delhi": [28.6139, 77.209],
  "Gurgaon": [28.4595, 77.0266],
  "Noida": [28.5355, 77.391],
  "Greater Noida": [28.4744, 77.503],
  "Kanpur": [26.4499, 80.3319],
  "Lucknow": [26.8467, 80.9462],
  "Varanasi": [25.3176, 82.9739],
  "Prayagraj": [25.4358, 81.8463],
  "Jaipur": [26.9124, 75.7873],
  "Indore": [22.7196, 75.8577],
  "Ahmedabad": [23.0225, 72.5714],
  "Surat": [21.1702, 72.8311],
  "Ankleshwar": [21.6269, 72.9994],
  "Kolkata": [22.5726, 88.3639],
  "Siliguri": [26.7271, 88.3953],
  "Guwahati": [26.1445, 91.7362],
  "Dimapur": [25.9117, 93.7266],
  "Itanagar": [27.0844, 93.6053],
  "Gangtok": [27.3389, 88.6065],
  "Bengaluru": [12.9716, 77.5946],
  "Hyderabad": [17.385, 78.4867],
  "Chennai": [13.0827, 80.2707],
  "Mangalore": [12.9141, 74.856],
  "Kochi": [9.9312, 76.2673],
  "Hubli": [15.3647, 75.124]
};

// 4. Map initialisation (index.html only)

let map;
const mapElement = document.getElementById("map");

if (mapElement) {
  map = L.map("map", {
    zoomControl: false,
    zoomAnimation: true,
    zoomAnimationThreshold: 4,
    inertia: true,
    inertiaDeceleration: 2000
  }).setView([22.9734, 78.6569], 5);

  L.control
    .zoom({ position: "bottomright" })
    .addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "OpenStreetMap contributors"
  }).addTo(map);

  const cityAgg = buildCityAggregation();
  const allLatLngs = [];

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
    const yearsList = c.projects.map((p) => p.year).filter(Boolean);
    const minYear = yearsList.length ? Math.min(...yearsList) : "";
    const maxYear = yearsList.length ? Math.max(...yearsList) : "";
    const years =
      minYear && maxYear && minYear !== maxYear
        ? `${minYear} – ${maxYear}`
        : minYear || maxYear || "";

    marker.bindPopup(
      `<strong>${c.city}</strong><br>Brands: ${brands}<br>Years: ${years}`
    );

    marker.onclick = () => {
      const cityFilter = document.getElementById("filter-city");
      if (cityFilter) {
        cityFilter.value = c.city;
        applyDirectoryFilters();
      }
      const directorySection = document.getElementById("projects-directory");
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

// 5. Directory filters and rendering (index.html only)

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
  ).sort((a, b) => b - a);
  years.forEach((y) => {
    const opt = document.createElement("option");
    opt.value = String(y);
    opt.textContent = String(y);
    yearFilter.appendChild(opt);
  });

  const brands = Array.from(
    new Set(
      projectDirectory
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
    new Set(projectDirectory.map((p) => p.city).filter(Boolean))
  ).sort();
  cities.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    cityFilter.appendChild(opt);
  });

  const regions = Array.from(
    new Set(projectDirectory.map((p) => p.region).filter(Boolean))
  ).sort();
  regions.forEach((r) => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    regionFilter.appendChild(opt);
  });

  yearFilter.addEventListener("change", applyDirectoryFilters);
  brandFilter.addEventListener("change", applyDirectoryFilters);
  cityFilter.addEventListener("change", applyDirectoryFilters);
  regionFilter.addEventListener("change", applyDirectoryFilters);
  searchInput.addEventListener("input", applyDirectoryFilters);

  clearBtn.addEventListener("click", () => {
    yearFilter.value = "";
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

  const yearVal = yearFilter.value;
  const brandVal = brandFilter.value;
  const cityVal = cityFilter.value;
  const regionVal = regionFilter.value;
  const query = searchInput.value.trim().toLowerCase();

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
  summaryEl.textContent = `${items.length} site(s) matching current filters`;

  if (!items.length) {
    resultsContainer.innerHTML =
      "<p>No projects match the selected filters.</p>";
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

    const yearBadge = document.createElement("div");
    yearBadge.className = "directory-card-meta";
    yearBadge.textContent = p.year || "";

    header.appendChild(title);
    header.appendChild(yearBadge);

    const subtitle = document.createElement("div");
    subtitle.className = "directory-card-subtitle";
    subtitle.textContent = `${p.city || "City NA"} • ${p.region || "Region NA"}`;

    const brandEl = document.createElement("div");
    brandEl.className = "directory-card-brand";
    brandEl.textContent = p.brand || p.client || "";

    const meta = document.createElement("div");
    meta.className = "directory-card-meta";
    meta.textContent = `Client: ${p.client || "-"}`;

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

// 6. Project detail page (projects.html)

function populateProjectDetail() {
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

  const imgHtml = project.image
    ? `<img src="${project.image}" alt="${project.brand}" class="project-image">`
    : "";

  container.innerHTML = `
    <section class="project-detail-layout" data-aos="fade-up">
      <article class="project-detail-main">
        <h3>${project.brand || project.client}</h3>
        ${imgHtml}
        <p>${project.location || ""}</p>
      </article>
      <aside class="project-detail-sidebar">
        <h3>Key Metrics</h3>
        <ul class="project-metrics">
          <li><strong>Year</strong> ${project.year || "-"}</li>
          <li><strong>Client</strong> ${project.client || "-"}</li>
          <li><strong>Brand</strong> ${project.brand || project.client || "-"}</li>
          <li><strong>City</strong> ${project.city || "NA"}</li>
          <li><strong>Region</strong> ${project.region || "NA"}</li>
        </ul>
      </aside>
    </section>
  `;
}

// 7. Sample work gallery (index.html)

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

// 8. Init on DOM ready

document.addEventListener("DOMContentLoaded", () => {
  if (resultsContainer) {
    initDirectoryFilters();
  }

  if (document.getElementById("project-detail-container")) {
    populateProjectDetail();
  }

  if (document.getElementById("sample-work-grid")) {
    renderSampleWork();
  }

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function () {
      setTimeout(() => {
        alert("Thank you. Your enquiry has been submitted.");
      }, 400);
    });
  }
});
