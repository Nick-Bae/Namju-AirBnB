import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spot';
import { useState } from 'react'
import Fab from '../Fab'
import './index.css'
// import Transfer fr

const SpotList = () => {
  const dispatch = useDispatch();
  const spotsObj = useSelector(state => state.spot);
  const spots = Object.values(spotsObj);
  const [showSpot, setShowSpot] = useState(true);

  
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch] );

  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Spot List</h1>
      <NavLink to={`/spots/new`} className="spotnew" >Add New Spot</NavLink>

      {/* <Fab hidden={showForm} onClick={()=> setShowForm(true)} />
      {showSpot && ( */}

        <div className='imglayout'>
          {spots.map(( spot ) => (
           
           <ul >
              <li key={spot.id} className='imglist'>
                <Link to={ `/spots/${spot.id}`} spots={spots} className="spotname" >{spot.name}</Link>
              </li>

              <Link to={`/spots/${spot.id}`}>

                <img spot={spot} className="img" src={spot.previewImage} />
              </Link>
            </ul>
            
          ))}
        </div>
      
    </div>

  );
};

export default SpotList;