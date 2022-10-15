import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spot';
import { useState } from 'react'
import './index.css'
// import Transfer fr

const SpotList = () => {
  const dispatch = useDispatch();
  const spotsObj = useSelector(state => state.spot);
  const spots = Object.values(spotsObj);
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);


//   onClick={() => {
    const login = (!user) ? false : true
//     // if (!login) return ("please log in first")

  return (
    <main>
      <section className='spot-wrap'>
        <div className='list-container'>
          {/* <h1>Find Place</h1> */}
        {(login) &&(
          <div className="addnewspot">
          <i class="fa-solid fa-circle-plus"></i>
          <NavLink to={`/spots/new`} className="spotnew">Add New Spot</NavLink>
          </div>
        )}

          

          {/* <Fab hidden={showForm} onClick={()=> setShowForm(true)} />
      {showSpot && ( */}

          <div className='imglayout'>
            {spots.map((spot) => (
              <ul id="thum" >

                <Link to={`/spots/${spot.id}`}>
                  <img spot={spot} className="img" src={spot.previewImage} />
                </Link>
                {/* <li key={spot.id} className='imglist'>
                </li> */}
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                    </tr>
                    <tr id="detail">
                      <td className='smalltitle'>
                        <Link to={`/spots/${spot.id}`}  className="spotname" >{spot.name}, {spot.state}</Link>
                      </td>
                      <td className='rating'>
                        ★ {(spot.avgRating).toFixed(1)}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        ${spot.price} night
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpotList;