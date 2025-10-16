import React from "react";
import Header from "./Layout/Header";
import AppRoutes from "./AppRoutes";
import Footer from "./Layout/Footer";
import LenisProvider from "./context/Lenis/LenisContext";

const App = () => {
  return (
    <>
      <LenisProvider>
        <AppRoutes />
      </LenisProvider>
    </>
  );
};

export default App;
