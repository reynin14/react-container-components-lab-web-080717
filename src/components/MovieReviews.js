// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
  const reviewsWithDivs = reviews.map((review, index) => {
    return <div key={index} className="review">
      <h3>{review.display_title}</h3>
      <p>{review.headline}</p>
      <p>{review.summary_short}</p>
    </div>
  })
  return (
    <div className="review-list">
      {reviewsWithDivs}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews
