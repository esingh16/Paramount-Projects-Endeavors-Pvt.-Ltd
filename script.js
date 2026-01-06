// script.js

// Unified: hero typewriter, scroll progress, active nav,
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

// One entry per brand–city pair, location kept short and descriptive.
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

  // Cinepolis
  { brand: "Cinepolis", client: "Cinepolis", city: "Hubli", region: "South", location: "Hubli" },

  // Chaayos
  { brand: "Chaayos", client: "Chaayos", city: "Mumbai", region: "West", location: "Mumbai" },
  { brand: "Chaayos", client: "Chaayos", city: "Gurgaon", region: "North", location: "Gurgaon" },

  // Pressto
  { brand: "Pressto", client: "Pressto", city: "Thane", region: "West", location: "Thane" },

  // Burger King
  { brand: "Burger King", client: "Burger King", city: "Delhi", region: "North", location: "Delhi" },
  { brand: "Burger King", client: "Burger King", city: "Amritsar", region: "North", location: "Amritsar" },
  { brand: "Burger King", client: "Burger King", city: "Huda City", region: "North", location: "Huda City" },
  { brand: "Burger King", client: "Burger King", city: "Saket", region: "North", location: "Saket" },
  { brand: "Burger King", client: "Burger King", city: "Dholakun", region: "North", location: "Dholakun" },
  { brand: "Burger King", client: "Burger King", city: "Jaipur", region: "North", location: "Jaipur" },
  { brand: "Burger King", client: "Burger King", city: "Vashi", region: "West", location: "Vashi, Navi Mumbai" },
  { brand: "Burger King", client: "Burger King", city: "Dwarka", region: "North", location: "Dwarka" },
  { brand: "Burger King", client: "Burger King", city: "Noida", region: "North", location: "Noida" },
  { brand: "Burger King", client: "Burger King", city: "Manesar", region: "North", location: "Manesar (Haryana)" },
  { brand: "Burger King", client: "Burger King", city: "Ghaziabad", region: "North", location: "Ghaziabad" },
  { brand: "Burger King", client: "Burger King", city: "Kolkata", region: "East", location: "Kolkata" },
  { brand: "Burger King", client: "Burger King", city: "Prayagraj", region: "North", location: "Prayagraj" },
  { brand: "Burger King", client: "Burger King", city: "Gurgaon", region: "North", location: "Gurgaon" },
  { brand: "Burger King", client: "Burger King", city: "Bangalore", region: "South", location: "Bangalore" },
  { brand: "Burger King", client: "Burger King", city: "Varanasi", region: "North", location: "Varanasi" },
  { brand: "Burger King", client: "Burger King", city: "Kanpur", region: "North", location: "Kanpur" },
  { brand: "Burger King", client: "Burger King", city: "Lucknow", region: "North", location: "Lucknow" },
  { brand: "Burger King", client: "Burger King", city: "Guwahati", region: "East", location: "Guwahati" },
  { brand: "Burger King", client: "Burger King", city: "Siliguri", region: "East", location: "Siliguri" },
  { brand: "Burger King", client: "Burger King", city: "Mumbai", region: "West", location: "Mumbai" },
  { brand: "Burger King", client: "Burger King", city: "Mathura", region: "North", location: "Mathura" },
  { brand: "Burger King", client: "Burger King", city: "Mangalore", region: "South", location: "Mangalore" },
  { brand: "Burger King", client: "Burger King", city: "Hassan", region: "South", location: "Hassan" },
  { brand: "Burger King", client: "Burger King", city: "Vidyaranyapura", region: "South", location: "Vidyaranyapura" },
  { brand: "Burger King", client: "Burger King", city: "Ranchi", region: "East", location: "Ranchi" },
  { brand: "Burger King", client: "Burger King", city: "Patna", region: "East", location: "Patna" },
  { brand: "Burger King", client: "Burger King", city: "Gangtok", region: "East", location: "Gangtok" },
  { brand: "Burger King", client: "Burger King", city: "Ludhiana", region: "North", location: "Ludhiana" },
  { brand: "Burger King", client: "Burger King", city: "Lake Town", region: "East", location: "Lake Town" },
  { brand: "Burger King", client: "Burger King", city: "Dimapur", region: "East", location: "Dimapur" },
  { brand: "Burger King", client: "Burger King", city: "Itanagar", region: "East", location: "Itanagar" },
  { brand: "Burger King", client: "Burger King", city: "Khatauli", region: "North", location: "Khatauli" },

  // McDonald's
  { brand: "McDonald's", client: "McDonald's", city: "Manipal", region: "South", location: "Manipal" },
  { brand: "McDonald's", client: "McDonald's", city: "Kadugodi", region: "South", location: "Kadugodi" },

  // Impresario
  { brand: "Impresario", client: "Impresario", city: "Mumbai", region: "West", location: "Mumbai" },
  { brand: "Impresario", client: "Impresario", city: "Pune", region: "West", location: "Pune" },
  { brand: "Impresario", client: "Impresario", city: "New Delhi", region: "North", location: "New Delhi" },

  // Sapphire
  { brand: "Sapphire", client: "Sapphire", city: "Hyderabad", region: "South", location: "Hyderabad" },
  { brand: "Sapphire", client: "Sapphire", city: "Kanpur", region: "North", location: "Kanpur" },

  // Copper Chimney
  { brand: "Copper Chimney", client: "Copper Chimney", city: "Mumbai", region: "West", location: "Mumbai" },

  // Keer Hotels
  { brand: "Keer Hotels", client: "Keer Hotels", city: "Alfredo", region: "West", location: "Alfredo" },

  // DIY
  { brand: "DIY", client: "DIY", city: "Dwarka", region: "North", location: "Dwarka" },
  { brand: "DIY", client: "DIY", city: "Rajouri", region: "North", location: "Rajouri" },
  { brand: "DIY", client: "DIY", city: "Najafgarh", region: "North", location: "Najafgarh" },
  { brand: "DIY", client: "DIY", city: "Bhopal", region: "Central", location: "Bhopal" },
  { brand: "DIY", client: "DIY", city: "Mumbai", region: "West", location: "Mumbai" },
  { brand: "DIY", client: "DIY", city: "Indore", region: "West", location: "Indore" },
  { brand: "DIY", client: "DIY", city: "Pune", region: "West", location: "Pune" },
  { brand: "DIY", client: "DIY", city: "Zirakpur", region: "North", location: "Zirakpur" },
  { brand: "DIY", client: "DIY", city: "Bareilly", region: "North", location: "Bareilly" },
  { brand: "DIY", client: "DIY", city: "Ganganagar", region: "North", location: "Ganganagar" },
  { brand: "DIY", client: "DIY", city: "Bhuj", region: "West", location: "Bhuj" },
  { brand: "DIY", client: "DIY", city: "Nikol", region: "West", location: "Nikol" },
  { brand: "DIY", client: "DIY", city: "Patiala", region: "North", location: "Patiala" },
  { brand: "DIY", client: "DIY", city: "Bilaspur", region: "North", location: "Bilaspur" },
  { brand: "DIY", client: "DIY", city: "Hanumangarh", region: "North", location: "Hanumangarh" },
  { brand: "DIY", client: "DIY", city: "Jodhpur", region: "North", location: "Jodhpur" },
  { brand: "DIY", client: "DIY", city: "Ahmedabad", region: "West", location: "Ahmedabad" },
  { brand: "DIY", client: "DIY", city: "Akola", region: "West", location: "Akola" },
  { brand: "DIY", client: "DIY", city: "Noida", region: "North", location: "Noida" },
  { brand: "DIY", client: "DIY", city: "Rudrapur", region: "North", location: "Rudrapur" },
  { brand: "DIY", client: "DIY", city: "Nashik", region: "West", location: "Nashik" },
  { brand: "DIY", client: "DIY", city: "Jalgaon", region: "West", location: "Jalgaon" },
  { brand: "DIY", client: "DIY", city: "Amritsar", region: "North", location: "Amritsar" },
  { brand: "DIY", client: "DIY", city: "Nagpur", region: "West", location: "Nagpur" },

  // Talli Turmeric
  { brand: "Talli Turmeric", client: "Talli Turmeric", city: "Mumbai", region: "West", location: "Mumbai" },

  // Izumi
  { brand: "Izumi", client: "Izumi", city: "Mumbai", region: "West", location: "Mumbai" },

  // Taco Bell
  { brand: "Taco Bell", client: "Taco Bell", city: "Pune", region: "West", location: "Pune" },
  { brand: "Taco Bell", client: "Taco Bell", city: "Indirapuram", region: "North", location: "Indirapuram" },

  // Subway
  { brand: "Subway", client: "Subway", city: "Bangalore", region: "South", location: "Bangalore" },

  // Croma
  { brand: "Croma", client: "Croma", city: "Ankleshwar", region: "West", location: "Ankleshwar" },
  { brand: "Croma", client: "Croma", city: "Palakkad", region: "South", location: "Palakkad" },
  { brand: "Croma", client: "Croma", city: "Hathijan", region: "West", location: "Hathijan" },
  { brand: "Croma", client: "Croma", city: "Cuttack", region: "East", location: "Cuttack" },
  { brand: "Croma", client: "Croma", city: "Nana Chiloda", region: "West", location: "Nana Chiloda" },
  { brand: "Croma", client: "Croma", city: "Vadodara", region: "West", location: "Vadodara" },
  { brand: "Croma", client: "Croma", city: "Surat", region: "West", location: "Surat" },
  { brand: "Croma", client: "Croma", city: "Kochi", region: "South", location: "Kochi" },
  { brand: "Croma", client: "Croma", city: "Rajkot", region: "West", location: "Rajkot" },
  { brand: "Croma", client: "Croma", city: "Jamnagar", region: "West", location: "Jamnagar" },

  // LBF / YouMee
  { brand: "LBF / YouMee", client: "LBF", city: "Kanpur", region: "North", location: "Kanpur" },
  { brand: "LBF / YouMee", client: "LBF", city: "Mumbai", region: "West", location: "Mumbai" },

  // Amoeba
  { brand: "Amoeba", client: "Amoeba", city: "Mumbai", region: "West", location: "Mumbai" },
  { brand: "Amoeba", client: "Amoeba", city: "Bangalore", region: "South", location: "Bangalore" },

  // Pepe Jeans
  { brand: "Pepe Jeans", client: "Pepe Jeans", city: "Kolkata", region: "East", location: "Kolkata" },

  // Dr. Agarwal's
  { brand: "Dr. Agarwal's", client: "Dr. Agarwal's", city: "Virar", region: "West", location: "Virar" },
  { brand: "Dr. Agarwal's", client: "Dr. Agarwal's", city: "Hennur", region: "South", location: "Hennur" },
  { brand: "Dr. Agarwal's", client: "Dr. Agarwal's", city: "Lucknow", region: "North", location: "Lucknow" },
  { brand: "Dr. Agarwal's", client: "Dr. Agarwal's", city: "Hassan", region: "South", location: "Hassan" },

  // Timezone
  { brand: "Timezone", client: "Timezone", city: "Hubli", region: "South", location: "Hubli" },

  // CTR
  { brand: "CTR", client: "CTR", city: "Bangalore", region: "South", location: "Bangalore" },

  // Hazelnut Factory
  { brand: "Hazelnut Factory", client: "Hazelnut Factory", city: "Prayagraj", region: "North", location: "Prayagraj" },
  { brand: "Hazelnut Factory", client: "Hazelnut Factory", city: "Agra", region: "North", location: "Agra" },
  { brand: "Hazelnut Factory", client: "Hazelnut Factory", city: "Meerut", region: "North", location: "Meerut" }
];

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

// Basic city → coordinates mapping (approximate).
const cityCoordinates = {
  Pune: [18.5204, 73.8567],
  Baramati: [18.1517, 74.5777],
  Mumbai: [19.076, 72.8777],
  Surat: [21.1702, 72.8311],
  Goa: [15.2993, 74.124],
  Satara: [17.6914, 74.0003],
  "New Delhi": [28.6139, 77.209],
  Delhi: [28.6139, 77.209],
  Badlapur: [19.155, 73.265],
  Dehradun: [30.3165, 78.0322],
  Bhiwani: [28.793, 76.1391],
  Muzaffarnagar: [29.4727, 77.7085],
  Mandi: [31.708, 76.932],
  Gorakhpur: [26.7606, 83.3732],
  Gurgaon: [28.4595, 77.0266],
  Shahjahanpur: [27.8815, 79.9109],
  Bhilwara: [25.3463, 74.6364],
  Rishikesh: [30.0869, 78.2676],
  Kashipur: [29.213, 78.9567],
  Faridabad: [28.4089, 77.3178],
  Kanpur: [26.4499, 80.3319],
  Maliya: [23.0846, 70.7455],
  Jaipur: [26.9124, 75.7873],
  Ambala: [30.3752, 76.7821],
  Mugalsarai: [25.2837, 83.1198],
  Varanasi: [25.3176, 82.9739],
  Nagpur: [21.1458, 79.0882],
  Faridkot: [30.676, 74.7539],
  Lucknow: [26.8467, 80.9462],
  Ludhiana: [30.9009, 75.8573],
  Thane: [19.2183, 72.9781],
  Korum: [19.2183, 72.9781],
  Chandigarh: [30.7333, 76.7794],
  Chennai: [13.0827, 80.2707],
  Hyderabad: [17.385, 78.4867],
  Vashi: [19.0771, 73.0297],
  Hubli: [15.3647, 75.124],
  Pressto: [19.2183, 72.9781],
  Amritsar: [31.634, 74.8723],
  "Huda City": [28.4595, 77.0266],
  Saket: [28.5286, 77.2197],
  Dholakun: [28.6139, 77.209],
  Dwarka: [28.5921, 77.046],
  Noida: [28.5355, 77.391],
  Manesar: [28.357, 76.9383],
  Ghaziabad: [28.6692, 77.4538],
  Kolkata: [22.5726, 88.3639],
  Prayagraj: [25.4358, 81.8463],
  Guwahati: [26.1445, 91.7362],
  Siliguri: [26.7271, 88.3953],
  Mathura: [27.4924, 77.6737],
  Mangalore: [12.9141, 74.856],
  Hassan: [13.0072, 76.0962],
  Vidyaranyapura: [13.065, 77.551],
  Ranchi: [23.3441, 85.3096],
  Patna: [25.5941, 85.1376],
  Gangtok: [27.3389, 88.6065],
  "Lake Town": [22.606, 88.4023],
  Dimapur: [25.9117, 93.7266],
  Itanagar: [27.0844, 93.6053],
  Khatauli: [29.2784, 77.7323],
  Manipal: [13.352, 74.7923],
  Kadugodi: [12.996, 77.7586],
  "Hyderabad Sapphire": [17.385, 78.4867],
  "Kanpur Sapphire": [26.4499, 80.3319],
  Alfredo: [19.076, 72.8777],
  Rajouri: [28.649, 77.1177],
  Najafgarh: [28.609, 76.9798],
  Bhopal: [23.2599, 77.4126],
  Zirakpur: [30.6425, 76.8173],
  Bareilly: [28.367, 79.4304],
  Ganganagar: [29.9038, 73.8772],
  Bhuj: [23.2419, 69.6669],
  Nikol: [23.0275, 72.6625],
  Patiala: [30.3398, 76.3869],
  Bilaspur: [22.0797, 82.1391],
  Hanumangarh: [29.581, 74.3294],
  Jodhpur: [26.2389, 73.0243],
  Ahmedabad: [23.0225, 72.5714],
  Akola: [20.7002, 77.0082],
  Rudrapur: [28.987, 79.415],
  Nashik: [19.9975, 73.7898],
  Jalgaon: [21.0077, 75.5626],
  Palakkad: [10.7867, 76.6548],
  Hathijan: [22.955, 72.668],
  Cuttack: [20.4625, 85.8828],
  "Nana Chiloda": [23.073, 72.665],
  Vadodara: [22.3072, 73.1812],
  Kochi: [9.9312, 76.2673],
  Rajkot: [22.3039, 70.8022],
  Jamnagar: [22.4707, 70.0577],
  "Kanpur LBF": [26.4499, 80.3319],
  Virar: [19.4559, 72.8114],
  Hennur: [13.028, 77.642],
  Agra: [27.1767, 78.0081],
  Meerut: [28.9845, 77.7064],
  Bangalore: [12.9716, 77.5946]
};

// -----------------------------
// 3. Map initialisation
// -----------------------------

let map;
(function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement || typeof L === "undefined") return;

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
      color: "#000",
      weight: 2,
      fillColor: "#34c0c9",
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
})();

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
  if (resultsContainer) {
    initDirectoryFilters();
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

  startTypewriter();
  initScrollProgress();
  initActiveSectionHighlight();
});
