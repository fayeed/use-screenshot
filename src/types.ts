import { MutableRefObject } from "react";
import { OptionsType } from "html-to-image";

export type ImgType = "jpg" | "png";

export interface UseScreenshotProps {
  /**
   * Ref to the component for which the screenshot should be taken.
   * If no ref is taken it will take the screenshot for the topmost div or body.
   */
  ref?: MutableRefObject<any>;
}

export interface UseScreenshotReturnType {
  /**
   * Indicates if the screenshot is loading this is useful for some webpages that
   * are big and have lots of content to render.
   */
  isLoading: boolean;

  /**
   * Contains the dataUrl for the image.
   */
  image: string;

  /**
   * A function to take screenshot.
   *
   * @param types: format for the image, rither jpeg or png.
   * @param options: Options to control the behaviour [OptionsType]
   */
  takeScreenshot: (types: ImgType, options: OptionsType) => void;

  /**
   * Clear the image from the memory.
   */
  clear: () => void;
}
