import React from "react";
import Header from "./components/Header";
import AllReviews from "./components/AllReviews";

const ReviewsPage = () => {
  return (
    <div
      className="
    flex
    flex-col
    gap-8
    px-8
    py-10
    "
    >
      <Header />
      <AllReviews />
    </div>
  );
};

export default ReviewsPage;
