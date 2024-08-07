import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const CustomerReview = ({ reviews = [] }) => {
  return (
    <div className="max-h-96 overflow-y-scroll text-white scroll-content">
      {reviews.map((review, index) => (
        <div key={index} className=" mb-4 p-2 border-b border-white-500  rounded shadow">
          <div className="flex items-start space-x-4">
            <div>
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="">
              <h3 className="font-semibold mt-3">{review.name}</h3>
            </div>
          </div>

          <div></div>
          <div>
            <div className=" flex mt-3">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < review.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p>{review.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

CustomerReview.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      feedback: PropTypes.string.isRequired,
    })
  ),
};

CustomerReview.defaultProps = {
  reviews: [],
};

export default CustomerReview;
