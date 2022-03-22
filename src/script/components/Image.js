import React from 'react';

function Image(props) {
  let displayImages;
  if (props.category === 'screenshots') {
    if (props.subcategory === undefined) {
      const screenshots = require.context(
        '../../../public/images/screenshots',
        true,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = screenshots;
    } else if (props.subcategory === 'news') {
      const news = require.context(
        '../../../public/images/screenshots/news',
        false,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = news;
    } else if (props.subcategory === 'other') {
      const other = require.context(
        '../../../public/images/screenshots/other',
        false,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = other;
    }
  } else if (props.category === 'photos') {
    if (props.subcategory === undefined) {
      const photos = require.context(
        '../../../public/images/photos',
        true,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = photos;
    } else if (props.subcategory === 'animals') {
      const animals = require.context(
        '../../../public/images/photos/animals',
        false,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = animals;
    } else if (props.subcategory === 'army') {
      const army = require.context(
        '../../../public/images/photos/army',
        false,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = army;
    } else if (props.subcategory === 'buildings') {
      const buildings = require.context(
        '../../../public/images/photos/buildings',
        false,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = buildings;
    } else if (props.subcategory === 'people') {
      const people = require.context(
        '../../../public/images/photos/people',
        false,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = people;
    }
  } else if (props.category === 'memes') {
    if (props.subcategory === undefined) {
      const memes = require.context(
        '../../../public/images/memes',
        true,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = memes;
    } else if (props.subcategory === 'polish') {
      const polish = require.context(
        '../../../public/images/memes/polish',
        false,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = polish;
    } else if (props.subcategory === 'english') {
      const english = require.context(
        '../../../public/images/memes/english',
        false,
        /\.(png|jpe?g|svg)$/
      );
      displayImages = english;
    }
  }

  const display = displayImages.keys().map(displayImages);

  return display.map((image, id) => (
    <div className={props.category} key={id}>
      <img src={image} alt='' />
    </div>
  ));
}

export default Image;
