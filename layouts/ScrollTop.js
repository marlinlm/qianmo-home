"use client";
import { thrownutility } from "@/utility";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    thrownutility.scrollTop();
  }, []);

  return (
    <div className="scroll-area">
      <div className="top-wrap">
        <div className="go-top-btn-wraper">
          <div className="go-top go-top-button">
            <a href="#">
              <i className="fas fa-arrow-up" />
              <i className="fas fa-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScrollTop;
