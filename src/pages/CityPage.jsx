import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cities, getSpotBadges, spots } from "../data.js";
import "../App.css";

function CityPage() {
  const { cityName } = useParams();
  const [discoveryFilter, setDiscoveryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Most Upvoted");
  const submittedSpots = JSON.parse(localStorage.getItem("submittedSpots")) || [];
  const allSpots = [...submittedSpots, ...spots];
  const city =
    cities.find((c) => c.name.toLowerCase().replaceAll(" ", "-") === cityName) ||
    (() => {
      const s = submittedSpots.find(
        (x) => x.city.toLowerCase().replaceAll(" ", "-") === cityName
      );

      return s
        ? {
            name: s.city,
            country: "Community Submitted",
            description: `Community-submitted skyline spots in ${s.city}.`,
            image: s.image,
            tags: ["Community City", "User Submitted"],
          }
        : null;
    })();

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

  const citySpots = allSpots.filter(
    (s) => s.city.toLowerCase() === city.name.toLowerCase()
  );
  const filteredSpots = citySpots
    .filter(
      (s) =>
        (discoveryFilter === "All" || s.hiddenLevel === discoveryFilter) &&
        (typeFilter === "All" || s.type === typeFilter) &&
        (tagFilter === "All" || s.tags.some((t) => t === tagFilter))
    )
    .sort((a, b) =>
      sortOption === "Most Upvoted"
        ? (b.upvotes ?? 0) - (a.upvotes ?? 0)
        : sortOption === "Highest Rated"
          ? (b.rating ?? 0) - (a.rating ?? 0)
          : sortOption === "Newest"
            ? citySpots.indexOf(b) - citySpots.indexOf(a)
            : 0
    );

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
            {city.tags.map((t) => (
              <span key={t}>{t}</span>
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
          {[
            [
              "Discovery Level",
              ["All", "Hidden Gem", "Local Favorite", "Popular but worth it"],
              discoveryFilter,
              setDiscoveryFilter,
            ],
            [
              "Spot Type",
              ["All", "Park", "Rooftop", "Bridge", "Parking Garage", "Overlook"],
              typeFilter,
              setTypeFilter,
            ],
            [
              "Best For",
              ["All", "Sunset", "Night View", "Photography", "Free"],
              tagFilter,
              setTagFilter,
            ],
            [
              "Sort By",
              ["Most Upvoted", "Highest Rated", "Newest"],
              sortOption,
              setSortOption,
            ],
          ].map(([title, arr, val, set]) => (
            <div className="filter-group" key={title}>
              <h3>{title}</h3>
              <div className="filter-buttons">
                {arr.map((x) => (
                  <button
                    key={x}
                    className={val === x ? "active-filter" : ""}
                    onClick={() => set(x)}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="results-count">
          Showing {filteredSpots.length} of {citySpots.length} spots
        </p>

        <div className="city-spot-grid">
          {filteredSpots.map((spot) => (
            <div className="city-spot-card" key={`${spot.city}-${spot.name}`}>
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

                <div className="badge-row">
                  {getSpotBadges(spot).map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
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
