import React from "react";
import "./Badge.css";

const BADGE_COLORS = ["grey", "yellow", "blue", "green"];

const Badge = (props) => {
  const badgeColor = BADGE_COLORS.includes(props.color) ? props.color : "grey";
  return (
    <div>
      <p className={`status ${props.color}`}>{props.label}</p>
    </div>
  );
};

export default Badge;
