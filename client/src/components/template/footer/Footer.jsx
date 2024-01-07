import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
     

      <section className=" pt-3">
        <div className="container text-center text-md-start ">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>FORMATEUR
              </h6>
              <p>
               OMAR ELABASSI
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">frent end</h6>
              <p>
                <a href="https://react.dev/" className="text-reset">
                  React js
                </a>
              </p>
              <p>
                <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" className="text-reset">
                  Bootstrap
                </a>
              </p>
             
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Backend</h6>
           
              <p>
                <a href="https://expressjs.com/" className="text-reset">
                  Express
                </a>
              </p>
              <p>
                <a href="https://mongoosejs.com/" className="text-reset">
                  Mongoose
                </a>
              </p>
            
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Stagéres</h6>
              <p>
              Nom Complet: ABDELLAH AIT BACHIKH
              </p>
              <p>
               Email: abdellah.bs2018@gmail.com
                
              </p>
              <p>
                Tel: +212628958346
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
      >
        © 2021 Copyright:
        <span className="text-reset fw-bold" >
          ABDELLAH AIT BACHIKH
        </span>
      </div>
    </footer>
  );
};

export default Footer;
