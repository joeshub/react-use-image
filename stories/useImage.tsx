import React from 'react';
import useImage from '../src';

export const src =
  'https://cdn.pixabay.com/photo/2020/05/27/21/46/flowers-5229022_1280.jpg';

export default {
  title: 'Welcome',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => {
  const placeHolderImg = 'foo.jpg';
  const notFoundImage = 'error.jpg';

  const {
    loaded,
    failed,
    dimensions: { width, height },
  } = useImage(src);

  const imgSrc = loaded ? src : failed ? notFoundImage : placeHolderImg;

  return (
    <div>
      {loaded ? `Image loaded width: ${width} height: ${height}` : 'loading...'}
      <img alt="example" src={imgSrc} />
    </div>
  );
};

{
  /* <Thing {...props} />; */
}
