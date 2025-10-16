import { createContext, useContext, useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "../../gsapInit";
import Lenis from "lenis";

const LenisContext = createContext();

const LenisProvider = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchInertiaExponent: 1,
      touchMultiplier: 1.8,
    });

    setLenisInstance(lenis);

    const raf = (time) => {
      lenis.raf(time * 1000);
      ScrollTrigger?.update();
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useLenis() {
  const context = useContext(LenisContext);
  if (context === undefined)
    throw new Error("cannot use outside of LenisProvider");
  return context;
}

export default LenisProvider;
