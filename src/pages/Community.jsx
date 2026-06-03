import { useState } from "react";
import { Link } from "react-router-dom";
import { spots } from "../data.js";
import "../App.css";

function Community() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState("All");
  const [discoveryFilter, setDiscoveryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Most Upvoted");

  const cities = ["All", ...new Set(spots.map((spot) => spot.city))];

  const discoveryLevels = [
    "All",
    "Hidden Gem",
    "Local Favorite",
    "Popular but worth it",
    "Community Spot",
  ];

  const spotTypes = [
    "All",
    "Park",
    "Rooftop",
    "Bridge",
    "Parking Garage",
    "Overlook",
    "Waterfront Park",
    "Observation Deck",
    "Street View",
    "Elevated Park",
  ];

  const filteredSpots = spots
    .filter((spot) => {
      const searchText = `
        ${spot.name}
        ${spot.city}
        ${spot.description}
        ${spot.type}
        ${spot.hiddenLevel}
        ${spot.tags.join(" ")}
        ${spot.submittedBy}
      `.toLowerCase();

      const matchesSearch = searchText.includes(searchTerm.toLowerCase());
      const matchesCity = cityFilter === "All" || spot.city === cityFilter;
      const matchesDiscovery =
        discoveryFilter === "All" ||
        (spot.hiddenLevel ?? "Community Spot") === discoveryFilter;
      const matchesType = typeFilter === "All" || spot.type === typeFilter;

      return matchesSearch && matchesCity && matchesDiscovery && matchesType;
    })
    .sort((a, b) => {
      if (sortOption === "Most Upvoted") {
        return (b.upvotes ?? 0) - (a.upvotes ?? 0);
      }

      if (sortOption === "Highest Rated") {
        return (b.rating ?? 0) - (a.rating ?? 0);
      }

      if (sortOption === "Newest") {
        return spots.indexOf(b) - spots.indexOf(a);
      }

      return 0;
    });

  return (
    <div className="app">
      <nav className="navbar">
        <h2>SkylineSpots</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/community">Community</Link>
          <Link to="/submit">Submit</Link>
        </div>
      </nav>

      <section className="section community-page">
        <div className="section-header">
          <p className="section-label">COMMUNITY FEED</p>
          <h2>Community Skyline Spots</h2>
          <p>
            Browse skyline spots submitted by users across different cities.
            Find hidden gems, local favorites, rooftops, parking garages,
            bridges, and underrated city-view angles.
          </p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search spots, cities, tags, or users..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="filter-panel">
          <div className="filter-group">
            <h3>City</h3>
            <div className="filter-buttons">
              {cities.map((city) => (
                <button
                  key={city}
                  className={cityFilter === city ? "active-filter" : ""}
                  onClick={() => setCityFilter(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Discovery Level</h3>
            <div className="filter-buttons">
              {discoveryLevels.map((level) => (
                <button
                  key={level}
                  className={discoveryFilter === level ? "active-filter" : ""}
                  onClick={() => setDiscoveryFilter(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Spot Type</h3>
            <div className="filter-buttons">
              {spotTypes.map((type) => (
                <button
                  key={type}
                  className={typeFilter === type ? "active-filter" : ""}
                  onClick={() => setTypeFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Sort By</h3>
            <div className="filter-buttons">
              {["Most Upvoted", "Highest Rated", "Newest"].map((option) => (
                <button
                  key={option}
                  className={sortOption === option ? "active-filter" : ""}
                  onClick={() => setSortOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="results-count">
          Showing {filteredSpots.length} of {spots.length} community spots
        </p>

        <div className="community-feed">
          {filteredSpots.map((spot) => (
            <Link
              to={`/spot/${spot.name.toLowerCase().replaceAll(" ", "-")}`}
              className="community-feed-card"
              key={spot.name}
            >
              <div
                className="community-feed-image"
                style={{ backgroundImage: `url(${spot.image})` }}
              ></div>

              <div className="community-feed-content">
                <div className="community-feed-top">
                  <div>
                    <p className="country">{spot.city}</p>
                    <h3>{spot.name}</h3>
                  </div>

                  <div className="feed-upvotes">
                    <p>▲</p>
                    <h4>{spot.upvotes ?? 0}</h4>
                  </div>
                </div>

                <p>{spot.description}</p>

                <div className="mini-community-row">
                  <p>Submitted by @{spot.submittedBy ?? "anonymous"}</p>
                  <p>{spot.hiddenLevel ?? "Community Spot"}</p>
                </div>

                <div className="tag-row">
                  <span>{spot.type}</span>
                  <span>{spot.bestTime}</span>
                  <span>{spot.access}</span>
                  {spot.tags.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredSpots.length === 0 && (
          <div className="empty-state">
            <h3>No spots found</h3>
            <p>Try changing your search or filters.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Community;