import React from 'react';
import imgCloudy from "./images/cloudy.svg"
import imgSunny from "./images/sunny.svg"
import imgRainy from "./images/rainy.svg"
import imgWindy from "./images/windy.svg"
import style from "./styles/show2hours.module.css"

function WeatherForecast(props) {
    return(
        <div>
            <p className={style.text}>{props.name}</p>
            <p>
                {props.condition === "Cloudy" && <img src={imgCloudy} alt="" className={style.icon}/>}
                {props.condition === "Sunny" &&  <img src={imgSunny} alt="" className={style.icon}/>}
                {props.condition === "Rainy" &&  <img src={imgRainy} alt="" className={style.icon}/>}
                {props.condition === "Windy" &&  <img src={imgWindy} alt="" className={style.icon}/>}
            </p>
        </div>
    )
}
export default WeatherForecast;