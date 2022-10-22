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

// useEffect(()=>{
//   console.log("this is all spots",spots)
// },[spots])
  //   onClick={() => {
  const login = (!user) ? false : true
  //     // if (!login) return ("please log in first")
  if (!spots) return null;
  return (
    <main>
      <section className='spot-wrap'>
        <div className='list-container'>
          
          <div className='imglayout'>
            {spots.map((spot) => (
              <div key={spot.id} id="container" >
                <div className='spotImages'>
                  <Link to={`/spots/${spot.id}`}>
                    <img spot={spot} className="img" src={spot.previewImage} />
                    {/* <img spot={spot} className="img" src={spot?.Images[0]?.url} /> */}
                  </Link>
                </div>
                <div id="detail">
                  <div className='smalltitle'>
                    <Link to={`/spots/${spot.id}`} className="spotname" >{spot.name}, {spot.state}</Link>
                  </div>
                  <div className='rating'>
                    ★ {(spot?.avgRating)?.toFixed(1)}
                    {/* ★ {(spot.avgRating)} */}
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