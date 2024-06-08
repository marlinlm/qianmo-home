"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <div className={`loader_bg ${load ? "" : "d-none"}`}>
      <div className="loader" />
      <h4 className="loading-title">LOADING...</h4>
    </div>
  );
};
export default Preloader;
