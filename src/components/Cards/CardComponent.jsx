import React from "react";
import CountUp from "react-countup";
import cx from "classnames";

import "bootstrap/dist/css/bootstrap.css";

const CardComponent = ({
  className,
  cardTitle,
  value,
  lastUpdate,
  cardSubtitle,
  titleColor,
}) => {
  return (
    <div class={cx("col mb-4")}>
      <div className={cx("card", className)}>
        <div className="card-body">
          <h5 className={cx("card-title", titleColor)}>{cardTitle}</h5>
          <h5>
            <CountUp start={0} end={value} duration={2.75} separator="," />
          </h5>
          <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
          <h6 className={cx("card-subtitle", "mb-2", "text-muted")}>
            {cardSubtitle}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
