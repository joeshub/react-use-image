import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useImage from '../.';

const App = () => {
  const src =
    'https://cdn.pixabay.com/photo/2020/05/27/21/46/flowers-5229022_1280.jpg';

  const placeHolderImg = 'loading.jpg';
  const notFoundImage = 'error.jpg';

  const {
    loaded,
    failed,
    dimensions: { width, height },
  } = useImage(src);

  const imgSrc = loaded ? src : failed ? notFoundImage : placeHolderImg;

  return (
    <div>
      {loaded
        ? `Loaded width: ${width} height: ${height}`
        : failed
        ? 'Failed'
        : 'Loading...'}
      <img alt="example" src={imgSrc} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
