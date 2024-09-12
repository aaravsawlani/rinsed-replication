import Card from "components/card";
import React from "react";
import { FaStar } from "react-icons/fa";

const RecentReviews = () => {
  const reviews = [
    { name: "John Doe", rating: 5, comment: "Great service! My car looks brand new." },
    { name: "Jane Smith", rating: 4, comment: "Very good experience. Will come back." },
    { name: "Mike Johnson", rating: 5, comment: "Excellent wash and friendly staff." },
    { name: "Emily Brown", rating: 4, comment: "Good service, but a bit pricey." },
    { name: "David Lee", rating: 5, comment: "Best car wash in town! Highly recommended." },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
      <FaStar key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"} />
    ));
  };

  return (
    <Card extra="rounded-[20px] p-4">
      <div className="mb-8 flex items-center justify-between">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Recent Reviews
        </h4>
      </div>
      <div className="flex flex-col">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="mb-3 flex flex-col justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <div className="flex items-center justify-between">
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {review.name}
              </p>
              <div className="flex">
                {renderStars(review.rating)}
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentReviews;