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
          



          {/* <Fab hidden={showForm} onClick={()=> setShowForm(true)} />
      {showSpot && ( */}

          <div className='imglayout'>
            {spots.map((spot) => (
              <div key={spot.id} id="container" >
                <div className='images'>
                  <Link to={`/spots/${spot.id}`}>
                    <img spot={spot} className="img" src={spot.previewImage} />
                  </Link>
                </div>
                <div id="detail">
                  <div className='smalltitle'>
                    <Link to={`/spots/${spot.id}`} className="spotname" >{spot.name}, {spot.state}</Link>
                  </div>
                  <div className='rating'>
                    ★ {(spot.avgRating)?.toFixed(1)}
                  </div>
                </div>
                <div>
                  <div>
                    ${spot.price} night
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpotList;