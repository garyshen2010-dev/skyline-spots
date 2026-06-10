export const cities = [
  {
    name: "New York City",
    country: "United States",
    description:
      "Iconic bridges, rooftops, parks, and world-famous city views.",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
    tags: ["Iconic", "Night Views", "Photography"],
  },
  {
    name: "Chicago",
    country: "United States",
    description:
      "Lakefront skyline views, riverwalk scenes, and architecture shots.",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f",
    tags: ["Lakefront", "Architecture", "Scenic"],
  },
  {
    name: "Los Angeles",
    country: "United States",
    description:
      "Hillside overlooks, city lights, and sunset views across the basin.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tags: ["Overlooks", "Sunset", "City Lights"],
  },
  {
    name: "London",
    country: "United Kingdom",
    description:
      "Historic bridges, riverside views, and modern skyline angles.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    tags: ["River", "Historic", "Modern"],
  },
  {
    name: "Tokyo",
    country: "Japan",
    description:
      "Neon streets, observation decks, and dense skyline views.",
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
    comments: [
      {
        username: "citylights",
        text: "Great if you want Tokyo Tower in the shot.",
      },
    ],
  },
];