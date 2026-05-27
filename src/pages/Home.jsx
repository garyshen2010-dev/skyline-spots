import { Link } from "react-router-dom";
import "../App.css";
import { cities, spots } from "../data.js";

function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>SkylineSpots</h2>
        <div className="nav-links">
          <Link to="/explore">Explore</Link>
          <a href="#spots">Top Spots</a>
          <Link to="/submit">Submit</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tagline">CITY VIEWS • HIDDEN GEMS • SKYLINE SPOTS</p>
          <h1>Find the best skyline views around the world.</h1>
          <p className="hero-text">
            Discover rooftops, parks, bridges, overlooks, and hidden photo spots
            with the best city views.
          </p>
          <a href="#cities">
            <button>Start Exploring</button>
          </a>
        </div>
      </section>

      <section className="section" id="cities">
        <div className="section-header">
          <p className="section-label">EXPLORE</p>
          <h2>Featured Cities</h2>
        </div>

        <div className="card-grid">
          {cities.map((city) => (
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
      </section>

      <section className="section dark-section" id="spots">
        <div className="section-header">
          <p className="section-label">TOP PICKS</p>
          <h2>Top Skyline Spots</h2>
        </div>

        <div className="spot-list">
          {spots.map((spot) => (
            <div className="spot-card" key={spot.name}>
              <div>
                <p className="country">{spot.city}</p>
                <h3>{spot.name}</h3>
                <p>{spot.description}</p>

                <div className="tag-row">
                  {spot.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="spot-meta">
                <p>⭐ {spot.rating}</p>
                <p>{spot.bestTime}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section submit-section" id="submit">
        <h2>Know a great skyline spot?</h2>
        <p>
          Help other city explorers find rooftops, parks, bridges, and hidden
          gems with unforgettable views.
        </p>

        <Link to="/submit">
          <button>Submit a Spot</button>
        </Link>
      </section>

      <footer>
        <p>Built for city explorers, photographers, and skyline lovers.</p>
      </footer>
    </div>
  );
}

export default Home;