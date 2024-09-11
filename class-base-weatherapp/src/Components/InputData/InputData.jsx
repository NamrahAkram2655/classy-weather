import React, { Component } from 'react'

export class InputData extends Component {
    render() {
        return (
            <div>

                <h1 className='heading'>Classy Weather</h1>

                <input type="text" placeholder='Searh...' id='input' onChange={this.props.inputHandler} value={this.props.location}/>

                <button id='btn' onClick={this.props.fetchWeather}>Search</button>

            </div>
        )
    }
}

export default InputData
