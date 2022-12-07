import React from "react";
import './weatherInfo.css'

const WeatherInfo = (props) =>{

    console.log(props);
    return(
    <React.Fragment>
        {
            props.error &&
            <div className="">
                <p>{props.error}</p>
            </div>
        }
        {
            props.temperature ?
            <div className="props">
            <p className="location">
                {props.city},{props.country}
            </p>
            <p className="temperature">
                {props.temperature} °C
            </p>

            <div className="description">
            <p>
                description: {props.description}
            </p>
            <p>
                Humidity:{props.humidity}
            </p>
            <p>
                Wind speed: {props.wind_speed}
            </p>
            </div>
        </div>
        : 
        <div className="requisitos">
            <p>no hay requisitos</p>
        </div>
        }
    </React.Fragment>
    )
}


export {WeatherInfo}