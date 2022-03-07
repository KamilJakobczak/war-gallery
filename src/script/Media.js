function Media(props) {
  const images = require.context(
    '../../public/images/memes',
    false,
    /\.(png|jpe?g|svg)$/
  );
  const displayImages = images.keys().map(images);
  return displayImages.map((image, id) => (
    <div key={id}>
      <img src={image} alt='' />
    </div>
  ));
}

export default Media;
