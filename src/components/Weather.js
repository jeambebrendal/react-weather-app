import React from "react";
import { Link } from "react-router-dom";

class Weather extends React.Component {
  render() {
    return this.props.weathers.map(weather => (
      <div key={weather.woeid} className="location">
        {weather.title && (
          <h1>
            <Link to={"/weather/" + weather.woeid}>{weather.title}</Link>
          </h1>
        )}
        {weather.location_type && weather.latt_long && (
          <ul>
            <li>Type: {weather.location_type}</li>
            <li>Latitude and Longitude: {weather.latt_long}</li>
          </ul>
        )}
      </div>
    ));
  }
}

export default Weather;
