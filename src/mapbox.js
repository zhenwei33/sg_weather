import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import style from "./styles/mapbox.module.css";
import * as DAT_2hours from "./datasets/2hoursData.json";
import Show2Hours from "./show2Hours";
import imgMarker from "./images/map-marker.png"

function Mapbox() {
    const [viewport, setViewport] = useState({
        latitude: 1.375,
        longitude: 103.839,
        width: "80vw",
        height: "100vh",
        zoom: 11
      })
    
    const [selectedArea, setSelectedArea] = useState("");
    // const [weatherData, setWeatherData] = useState(null);

    // useEffect(() => {
    //   getTwoHours();
    //   console.log("Hello")
    // },[]);

    // const getTwoHours = async () => {
    //   const response = await fetch("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast");
    //   const data = await response.json();
    //   setWeatherData(data);
    // }

    const weatherComponents = DAT_2hours.items.map(weather => {
      var i;
      let area, forecast;
      for (i=0; i < 47; i++) {
        if (selectedArea.name === weather.forecasts[i].area){
          area = weather.forecasts[i].area;
          forecast = weather.forecasts[i].forecast;
          break;
        }  
      }
      return(
        <div key={area}>
          <Show2Hours 
            name={area}
            condition={forecast}>
          </Show2Hours>
        </div>
        )
    })

      return (
        <div className={style.map}>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken = {"pk.eyJ1IjoibWVvd21lb3czMzMiLCJhIjoiY2p4djdzMjFjMDIydDNkcGI3aDl0ZXFlOSJ9.hd31Xd3p6sRWwyRmEx_lng"}
            
            onViewportChange={viewport => {
              setViewport(viewport);
            }}
          >
            {DAT_2hours.area_metadata.map(area => (
              <Marker
                key={area.name}
                latitude={area.label_location.latitude}
                longitude={area.label_location.longitude}
              >
                <button className={style.hidden}
                  onClick={e => {
                    e.preventDefault();
                    setSelectedArea(area);
                  }}
                >
                  <img src={imgMarker} alt=""/>
                </button>
              </Marker>
            ))}
            {selectedArea ? (
              <Popup
                latitude={selectedArea.label_location.latitude}
                longitude={selectedArea.label_location.longitude}
                onClose={() => {
                  setSelectedArea("");
                }}
              >
                <div>
                  {weatherComponents}
                  
                </div>
              </Popup>
            ): null}
          </ReactMapGL>
        </div>
      );
}

export default Mapbox;