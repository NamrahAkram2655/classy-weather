import { useEffect, useState } from 'react';
import './App.css';
import Inputdata from './Components/Inputdata/Inputdata';
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';
import FetchCustom from './Components/FetchCustom/FetchCustom';

function App() {

  const formatDateToDay = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short' }; // 'short' for Mon, Tue, etc.
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const weatherCodeToIcon = (code) => {
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

  // const [inputLocation, setInputLocation] = useState("London");
  // const [weather , setWeather] = useState([]);

  // Function for fetching data

  // ye button pr call krna tha is liyai aise kia hai , no need on every render need only on each button click

  // const fetchData = async () => {
  //   try {

  //     //7days data fetched 
  //     const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputLocation}`)

  //     const data = await res.json();

  //     if (!data.results) {
  //       throw new Error("Loation not found");
  //     }

  //     console.log(data);

  //     console.log(data.results.at(0));

  //     const { longitude, latitude, timezone } = data.results.at(0);

  //     const weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`);

  //     const data2 = await weatherData.json();

  //     setWeather(data2.daily);

  //   }
  //   catch (error) {
  //     console.error("The error is ", error);
  //   }

  // }

  const { inputLocation, setInputLocation, weather, fetchData } = FetchCustom();

  return (
    <div className='weather'>
      <div className='box1'>
        <div className='box'>
          <Inputdata inputLocation={inputLocation} setInputLocation={setInputLocation} fetchData={fetchData} />

          {weather.weathercode && <WeatherDetails weather={weather} inputLocation={inputLocation} formatDateToDay={formatDateToDay} weatherCodeToIcon={weatherCodeToIcon} />}

        </div>

      </div>

    </div>
  );
}

export default App;
