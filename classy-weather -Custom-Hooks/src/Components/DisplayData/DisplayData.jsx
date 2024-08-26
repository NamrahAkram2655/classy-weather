import React from 'react'

const DisplayData = ({ max, min, dates, formatDateToDay, index, weatherCodeToIcon, codes }) => {
    return (
        <div className='weatherbox'>
            <p>{weatherCodeToIcon(codes)}</p>
            <p>{index !== 0 ? formatDateToDay(dates) : "Today"}</p>
            <p>{max} &deg;-{min} &deg;</p>

        </div>
    )
}

export default DisplayData
