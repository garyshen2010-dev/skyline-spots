import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import { spots } from "../data.js";

function SpotPage() {
  const { spotName } = useParams();

  const submittedSpots =
    JSON.parse(localStorage.getItem("submittedSpots")) || [];

  const allSpots = [...submittedSpots, ...spots];

  const spot = allSpots.find(
    (item) => item.name.toLowerCase().replaceAll(" ", "-") === spotName
  );

  const savedSpots = JSON.parse(localStorage.getItem("savedSpots")) || [];

  const [upvoted, setUpvoted] = useState(false);
  const [isSaved, setIsSaved] = useState(
    spot ? savedSpots.includes(spot.name) : false
  );
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(spot?.comments || []);

  if (!spot) {
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

        <section className="section">
          <div className="empty-state">
            <h3>Spot not found</h3>
            <p>
              This skyline spot does not exist yet, or it may have been removed.
            </p>
            <Link to="/community">
              <button>Back to Community</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const currentUpvotes = upvoted ? (spot.upvotes ?? 0) + 1 : spot.upvotes ?? 0;
  const uniqueTags = [...new Set(spot.tags || [])];
  const uniqueBadges = [...new Set(spot.badges || [])];

  const nearbySpots = allSpots
    .filter((item) => item.city === spot.city && item.name !== spot.name)
    .slice(0, 3);

  const mapSearch = encodeURIComponent(spot.mapQuery || spot.address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapSearch}`;

  function handleUpvote() {
    setUpvoted(!upvoted);
  }

  function handleSaveSpot() {
    const currentSaved = JSON.parse(localStorage.getItem("savedSpots")) || [];

    if (currentSaved.includes(spot.name)) {
      const updatedSaved = currentSaved.filter((name) => name !== spot.name);
      localStorage.setItem("savedSpots", JSON.stringify(updatedSaved));
      setIsSaved(false);
    } else {
      const updatedSaved = [...currentSaved, spot.name];
      localStorage.setItem("savedSpots", JSON.stringify(updatedSaved));
      setIsSaved(true);
    }
  }

  function handleAddComment(event) {
    event.preventDefault();

    if (!commentName.trim() || !commentText.trim()) {
      return;
    }

    const newComment = {
      username: commentName.trim(),
      text: commentText.trim(),
    };

    setComments([newComment, ...comments]);
    setCommentName("");
    setCommentText("");
  }

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
        className="spot-detail-hero"
        style={{ backgroundImage: `url(${spot.image})` }}
      >
        <div className="spot-detail-overlay"></div>

        <div className="spot-detail-hero-content">
          <Link
            to={`/city/${spot.city.toLowerCase().replaceAll(" ", "-")}`}
            className="back-link"
          >
            ← Back to {spot.city}
          </Link>

          <p className="tagline">
            {spot.city} • {spot.hiddenLevel}
          </p>

          <h1>{spot.name}</h1>

          <p className="spot-detail-description">{spot.description}</p>

          <div className="tag-row">
            {uniqueTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section spot-detail-section">
        <div className="spot-detail-layout">
          <main className="spot-main-card">
            <div className="spot-section-title">
              <p className="section-label">LOCATION DETAILS</p>
              <h2>About this skyline spot</h2>
            </div>

            <p className="spot-long-text">
              {spot.description} This spot is useful because it gives visitors a
              specific place to go instead of a vague city recommendation.
            </p>

            <div className="badge-row">
              {uniqueBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <div className="detail-grid">
              <div>
                <p className="detail-label">City</p>
                <h3>{spot.city}</h3>
              </div>

              <div>
                <p className="detail-label">Best Time</p>
                <h3>{spot.bestTime}</h3>
              </div>

              <div>
                <p className="detail-label">Spot Type</p>
                <h3>{spot.type}</h3>
              </div>

              <div>
                <p className="detail-label">Access</p>
                <h3>{spot.access}</h3>
              </div>

              <div>
                <p className="detail-label">Rating</p>
                <h3>⭐ {spot.rating}</h3>
              </div>

              <div>
                <p className="detail-label">Crowd Level</p>
                <h3>{spot.crowdLevel || "Unknown"}</h3>
              </div>

              <div>
                <p className="detail-label">Discovery Level</p>
                <h3>{spot.hiddenLevel}</h3>
              </div>

              <div>
                <p className="detail-label">Submitted By</p>
                <h3>@{spot.submittedBy || "anonymous"}</h3>
              </div>

              <div className="wide-detail">
                <p className="detail-label">Address / Location</p>
                <h3>{spot.address}</h3>
              </div>
            </div>

            <div className="tip-grid">
              <div className="tip-card">
                <p className="detail-label">Best Photo Angle</p>
                <h3>Camera Tip</h3>
                <p>{spot.photoTip || "Look for a clear view of the skyline."}</p>
              </div>

              <div className="tip-card">
                <p className="detail-label">Access Tip</p>
                <h3>Before You Go</h3>
                <p>{spot.accessTip || "Check access rules before visiting."}</p>
              </div>

              <div className="tip-card">
                <p className="detail-label">Parking Tip</p>
                <h3>Getting There</h3>
                <p>{spot.parkingTip || "Parking details may vary by time."}</p>
              </div>
            </div>

            <div className="map-card">
              <div>
                <p className="section-label">MAP PREVIEW</p>
                <h2>{spot.name}</h2>
                <p>{spot.address}</p>
              </div>

              <div className="fake-map">
                <div className="map-pin">●</div>
                <p>{spot.city}</p>
              </div>

              <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                <button>Open in Google Maps</button>
              </a>
            </div>

            <div className="comments-section">
              <div className="spot-section-title">
                <p className="section-label">COMMUNITY</p>
                <h2>Comments</h2>
              </div>

              <form className="comment-form" onSubmit={handleAddComment}>
                <input
                  type="text"
                  placeholder="Your username"
                  value={commentName}
                  onChange={(event) => setCommentName(event.target.value)}
                />

                <textarea
                  placeholder="Share a tip, warning, or best photo angle..."
                  value={commentText}
                  onChange={(event) => setCommentText(event.target.value)}
                ></textarea>

                <button type="submit">Add Comment</button>
              </form>

              <div className="comments-list">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <div className="comment-card" key={index}>
                      <h4>@{comment.username}</h4>
                      <p>{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <div className="comment-card">
                    <h4>No comments yet</h4>
                    <p>Be the first person to leave a tip for this spot.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="nearby-section">
              <div className="spot-section-title">
                <p className="section-label">NEARBY</p>
                <h2>More spots in {spot.city}</h2>
              </div>

              {nearbySpots.length > 0 ? (
                <div className="nearby-grid">
                  {nearbySpots.map((nearby) => (
                    <Link
                      to={`/spot/${nearby.name
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                      className="nearby-card"
                      key={nearby.name}
                    >
                      <div
                        className="nearby-image"
                        style={{ backgroundImage: `url(${nearby.image})` }}
                      ></div>
                      <div>
                        <h3>{nearby.name}</h3>
                        <p>{nearby.hiddenLevel}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="empty-state mini-empty-state">
                  <h3>No nearby spots yet</h3>
                  <p>Know another skyline view in {spot.city}?</p>
                  <Link to="/submit">
                    <button>Submit a Spot</button>
                  </Link>
                </div>
              )}
            </div>
          </main>

          <aside className="spot-side-card">
            <button
              className={upvoted ? "upvote-box upvoted" : "upvote-box"}
              onClick={handleUpvote}
            >
              <p>▲ Upvote</p>
              <h3>{currentUpvotes}</h3>
              <span>{upvoted ? "Upvoted" : "Recommend this spot"}</span>
            </button>

            <button
              className={isSaved ? "save-button saved" : "save-button"}
              onClick={handleSaveSpot}
            >
              {isSaved ? "Saved Spot ✓" : "♡ Save Spot"}
            </button>

            <div className="side-info-block trust-card">
              <p className="detail-label">Trust Score</p>
              <h3>{spot.trustLabel || "Community Submitted"}</h3>
              <p>{spot.verifiedCount ?? 0} users confirmed this spot</p>
              <p>{spot.photoCount ?? 0} photo submissions</p>
              <p>{spot.lastUpdated || "Recently updated"}</p>
            </div>

            <div className="side-info-block">
              <p className="detail-label">Why this matters</p>
              <p>
                SkylineSpots works best when users share specific, real places:
                exact parks, bridges, garages, rooftops, overlooks, and street
                corners.
              </p>
            </div>

            <Link to="/submit">
              <button className="full-width-button">Submit a Spot</button>
            </Link>

            <Link to="/community">
              <button className="secondary-button full-width-button">
                View More Spots
              </button>
            </Link>
          </aside>
        </div>
      </section>

      <footer>
        <p>Built for city explorers, photographers, and skyline lovers.</p>
      </footer>
    </div>
  );
}

export default SpotPage;