import React from 'react';

/**
 * Compares an array of objects and looks for a matching
 * id property, then updates the matching object with the 
 * supplied prop property
 * 
 * @param { Array } comparisonArray The array to compare the prop against
 * @param { Number } id The id of the target object in the array
 * @param { String } prop Then new prop to be supplied
 * 
 * @returns {Array }
 */
const useFavorites = (comparisonArray, id, prop) => {
  const toggleFavorites = () => {
    return comparisonArray.map(movie => {
      if (movie.id === id) {
        movie[prop] = !movie[prop];
      }

      return movie
    });
  }

  return [toggleFavorites];
}

export default useFavorites;

