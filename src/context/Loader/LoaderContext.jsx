"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLenis } from "../Lenis/LenisContext";
// import imagesLoaded from "imagesloaded";
import { useLocation } from "react-router";

const LoaderContext = createContext(null);

const LoaderProvider = ({ children }) => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  const [pageComponentReady, setPageComponentReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setMounted] = useState(false);
  const isFirstLoad = useRef(true);
  const hasReloaded = useRef(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [isClickDetected, setIsClickDetected] = useState(false);

  function handleClickDetect() {
    setIsClickDetected(true);
  }

  const waitForResources = async () => {
    try {
      if (document.fonts?.ready) await document.fonts.ready;

      await new Promise((resolve) => {
        imagesLoaded(document.body, { background: true }, () => {
          resolve();
        });
      });
    } catch (err) {
      console.warn("Resource wait failed:", err);
    }
  };

  useEffect(() => {
    if (!hasReloaded.current && pageComponentReady) {
      const handleLoadComplete = () => {
        setIsLoading(false);

        requestAnimationFrame(() => {
          if (lenis?.scrollTo) {
            lenis.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo(0, 0);
          }
        });

        hasReloaded.current = true;
        isFirstLoad.current = false;
      };

      const startLoading = async () => {
        await waitForResources();
        if (document.readyState === "complete") {
          handleLoadComplete();
        } else {
          window.addEventListener("load", handleLoadComplete, { once: true });
        }
      };

      startLoading();

      return () => {
        window.removeEventListener("load", handleLoadComplete);
      };
    }
  }, [lenis, pageComponentReady]);

  useEffect(() => {
    if (hasReloaded.current) {
      setMounted(false);
      setAssetsLoaded(false);
      setPageComponentReady(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (hasReloaded.current && pageComponentReady) {
      const completeLoading = async () => {
        await waitForResources();
        setAssetsLoaded(true);
      };

      requestAnimationFrame(() => {
        setTimeout(() => {
          completeLoading();
        }, 100);
      });
    }
  }, [pageComponentReady]);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        isMounted,
        setMounted,
        assetsLoaded,
        isFirstLoad,
        pageComponentReady,
        setPageComponentReady,
        isClickDetected,
        handleClickDetect,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined)
    throw new Error("cannot use outside of LoaderProvider");
  return context;
}

export default LoaderProvider;
