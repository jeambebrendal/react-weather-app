import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import WeatherItem from "./components/WeatherItem";

import "./App.css";

class App extends React.Component {
  state = {
    data: []
  };

  getWeather = async e => {
    e.preventDefault();
    const location = e.target.location.value;

    fetch(`http://www.metaweather.com/api/location/search/?query=${location}`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  };

  render() {
    return (
      <Router>
        <div className="weather-app">
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather weathers={this.state.data} />
              </React.Fragment>
            )}
          />
          <Route path="/weather/:location" component={WeatherItem} />
        </div>
      </Router>
    );
  }
}

export default App;
