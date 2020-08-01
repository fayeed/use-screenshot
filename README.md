# use-screenshot-hook

> React hook to take screenshot for React components.

[![NPM](https://img.shields.io/npm/v/use-screenshot-hook.svg)](https://www.npmjs.com/package/use-screenshot-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

Using npm:

```bash
npm install --save use-screenshot-hook
```

Using yarn:

```bash
yarn add use-screenshot-hook
```

## Usage

```tsx
import * as React from "react";

import { useScreenshot } from "use-screenshot-hook";

const Example = () => {
  const { image, takeScreenshot } = useScreenshot();
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={() => takeScreenshot()}>screenshot</button>
      {image && <img src={img} />}
    </div>
  );
};
```

## API

### `UseScreenshot(options: UseScreenshotProps): UseScreenshotReturnType`

#### `UseScreenshotProps`

- `ref` - Ref to the component for which the screenshot should be taken. If no ref is taken it will take the screenshot for the topmost div or body.

#### `UseScreenshotReturnType`

- `isLoading` - Indicates if the screenshot is loading this is useful for some webpages that are big and have lots of content to render.
- `takeScreenshot: (types: ImgType, options: OptionsType): string | undefined` - A function to take screenshot.
- `image` - Contains the dataUrl for the image.
- `clear()` - Clear the image from the memory.

## [Live Demo](https://use-screenshot.now.sh)

## Found this project useful? ❤️

If you found this project useful, then please consider giving it a ⭐️ on Github and sharing it with your friends via social media.

## Issues and feedback 💭

If you have any suggestion for including a feature or if something doesn't work, feel free to open a Github [issue](https://github.com/fayeed/use-screenshot/issues) for us to have a discussion on it.

## License

MIT © [fayeed](https://github.com/fayeed/use-screenshot/blob/master/LICENSE)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
