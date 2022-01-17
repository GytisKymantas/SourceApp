import React from "react";
import PropTypes from "prop-types";
import { useNearestRestaurants } from "hooks/useNearestRestaurants";
import { SliderArrows } from "components/atoms/SliderArrows/SliderArrows";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { FoodCategoriesSection } from "components/molecules/FoodCategoriesSection/FoodCategoriesSection";
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import { Carousel } from "components/molecules/Carousel/Carousel";

import "./eat-out.scss";

export const EatOut = ({ data }) => {
  const restaurantsData = data?.restaurants;
  // eslint-disable-next-line no-unused-vars
  const nearestRestaurants = useNearestRestaurants(restaurantsData); // Returns an array if data is fetched or null if not

  const sortedByDate = []
    .concat(restaurantsData)
    .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1))
    .slice(0, 6);
  return (
    <MainLayout>
      <h1>Hungry? Find the best place!</h1>
      {restaurantsData && (
        <FoodCategoriesSection restaurantsData={restaurantsData} />
      )}
      <div className="eat-out__carousel-container">
        {data && (
          <Carousel title="New places">
            {sortedByDate?.map((restaurant) => (
              <div
                key={restaurant.id}
                className="eat-out__carousel-container--inside"
              >
                <RestaurantCard
                  displayFullCard
                  numberOfCheckIns={restaurant.checkIns}
                  restaurantName={restaurant.name}
                  restaurantWebsite={restaurant.website.replace(
                    /(^\w:|^)\/\//,
                    ""
                  )}
                  restaurantAddress={restaurant.location?.address}
                  restaurantOpeningHours={restaurant.openingHours[0].hours}
                  restaurantDescription={restaurant.description}
                  restaurantCategories={restaurant.categories}
                  restaurantImage={restaurant.image}
                  restaurantReviewList={restaurant.reviews}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
