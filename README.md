# react-use-image

A react hook for pre-loading images.

## install it

```bash
npm i react-use-image

# or

yarn add react-use-image
```

## use it

```jsx
import useImage from 'react-use-image';

const Example = ({ src }) => {
  // use the hook
  // pass it an image source url
  const { loaded } = useImage(src);

  if (!loaded) return null;

  return <img src={src} alt="Example" />;
};
```

## input

Image URL, e.g. <https://foo.com/cat.jpg>

## return values

```js
{
  "loaded": false, // image found and loaded
  "failed": false, // image not found

  // actual size of the image
  "dimensions": {
    "width": 0, // width of image in pixels
    "height": 0 // height of image in pixels
  }
}
```

## Docs

- Storybook coming soon

## Authoer

Joe Seifi

## Licence

MIT
