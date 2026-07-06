export const cities = [
  {
    name: "New York City",
    country: "United States",
    description:
      "Iconic bridges, waterfront parks, rooftops, and skyline views across Manhattan, Brooklyn, and Queens.",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
    tags: ["Iconic", "Night Views", "Photography"],
  },
  {
    name: "Chicago",
    country: "United States",
    description:
      "Lakefront skyline views, riverwalk scenes, and some of the strongest architecture angles in the country.",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f",
    tags: ["Lakefront", "Architecture", "Scenic"],
  },
  {
    name: "Los Angeles",
    country: "United States",
    description:
      "Hillside overlooks, sunset viewpoints, and city-light angles across the LA basin.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tags: ["Overlooks", "Sunset", "City Lights"],
  },
  {
    name: "London",
    country: "United Kingdom",
    description:
      "Historic bridges, riverside viewpoints, parks, and modern skyline angles along the Thames.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    tags: ["River", "Historic", "Modern"],
  },
  {
    name: "Tokyo",
    country: "Japan",
    description:
      "Neon streets, observation decks, dense skyline views, and night photography locations.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    tags: ["Neon", "Observation", "Night Views"],
  },
];

export const spots = [
  {
    name: "Brooklyn Bridge Park",
    city: "New York City",
    description:
      "A waterfront park with one of the most recognizable skyline views of Manhattan, especially at night.",
    rating: 4.9,
    bestTime: "Night",
    type: "Waterfront Park",
    access: "Free",
    address: "Brooklyn Bridge Park, Brooklyn, NY",
    hiddenLevel: "Popular but worth it",
    submittedBy: "nycviews",
    upvotes: 58,
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
    tags: ["Iconic", "Night View", "Waterfront"],
    badges: ["Free", "Photo Friendly", "Night View"],
    photoTip:
      "Stand near the waterfront facing Manhattan. Use the bridge and skyline together for a stronger composition.",
    accessTip:
      "Public park access. Walking or rideshare is easier than parking during busy hours.",
    parkingTip:
      "Street parking can be limited nearby, especially during sunset and weekends.",
    crowdLevel: "Medium",
    verifiedCount: 7,
    photoCount: 14,
    lastUpdated: "Recently updated",
    trustLabel: "Community Verified",
    mapQuery: "Brooklyn Bridge Park Brooklyn NY",
    comments: [
      {
        username: "citysnapper",
        text: "One of the best skyline views in New York. Night shots look amazing here.",
      },
    ],
  },
  {
    name: "Gantry Plaza State Park",
    city: "New York City",
    description:
      "A Queens waterfront spot with strong Midtown Manhattan views and a quieter local feel.",
    rating: 4.7,
    bestTime: "Golden Hour",
    type: "Waterfront Park",
    access: "Free",
    address: "Gantry Plaza State Park, Long Island City, NY",
    hiddenLevel: "Local Favorite",
    submittedBy: "queensangles",
    upvotes: 31,
    image: "https://images.unsplash.com/photo-1522083165195-3424ed129620",
    tags: ["Waterfront", "Golden Hour", "Local Favorite"],
    badges: ["Free", "Golden Hour", "Local Favorite"],
    photoTip:
      "Frame Midtown Manhattan from the piers. Golden hour gives the buildings a warmer look.",
    accessTip:
      "Easy public access from Long Island City. Good walking paths and open space.",
    parkingTip:
      "Street parking depends on time of day. Subway access is usually easier.",
    crowdLevel: "Low to Medium",
    verifiedCount: 4,
    photoCount: 8,
    lastUpdated: "Recently updated",
    trustLabel: "Community Verified",
    mapQuery: "Gantry Plaza State Park Long Island City NY",
    comments: [
      {
        username: "skylinehunter",
        text: "Less crowded than the Brooklyn spots and still has a really clean skyline angle.",
      },
    ],
  },

  {
    name: "Adler Planetarium",
    city: "Chicago",
    description:
      "A lakefront view with one of the best full-city skyline angles in Chicago.",
    rating: 4.9,
    bestTime: "Golden Hour",
    type: "Lakefront",
    access: "Free",
    address: "Adler Planetarium, Chicago, IL",
    hiddenLevel: "Popular but worth it",
    submittedBy: "chicagolens",
    upvotes: 47,
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f",
    tags: ["Lakefront", "Scenic", "Photography"],
    badges: ["Lakefront", "Photo Friendly", "Golden Hour"],
    photoTip:
      "Shoot from the lakefront path facing the skyline. The curve of the shoreline helps frame the city.",
    accessTip:
      "Public lakefront access. Best reached by walking, biking, or rideshare on busy days.",
    parkingTip:
      "Paid parking may be available nearby, but it can fill quickly during events.",
    crowdLevel: "Medium",
    verifiedCount: 6,
    photoCount: 11,
    lastUpdated: "Recently updated",
    trustLabel: "Community Verified",
    mapQuery: "Adler Planetarium Chicago IL",
    comments: [
      {
        username: "windycityviews",
        text: "Classic Chicago skyline angle. Best when the lake is calm.",
      },
    ],
  },
  {
    name: "Milton Lee Olive Park",
    city: "Chicago",
    description:
      "A quieter park near Navy Pier with strong lakefront skyline views and a calmer atmosphere.",
    rating: 4.6,
    bestTime: "Sunset",
    type: "Park",
    access: "Free",
    address: "Milton Lee Olive Park, Chicago, IL",
    hiddenLevel: "Hidden Gem",
    submittedBy: "lakefrontlocal",
    upvotes: 22,
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f",
    tags: ["Hidden Gem", "Lakefront", "Sunset"],
    badges: ["Hidden Gem", "Free", "Sunset"],
    photoTip:
      "Use the trees and lakefront path as foreground elements with the skyline behind them.",
    accessTip:
      "Public park access. It feels more relaxed than the busier Navy Pier areas.",
    parkingTip:
      "Nearby parking may cost money. Walking from nearby attractions is often easier.",
    crowdLevel: "Low",
    verifiedCount: 3,
    photoCount: 5,
    lastUpdated: "Recently updated",
    trustLabel: "Locally Recommended",
    mapQuery: "Milton Lee Olive Park Chicago IL",
    comments: [
      {
        username: "urbanwalker",
        text: "Feels more lowkey than the main tourist spots but still has a great skyline view.",
      },
    ],
  },

  {
    name: "Griffith Observatory",
    city: "Los Angeles",
    description:
      "A hillside overlook with wide views of Los Angeles, especially strong during sunset and night.",
    rating: 4.8,
    bestTime: "Sunset",
    type: "Overlook",
    access: "Free",
    address: "Griffith Observatory, Los Angeles, CA",
    hiddenLevel: "Popular but worth it",
    submittedBy: "laoverlooks",
    upvotes: 44,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tags: ["Overlook", "Sunset", "City Lights"],
    badges: ["Overlook", "Sunset", "City Lights"],
    photoTip:
      "Use a wider lens to capture both the city grid and the sky. Sunset into blue hour is the strongest window.",
    accessTip:
      "Free to visit, but traffic and crowds can be heavy around sunset.",
    parkingTip:
      "Parking near the observatory may be limited. Shuttle or rideshare can be easier.",
    crowdLevel: "High",
    verifiedCount: 8,
    photoCount: 16,
    lastUpdated: "Recently updated",
    trustLabel: "Community Verified",
    mapQuery: "Griffith Observatory Los Angeles CA",
    comments: [
      {
        username: "californiashots",
        text: "Very popular, but the city view is still worth it.",
      },
    ],
  },
  {
    name: "Ascot Hills Park",
    city: "Los Angeles",
    description:
      "A less crowded hillside park with wide city views and a more local, hidden feel.",
    rating: 4.5,
    bestTime: "Golden Hour",
    type: "Park",
    access: "Free",
    address: "Ascot Hills Park, Los Angeles, CA",
    hiddenLevel: "Hidden Gem",
    submittedBy: "hiddenla",
    upvotes: 19,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tags: ["Hidden Gem", "Hillside", "Golden Hour"],
    badges: ["Hidden Gem", "Low Crowd", "Golden Hour"],
    photoTip:
      "Walk up to the higher trails for a wider view. Golden hour helps separate the skyline from the hills.",
    accessTip:
      "Public park access. Wear comfortable shoes because the best views require walking uphill.",
    parkingTip:
      "Street parking is usually easier than at more famous LA viewpoints, but still check signs.",
    crowdLevel: "Low",
    verifiedCount: 2,
    photoCount: 4,
    lastUpdated: "Recently updated",
    trustLabel: "Locally Recommended",
    mapQuery: "Ascot Hills Park Los Angeles CA",
    comments: [
      {
        username: "localspots",
        text: "Good if you want a more peaceful view without the huge crowds.",
      },
    ],
  },

  {
    name: "Primrose Hill",
    city: "London",
    description:
      "A classic elevated park view with a clean angle of the London skyline.",
    rating: 4.7,
    bestTime: "Sunset",
    type: "Park",
    access: "Free",
    address: "Primrose Hill, London, UK",
    hiddenLevel: "Local Favorite",
    submittedBy: "londonviews",
    upvotes: 36,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    tags: ["Park", "Sunset", "Skyline"],
    badges: ["Free", "Park View", "Sunset"],
    photoTip:
      "Shoot from the top of the hill facing central London. Use people sitting on the hill as scale if you want a lifestyle shot.",
    accessTip:
      "Public park access. Best visited when the weather is clear.",
    parkingTip:
      "Public transit is usually easier than driving in this area.",
    crowdLevel: "Medium",
    verifiedCount: 5,
    photoCount: 9,
    lastUpdated: "Recently updated",
    trustLabel: "Community Verified",
    mapQuery: "Primrose Hill London UK",
    comments: [
      {
        username: "citywalker",
        text: "Great skyline view and a calm place to sit for a while.",
      },
    ],
  },
  {
    name: "Waterloo Bridge",
    city: "London",
    description:
      "A bridge view with strong angles toward central London and the River Thames.",
    rating: 4.6,
    bestTime: "Night",
    type: "Bridge",
    access: "Free",
    address: "Waterloo Bridge, London, UK",
    hiddenLevel: "Popular but worth it",
    submittedBy: "thamesangles",
    upvotes: 28,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    tags: ["Bridge", "River", "Night View"],
    badges: ["Bridge", "Night View", "Free"],
    photoTip:
      "Use the Thames and bridge railings to lead the eye toward the skyline and lights.",
    accessTip:
      "Public bridge access. Be aware of pedestrians and avoid blocking the walkway.",
    parkingTip:
      "Transit or walking is recommended. Central London parking is difficult.",
    crowdLevel: "Medium",
    verifiedCount: 4,
    photoCount: 7,
    lastUpdated: "Recently updated",
    trustLabel: "Community Verified",
    mapQuery: "Waterloo Bridge London UK",
    comments: [
      {
        username: "nightshots",
        text: "The lights over the Thames make this spot better at night.",
      },
    ],
  },

  {
    name: "Tokyo Metropolitan Government Building",
    city: "Tokyo",
    description:
      "An observation deck with wide views over Tokyo and strong city density shots.",
    rating: 4.8,
    bestTime: "Night",
    type: "Observation Deck",
    access: "Free",
    address: "Tokyo Metropolitan Government Building, Shinjuku, Tokyo",
    hiddenLevel: "Popular but worth it",
    submittedBy: "tokyoviews",
    upvotes: 41,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    tags: ["Observation", "Night View", "Free"],
    badges: ["Free", "Observation Deck", "Night View"],
    photoTip:
      "Night is best for dense city lights. Try to avoid window reflections by shooting close to the glass.",
    accessTip:
      "Free observation deck access, but hours can vary. Check before visiting.",
    parkingTip:
      "Train access is recommended because the area is dense and busy.",
    crowdLevel: "Medium",
    verifiedCount: 6,
    photoCount: 13,
    lastUpdated: "Recently updated",
    trustLabel: "Community Verified",
    mapQuery: "Tokyo Metropolitan Government Building Shinjuku Tokyo",
    comments: [
      {
        username: "neoncity",
        text: "Really good free observation deck. Night is the best time.",
      },
    ],
  },
  {
    name: "Roppongi Hills Sky Deck",
    city: "Tokyo",
    description:
      "A high city viewpoint with strong Tokyo Tower angles and dense skyline views.",
    rating: 4.7,
    bestTime: "Golden Hour",
    type: "Observation Deck",
    access: "Paid",
    address: "Roppongi Hills, Tokyo, Japan",
    hiddenLevel: "Local Favorite",
    submittedBy: "tokyolens",
    upvotes: 33,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    tags: ["Observation", "Tokyo Tower", "Golden Hour"],
    badges: ["Tokyo Tower", "Golden Hour", "Observation"],
    photoTip:
      "Frame Tokyo Tower as the main subject with the surrounding skyline filling the background.",
    accessTip:
      "Paid access. Go before sunset so you can catch daylight, golden hour, and night views.",
    parkingTip:
      "Public transit is easier than driving. Roppongi is busy at night.",
    crowdLevel: "Medium to High",
    verifiedCount: 5,
    photoCount: 10,
    lastUpdated: "Recently updated",
    trustLabel: "Community Verified",
    mapQuery: "Roppongi Hills Sky Deck Tokyo Japan",
    comments: [
      {
        username: "citylights",
        text: "Great if you want Tokyo Tower in the shot.",
      },
    ],
  },
];

export function getSpotBadges(spot) {
  const tags = spot.tags || [];
  const badges = [];

  if (spot.bestTime === "Sunset") badges.push("Best at sunset");
  if (spot.access === "Free") badges.push("Free");
  if (tags.includes("Photography") || spot.badges?.includes("Photo Friendly")) {
    badges.push("Photo spot");
  }
  if (spot.hiddenLevel === "Hidden Gem") badges.push("Hidden gem");
  if (["Park", "Bridge", "Waterfront Park", "Lakefront"].includes(spot.type)) {
    badges.push("Walkable");
  }

  return [...new Set([...badges, ...(spot.badges || [])])].slice(0, 4);
}
