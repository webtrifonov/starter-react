import { FETCH } from '../actions/actionTypes';
import {reducerGenerator} from '../../utils/store';

const initialState = {
  entity: {},
};

const HANDLERS = {
  [FETCH.ENTITY.START]: (state) => {
    return {
      ...state,
      loading: true
    }
  },
  [FETCH.ENTITY.SUCCESS]: (state, payload) => {
    return {
      ...state,
      loading: false,
      entity: payload.entity
    }
  },
  [FETCH.ENTITY.ERROR]: (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error
    };
  },

}

export default reducerGenerator(initialState, HANDLERS);
