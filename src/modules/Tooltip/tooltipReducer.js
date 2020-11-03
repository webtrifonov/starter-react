import {reducerGenerator} from '../../utils/store';
import {TOGGLE_TOOLTIP} from './tooltipActionTypes';

const HANDLERS = {
  [TOGGLE_TOOLTIP]: (state, {message}) => {
    return {
      ...state,
      visible: !state.visible,
      message: message ?? ''
    };
  },
};

const initialState = {
  visible: false,
  message: '',
};

export default reducerGenerator(initialState, HANDLERS);
