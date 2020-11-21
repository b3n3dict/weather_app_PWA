import React,{useState} from 'react'
import {fetchWeather} from './api/fetchWeather'
import './App.css'
const App =()=>{
      const [cityName, setCityName] = useState('')
      const [weather,setWeather] = useState({})
      const search = async(e)=>{
           if(e.key === 'Enter'){
            const data = await fetchWeather(cityName)
              setWeather(data)
              setCityName('')
           }
      }
    return(
        <div className='main-container'> 
         <input 
             type="text"
             className="search"
             placeholder="Search..."
             value={cityName}
             onChange={(e)=>{
               setCityName(e.target.value)
             }}
            onKeyPress={search}
         />
               {weather.main && (
                   <div className={(weather.main.temp > 16) ? 'city warm' : 'city'}> 
                          <h2 className="city-name">
                              <span>{weather.name}</span>
                              <sup>{weather.sys.country}</sup>
                          </h2>
                          <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                            <p>Feels Like:{Math.round(weather.main.feels_like)}
                            <sup>&deg;C</sup></p>
                          </div>
                          <div className="info">
                          <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                          <p>{weather.weather[0].description}</p>
                          </div>
                    </div>
               )}
        </div>
    )
}


export default App