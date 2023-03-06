import { useEffect, useState } from "react";

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {};
  }, [width]);

  return width;
};

export default WindowWidth;
