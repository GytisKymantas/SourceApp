import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

// Component finds single closest location from 'mockData'
export const EatoutNearYouSection = ({ restaurantsData }) => {
  const [locationPosition, setLocationPosition] = useState({});
  const [finalInfo, setFinalInfo] = useState({});

  const mockData = useMemo(() => {
    return {
      location: "",
      recruitingStatus: "",
      organization: "",
      starts: "",
      locations: [
        { latitude: "44.500000", longitude: "89.500000" },
        { latitude: "39.913818", longitude: "116.363625" },
        { latitude: "1.290270", longitude: "103.851959" },
        { latitude: "35.652832", longitude: "139.839478" },
      ],
    };
  }, []);

  // GetFinalLocation returns an index of the shortest distance
  const locationTotal = mockData.locations.length;
  const getFinalLocation = useCallback(() => {
    if (mockData && locationTotal >= 1) {
      // Creating an array with distances
      const locationLatitude = mockData.locations.map((el) => el.latitude);
      const locationLongitude = mockData.locations.map((el) => el.longitude);
      const distanceArray = locationLatitude.map((lat, idx) => {
        const log = locationLongitude[idx];
        return distance(
          locationPosition.defaultLatitude,
          locationPosition.defaultLongitude,
          lat,
          log
        );
      });

      // Finding the shortest distance, getting it's index
      // then displaying this value from mockData
      const closest = Math.min(...distanceArray);
      const closestLocationIndex = distanceArray.indexOf(closest);
      return mockData.locations[closestLocationIndex];
    }
    return {};
  }, [
    mockData,
    locationPosition.defaultLatitude,
    locationPosition.defaultLongitude,
    locationTotal,
  ]);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocationPosition({
          ...position,
          defaultLatitude: position.coords.latitude,
          defaultLongitude: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    const finalLocationInfo = getFinalLocation();

    setFinalInfo({
      ...finalLocationInfo,
      locationAdress: `${finalLocationInfo.city},
                        ${finalLocationInfo.stateProvince},
                        ${finalLocationInfo.country}`,

      recruitmentStatus: finalLocationInfo.recruitmentStatus,
      organisationAdress: finalLocationInfo.name,
    });
  }, [getFinalLocation]);

  const distance = (lat1, lon1, lat2, lon2, name) => {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const distance = lon1 - lon2;
    const radDistance = (Math.PI * distance) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radDistance);

    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (name === "K") {
      dist *= 1.609344;
    }
    if (name === "N") {
      dist *= 0.8684;
    }
    return dist;
  };

  return <div>{finalInfo ? finalInfo : ""}</div>;
};

EatoutNearYouSection.propTypes = {
  restaurantsData: PropTypes.object,
};
