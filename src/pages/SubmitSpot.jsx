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
          <Link to="/city/houston">Houston</Link>
        </div>
      </nav>

      <section className="section form-page">
        <div className="section-header">
          <p className="section-label">SUBMIT</p>
          <h2>Share a Skyline Spot</h2>
          <p>
            Know a rooftop, park, bridge, overlook, or hidden photo spot with a
            great skyline view? Submit it here.
          </p>
        </div>

        {submitted ? (
          <div className="success-card">
            <h3>Spot submitted!</h3>
            <p>
              Thanks for helping SkylineSpots grow. In a future version, this
              submission could be reviewed and added to the city guide.
            </p>
            <Link to="/">
              <button>Back to Home</button>
            </Link>
          </div>
        ) : (
          <form className="submit-form" onSubmit={handleSubmit}>
            <label>
              City
              <input type="text" placeholder="Example: Houston" required />
            </label>

            <label>
              Spot Name
              <input
                type="text"
                placeholder="Example: Buffalo Bayou Park"
                required
              />
            </label>

            <label>
              Location or Address
              <input
                type="text"
                placeholder="Example: Near downtown Houston"
                required
              />
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
              Why is this spot good?
              <textarea
                placeholder="Describe the view, photo angle, vibe, parking, or anything helpful."
                required
              />
            </label>

            <button type="submit">Submit Spot</button>
          </form>
        )}
      </section>
    </div>
  );
}

export default SubmitSpot;