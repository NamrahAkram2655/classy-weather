import React from 'react'

const Inputdata = ({ inputLocation, setInputLocation, fetchData }) => {
    return (
        <div>

            <h1 className='heading'>Classy Weather</h1>

            <input type="text" placeholder='Search....' id='input' value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} />

            <button id='btn' onClick={fetchData}>Search</button>


        </div>
    )
}

export default Inputdata
