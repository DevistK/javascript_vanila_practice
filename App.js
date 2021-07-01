import React, { useEffect, useState } from 'react';
import { Alert, Text , StyleSheet} from 'react-native';
import Loader from "./Loader"
import Weather from "./Weather"
import * as Location from 'expo-location';
import axios from 'axios';
import {API_WEATHER} from "@env"

const API_KEY = API_WEATHER

export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [temp, setData] = useState({}) 
  useEffect(()=>{

    getWeather = async (latitude, longitude)=>{
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
      setLoading(false)
      setData(data)
      console.log(data)
    }

    getLocation = async ()=>{
      try {
        const response = await Location.requestForegroundPermissionsAsync();
        const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync() 
        getWeather(latitude, longitude)
        // 날씨 API get
      } catch(error){
        Alert.alert("bad Status", '위치를 찾을 수 없습니다.')
      }
    } 
    getLocation();
  }, [])
  return (    
    isLoading ? 
    <Loader /> :
    <Weather temp={Math.round(temp.main?.temp)}/>
  );
}
