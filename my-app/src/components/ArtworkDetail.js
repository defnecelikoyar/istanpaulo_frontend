// ArtworkDetail = ProjectDetail
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from 'react-router-dom';

function ArtworkDetail(art) {
  document.body.style.backgroundColor = "#DEBCEA";
  const [tears, setTears] = useState(0);
  const [artwork, setArtwork] = useState(null);
  // const [reviews, setReviews] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

//   // Destructure "params" object to pull out "id" / generate const
  const { id } = useParams();
  
//   // Create "history" object for later use in "handleBack()"
  const history = useHistory();

//   // Create callback function to fire off "goBack" onClick
  function handleBack() {
//     // Invoke "goBack" to take User back one step in browser history
    history.goBack();
  }

  useEffect(() => {
    fetch(`http://localhost:9292/artworks/${id}`)
      .then((r) => r.json())
      .then((artwork) => {
        setArtwork(artwork);
        // artwork.reviews.map((review) => setReviews(review))
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  function handleTearClick() {
    setTears(tears + 1);
  };

  const reviewItems = artwork.reviews.map((review) => {
    return (
      <div className="review" key={review.id}>
            <h3 className="review-author">{review.author}</h3>
            <p className="review-text">{review.review}</p>
      </div>
    )
  })

  return (
    <div className="details">
      <div className="detail-visual">
        <img className="detail-image" src={artwork.image_url} alt={artwork.title} />
      </div>
      <div className="detail-text">
        <h2 className="detail-title">{artwork.title}</h2>
        <h3 className="detail-artist">{artwork.artist}</h3>
        <p className="detail-description">{artwork.description}</p>
      </div>
      <div className="detail-buttonz">
      <button className="tears" onClick={handleTearClick} >
        🥲 {tears} crying rn.
        </button>
      <Link className="go-back" to="/artworks" onClick={handleBack}>go back now!</Link>
      <div className="detail-links">
          <Link className="detail-link" to="/">home</Link>
          <Link className="detail-link" to="/artworks/new">submit</Link>
          <Link className="detail-link" to="/about">about</Link>
        </div>
      </div>
      <div className="detail-other">
        <h3 className="reviews-header">reviews from art lovers</h3>
        {reviewItems}
      </div>
    </div>
  );
}

export default ArtworkDetail;