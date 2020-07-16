import { useState, useCallback } from "react";
import { toPng, OptionsType, toJpeg } from "html-to-image";
import { UseScreenshotProps, ImgType } from "./types";

export const useScreenshot = (options?: UseScreenshotProps) => {
  const { ref } = options || {};
  const [image, setImage] = useState<string>();
  const [isLoading, setLoading] = useState(false);

  const takeScreenshot = useCallback(
    async (type?: ImgType, options?: OptionsType) => {
      setLoading(true);

      try {
        let image: string;

        // using body tag causes a wierd bug
        const body = document.getElementById("root")!;

        if (type === "jpg") {
          image = await toJpeg(ref?.current || body, options);
        } else {
          image = await toPng(ref?.current || body, options);
        }

        setImage(image);
      } catch (e) {
        console.error(e);
      }

      setLoading(false);
    },
    []
  );

  const clear = useCallback(() => setImage(undefined), []);

  return { image, takeScreenshot, isLoading, clear };
};
