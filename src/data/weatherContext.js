import React from "react";
const WeatherContext = React.createContext();

class WeatherContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = pos => {
    fetch("https://api.darksky.net/forecast/9e08fd43e436b16a18cfdf70a9deb4ca/")
      .then(response => response.json())
      .then(data => data);
  };

  setWeather = info => {
    this.setState({ data: fetchData(info) });
  };

  render() {
    return (
      <WeatherContext.Provider
        value={{ data: this.state.data, setWeather: this.setWeather }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}

export { WeatherContextProvider, WeatherContext };
