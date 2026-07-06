import { Link } from "react-router-dom";
import "../App.css";
import { cities, getSpotBadges, spots } from "../data.js";

function Home() {
  const submittedSpots =
    JSON.parse(localStorage.getItem("submittedSpots")) || [];

  const allSpots = [...submittedSpots, ...spots];

  const recentSpots = allSpots.slice(0, 4);
  const topSpots = [...allSpots]
    .sort((a, b) => (b.upvotes ?? 0) - (a.upvotes ?? 0))
    .slice(0, 5);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>SkylineSpots</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/community">Community</Link>
          <a href="#spots">Top Spots</a>
          <Link to="/submit">Submit</Link>
        </div>
      </nav>

      <section className="hero">
        <video className="hero-bg-video" autoPlay muted loop playsInline>
          <source src="/videos/skyline-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="tagline">CITY VIEWS • LOCAL SPOTS • HIDDEN ANGLES</p>

          <h1>Find the skyline spots locals actually use.</h1>

          <p className="hero-text">
            Discover specific rooftops, bridges, parks, parking garages, and
            street corners where people go to see the city skyline — not just
            tourist decks.
          </p>

          <div className="hero-stats">
            <span>10+ spots submitted</span>
            <span>5 cities</span>
            <span>Rooftops, bridges, parks, garages</span>
          </div>

          <div className="hero-actions">
            <a href="#cities">
              <button>Explore Local Spots</button>
            </a>

            <Link to="/submit">
              <button className="secondary-button">Submit a Hidden Spot</button>
            </Link>
          </div>
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
                  {[...new Set(city.tags)].map((tag) => (
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
            Real skyline viewpoints shared by users — from hidden parks and
            bridges to rooftops, overlooks, and lowkey photo angles.
          </p>
        </div>

        <div className="recent-grid image-recent-grid">
          {recentSpots.map((spot) => (
            <Link
              to={`/spot/${spot.name.toLowerCase().replaceAll(" ", "-")}`}
              className="recent-card image-recent-card"
              key={`${spot.city}-${spot.name}`}
            >
              <div
                className="recent-card-image"
                style={{ backgroundImage: `url(${spot.image})` }}
              ></div>

              <div className="recent-card-content">
                <p className="country">{spot.city}</p>
                <h3>{spot.name}</h3>
                <p>{spot.description}</p>

                <div className="mini-community-row">
                  <p>▲ {spot.upvotes ?? 0} upvotes</p>
                  <p>@{spot.submittedBy ?? "anonymous"}</p>
                </div>

                <div className="badge-row">
                  {getSpotBadges(spot).map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>

                <div className="tag-row">
                  {[...new Set(spot.tags || [])].slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="center-button">
          <Link to="/community">
            <button>View All Community Spots</button>
          </Link>
        </div>
      </section>

      <section className="section dark-section" id="spots">
        <div className="section-header">
          <p className="section-label">TOP PICKS</p>
          <h2>Top Skyline Spots</h2>
          <p>
            The highest-upvoted skyline viewpoints from the community, ranked by
            local interest.
          </p>
        </div>

        <div className="top-spot-list">
          {topSpots.map((spot, index) => (
            <Link
              to={`/spot/${spot.name.toLowerCase().replaceAll(" ", "-")}`}
              className="top-spot-card"
              key={`${spot.city}-${spot.name}`}
            >
              <div className="top-rank">#{index + 1}</div>

              <div
                className="top-spot-image"
                style={{ backgroundImage: `url(${spot.image})` }}
              ></div>

              <div className="top-spot-content">
                <p className="country">{spot.city}</p>
                <h3>{spot.name}</h3>
                <p>{spot.description}</p>

                <div className="tag-row">
                  {[...new Set(spot.tags || [])].slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="badge-row">
                  {getSpotBadges(spot).map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>
              </div>

              <div className="top-spot-meta">
                <p>⭐ {spot.rating}</p>
                <p>▲ {spot.upvotes ?? 0}</p>
                <p>{spot.bestTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section submit-section">
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
