import { useParams, Link } from "react-router-dom";
import { spots } from "../data.js";
import "../App.css";

function SpotPage() {
  const { spotName } = useParams();

  const spot = spots.find(
    (item) => item.name.toLowerCase().replaceAll(" ", "-") === spotName
  );

  if (!spot) {
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
          <h1>Spot not found</h1>
          <Link to="/explore">
            <button>Back to Explore</button>
          </Link>
        </section>
      </div>
    );
  }

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
        className="spot-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(8,15,20,.55), rgba(8,15,20,.95)), url(${spot.image})`,
        }}
      >
        <div>
          <p className="tagline">{spot.city}</p>
          <h1>{spot.name}</h1>
          <p>{spot.description}</p>

          <div className="tag-row">
            {spot.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section spot-info-section">
        <div className="spot-info-card">
          <h2>Spot Details</h2>

          <div className="detail-grid">
            <div>
              <p className="detail-label">Rating</p>
              <h3>⭐ {spot.rating}</h3>
            </div>

            <div>
              <p className="detail-label">Best Time</p>
              <h3>{spot.bestTime}</h3>
            </div>

            <div>
              <p className="detail-label">Type</p>
              <h3>{spot.type}</h3>
            </div>

            <div>
              <p className="detail-label">Access</p>
              <h3>{spot.access}</h3>
            </div>
          </div>

          <p className="spot-long-text">
            This spot is recommended for skyline viewing, photography, and city
            exploring. Future versions of SkylineSpots could include directions,
            parking notes, user reviews, safety tips, and submitted photos.
          </p>

          <Link to={`/city/${spot.city.toLowerCase().replaceAll(" ", "-")}`}>
            <button>Back to {spot.city}</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SpotPage;