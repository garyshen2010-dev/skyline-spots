import { useParams, Link } from "react-router-dom";
import { cities, spots } from "../data.js";
import "../App.css";

function CityPage() {
  const { cityName } = useParams();

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
          <p className="section-label">CITY GUIDE</p>
          <h2>Best Skyline Spots in {city.name}</h2>
          <p>
            Explore parks, rooftops, bridges, and overlooks with strong skyline
            views.
          </p>
        </div>

        <div className="city-spot-grid">
          {citySpots.map((spot) => (
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
                </div>

                <div className="tag-row">
                  {spot.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link to={`/spot/${spot.name.toLowerCase().replaceAll(" ", "-")}`}>
  <                 button>View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CityPage;