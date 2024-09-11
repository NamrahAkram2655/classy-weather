import React, { Component } from 'react'

export class DisplayData extends Component {


    render() {
        return (
            <div className='weatherbox'>
                <p>{this.props.weatherCodeToIcon(this.props.codes)}</p>
                <p>{this.props.index !== 0 ? this.props.formatDateToDay(this.props.dates) : "Today"}</p>
                <p>{this.props.max} &deg;-{this.props.min} &deg;</p>

            </div>
        )
    }
}

export default DisplayData
