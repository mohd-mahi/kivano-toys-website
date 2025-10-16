// hooks/useSwiperNavigation.js
import { useState, useEffect } from "react";

const useSwiperNavigation = (swiperInstance) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiperInstance) return;

    const handleSlideChange = () => {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    };

    swiperInstance.on("slideChange", handleSlideChange);
    handleSlideChange(); // initial check

    return () => {
      swiperInstance.off("slideChange", handleSlideChange);
    };
  }, [swiperInstance]);

  return { isBeginning, isEnd };
};

export default useSwiperNavigation;
