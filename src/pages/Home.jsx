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
          <p className="tagline">CITY VIEWS • HIDDEN GEMS • LOCAL SPOTS</p>
          <h1>Discover hidden skyline spots shared by locals.</h1>
          <p className="hero-text">
            Find niche rooftops, parking garages, bridges, parks, and overlooked
            city-view spots submitted by people who know the area best.
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
          <p>
            Browse cities with community-submitted skyline views, hidden spots,
            rooftops, bridges, and local viewpoints.
          </p>
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

      <section className="section recent-section">
        <div className="section-header">
          <p className="section-label">COMMUNITY</p>
          <h2>Recent Community Submissions</h2>
          <p>
            Discover skyline spots shared by local users, from hidden parks to
            rooftops, bridges, overlooks, and lowkey city-view angles.
          </p>
        </div>

        <div className="recent-grid">
          {spots.slice(0, 4).map((spot) => (
            <Link
              to={`/spot/${spot.name.toLowerCase().replaceAll(" ", "-")}`}
              className="recent-card"
              key={spot.name}
            >
              <p className="country">{spot.city}</p>
              <h3>{spot.name}</h3>
              <p>{spot.description}</p>

              <div className="mini-community-row">
                <p>▲ {spot.upvotes ?? 0} upvotes</p>
                <p>@{spot.submittedBy ?? "anonymous"}</p>
              </div>

              <div className="tag-row">
                <span>{spot.hiddenLevel ?? "Community Spot"}</span>
                <span>{spot.type}</span>
                <span>{spot.bestTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="center-button">
          <Link to="/explore">
            <button>View All Community Spots</button>
          </Link>
        </div>
      </section>

      <section className="section dark-section" id="spots">
        <div className="section-header">
          <p className="section-label">TOP PICKS</p>
          <h2>Top Skyline Spots</h2>
          <p>
            A quick look at popular and community-recommended places to view the
            skyline.
          </p>
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
        <h2>Know a hidden skyline spot?</h2>
        <p>
          Share a specific address, local viewpoint, rooftop, bridge, parking
          garage, or underrated place where people can admire the city skyline.
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