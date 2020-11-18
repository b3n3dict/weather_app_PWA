import React,{useState} from 'react'
import {fetchWeather} from './api/fetchWeather'
import './App.css'
const App =()=>{
      const [cityName, setCityName] = useState('')
      const search = async(e)=>{
           if(e.key === 'Enter'){
            const data = await fetchWeather(cityName)
            console.log(data)
           }
      }
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
            onKeyPress={search}
         />

        </div>
    )
}


export default App