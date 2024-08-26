import { React, useState } from 'react'

export default function FetchCustom() {

  const [weather, setWeather] = useState([]);
  const [inputLocation, setInputLocation] = useState("London");
  // Function for fetching data

  // ye button pr call krna tha is liyai aise kia hai , no need on every render need only on each button click

  const fetchData = async () => {
    try {

      //7days data fetched 
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputLocation}`)

      const data = await res.json();

      if (!data.results) {
        throw new Error("Loation not found");
      }

      console.log(data);

      console.log(data.results.at(0));

      const { longitude, latitude, timezone } = data.results.at(0);

      const weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`);

      const data2 = await weatherData.json();

      setWeather(data2.daily);

    }
    catch (error) {
      console.error("The error is ", error);
    }

  }
  return { inputLocation, setInputLocation, weather, fetchData };
}
