import React from 'react';

function Show4Days(props) {
    

    return(
        <div>
            <p><b>Date:</b> {props.date}</p>
            <p><b>Forecast:</b> {props.forecast}</p>
            <p><b>Min temperature:</b> {props.minTemp}</p>
            <p><b>Max temperature:</b> {props.maxTemp}</p>
            <hr></hr>
        </div>
    )
}

export default Show4Days;