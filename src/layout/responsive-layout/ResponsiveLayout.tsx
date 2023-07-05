import { ReactNode, useEffect, useState } from "react";

const widthMedia = {
  desktop: 960,
  tablet: 700,
  mobile: 440,
  phone: 440
};

interface Props {
  media: keyof typeof widthMedia;
  children: ReactNode;
}
const ResponsiveLayout = ({ media, children }: Props) => {
  const checkRenderCondition = () => {
    if (media === "desktop") {
      return window.innerWidth >= widthMedia[media];
    }
    if (media === "tablet") {
      return (
        window.innerWidth >= widthMedia.tablet &&
        window.innerWidth <= widthMedia.desktop - 1
      );
    }
    if (media === "mobile") {
      return window.innerWidth <= widthMedia.desktop - 1;
    }
    if (media === "phone") {
      return window.innerWidth <= widthMedia.tablet - 1;
    }
    return true;
  };

  const [render, setRender] = useState(() => checkRenderCondition());
  useEffect(() => {
    const handleResize = () => {
      setRender(checkRenderCondition());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return render && <>{children}</>;
};

export default ResponsiveLayout;
