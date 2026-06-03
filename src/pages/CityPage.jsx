import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cities, spots } from "../data.js";
import "../App.css";

function CityPage() {
  const { cityName } = useParams();

  const [discoveryFilter, setDiscoveryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Most Upvoted");

  const city = cities.find(
    (item) => item.name.toLowerCase().replaceAll(" ", "-") === cityName
  );

  if (!city) {
    return (
      <div className="app">
        <nav className="navbar">
          <h2>SkylineSpots</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
          </div>
        </nav>

        <section className="section">
          <h1>City not found</h1>
          <Link to="/explore">
            <button>Back to Explore</button>
          </Link>
        </section>
      </div>
    );
  }

  const citySpots = spots.filter((spot) => spot.city === city.name);

  const filteredSpots = citySpots
    .filter((spot) => {
      const matchesDiscovery =
        discoveryFilter === "All" || spot.hiddenLevel === discoveryFilter;

      const matchesType = typeFilter === "All" || spot.type === typeFilter;

      const matchesTag =
        tagFilter === "All" || spot.tags.some((tag) => tag === tagFilter);

      return matchesDiscovery && matchesType && matchesTag;
    })
    .sort((a, b) => {
      if (sortOption === "Most Upvoted") {
        return (b.upvotes ?? 0) - (a.upvotes ?? 0);
      }

      if (sortOption === "Highest Rated") {
        return (b.rating ?? 0) - (a.rating ?? 0);
      }

      if (sortOption === "Newest") {
        return citySpots.indexOf(b) - citySpots.indexOf(a);
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
          <Link to="/submit">Submit</Link>
        </div>
      </nav>

      <section
        className="city-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(8,15,20,.55), rgba(8,15,20,.95)), url(${city.image})`,
        }}
      >
        <div>
          <p className="tagline">{city.country}</p>
          <h1>{city.name}</h1>
          <p>{city.description}</p>

          <div className="tag-row">
            {city.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="spots">
        <div className="section-header">
          <p className="section-label">COMMUNITY CITY GUIDE</p>
          <h2>Skyline Spots in {city.name}</h2>
          <p>
            Browse user-submitted parks, rooftops, bridges, parking garages, and
            hidden local viewpoints.
          </p>
        </div>

        <div className="filter-panel">
          <div className="filter-group">
            <h3>Discovery Level</h3>
            <div className="filter-buttons">
              {["All", "Hidden Gem", "Local Favorite", "Popular but worth it"].map(
                (filter) => (
                  <button
                    key={filter}
                    className={discoveryFilter === filter ? "active-filter" : ""}
                    onClick={() => setDiscoveryFilter(filter)}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="filter-group">
            <h3>Spot Type</h3>
            <div className="filter-buttons">
              {["All", "Park", "Rooftop", "Bridge", "Parking Garage", "Overlook"].map(
                (filter) => (
                  <button
                    key={filter}
                    className={typeFilter === filter ? "active-filter" : ""}
                    onClick={() => setTypeFilter(filter)}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="filter-group">
            <h3>Best For</h3>
            <div className="filter-buttons">
              {["All", "Sunset", "Night View", "Photography", "Free"].map(
                (filter) => (
                  <button
                    key={filter}
                    className={tagFilter === filter ? "active-filter" : ""}
                    onClick={() => setTagFilter(filter)}
                  >
                    {filter}
                  </button>
                )
              )}
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
          Showing {filteredSpots.length} of {citySpots.length} spots
        </p>

        <div className="city-spot-grid">
          {filteredSpots.map((spot) => (
            <div className="city-spot-card" key={spot.name}>
              <div
                className="spot-image"
                style={{ backgroundImage: `url(${spot.image})` }}
              ></div>

              <div className="city-spot-content">
                <div className="spot-title-row">
                  <div>
                    <p className="country">{spot.city}</p>
                    <h3>{spot.name}</h3>
                  </div>

                  <div className="spot-rating">
                    <p>⭐ {spot.rating}</p>
                    <p>{spot.bestTime}</p>
                  </div>
                </div>

                <p>{spot.description}</p>

                <div className="spot-details">
                  <p>
                    <strong>Type:</strong> {spot.type}
                  </p>
                  <p>
                    <strong>Access:</strong> {spot.access}
                  </p>
                  <p>
                    <strong>Hidden:</strong> {spot.hiddenLevel ?? "Not listed"}
                  </p>
                </div>

                <div className="mini-community-row">
                  <p>▲ {spot.upvotes ?? 0} upvotes</p>
                  <p>Submitted by @{spot.submittedBy ?? "anonymous"}</p>
                </div>

                <div className="tag-row">
                  {spot.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link to={`/spot/${spot.name.toLowerCase().replaceAll(" ", "-")}`}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredSpots.length === 0 && (
          <div className="empty-state">
            <h3>No spots found</h3>
            <p>Try changing one of the filters above.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default CityPage;