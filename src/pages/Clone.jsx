/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/Clone.css";

const InstagramClone = () => {
  return (
    <div className="instagram-wrapper">
      <div className="instagram-phone">
        <img
          src="https://www.kindpng.com/picc/m/586-5860154_iphone-instagram-template-hd-png-download.png"
          alt="imagem de celular com o instagram"
        />
      </div>

      <div className="instagram-continue">
        <div className="group">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt="instagram logo"
            className="instagram-logo"
          />

          <div className="profile-photo">
            <img
              src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="foto de perfil"
            />
          </div>

          <a href="#" className="instagram-login">
            Continue como johndoe123
          </a>
          <a href="#" className="instagram-logout">
            Remover conta
          </a>
        </div>

        <div className="group">
          <p className="not-account">Não é gildaesfirra?</p>
          <p className="not-account">
            <span className="link-blue">Alterar contas</span> ou{" "}
            <span className="link-blue">Inscreva-se</span>
          </p>
        </div>

        <div className="get-the-app">
          <p className="get-app">Baixe o Aplicativo</p>
          <div className="download">
            <a
              href="#"
              className="app-download"
              style={{
                backgroundImage:
                  "url(https://www.instagram.com/static/images/appstore-install-badges/badge_ios_portuguese-brazilian-pt_br.png/68006a2bb372.png)",
              }}
            ></a>
            <a
              href="#"
              className="app-download"
              style={{
                backgroundImage:
                  "url(https://www.instagram.com/static/images/appstore-install-badges/badge_android_portuguese_brazilian-pt_BR.png/2f2a0c05b2f3.png)",
              }}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramClone;
