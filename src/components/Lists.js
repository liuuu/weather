import React, { PropTypes } from 'react';
import Chart from './Chart.js';
import BaiduMap from './BaiduMap.js';


class Lists extends React.Component {

  renderCity(cityData){
      const temps=cityData.list.map(weather => weather.main.temp - 273);
      const pressures=cityData.list.map(weather => weather.main.pressure);
      const humidities=cityData.list.map(weather => weather.main.humidity);
      const {lon, lat}=cityData.city.coord;

    return (
      <tr key={cityData.city.name}>
          <td><BaiduMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" unit="℃"/></td>
          <td><Chart data={pressures} color="red" unit="kPa"/></td>
          <td><Chart data={humidities} color="blue" unit="%"/></td>
      </tr>
    )
  }
  render () {
    console.log(this.props);

    if(this.props.cities.length === 0){
      return <div></div>
    }
    return (
      <table className="table table-hover">
        <thead>
            <tr>
              <th>城市</th>
              <th>温度 (摄氏度)</th>
              <th>大气压</th>
              <th>湿度</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cities.map(this.renderCity)}
          </tbody>

      </table>
    )
  }
}

export default Lists;
