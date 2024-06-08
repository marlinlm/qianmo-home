"use client";
import VideoPopup from "@/components/VideoPopup";
import { thrownutility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
const ThrownLayout = ({ children, header, dark }) => {
  useEffect(() => {
    thrownutility.btnHover();
    thrownutility.stickyHeader();
    thrownutility.scrollAnimation();
  });

  return (
    <Fragment>
      <VideoPopup />
      <Header headers={header} dark={dark} />
      {children}
      <Footer />
      <ScrollTop />
    </Fragment>
  );
};
export default ThrownLayout;
