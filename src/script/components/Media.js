import Video from './Video';
import Image from './Image';

function Media(props) {
  if (props.category === 'videos') {
    return <Video category={props.category} />;
  } else {
    return <Image category={props.category} subcategory={props.subcategory} />;
  }
}

export default Media;
