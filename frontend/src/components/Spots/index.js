import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import thunk from 'redux-thunk';
import SingleSpot from '../SingleSpot'
import { getAllSpots } from '../../store/spot';

const SpotList = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state=>state.spot.lists);
 console.log(spots)
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  return (
    <div>
      <h1>Spot List</h1>
      <ol>
        {spots.map(({ id, name }) => (
          <li key={id}><NavLink to={`/article/${id}`}>{name}</NavLink></li>
        ))}
      </ol>

      <Switch>
        <Route path='/spots/:id'>
          <SingleSpot spots={spots} />
        </Route>
      </Switch>
    </div>
  );
};

export default SpotList;


