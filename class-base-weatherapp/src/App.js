import React, { Component } from 'react'
import './App.css';
import InputData from './Components/InputData/InputData';
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';

export class App extends Component {

  formatDateToDay = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short' }; // 'short' for Mon, Tue, etc.
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  weatherCodeToIcon = (code) => {
    const icons = new Map([
      [[0], "☀️"],
      [[1], "🌤"],
      [[2], "⛅️"],
      [[3], "☁️"],
      [[45, 48], "🌫"],
      [[51, 56, 61, 66, 80], "🌦"],
      [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
      [[71, 73, 75, 77, 85, 86], "🌨"],
      [[95], "🌩"],
      [[96, 99], "⛈"],
    ]);
    const arr = [...icons.keys()].find((key) => key.includes(code));
    if (!arr) return "NOT FOUND";
    return icons.get(arr);
  };

  inputHandler = (e) => { //no need to bind as it is arrow function
    this.setState({ location: e.target.value });
  }

  constructor(props) {
    super(props);
    this.state = { location: "London", weather: [] }
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  async fetchWeather() {
    try {

      //7days data fetched 
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`)

      const data = await res.json();

      if (!data.results) {
        throw new Error("Loation not found");
      }

      console.log(data);

      console.log(data.results.at(0));

      const { longitude, latitude, timezone } = data.results.at(0);

      const weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`);

      const data2 = await weatherData.json();

      this.setState({ weather: data2.daily });

    }
    catch (error) {
      console.error("The error is ", error);
    }

  }

  render() {
    return (
      <div className='weather'>
        <div className='box1'>
          <div className='box'>

            <InputData location={this.state.location} inputHandler={this.inputHandler} fetchWeather={this.fetchWeather} />

            {this.state.weather.weathercode && <WeatherDetails weather={this.state.weather} formatDateToDay={this.formatDateToDay} weatherCodeToIcon={this.weatherCodeToIcon} />}

          </div>
        </div>
      </div>
    )
  }
}

export default App
