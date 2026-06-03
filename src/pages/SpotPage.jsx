import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { spots } from "../data.js";
import "../App.css";

function SpotPage() {
  const { spotName } = useParams();

  const spot = spots.find(
    (item) => item.name.toLowerCase().replaceAll(" ", "-") === spotName
  );

  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const [localComments, setLocalComments] = useState(spot?.comments ?? []);

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

  const displayedUpvotes = hasUpvoted
    ? (spot.upvotes ?? 0) + 1
    : spot.upvotes ?? 0;

  function handleUpvote() {
    setHasUpvoted(!hasUpvoted);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();

    if (username.trim() === "" || commentText.trim() === "") {
      return;
    }

    const newComment = {
      username: username.trim(),
      text: commentText.trim(),
    };

    setLocalComments([newComment, ...localComments]);
    setCommentText("");
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
          <div className="community-header">
            <div>
              <p className="section-label">COMMUNITY SPOT</p>
              <h2>Spot Details</h2>
            </div>

            <button
              className={hasUpvoted ? "upvote-box upvoted" : "upvote-box"}
              onClick={handleUpvote}
            >
              <p>▲</p>
              <h3>{displayedUpvotes}</h3>
              <p>{hasUpvoted ? "upvoted" : "upvotes"}</p>
            </button>
          </div>

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

          <div className="community-details">
            <p>
              <strong>Submitted by:</strong> @{spot.submittedBy ?? "anonymous"}
            </p>
            <p>
              <strong>Location:</strong> {spot.address ?? "Location not listed"}
            </p>
            <p>
              <strong>Hidden Level:</strong>{" "}
              {spot.hiddenLevel ?? "Not specified"}
            </p>
          </div>

          <p className="spot-long-text">
            This spot is part of the SkylineSpots community map of city-view
            locations. The goal is to help people find not only famous skyline
            views, but also underrated, local, and specific hidden spots that
            are usually discovered through word of mouth.
          </p>

          <div className="comments-section">
            <h2>Comments</h2>

            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />

              <textarea
                placeholder="Add a comment about this spot..."
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
              />

              <button type="submit">Add Comment</button>
            </form>

            {localComments.length > 0 ? (
              <div className="comments-list">
                {localComments.map((comment, index) => (
                  <div className="comment-card" key={index}>
                    <h4>@{comment.username}</h4>
                    <p>{comment.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="spot-long-text">
                No comments yet. Be the first to comment on this spot.
              </p>
            )}
          </div>

          <Link to={`/city/${spot.city.toLowerCase().replaceAll(" ", "-")}`}>
            <button>Back to {spot.city}</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SpotPage;