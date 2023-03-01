import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { getBookingByUser } from '../../store/booking';
import BookingDetail from './BookingDetail';

export const BookingByUser =()=> {
    const dispatch = useDispatch();
    const history = useHistory();
    const bookings = Object.values(useSelector(state => state.booking))

    console.log("bookings", bookings)

    useEffect(() => {
        dispatch(getBookingByUser());
      }, [dispatch]);

    let startDate
    let endDate
    return (
        <main>
      <section className='spot-wrap'>
        <div className='list-container'>
          
          <div className='imglayout'>
            {bookings.map((booking) => (
              <div key={booking.id} id="container" >
                {/* <Carousel  */}
                  {/* className='carouselContainer'
                  showArrows={true} showThumbs={false} width={"100%"} showStatus={false}
                  onClickItem={()=>history.push(`/spots/${booking.spotId}`)}>  */}
                      {booking.Spot?.previewImage?.map((image)=>(
                        <div className='spotImages'>
                          <Link to={`/spots/${booking.spotId}`}>
                              {/* <div> */}
                              {/* <img spot={spot} className="img" src={image.url} /> */}
                              <img spot={booking.Spot} className="img" src={image.url} />
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