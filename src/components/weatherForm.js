import React from "react";

const WeatherForm = (props) => {
    return(
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div>
                    <input type='text' name="city" placeholder="ingresa tu ciudad " 
                    className="form-control" autoFocus/>
                </div>
                <div className="form-group">
                    <input type='text' name="country" placeholder="ingresa tu pais"
                    className="form-control"/>
                </div>
                <button className="btn btn-success btn-block">
                    Obtener clima de la ciudad
                </button>
            </form>
        </div>
    )
}

export {WeatherForm}