import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input
      type="text"
      name="location"
      required
      placeholder="Enter the location..."
    />
    <button>Get weather</button>
  </form>
);

export default Form;
