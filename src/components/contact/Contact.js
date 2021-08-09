import React from "react";
import { Form } from "./Form";
import { Info } from "./Info";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>contact me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            {/* form */}
            <Form />
          </div>
          <Info />
        </div>
      </div>
    </section>
  );
};
