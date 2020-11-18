import React,{useState} from 'react'
import {fetchWeather} from './api/fetchWeather'
import './App.css'
const App =()=>{
      const [cityName, setCityName] = useState('')
    return(
        <div className="main-container">
         <input 
             type="text"
             className="search"
             placeholder="Search..."
             value={cityName}
             onChange={(e)=>{
               setCityName(e.target.value)
             }}
         />
        </div>
    )
}


export default App