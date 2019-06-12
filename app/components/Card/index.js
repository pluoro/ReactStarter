import React from "react";
import { FormattedMessage } from "react-intl";

const Card = ({icon, title, subtitle}) => {
  return (
    <div className="card">
        <div className="card-icon text-center">
          {icon}
        </div>
      <div className="card-content ">
        <p className="card-title text-center">
          <FormattedMessage {...title}/>
        </p>
        <div className="text-center"><div className="card-divider "/></div>
        <p className="card-subtitle text-center">
          <FormattedMessage {...subtitle}/>
        </p>
      </div>
      <div className="clear"/>
    </div>
  )
};
export default Card;
