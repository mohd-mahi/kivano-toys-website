import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

// 🪄 Import AOS library and CSS
import AOS from "aos";
import Layout from "./Layout/Layout";
// import About from "./Pages/About";

const AppRoutes = () => {
  const AllRoutes = [
    {
      path: "/",
      component: <Home />,
    },
    // {
    //   path: "/about-us",
    //   component: <About />,
    // },
    {
      path: "*",
      component: <h1>404 Page</h1>,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          {AllRoutes.map((page, index) => (
            <Route path={page.path} element={page.component} key={index} />
          ))}
        </Route>
      </Routes>
    </main>
  );
};

export default AppRoutes;
