import React from "react";
import "./ErrorView.css";
import errorImg from "../images/error.png";
import { Link } from "react-router-dom";

export const ErrorView = () => {
  return (
    <div className="errorPage">
      <img src={errorImg} alt="Error 404 Not found" />
      <div>
        <h1 className="error">
          I'm sorry, the page you requested could not be found. Please go back
          to the homepage
        </h1>
        <Link to="/" className="btn btn-primary">
          Go home
        </Link>
      </div>
    </div>
  );
};
