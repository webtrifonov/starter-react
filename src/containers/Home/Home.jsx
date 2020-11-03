import React, {useEffect} from 'react';
import s from './Home.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEntityStart} from '../../store/actions/entityActions';
import {toggleTooltip} from '../../modules/Tooltip/tooltipActions';
import {openModal} from '../../modules/BaseModal/baseModalActions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntityStart({id: 2}));
  },  [dispatch]);
  const entity = useSelector(state => state.entityReducer.entity);
  const openModalHandler = () => {
    dispatch(openModal({
      Content: {
        title: 'Title!!!',
        message: 'Lorem ipsum',
      },
      onClose: () => console.log('onClose')
    }));
  }
  const tooltipHandler = () => {
    dispatch(toggleTooltip({message: 'Tooltip!!!'}))
  }
  return (
    <div className={s.homePage}>
      {
        entity &&
        <div className={s.home}>
          <h3>{entity.title}</h3>
          <p>{entity.body}</p>
        </div>
      }
      <button onClick={openModalHandler}>Modal</button>
      <button onClick={tooltipHandler}>Tooltip</button>
    </div>
  );
};

export default Home;
