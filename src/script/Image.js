import React from 'react';

function Image(props) {
  let displayImages;
  if (props.activeTab === 'screenshots') {
    const screenshots = require.context(
      '../../public/images/screenshots',
      false,
      /\.(png|jpe?g|svg)$/
    );
    displayImages = screenshots;
  } else if (props.activeTab === 'photos') {
    const photos = require.context(
      '../../public/images/photos',
      false,
      /\.(png|jpe?g|svg)$/
    );
    displayImages = photos;
  } else if (props.activeTab === 'memes') {
    const memes = require.context(
      '../../public/images/memes',
      false,
      /\.(png|jpe?g|svg)$/
    );
    displayImages = memes;
  }

  const display = displayImages.keys().map(displayImages);

  return display.map((image, id) => (
    <div className={props.activeTab} key={id}>
      <img src={image} alt='' />
    </div>
  ));
}

export default Image;
