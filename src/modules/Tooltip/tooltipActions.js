import {TOGGLE_TOOLTIP} from './tooltipActionTypes';

export const toggleTooltip = (payload) => {
  return {
    type: TOGGLE_TOOLTIP,
    payload: payload
  }
}
