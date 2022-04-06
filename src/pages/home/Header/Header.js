import React from "react";
import "./Header.css";
import BannerHeader from "../../../assets/Backgrounds/Bg_Header.png";
import Laptop from "../../../assets/Img Hero/Ic_ilustra_Hero.png";
import Wox from "../../../assets/img_woloxer.png";

export const Header = () => {
  return (
    <header>
      {/* <img src={BannerHeader} alt="banner-header-header" /> */}
      <div className="offers-content-second" to="#beneficios">
        <div className="offers-content-side">
          <h2>Bienvenido a tu entrevista Técnica en Wolox</h2>
        </div>
        <figure>
          <img
            src={Laptop}
            alt="ford-ranger-offers"
            className="offers-content-img"
          />
        </figure>
      </div>
      <div className="offers-content-bronco">
        <div className="offers-content-bronco">
          <div className="image-text">
            <img src={Wox} alt="ford-info" className="offers-content-img" />

            <h2 className="over-text">
              <span>
                350 + Woloxers<span className="spacer"></span>
                <br />
                <span className="spacer"></span>@Wolox
                <a
                  href="https://twitter.com/wolox?lang=en"
                  className="button_getknow-banner"
                >
                  Conoce más
                </a>
              </span>
            </h2>
          </div>
        </div>
        <div className="offers-content-side">
          <h2>Trabajamos para convertir ideas en productos</h2>
        </div>
      </div>
    </header>
  );
};
