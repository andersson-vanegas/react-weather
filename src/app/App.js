import React, { Component } from "react";
import './app.css'
import { WeatherInfo } from "../components/weatherInfo";
import { WeatherForm } from "../components/weatherForm";
import { WEATHER_KEY } from "./keys";




class App extends Component {

    state ={
        temperature: '',
        description:'',
        humidity:'',
        wind_speed:'',
        city:'',
        country:'',
        error: null
    }


  getWeather = async(e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    
    if(cityValue && countryValue){
        const API_URl = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
        const response = await fetch(API_URl);
        const data = await response.json();
        console.log(this.state);
    
        this.setState({
            temperature: data.main.temp,
            description:data.weather[0].description,
            humidity:data.main.humidity,
            wind_speed:data.wind.speed,
            city:data.name,
            country:data.sys.country,
            error: null
        });
    } else{
        this.setState({error: 'Por favor ingresa uan ciudad y un pais'})
    }
  }

  render() {
    return (
      
      <React.Fragment>
      <nav>
      
      </nav>
      <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
      <div className="">
        <div className="">
          <div className=" ">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo  {...this.state}/>
            
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export { App };
