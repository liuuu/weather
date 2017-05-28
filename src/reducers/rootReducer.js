import { FETCH_WEATHER } from '../actions/index';
import { combineReducers} from 'redux';

function cityReducer(state=[], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data]


    default:
      return state;

  }
  return state;
}

 const rootReducer = combineReducers({
   cities: cityReducer,
 })

 export default rootReducer;
