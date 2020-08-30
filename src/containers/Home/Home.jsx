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

  return (
    <div className={classes.pageContainer}>
      {
        entity &&
        <div className={classes.Home}>
          <h3>{entity.title}</h3>
          <p>{entity.body}</p>
        </div>
      }
    </div>
  );
};

export default Home;
