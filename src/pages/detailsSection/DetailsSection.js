import React from "react";
import "./DetailsSection.css";
import SunTime from "./SunTime";
import ShowInfo from "./ShowInfo";
import Forcast from "./Forcast";

function DetailsSection(props) {
  console.log("CHECK THIS", props.data.weather.daily);
  const { sunriseTime, sunsetTime } = props.data.weather.daily.data[0];
  const tomorrowSunrise = props.data.weather.daily.data[1].sunriseTime;

  console.log(props, props.data.weather);
  return (
    <div className="details-section">
      <SunTime
        data={{ rise: sunriseTime, set: sunsetTime, tRise: tomorrowSunrise }}
      />
      <ShowInfo />
      <Forcast />
    </div>
  );
}

export default DetailsSection;

//props.data.weather.daily.data[0].sunriseTime
//props.data.weather.daily.data[0].sunsetTime
//props.data.weather.daily.data[1].sunriseTime
