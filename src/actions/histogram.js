import * as actionTypes from '../constants/actionTypes'

/*
 * генераторы действий
 */

export function addLine(text = '') {
  return { type: actionTypes.ADD_LINE, text }
}

export function reDraw(index = '') {
  return { type: actionTypes.REDRAW, index }
}
export function fetchGraphData(url = '') {
  return  { type: actionTypes.FETCH_GRAPH_DATA, url }; /*(dispatch, getState) => {
  	console.log(dispatch);
  }*/

}
export function test() {
  return  { type: actionTypes.SET_VISIBILITY_FILTER, payloads:'payloads...SET_VISIBILITY_FILTER' }; /*(dispatch, getState) => {
  	console.log(dispatch);
  }*/

}

export function setVisibilityFilter(filter) {
  return { type: actionTypes.SET_VISIBILITY_FILTER, filter }
}


// export function reload(text) {
// 	return (dispatch, getState) => {
// 		console.log("this", this);
// 		dispatch(reDraw(text));
// 	};
// }