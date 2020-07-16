import { MutableRefObject } from "react";
import { OptionsType } from "html-to-image";

export type ImgType = "jpg" | "png";

export interface UseScreenshotProps {
  ref?: MutableRefObject<any>;
}

export interface UseScreenshotReturnType {
  isLoading: boolean;
  image: string;
  takeScreenshot: (types: ImgType, options: OptionsType) => void;
  clear: () => void;
}
