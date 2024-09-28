import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image, image2 }) => {
  return (
    <img
      src={process.env.PUBLIC_URL + image}
      alt="ibots Logo"
      style={{
        objectFit: "cover",
        width: "180px",
      }}
    />
  );
};
Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;
