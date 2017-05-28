import React, { PropTypes } from 'react'

class BaiduMap extends React.Component {
  componentDidMount(){

    console.log('render map');
    var map = new window.BMap.Map(this.map);    // 在DOM节点上创建Map实例
	  map.centerAndZoom(new window.BMap.Point(this.props.lon, this.props.lat), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
  }

  render () {

    return (
      <div  ref={(comp) => this.map=comp}></div>
    )
  }
}

export default BaiduMap;
