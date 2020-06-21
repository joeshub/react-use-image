interface SizedTarget {
  width: number;
  height: number;
}

import { useEffect, useRef, useState } from 'react';

const useImage = (src: string) => {
  const ready = useRef(true);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!src) {
      return;
    }
    const image = new window.Image();

    function isSizedTarget(t: any): t is SizedTarget {
      return t && t.width !== undefined && t.height !== undefined;
    }

    image.onload = event => {
      if (ready.current) {
        if (isSizedTarget(event.target)) {
          const { width, height } = event.target;
          setLoaded(true);
          setDimensions({ width, height });
        }
      }
    };

    image.onerror = () => {
      if (ready.current) {
        setLoaded(false);
        setFailed(true);
      }
    };

    image.src = src;
  }, [src]);

  useEffect(() => {
    return () => {
      ready.current = false;
    };
  }, []);

  return { loaded, failed, dimensions };
};

export default useImage;
