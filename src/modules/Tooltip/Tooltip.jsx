import React, {memo, useCallback, useEffect} from 'react';
import s from './Tooltip.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {TOOLTIP_DURATION} from './tooltipActionTypes';
import {toggleTooltip} from './tooltipActions';

const Tooltip = () => {
  const dispatch = useDispatch();
  const { visible, message } = useSelector(state => state.tooltipReducer);

  const closeTooltip = useCallback(() => dispatch(toggleTooltip({message: ''})), [dispatch]);

  useEffect(useCallback(() => {
    if (visible) {
      setTimeout(closeTooltip, TOOLTIP_DURATION);
    }
  }, [visible, closeTooltip]));

  return visible && (
    <div onClick={closeTooltip} className={s.wrapper}>
      <div className={s.tooltip}>
        {message}
      </div>
    </div>
  );
};

export default memo(Tooltip);
