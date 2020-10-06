import {
  SET_PARKS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT,
  POST_ACTIVITY,
  SET_PARKACTIVITY,
  SET_ARTICLES
} from '../types';

const initialState = {
  parks:[],parksAc:[],articles:[],
  park:{},parksActivity:{},article:{},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };

    case SET_PARKS:
      return {
        ...state,
        parks: action.payload,
        loading: false
      };


    case SET_PARKACTIVITY:
      return {
        ...state,
        parksAc: action.payload,
        loading: false
      };

    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };


    case SET_SCREAM:
      return {
        ...state,
        park: action.payload
      };

    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.parks.findIndex(
        (park) => park.parkId === action.payload.parkId
      );
      state.parks[index] = action.payload;
      if (state.park.parkId === action.payload.parkId) {
        state.park = action.payload;
      }
      return {
        ...state
      };

    case DELETE_SCREAM:
      index = state.parks.findIndex(
        (park) => park.parkId === action.payload
      );
      state.parks.splice(index, 1);
      return {
        ...state
      };




    case POST_SCREAM:
      return {
        ...state,
        parks:[action.payload, ...state.parks]
      };

    case POST_ACTIVITY:
      return {
        ...state,
        parksAc:[action.payload, ...state.parksAc]
      };



    case SUBMIT_COMMENT:
      return {
        ...state,
        park: {
          ...state.park,
          comments: [action.payload, ...state.park.comments]
        }
      };
    default:
      return state;
  }
}
