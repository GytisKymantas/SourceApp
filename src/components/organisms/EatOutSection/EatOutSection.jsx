import React from "react";
import "./eat-out-section.scss";
import { RestaurantCard } from "components/atoms/RestaurantCard/RestaurantCard";
import { ViewEatOutCard } from "components/molecules/ViewEatOutCard/ViewEatOutCard";

const EatOutSection = (data) => {
  const restaurantData = data?.data?.restaurants;

  console.log(restaurantData);
  return (
    <div className="main-container">
      <ViewEatOutCard />
      {restaurantData && (
        <RestaurantCard restaurantName={restaurantData[0].name} />
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
