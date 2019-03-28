import React from "react";

export class WeatherItem extends React.Component {
  componentDidMount() {
    fetch(
      `http://www.metaweather.com/api/location/${
        this.props.match.params.location
      }`
    )
      .then(res => res.json())
      .then(json => this.setState({ location: json.consolidated_weather }));
  }
  state = {
    location: []
  };

  render() {
    return this.state.location.map(weather => (
      <div key={weather.id} className="weather-info">
        <dl>
          <h2>
            {new Date().toISOString().slice(0, 10) == weather.applicable_date
              ? "Today"
              : new Date(weather.applicable_date).toUTCString().split(" ")[1] +
                ", " +
                new Date(weather.applicable_date).toUTCString().split(" ")[2]}
          </h2>
          <dt className="hide">Weather</dt>
          <dd className="icon">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/" +
                  weather.weather_state_abbr +
                  ".png"
                }
              />
            </div>
            <span>{weather.weather_state_name}</span>
          </dd>
          <dt className="hide">Temperature</dt>
          <dd>
            Max: {Math.round(weather.max_temp)}°C <br />
            Max: {Math.round(weather.min_temp)}°C
          </dd>
          <dt>Humidity</dt>
          <dd>{weather.humidity}%</dd>
          <dt>Visibility</dt>
          <dd>{Math.round(weather.visibility)}miles</dd>
          <dt>Pressure</dt>
          <dd>{Math.round(weather.air_pressure)}mb</dd>
          <dt>Confidence</dt>
          <dd>{weather.predictability}%</dd>
        </dl>
      </div>
    ));
  }
}

export default WeatherItem;
