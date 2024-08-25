import React from 'react'
import DisplayData from '../DisplayData/DisplayData'

const WeatherDetails = ({ weather, inputLocation, formatDateToDay, weatherCodeToIcon }) => {

    const { temperature_2m_max: max, temperature_2m_min: min, time: dates, weathercode: codes } = weather;

    return (
        <div>
            <h3 className='heading'>Weather For {inputLocation}</h3>

            <div className='weatherdata'>

                {dates.map((date, index) => {
                    return <DisplayData dates={dates[index]} max={max[index]} min={min[index]} codes={codes[index]} index={index} inputLocation={inputLocation} formatDateToDay={formatDateToDay} weatherCodeToIcon={weatherCodeToIcon} />
                })}

            </div>
        </div>
    )
}

export default WeatherDetails
