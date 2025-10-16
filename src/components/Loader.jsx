import React, { useContext } from "react";
import LoaderContext from "../context/Loader/LoaderContext";

const Loader = () => {
  const { mounted } = useContext(LoaderContext);

  return (
    <div className={`loader-wrapper ${!mounted ? "active" : ""}`}>
      <div className="loader">
        <img src="/images/logo.png" alt="" />
      </div>
    </div>
  );
};

export default Loader;
