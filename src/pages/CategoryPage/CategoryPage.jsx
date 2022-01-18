import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { useParams } from "react-router-dom";
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import "./category-page.scss";

export const CategoryPage = (data) => {
  let { category } = useParams();
  let categoryRestaurants = [];
  const restaurants = data?.data?.restaurants;

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const findRestaurants = (food) => {
    for (let i = 0; i < restaurants?.length; i++) {
      if (restaurants[i].categories.includes(capitalize(food.category))) {
        categoryRestaurants.push({
          ...restaurants[i],
        });
      }
    }
  };

  if (category === "hotdogs") {
    category = "hot dogs";
  }

  return (
    <MainLayout>
      <h1>
        The best places for the{" "}
        <span className="category-header__name">{category}!</span>
      </h1>
      <div className="category__list">
        {findRestaurants({ category })}
        {categoryRestaurants &&
          categoryRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              displayFullCard
              numberOfCheckIns={restaurant.checkIns}
              restaurantName={restaurant.name}
              restaurantWebsite={restaurant.website.replace(/(^\w:|^)\/\//, "")}
              restaurantAddress={restaurant.location?.address}
              restaurantOpeningHours={restaurant.openingHours[0].hours}
              restaurantDescription={restaurant.description}
              restaurantCategories={restaurant.categories}
              restaurantImage={restaurant.image}
              restaurantReviewList={restaurant.reviews}
              isLarge
            />
          ))}
      </div>
    </MainLayout>
  );
};
