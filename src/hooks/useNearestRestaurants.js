import { useState, useEffect } from "react";

/** @function
 * @name useNearestRestaurants
 * This custom hook finds 6 closest locations to the user from restaurantsData
 * and returns an array with indices and restaurants if data is fetched, if not - returns []
 * @param {array} restaurantsData - An array of restaurant objects fetched in app.js.
 */
export const useNearestRestaurants = (restaurantsData) => {
  const [locationPosition, setLocationPosition] = useState({});
  const closestLocationIndices = [];
  const closestLocations = [];

  /** Get users current location */
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocationPosition({
          defaultLatitude: position.coords.latitude,
          defaultLongitude: position.coords.longitude,
        });
      });
    }
  }, []);

  /** Guard clause to check if restaurantsData has been fetched */
  if (restaurantsData === undefined) return [];

  /** @function
   * @name distance
   * Distance function calculates the nearest straight path to a destination based on a Haversine formula
   * Arguments could be grouped in the future like so: (point1, point2) where point is {x: float y: float}
   * @param {float} lat1 - Current users latitude.
   * @param {float} lon1 - Current users longitude.
   * @param {float} lat2 - Restaurant's latitude.
   * @param {float} lon2 - Restaurant's longitude.
   */
  const distance = (lat1, lon1, lat2, lon2) => {
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
    return dist;
  };

  /** @function
   * @name getFinalLocation
   * GetFinalLocation returns an index array of shortest calculated distances */
  const getFinalLocation = () => {
    /** Creating an array with distances
     * Code could be improved by not double maping the same data.
     * I can map single time, store into an object if needed
     */
    const locationLatitude = restaurantsData.map(
      (el) => el.location.coordinates.lat
    );
    const locationLongitude = restaurantsData.map(
      (el) => el.location.coordinates.lng
    );
    const distanceArray = locationLatitude.map((lat, index) => {
      const lon = locationLongitude[index];
      return distance(
        locationPosition.defaultLatitude,
        locationPosition.defaultLongitude,
        lat,
        lon
      );
    });
    /** Finding the shortest distances, getting their indices
     * and returning the index array
     */
    const closestDistances = [];
    if (distanceArray.length) {
      for (let i = 0; i < 6; i++) {
        closestDistances[i] = Math.min(...distanceArray);
        closestLocationIndices[i] = distanceArray.indexOf(closestDistances[i]);
        distanceArray[distanceArray.indexOf(closestDistances[i])] = Infinity;
      }
    }
    return closestLocationIndices;
  };

  /** Last check if getFinalLocation() got fetched data */
  if (getFinalLocation().includes(-1)) return [];

  /** If successful - populate closestLocations array */
  for (let i = 0; i < closestLocationIndices.length; i++) {
    closestLocations.push(restaurantsData[closestLocationIndices[i]]);
  }

  return [closestLocationIndices, closestLocations];
};
