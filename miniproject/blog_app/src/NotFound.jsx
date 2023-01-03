import React from "react";
import notFoundStyle from "./Styles/NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <figure>
        <div className={notFoundStyle.sad_mac}></div>
        <figcaption>
          <span className={notFoundStyle.sr_text}>Error 404: Not Found</span>
          <span className={notFoundStyle.e}></span>
          <span className={notFoundStyle.r}></span>
          <span className={notFoundStyle.r}></span>
          <span className={notFoundStyle.o}></span>
          <span className={notFoundStyle.r}></span>
          <span className={notFoundStyle._4}></span>
          <span className={notFoundStyle._0}></span>
          <span className={notFoundStyle._4}></span>
          <span className={notFoundStyle.n}></span>
          
          <span className={notFoundStyle.o}></span>
          <span className={notFoundStyle.t}></span>
          <span className={notFoundStyle.f}></span>
          <span className={notFoundStyle.o}></span>
          <span className={notFoundStyle.u}></span>
          <span className={notFoundStyle.n}></span>
          <span className={notFoundStyle.d}></span>
        </figcaption>
      </figure>
    </>
  );
};

export default NotFound;
