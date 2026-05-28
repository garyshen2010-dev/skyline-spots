import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function SubmitSpot() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <h2>SkylineSpots</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/city/houston">Houston</Link>
        </div>
      </nav>

      <section className="section form-page">
        <div className="section-header">
          <p className="section-label">COMMUNITY SUBMISSION</p>
          <h2>Share a Hidden Skyline Spot</h2>
          <p>
            Found a lowkey rooftop, parking garage, bridge, park, street corner,
            or specific address with a great skyline view? Share it so others
            can discover it too.
          </p>
        </div>

        {submitted ? (
          <div className="success-card">
            <h3>Spot submitted!</h3>
            <p>
              Thanks for helping grow SkylineSpots. In a future version, this
              submission could be reviewed, posted publicly, and commented on by
              other users.
            </p>
            <Link to="/">
              <button>Back to Home</button>
            </Link>
          </div>
        ) : (
          <form className="submit-form" onSubmit={handleSubmit}>
            <label>
              Your Username
              <input type="text" placeholder="Example: skylinehunter21" required />
            </label>

            <label>
              City
              <input type="text" placeholder="Example: Houston" required />
            </label>

            <label>
              Spot Name
              <input
                type="text"
                placeholder="Example: Downtown garage view near Midtown"
                required
              />
            </label>

            <label>
              Specific Address or Location
              <input
                type="text"
                placeholder="Example: 123 Main St, rooftop level, or near a specific intersection"
                required
              />
            </label>

            <label>
              What kind of spot is it?
              <select required>
                <option>Parking Garage</option>
                <option>Rooftop</option>
                <option>Bridge</option>
                <option>Park</option>
                <option>Street Corner</option>
                <option>Overlook</option>
                <option>Restaurant/Patio</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              How hidden is this spot?
              <select required>
                <option>Very hidden</option>
                <option>Somewhat hidden</option>
                <option>Local favorite</option>
                <option>Popular but still worth it</option>
              </select>
            </label>

            <label>
              Best Time to Visit
              <select required>
                <option>Sunset</option>
                <option>Golden Hour</option>
                <option>Night</option>
                <option>Morning</option>
                <option>Anytime</option>
              </select>
            </label>

            <label>
              Access / Parking Notes
              <textarea
                placeholder="Explain parking, whether it is free or paid, how easy it is to access, or anything visitors should know."
                required
              />
            </label>

            <label>
              Why is this spot good?
              <textarea
                placeholder="Describe the skyline angle, photo opportunities, vibe, crowd level, and what makes it unique."
                required
              />
            </label>

            <button type="submit">Submit Hidden Spot</button>
          </form>
        )}
      </section>
    </div>
  );
}

export default SubmitSpot;