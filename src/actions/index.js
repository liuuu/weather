

import axios from 'axios';
const API_KEY = '86571adc38f89f2bd66056ddd0f504a6';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER='FETCH_WEATHER';

export function onSearch(cityName){
  const url=`${ROOT_URL}&q=${cityName},cn`;
  const request=axios.get(url);

  return (dispatch) => {
    request.then(data => dispatch({
      type: FETCH_WEATHER,
      payload: data,
    }))
  }
}
