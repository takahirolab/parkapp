import {
  SEARCH_PARKS
} from '../types';

const initialState = {
  Searchparks:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case  SEARCH_PARKS:
      return {
        ...state,
        Searchparks: action.payload,

      };
    default:
      return state;
  }
}
