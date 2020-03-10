import React, {useEffect} from 'react';
import classes from './Home.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEntityStart} from '../../store/actions/entityActions';

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntityStart(2));
  },  []);
  const entity = useSelector(state => state.entityReducer.entity);
  console.log('entity = ', entity);

  return (
    <div className={`page-container ${classes.Home}`}>
      {
        entity &&
        <div>
          <h3>{entity.title}</h3>
          <p>{entity.body}</p>
        </div>
      }
    </div>
  );
};

export default Home;