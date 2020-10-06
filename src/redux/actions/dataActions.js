import {
  SET_SCREAMS,
  SET_PARKS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
  SET_ERRORS,
  POST_SCREAM,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_SCREAM,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,

  SET_ARTICLES,
  POST_ACTIVITY,
  SET_PARKACTIVITY
} from '../types';
import axios from 'axios';



// Get all screams
export const getParks = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/parks')
    .then((res) => {
      dispatch({
        type: SET_PARKS,
        payload:res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_PARKS,
        payload: []
      });
    });
};


export const getParkActivity = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/parksAc')
    .then((res) => {
      dispatch({
        type: SET_PARKACTIVITY,
        payload:res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_PARKACTIVITY,
        payload: []
      });
    });
};



export const getArticles = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/articles')
    .then((res) => {
      dispatch({
        type: SET_ARTICLES,
        payload:res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ARTICLES,
        payload: []
      });
    });
};



export const getScream = (parkId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/park/${parkId}`)
    .then((res) => {
      dispatch({
        type: SET_SCREAM,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};



// Post a scream
export const postActivity = (newAc) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/parkAc',newAc)
    .then((res) => {
      dispatch({
        type: POST_ACTIVITY,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

// Post a scream
export const postScream = (newPark) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/park',newPark)
    .then((res) => {
      dispatch({
        type: POST_SCREAM,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};



// Like a scream
export const likeScream = (parkId) => (dispatch) => {
  axios
    .get(`/park/${parkId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_SCREAM,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};


// Unlike a scream
export const unlikeScream = (parkId) => (dispatch) => {
  axios
    .get(`/park/${parkId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_SCREAM,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};



// Submit a comment
export const submitComment = (parkId, commentData) => (dispatch) => {
  axios
    .post(`/park/${parkId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};



export const deleteScream = (parkId) => (dispatch) => {
  axios
    .delete(`/park/${parkId}`)
    .then(() => {
      dispatch({ type: DELETE_SCREAM, payload: parkId });
    })
    .catch((err) => console.log(err));
};


export const getUserData = (userName) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userName}`)
    .then((res) => {
      dispatch({
        type: SET_SCREAMS,
        payload: res.data.parks
      });
    })
    .catch(() => {
      dispatch({
        type: SET_SCREAMS,
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
