import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory, Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spot';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react'
import './index.css'
// import Transfer fr

const SpotList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const spotsObj = useSelector(state => state.spot);
  const spots = Object.values(spotsObj);
  const user = useSelector(state => state.session.user)
  // const spotImg = useSelector(state => state.spot[id].image);
  console.log ("spots",spots)
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

// useEffect(()=>{
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
                <Carousel 
                  className='carouselContainer'
                  showArrows={true} showThumbs={false} width={"100%"} showStatus={false}
                  onClickItem={()=>history.push(`/spots/${spot.id}`)}> 
                      {spot?.previewImage?.map((image)=>(
                        <div className='spotImages'>
                          <Link to={`/spots/${spot.id}`}>
                              {/* <div> */}
                              <img spot={spot} className="img" src={image.url} />
                              <p className="legend"></p>
                              {/* </div> */}

                            {/* <img spot={spot} className="img" src={spot?.Images[0]?.url} /> */}
                          </Link>
                        </div>
                      ))}
                </Carousel>
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