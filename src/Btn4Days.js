import React from 'react';
import DAT_4days from "./datasets/4daysData.json";
import Show4days from "./show4days";
import style from "./styles/Btn24hours.module.css";

function Btn4Days() {
    const weather4Components = DAT_4days.items.map(item => {
        return item.forecasts.map(day => (
            <div key={day.date}>
                <Show4days
                    date={day.date}
                    forecast={day.forecast}
                    minTemp={day.temperature.low}
                    maxTemp={day.temperature.high}
                >
                </Show4days>
            </div>
        ))
    })

    return(
        <div className={style.test}>
            {weather4Components}
        </div>
    )
}

export default Btn4Days;