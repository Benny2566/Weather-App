import React, { useState, useEffect } from "react";
import "./App.css";
import TopBar from "./compoments/topBar/TopBar";
import GraphSection from "./compoments/graphSection/GraphSection";
import MapSection from "./compoments/mapSection/MapSection";
import DetailsSection from "./pages/detailsSection/DetailsSection";

function App() {
  const [data, setdata] = useState(null);
  const [place, setPlace] = useState(undefined);

  function handleSearch(search) {
    setPlace(search);
    getWeatherInfo(search);
  }

  function getWeatherInfo(place) {
    var proxy = "https://cors-anywhere.herokuapp.com/";
    var latLon = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${
      process.env.REACT_APP_GEOCODE_API_KEY
    }`;
    fetch(latLon)
      .then(response => response.json())
      .then(newData => {
        var darkSky = `https://api.darksky.net/forecast/${
          process.env.REACT_APP_DARKSKY_API_KEY
        }/${newData.results[0].geometry["lat"]},${
          newData.results[0].geometry["lng"]
        }`;
        fetch(proxy + darkSky)
          .then(dsResponse => dsResponse.json())
          .then(weatherData => setdata(weatherData));
      });
  }

  return (
    <div className="app">
      <TopBar handleSearch={handleSearch} />
      <div className="main-container">
        <GraphSection />
        {data ? (
          <DetailsSection data={{ weather: data, place: place }} />
        ) : null}
        <MapSection />
      </div>
    </div>
  );
}

export default App;
