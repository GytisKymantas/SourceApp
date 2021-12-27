import React from "react";
import PropTypes from "prop-types";

export const NewPlacesSection = ({ data }) => {
  const restaurantData = data.restaurants;
  //   const createdDate = restaurantData.createdDate;
  const restaurantDataCopy = [...restaurantData];

  const sortedByDate = []
    .concat(restaurantDataCopy)
    .sort((a, b) => (a.createdDate > b.createdDate ? 1 : -1))
    .map((item, i) => (
      <div key={i}>
        {" "}
        {item.name} {item.createdDate}
      </div>
    ));

  /* eslint-disable no-alert, no-console */
  console.log(restaurantData);
  console.log(restaurantDataCopy);

  return (
    <div className="section">
      {/* {birthdays && <EventCard data={birthdays[0]} />} */}
      <p>{sortedByDate}</p>
    </div>
  );
};

NewPlacesSection.propTypes = {
  data: PropTypes.object,
};
