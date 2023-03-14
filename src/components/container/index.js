import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Container({ title, titleIcon, titleClass, classes, children }) {
  return (
    <div className={`container-wrapper ${classes}`}>
      <div className={`container-title-wrapper ${titleClass}`}>
        {titleIcon}
        <h2 className="container-title">{title} </h2>
      </div>
      <div className={`container-content ${classes}`}>{children}</div>
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  titleIcon: PropTypes.any,
  titleClass: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.any,
};

Container.defaultProps = {
  title: "",
  titleIcon: undefined,
  titleClass: "",
  classes: "",
  children: undefined,
};
export default Container;
