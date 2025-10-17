import React from "react";
import AppRoutes from "./AppRoutes";
import LenisProvider from "./context/Lenis/LenisContext";
import LoaderProvider from "./context/Loader/LoaderProvider";

const App = () => {
  return (
    <>
      <LenisProvider>
        <LoaderProvider>
          <AppRoutes />
        </LoaderProvider>
      </LenisProvider>
    </>
  );
};

export default App;
