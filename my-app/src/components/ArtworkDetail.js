// ArtworkDetail = ProjectDetail
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from 'react-router-dom';

function ArtworkDetail(art) {
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
      <div className="reviews" key={review.id}>
            <h3 className="review-text">{review.author}</h3>
            <p className="review-text">{review.review}</p>
          </div>
    )
  })

  return (
    <section>
      <div className="cards">
        <div className="detail_image">
          <img src={artwork.image_url} alt={artwork.title} />
          <button className="tears" onClick={handleTearClick}>
          🥲 {tears}
          </button>
        </div>
        <div className="details">
          <h2>{artwork.title}</h2>
          <p>{artwork.description}</p>
          <div className="extra">
            <span>{artwork.era}</span>
          </div>
          {/* <div className="reviews">
            <h3>{reviews.author}</h3>
            <p>{reviews.review}</p>
          </div> */}
          {reviewItems}
          <Link to="/artworks" onClick={handleBack}> Go Back </Link>
        </div>
      </div>
    </section>
  );
}

export default ArtworkDetail;