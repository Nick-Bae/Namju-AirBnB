import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteBooking } from '../../store/booking';

export const BookingDetail =({booking})=> {
    const dispatch = useDispatch();

    let startingDate = new Date(booking.startDate);
    let endingDate = new Date(booking.endDate);

    let differenceTime = endingDate.getTime() - startingDate.getTime();
    let bookingDate = (differenceTime / (1000*3600 * 24)); 

 
    const bookingDelete = ()=>{
        dispatch(deleteBooking(booking.id))
    }
    const total = booking?.Spot?.price*bookingDate;
    const totalInNumberFormat = new Intl.NumberFormat("en-US").format(total)
    return (
        <>
        <div id="bookingDetail">
                  <div className='smalltitle'>
                        <div>
                            <Link to={`/spots/${booking.spotId}`} className="spotName" >{booking?.Spot?.name}, {booking?.Spot?.state}</Link>
                        </div>
                        <div>
                            <button className='bookingDelete' onClick={bookingDelete}>delete</button>
                        </div>
                  </div>
                  
                  <div className='bookingStartDates'>
                        <div>
                        Start date
                        </div>
                        <div>
                        {booking.startDate}
                        </div>
                  </div>
                  <div className='bookingEndDates'>
                        <div>
                        End date
                        </div>
                        <div>
                        {booking.endDate}
                        </div>
                  </div>
                <div className='bookingTotalPrice'>
                    <div>
                    ${booking?.Spot?.price} x {bookingDate}nights
                    </div>
                    <div>
                    ${totalInNumberFormat}
                    </div>
                </div>
                </div>
        </>
    )
}

export default BookingDetail