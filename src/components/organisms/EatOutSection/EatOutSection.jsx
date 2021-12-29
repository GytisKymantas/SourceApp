import React from "react";
import "./eat-out-section.scss";
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import { ViewEatOutCard } from "components/molecules/ViewEatOutCard/ViewEatOutCard";

const EatOutSection = (data) => {
  let restaurantData = data?.data?.restaurants;

  const twoBiggest = () => {
    let averageArray = [];
    let finalArray = [];

    for (let i = 0; i < restaurantData.length; i++) {
      let array2 = restaurantData[i].reviews.map((review) => review.rating); // [5,5,5]
      let averageCount = array2.reduce(
        (prevValue, curValue) => (prevValue + curValue) / array2.length,
        [0]
      );
      averageArray.push(averageCount);
      averageArray[i] >= 4 ? finalArray.push(restaurantData[i]) : void 0;
    }
    return finalArray;
  };
  console.log(twoBiggest());
  const firstCard = twoBiggest()[0];
  const secondCard = twoBiggest()[1];

  return (
    <div className="main-container">
      <ViewEatOutCard />
      {twoBiggest() && (
        <RestaurantCard
          numberOfCheckIns={firstCard.checkIns}
          restaurantName={firstCard.name}
          restaurantOpeningHours={firstCard.openingHours[0].hours}
          restaurantCategories={firstCard.categories}
          restaurantImage={firstCard.image}
          restaurantAverageRating={firstCard.reviews.map(
            (review) => review.rating
          )}
        />
      )}
      {twoBiggest() && (
        <RestaurantCard
          numberOfCheckIns={secondCard.checkIns}
          restaurantName={secondCard.name}
          restaurantOpeningHours={secondCard.openingHours[0].hours}
          restaurantCategories={secondCard.categories}
          restaurantImage={secondCard.image}
          restaurantAverageRating={secondCard.reviews.map(
            (review) => review.rating
          )}
        />
      )}
    </div>
  );
};

export default EatOutSection;
// displayFullCard={true}
//   numberOfCheckIns={restaurantData?.restaurants[0].checkIns}
// restaurantName={restaurantData.restaurants[0].name}
// restaurantWebsite={restaurantData?.restaurants[0].website.slice(7)}
// restaurantAddress={restaurantData?.restaurants[0].location.address}
// restaurantOpeningHours={
//   restaurantData?.restaurants[0].openingHours[0].hours
// }
// restaurantDescription={restaurantData?.restaurants[0].description}
// restaurantCategories={restaurantData?.restaurants[0].categories}
// restaurantImage={restaurantData?.restaurants[0].image}
