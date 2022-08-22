import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import thunk from 'redux-thunk';
import Spotdetail from '../Spotdetail'
import { getAllSpots } from '../../store/spot';
import {useState} from 'react'
import './index.css'

const SpotList = () => {
  const dispatch = useDispatch();
  const spotsObj = useSelector(state => state.spot);
  const spots = Object.values(spotsObj);
  const [showSpot, setShowSpot]= useState(true);

  const openSpot = () => {
    console.log(" before true")
    
    if (!showSpot) return;
    setShowSpot(true);
    console.log("after false")
  }
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  useEffect(() => {
    if (showSpot) return;
        setShowSpot(false);
        console.log('after effect false')
  }, [showSpot] );

  return (
    <div>
      <h1>Spot List</h1>
     {showSpot && (
      
      <div className='imglayout'>
        {spots.map(({ id, name, previewImage }) => (
          <ul >
            <li key={id} className='imglist'>
              <NavLink to={`/spots/${id}`} onClick={openSpot}>{name}</NavLink>
            </li>

            {/* style={{ backgroundImage: `('${previewImage}')` }} */}
           <Link to={`/spots/${id}`}>

            <img className="img" src={previewImage} />
           </Link>
          </ul>
        ))}
      </div>
      )} 

        
      <Route path='/spots/:id'>
      {/* {showSpot && ( */}
          <Spotdetail  showSpot={false}/>
          {/* )} */}
          </Route>
      
    </div>
  );
};

export default SpotList;


