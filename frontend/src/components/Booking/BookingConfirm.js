// import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect, useCallback } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';

// export const BookingConfirm =()=> {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const bookings = Object.values(useSelector(state => state.booking))
//     const spots = Object.values(useSelector(state => state.spot))

//     console.log("spots", spots)
//     const bookingSpot = bookings.map(booking=> spots.filter(spot=> spot.id === booking.spotId))
//     // const bookingSpot = [...bookingSpot, ...bookingSpot[1]]

//     console.log("bookingSpot", bookingSpot)
//     console.log("bookings", bookings)

//     return (
//         <main>
//       <section className='spot-wrap'>
//         <div className='list-container'>
          
//           <div className='imglayout'>
//             {bookingSpot.map((spot) => (
//               <div key={spot.id} id="container" >
//                 <Carousel 
//                   className='carouselContainer'
//                   showArrows={true} showThumbs={false} width={"100%"} showStatus={false}
//                   onClickItem={()=>history.push(`/spots/${spot.id}`)}> 
//                       {spot?.previewImage?.map((image)=>(
//                         <div className='spotImages'>
//                           <Link to={`/spots/${spot.id}`}>
//                               {/* <div> */}
//                               <img spot={spot} className="img" src={image.url} />
//                               <p className="legend"></p>
//                               {/* </div> */}

//                             {/* <img spot={spot} className="img" src={spot?.Images[0]?.url} /> */}
//                           </Link>
//                         </div>
//                       ))}
//                 </Carousel>
//                 <div id="detail">
//                   <div className='smalltitle'>
//                     <Link to={`/spots/${spot.id}`} className="spotname" >{spot.name}, {spot.state}</Link>
//                   </div>
//                   <div className='rating'>
//                     ★ {(spot?.avgRating)?.toFixed(1)}
//                     {/* ★ {(spot.avgRating)} */}
//                   </div>
//                 </div>
//                 <div>
//                   <div>
//                     ${spot.price} night
//                   </div>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//     )
// }

// export default BookingConfirm