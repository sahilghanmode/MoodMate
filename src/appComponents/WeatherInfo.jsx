import React, { useState } from 'react'

const WeatherInfo = () => {
    const API_KEY='c72518f6ef57702086ffc847e585472b'
    const location=`Nagpur`

    const handleCitySearch=async()=>{
        const cityData=`http://api.weatherstack.com/current?access_key=c72518f6ef57702086ffc847e585472b&query=Nagpur`

        const res=await fetch(cityData);

        console.log(res);
    }

    handleCitySearch
  return (
    <div>
        {handleCitySearch}
    </div>
  )
}

export default WeatherInfo
