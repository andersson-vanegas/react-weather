import React from "react";
import './weatherForm.css'

const WeatherForm = (props) => {
    return(
        
        <div className="form">
            <form onSubmit={props.getWeather}>

                 <div className="">
                    <input type='text' name="country" placeholder="ingresa tu pais"
                    className=""/>
                </div>
                <div>
                    <input type='text' name="city" placeholder="ingresa tu ciudad " 
                    className="" autoFocus/>
                </div>

                <button className="buttoncity">
                    Obtener clima de la ciudad
                </button>
            </form>
            
        </div>
    )
}

export {WeatherForm}