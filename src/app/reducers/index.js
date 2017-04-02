import { resolve, reject } from 'redux-simple-promise';

const INITIAL_STATE = { all: {} };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case resolve('FETCH'): {
        const data = action.data;
        return { ...state, all: data };
      }

      default:
        return state;
  }
}