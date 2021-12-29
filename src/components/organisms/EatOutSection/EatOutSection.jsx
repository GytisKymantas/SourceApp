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
      averageArray[i] >= 4.0 ? finalArray.push(restaurantData[i]) : void 0;
    }
    return finalArray;
  };

  return (
    <div className="main-container">
      <ViewEatOutCard />
      {twoBiggest() && (
        <RestaurantCard
          numberOfCheckIns={twoBiggest()[0].checkIns}
          restaurantName={twoBiggest()[0].name}
          restaurantWebsite={twoBiggest()[0].website.slice(7)}
          restaurantAddress={twoBiggest()[0].location.address}
          restaurantOpeningHours={twoBiggest()[0].openingHours[0].hours}
          restaurantDescription={twoBiggest()[0].description}
          restaurantCategories={twoBiggest()[0].categories}
          restaurantImage={twoBiggest()[0].image}
          restaurantAverageRating={twoBiggest()[0].ratingArray}
        />
      )}
      {twoBiggest() && (
        <RestaurantCard
          numberOfCheckIns={twoBiggest()[1].checkIns}
          restaurantName={twoBiggest()[1].name}
          restaurantWebsite={twoBiggest()[1].website.slice(7)}
          restaurantAddress={twoBiggest()[1].location.address}
          restaurantOpeningHours={twoBiggest()[1].openingHours[0].hours}
          restaurantDescription={twoBiggest()[1].description}
          restaurantCategories={twoBiggest()[1].categories}
          restaurantImage={twoBiggest()[1].image}
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
