import {
  SEARCH_PARKS,
} from '../types';

export const searchItem = (SearchItem) => (dispatch) => {
  dispatch({
    type: SEARCH_PARKS,
    payload: SearchItem
  });
};

// Get all screams
// export const getParks = () => (dispatch) => {
//   dispatch({ type: LOADING_DATA });
//   axios
//     .get('/parks')
//     .then((res) => {
//       dispatch({
//         type: SET_PARKS,
//         payload:res.data
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: SET_PARKS,
//         payload: []
//       });
//     });
// };





// Unlike a scream
// export const unlikeScream = (parkId) => (dispatch) => {
//   axios
//     .get(`/park/${parkId}/unlike`)
//     .then((res) => {
//       dispatch({
//         type: UNLIKE_SCREAM,
//         payload: res.data
//       });
//     })
//     .catch((err) => console.log(err));
// };


