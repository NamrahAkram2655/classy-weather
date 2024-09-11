import React, { Component } from 'react'
import DisplayData from '../DisplayData/DisplayData';

export class WeatherDetails extends Component {


    render() {
        const { temperature_2m_max: max, temperature_2m_min: min, time: dates, weathercode: codes } = this.props.weather;
        return (
            <div>

                <h3 className='heading'>Weather For </h3>

                <div className='weatherdata'>
                    {dates.map((date, index) => {
                        return <DisplayData dates={dates[index]} max={max[index]} min={min[index]} codes={codes[index]} formatDateToDay={this.props.formatDateToDay} weatherCodeToIcon={this.props.weatherCodeToIcon} />
                    })}

                </div>
            </div>
        )
    }
}

export default WeatherDetails
