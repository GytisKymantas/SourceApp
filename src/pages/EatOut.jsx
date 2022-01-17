import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { FoodCategoriesSection } from "components/molecules/FoodCategoriesSection/FoodCategoriesSection";
import React from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import EatOutHeroSlider from "components/organisms/EatOutHeroSlider/EatOutHeroSlider";
import SliderArrows from "components/atoms/SliderArrows/SliderArrows";
=======
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import { Carousel } from "components/molecules/Carousel/Carousel";

import "./eat-out.scss";
>>>>>>> dev

export const EatOut = ({ data }) => {
  const restaurantsData = data?.restaurants;

  const sortedByDate = []
    .concat(restaurantsData)
    .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1))
    .slice(0, 6);
  return (
    <MainLayout>
      <h1>Hungry? Find the best place!</h1>
      <EatOutHeroSlider data={restaurantsData} />
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
