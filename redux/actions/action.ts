import {http} from '../http';
import { Dispatch } from 'redux';

const getCountry = (inp: string, navigation: any) => (dispatch: Dispatch) => {
  return http.get(`https://restcountries.eu/rest/v2/name/${inp}`)
  .then(country => {
    dispatch({
      type: 'SET_COUNTRY',
      data: country
    })
    navigation.navigate('Country');
  })
}

const getCountryDetails = (capital: string, navigation: any) => (dispatch: Dispatch) => {
  return http.get(`http://api.weatherstack.com/current?access_key=8fc0f6f867d13266b88ffe934e0da0e4&query=${capital}`).then(weather => {
    console.log(':::::::::::::::::::::::::::::::::::::::')
    console.log(weather.data)
    dispatch({
      type: 'SET_WEATHER',
      data: weather
    })
    navigation.navigate('Weather');
  })
}

export {
  getCountry,
  getCountryDetails
}