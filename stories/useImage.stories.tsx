import React from 'react';
import PropTypes from 'prop-types';
import useImage from '../src';

export default {
  component: useImage,
  title: 'useImage',
};

const propTypes = {
  src: PropTypes.string,
};

const defaultProps = {
  src:
    'https://cdn.pixabay.com/photo/2020/05/27/21/46/flowers-5229022_1280.jpg',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
const Demo = ({
  src = 'https://cdn.pixabay.com/photo/2020/05/27/21/46/flowers-5229022_1280.jpg',
}) => {
  const placeHolderImg =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAABvCAYAAAAjQtTMAAAA5klEQVR4nO3RsQ2AQBADQaDwD75x6IDsJMTOFGAHexwAAAAAAAAAAPDmnD7Ye9/TH3+w1hptcU2O8x1CRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0BFCRwgdIXSE0AAAAAAAAAAAAB0PCAIElDHkBIoAAAAASUVORK5CYII=';
  const notFoundImage =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAABvCAYAAAAjQtTMAAAA6klEQVR4nO3RQQ2EUBQEwQ8mEIXeFYUKcMDtJWS7SsDModcCAAAAAAAAAIA32/TB71j39Mc/OK/ZFvvkON8hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCB0hdITQEUJHCA0AAAAAAAAAANDxAAyTA5Q3k+avAAAAAElFTkSuQmCC';

  const {
    loaded,
    failed,
    dimensions: { width, height },
  } = useImage(src);

  const imgSrc = loaded ? src : failed ? notFoundImage : placeHolderImg;

  return (
    <div>
      <p>
        {loaded
          ? `Image loaded width: ${width} height: ${height}`
          : failed
          ? 'Not found'
          : 'loading...'}
      </p>
      <img alt="example" src={imgSrc} />
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;
export { Demo };
