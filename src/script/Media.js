import Video from './Video';
import Image from './Image';

function Media(props) {
  if (props.activeTab === 'videos') {
    return <Video activeTab={props.activeTab} />;
  } else {
    return <Image activeTab={props.activeTab} />;
  }
}

export default Media;
