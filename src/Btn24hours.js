import React from 'react';
import style from "./styles/Btn24hours.module.css";
import DAT_24hours from "./datasets/24hoursData.json";
import Show24hours from "./show24Hours";

function Btn24Hours() {
    const weather24Components = DAT_24hours.items.map(item => {
        return item.periods.map(period => (
            <div key={period.time.start}>
                <Show24hours
                    start={period.time.start}
                    end={period.time.end}
                    west={period.regions.west}
                    east={period.regions.east}
                    central={period.regions.central}
                    south={period.regions.south}
                    north={period.regions.north}
                >
                </Show24hours>
            </div>
        ))
    })

    return(
        <div className={style.test}>
            {weather24Components}
        </div>
    )
}

export default Btn24Hours;