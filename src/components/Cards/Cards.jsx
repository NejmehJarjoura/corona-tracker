import React from "react";
import cx from "classnames";

import CardComponent from "./CardComponent";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <>
      <div className={cx("row", "row-cols-1", "row-cols-md-3")}>
        <CardComponent
          className="border-warning"
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19"
          titleColor="text-warning"
        />
        <CardComponent
          className="border-success"
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19"
          titleColor="text-success"
        />
        <CardComponent
          className="border-danger"
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19"
          titleColor="text-danger"
        />
      </div>
    </>
  );
};

export default Cards;
