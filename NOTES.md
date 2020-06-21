```js
import React, { FC, HTMLAttributes, ReactChild } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}
```

Please do not use types off of a default export module or else Storybook Docs will suffer.
see: <https://github.com/storybookjs/storybook/issues/9556>

```js
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `they snozzberries taste like snozzberries`}</div>;
};
interface Window {
  Image: {
    prototype: HTMLImageElement,
    new(): HTMLImageElement,
  };
}
```

<https://github.com/joeshub/react-use-image>
<https://github.com/jaredpalmer/tsdx#npm-start-or-yarn-start>
<https://github.com/react-spring/react-use-gesture/tree/master/src>
<https://github.com/react-spring/react-use-measure/tree/master/src/web>
<https://github.com/react-spring/react-spring/tree/master/src>
<https://github.com/sindresorhus/np>
<https://codesandbox.io/s/react-use-image-qvhfq?file=/src/App.js:127-656>
<https://github.com/sw-yx/hooks/blob/master/src/index.tsx>
<https://stackoverflow.com/questions/47266836/how-to-use-onload-event-from-image-in-typescript>
<https://stackoverflow.com/questions/25203906/typescript-new-image-from-global-scope>
