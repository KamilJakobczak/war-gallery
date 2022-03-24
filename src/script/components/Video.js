import React from 'react';
import { Player } from 'video-react';
// import InfiniteScroll from 'react-infinite-scroller';

function Video(props) {
  const videos = require.context(
    '../../../public/images/videos',
    false,
    /\.mp4$/
  );

  const display = videos.keys().map(videos);
  const images = display.map((image, id) => (
    <div className={props.category} key={id}>
      <Player preload='metadata'>
        <source src={image} />
      </Player>
    </div>
  ));
  return images;

  //   <InfiniteScroll
  //     pageStart={10}
  //     loadMore={10}
  //     hasMore={true || false}
  //     loader={
  //       <div className='loader' key={0}>
  //         Loading ...
  //       </div>
  //     }
  //   >
  //     {images}
  //   </InfiniteScroll>
}
export default Video;
