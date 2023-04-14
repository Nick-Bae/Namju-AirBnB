import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, useHistory,useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import BookingDetail from './BookingDetail';
import { getBookingByUser } from '../../store/bookingHistory';

export const BookingByUser =()=> {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const user = useSelector(state => state.session.user)
    const allBookings = Object.values(useSelector(state => state.bookingHistory))
    const bookings = allBookings.filter(booking=> booking.userId === user.id )
    
    

    useEffect(() => {
        dispatch(getBookingByUser());
      }, [dispatch, location]);

   console.log(bookings)
   console.log(user)
    return (
        <main>
      <section className='spot-wrap'>
        <div className='list-container'>
            <div className='bookingUser' style={{fontSize: "40px"}}> {user.username}'s trips </div>
          <div className='imglayout'>
            
            {bookings.map((booking) => (
              <div key={booking.id} id="container" >
                {/* <Carousel  */}
                  {/* className='carouselContainer'
                  showArrows={true} showThumbs={false} width={"100%"} showStatus={false}
                  onClickItem={()=>history.push(`/spots/${booking.spotId}`)}>  */}
                      {booking.Spot?.previewImage?.map((image)=>(
                        <div key={image.id} className='spotImages'>
                          <Link to={`/spots/${booking.spotId}`}>
                              {/* <div> */}
                              {/* <img spot={spot} className="img" src={image.url} /> */}
                              <img  className="img" src={image.url} />
                              <p className="legend"></p>
                              {/* </div> */}

                            {/* <img spot={spot} className="img" src={spot?.Images[0]?.url} /> */}
                          </Link>
                        </div>
                      ))}
                {/* </Carousel> */}

                <BookingDetail booking={booking} />
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    )
}

export default BookingByUser