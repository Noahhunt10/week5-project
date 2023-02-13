import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    let display = useSelector(selectDisplay)
    let latitude = display.capitalInfo.latlng[0]
    let longitude = display.capitalInfo.latlng[1]
  
    useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${latitude}, ${longitude}` },
        headers: {
          'X-RapidAPI-Key': 'bc462f9a21msh7227004d2580db8p1ac16cjsn72da2058b13b',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data, 'WEATHER');
          setWeather(response.data)
          console.log(weather)
      }).catch(function (error) {
          console.error(error);
      });
   },[])

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current.condition.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f}F</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current.feelslike_f}F</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>{weather?.current.wind_mph} MPH</td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
