import React from "react";
import PropTypes from "prop-types";

export const RestaurantSliderSection = ({ title, data }) => {
  //   const restaurantData = data?.restaurants;
  //   const restaurants = storiesData?.filter((story) => story.type === "birthday");

  return (
    <div className="section">
      <div className="section__title-container">
        <div className="section__title">{title}</div>
        <div className="section__slider-arrows">Slider button</div>
      </div>
      {/* {birthdays && <EventCard data={birthdays[0]} />} */}
    </div>
  );
};

RestaurantSliderSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};
