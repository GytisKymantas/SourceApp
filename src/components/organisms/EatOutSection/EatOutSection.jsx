import React from "react";
import "./eat-out-section.scss";
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import { ViewEatOutCard } from "components/molecules/ViewEatOutCard/ViewEatOutCard";

const EatOutSection = (data) => {
  const restaurantData = data?.data?.restaurants;

  const twoBestRated = () => {
    let bestRatedArray = [];

    for (let i = 0; i < restaurantData.length; i++) {
      const ratings = restaurantData[i].reviews.map((review) => review.rating); // gets ratings in an array
      const averageCount =
        ratings.reduce((prevValue, curValue) => prevValue + curValue, 0) / // counts the average of previous array
        ratings.length;

      bestRatedArray.push({
        ...restaurantData[i],
        averageRating: averageCount,
      });
      bestRatedArray.sort((a, b) =>
        b.averageRating < a.averageRating ? 1 : -1
      );
    }
    return bestRatedArray.slice(18, 20);
  };
  return (
    <div className="main-container">
      <ViewEatOutCard />
      {twoBestRated() &&
        twoBestRated().map((obj, i) => (
          <RestaurantCard
            key={twoBestRated()[i].id}
            displayFullCard={false}
            numberOfCheckIns={twoBestRated()[i].checkIns}
            restaurantName={twoBestRated()[i].name}
            restaurantOpeningHours={twoBestRated()[i].openingHours[0].hours}
            restaurantCategories={twoBestRated()[i].categories}
            restaurantImage={twoBestRated()[i].image}
            restaurantAverageRating={twoBestRated()[i].reviews.map(
              (review) => review.rating
            )}
          />
        ))}
    </div>
  );
};

export default EatOutSection;
