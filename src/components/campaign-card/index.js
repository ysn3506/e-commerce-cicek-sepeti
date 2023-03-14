import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import "./style.scss";

function CampaignCard({ images, children, classes, buttonContent }) {
  return (
    <div className={`campaign-card-wrapper ${classes}`}>
      <div className="campaign-card-image-wrapper">
        <picture>
          <source media="(max-width: 991px)" srcSet={images.small} />
          <source media="(min-width: 992px)" srcSet={images.big} />
          <img src={images.small} alt={children} />
        </picture>
      </div>
      <div className="campaign-content">
        {children}
        <Button classes="campaign-button">{buttonContent}</Button>
      </div>
    </div>
  );
}

CampaignCard.propTypes = {
  images: PropTypes.object,
  children: PropTypes.any.isRequired,
  classes: PropTypes.string,
  buttonContent: PropTypes.string,
};

export default CampaignCard;
