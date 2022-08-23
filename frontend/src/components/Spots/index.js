import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spot';
import { useState } from 'react'
import Fab from '../Fab'
import './index.css'

const SpotList = () => {
  const dispatch = useDispatch();
  const spotsObj = useSelector(state => state.spot);
  const spots = Object.values(spotsObj);
  const [showSpot, setShowSpot] = useState(true);

  // const newSpotId = spots[spots.length-1].id

  // console.log(newSpotId)

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Spot List</h1>
      <NavLink to={`/spots/new`} className="spotnew" >Add New Spot</NavLink>

      {/* <Fab hidden={showForm} onClick={()=> setShowForm(true)} />
      {showSpot && ( */}

        <div className='imglayout'>
          {spots.map(({ id, name, previewImage }) => (
            <ul >
              <li key={id} className='imglist'>
                {/* <NavLink to={`/spots/${id}`} onClick={openSpot}>{name}</NavLink> */}
                <NavLink to={`/spots/${id}`} className="spotname" >{name}</NavLink>
              </li>

              {/* style={{ backgroundImage: `('${previewImage}')` }} */}
              <Link to={`/spots/${id}`}>

                <img className="img" src={previewImage} />
              </Link>
            </ul>
          ))}
        </div>
      {/* )} */}

      
    </div>

  );
};

export default SpotList;

