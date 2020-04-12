import React, { useState, useEffect } from "react";

function SunTime(props) {
  const [barStyle, setBarStyle] = useState({ width: 0, colour: "yellow" });

  useEffect(() => {
    let sunSet = props.data.set;
    let sunRise = props.data.rise;
    let tSunRise = props.data.tRise;

    if (new Date().getTime() / 1000 < sunRise) {
      sunSet = sunSet - 86400;
      sunRise = sunRise - 86400;
      tSunRise = tSunRise - 86400;
    }

    const totalSecondsOfSun = sunSet - sunRise;
    const sunTime = new Date().getTime() / 1000 - sunRise;
    let widthAsPercent = 0;
    let colour;

    if (sunTime > totalSecondsOfSun) {
      //widthAsPercent = 100;
      const totalSecondsOfMoon = tSunRise - sunSet;
      const moonTime = new Date().getTime() / 1000 - sunSet;
      widthAsPercent = (moonTime / totalSecondsOfMoon) * 100;
      colour = "blue";
    } else {
      widthAsPercent = (sunTime / totalSecondsOfSun) * 100;
      colour = "yellow";
    }
    setBarStyle({ width: widthAsPercent, colour: colour });
    console.log("setting", widthAsPercent, sunTime, totalSecondsOfSun);
  }, [props.data.set]);

  return (
    <div className="sunTime">
      <div
        className="sunBar"
        style={{ backgroundColor: "black", width: "100%", height: "100%" }}
      >
        <div
          className="sunBar-active"
          style={{
            backgroundColor: barStyle["colour"],
            width: `${barStyle["width"]}%`,
            height: "100%"
          }}
        />
      </div>
    </div>
  );
}

export default SunTime;
