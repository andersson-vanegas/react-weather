import React from "react";

const WeatherForm = (props) => {
    return(
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div>
                    <input type='text' name="city" placeholder="le nom de ta ville" 
                    className="form-control" autoFocus/>
                </div>
                <div className="form-group">
                    <input type='text' name="country" placeholder="le nom de votre pays"
                    className="form-control"/>
                </div>
                <button className="btn btn-success btn-block">
                    obtenir la météo
                </button>
            </form>
        </div>
    )
}

export {WeatherForm}