import { resolve, reject } from 'redux-simple-promise';
import {
  FETCH_POST,
  FETCH_PAGE,
  FETCH_POSTS,
  FETCH_POSTS_CATEGORY,
  FETCH_POSTS_TAG
} from '../actions/index';

const INITIAL_STATE = { all: {}, post: {}, category: {}, tag: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case resolve(FETCH_POST): {
      return state;
    }
    
    case resolve(FETCH_PAGE): {
      return state;
    }

    case resolve(FETCH_POSTS): {
      const data = action.data;
      return { ...state, all: data };
    }

    case resolve(FETCH_POSTS_CATEGORY): {
      return state;
    }

    case resolve(FETCH_POSTS_TAG): {
      return state;
    }

    default:
      return state;
  }
}