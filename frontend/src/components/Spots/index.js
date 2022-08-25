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
  }, [dispatch]);

  const [showForm, setShowForm] = useState(false);

  return (
    <section className='spot-wrap'>
      <div className='list-container'>
        <h1>Find Place</h1>
        <NavLink to={`/spots/new`} className="spotnew" >Add New Spot</NavLink>

        {/* <Fab hidden={showForm} onClick={()=> setShowForm(true)} />
      {showSpot && ( */}

        <div className='imglayout'>
          {spots.map((spot) => (

            <ul >

              <Link to={`/spots/${spot.id}`}>
                <img spot={spot} className="img" src={spot.previewImage} />
              </Link>
              <li key={spot.id} className='imglist'>
              </li>
              <table className='table'>
                <tr>
                  <th className='table-1col'>
                    <Link to={`/spots/${spot.id}`} spots={spots} className="spotname" >{spot.name}</Link>
                  </th>
                  <th className='table-2col'>
                    ★ {spot.avgRating}
                  </th>
                </tr>
                <tr>
                  <td>
                    ${spot.price} night
                  </td>
                </tr>
              </table>

            </ul>

          ))}
        </div>

      </div>
    </section>
  );
};

export default SpotList;