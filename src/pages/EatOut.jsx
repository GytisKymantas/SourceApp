import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import PropTypes from "prop-types";
// use real data here and remove this file later
import { restaurantsData } from "./data";
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import { Carousel } from "components/molecules/Carousel/Carousel";

import "./eat-out.scss";

export const EatOut = ({ data }) => {
  // use real data here and remove this file later
  // const restaurantsData = data;

  return (
    <MainLayout>
      <h1>EatOut</h1>
      <div className="eat-out__carousel-container">
        <Carousel title="New places">
          {restaurantsData?.map((restaurant) => (
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
                restaurantAddress={restaurant.location.address}
                restaurantOpeningHours={restaurant.openingHours[0].hours}
                restaurantDescription={restaurant.description}
                restaurantCategories={restaurant.categories}
                restaurantImage={restaurant.image}
                // not sure if this counting is needed with new data
                restaurantAverageRating={restaurant.reviews.map(
                  (review) => review.rating
                )}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
