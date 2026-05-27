import { useState } from "react";
import { Link } from "react-router-dom";
import { cities } from "../data.js";
import "../App.css";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = cities.filter((city) => {
    const searchText = `${city.name} ${city.country} ${city.description} ${city.tags.join(
      " "
    )}`.toLowerCase();

    return searchText.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      <nav className="navbar">
        <h2>SkylineSpots</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/submit">Submit</Link>
        </div>
      </nav>

      <section className="section explore-page">
        <div className="section-header">
          <p className="section-label">EXPLORE</p>
          <h2>Explore Cities</h2>
          <p>
            Browse cities with skyline spots, hidden views, rooftops, parks, and
            photo-worthy overlooks.
          </p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search cities, tags, or view types..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <p className="results-count">
          Showing {filteredCities.length} of {cities.length} cities
        </p>

        <div className="card-grid">
          {filteredCities.map((city) => (
            <Link
              to={`/city/${city.name.toLowerCase().replaceAll(" ", "-")}`}
              className="city-card"
              key={city.name}
            >
              <div
                className="city-image"
                style={{ backgroundImage: `url(${city.image})` }}
              ></div>

              <div className="city-content">
                <p className="country">{city.country}</p>
                <h3>{city.name}</h3>
                <p>{city.description}</p>

                <div className="tag-row">
                  {city.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="empty-state">
            <h3>No cities found</h3>
            <p>Try searching for something like “sunset,” “night,” or “Houston.”</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Explore;