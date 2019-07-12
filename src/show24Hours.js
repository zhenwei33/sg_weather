import React from 'react';

function Show24Hours(props) {
    

    return(
        <div>
            <p><b>Time: {props.start} to {props.end}</b></p>
            <p><b>West:</b> {props.west}</p>
            <p><b>East:</b> {props.east}</p>
            <p><b>Central:</b> {props.central}</p>
            <p><b>South:</b> {props.south}</p>
            <p><b>North:</b> {props.north}</p>
            <hr></hr>
        </div>
    )
}

export default Show24Hours;