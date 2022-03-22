import React from 'react';
import { Player } from 'video-react';

function Video(props) {
  const videos = require.context(
    '../../../public/images/videos',
    false,
    /\.mp4$/
  );

  const display = videos.keys().map(videos);

  return display.map((image, id) => (
    <div className={props.category} key={id}>
      <Player preload='metadata'>
        <source src={image} />
      </Player>
    </div>
  ));
}
export default Video;