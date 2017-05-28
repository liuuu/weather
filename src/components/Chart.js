import React, { PropTypes } from 'react'
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const Chart = (props) => {
  function average(data){
    return (_.round(_.sum(data)/data.length));
  }

  function max(data){
    return _.max(data);
  }

  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}></SparklinesLine>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.data)} {props.unit}{max(props.data)}</div>
    </div>
  )
}

export default Chart
