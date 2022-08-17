import React from "react";
import twbus from "./twbus.png";
import ways from "./ways.png";
import frame from "./Frame.png";
import ico1 from "./ICON1.png";
import ico2 from "./ICON2.png";
import "./home.css";
function home() {
  return (
    <div className="home">
      <div className="contain">
        <img className="twbus" src={twbus} alt="" />
        <div className="fways">
          <img className="ways" src={ways} alt="" />
          <img src={frame} className="frame f1" alt="" />
          <img src={frame} className="frame f2" alt="" />
          <img src={frame} className="frame f3" alt="" />
          <button className="btn bt1">
            <div className="icoframe">
              <img className="ico1" src={ico1} alt="" />
            </div>
            <p>附近公車站</p>
          </button>
          <button className="btn bt2">
            <div className="icoframe">
              <img className="ico2" src={ico2} alt="" />
            </div>
            <p>查詢公車</p>
          </button>
          <button className="btn bt3">
            <div className="icoframe">
              <img className="ico2" src={ico2} alt="" />
            </div>
            <p>查詢客運</p>
          </button>
        </div>
      </div>
      <footer>Taiwan Bus © Code: Alax / Design: KT</footer>
    </div>
  );
}

export default home;
