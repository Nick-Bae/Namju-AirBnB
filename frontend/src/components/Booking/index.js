import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";
import { getSpotBySpotId } from "../../store/spot"
import { useParams, useLocation, Route, Redirect, NavLink } from 'react-router-dom';
// import ImgsViewer from "react-images-viewer";
import { useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { useDispatch } from 'react-redux';
import { deleteSpot } from "../../store/spot";
import { useHistory } from 'react-router-dom';
import ReviewFormModal from "../ReviewModal";
import ReviewDisplay from "../ReviewModal/ReviewDisplay";
import { getSpotReviews } from "../../store/comment";
import { likeStory } from "../../store/likeStory";
import { createBooking } from '../../store/booking';
import Moment from 'moment';
import { extendMoment } from "moment-range";
import { getBookingBySpotId } from '../../store/booking';
import "./booking.css"

export const Booking = ({spotid}) => {
    const dispatch = useDispatch();
    const moment = extendMoment(Moment);
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id]);
    const user = useSelector(state => state.session.user)
    // console.log("user info",user.id)
    const permission = spot?.ownerId !== user?.id ? false : true
    const review = useSelector((state) => state.review)

    const [showSpot, setShowSpot] = useState(false);
    const [owner, setOwner] = useState(true);

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = spot?.image?.map((image) => image.url)

    const bookings = Object.values(useSelector(state => state.booking))
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState();
    const [errors, setErrors] = useState([]);
    const [guestNum, setGuestNum] = useState(0);
    const [guestShow, setGuestShow] = useState(false);
    const [reservedDate, setReservedDate] = useState(0);

    console.log("bookings",bookings)
    // const login = (!user) ? alert("Please log in") : true
    // const permission = spot.owner.id === user.id ? setOwner(true) : setOwner(false);
    useEffect(()=>{
        dispatch(getBookingBySpotId(id))
    },[dispatch, location])

    // useEffect(()=>{
    //     dispatch()
    // },[dispatch, reservedDate])

    const isBlocked = date => {
        let bookedRanges = [];
        let blocked;
        bookings.map(booking => {
          bookedRanges = [...bookedRanges, 
          moment.range(booking.startDate, booking.endDate)]
         }
        );
      blocked = bookedRanges.find(range => range.contains(date));
      return blocked;
    };

    // let sDate
    // let eDate

    // if (!startDate) {
    //     sDate = new Date().toISOString().slice(0, 10);
    //     eDate = new Date().toISOString().slice(0, 10);
    //     const startingDate = new Date(sDate);
    //     const endingDate = new Date(eDate);
    
    //     let differenceTime = endingDate.getTime() - startingDate.getTime();
    //     reservedDate = differenceTime / (1000*3600 * 24);
        
    // } else if (startDate) {
        // const sDate = new Date(startDate._d).toISOString().slice(0, 10);
        // const eDate = new Date(endDate?._d).toISOString().slice(0, 10);
        // const startingDate = new Date(sDate);
        // const endingDate = new Date(eDate);
    
        // let differenceTime = endingDate.getTime() - startingDate.getTime();
        // let reservedDate = differenceTime / (1000*3600 * 24);      
    // }
    
    const reserve = async (e) =>{
        e.preventDefault();

        const sDate = new Date(startDate._d).toISOString().slice(0, 10);
        const eDate = new Date(endDate?._d).toISOString().slice(0, 10);
        // const startingDate = new Date(sDate);
        // const endingDate = new Date(eDate);
    
        // let differenceTime = endingDate.getTime() - startingDate.getTime();
        //  reservedDate = differenceTime / (1000*3600 * 24); 

        if (!user) {
            alert("please log in") 
        } else {
            const bookingInfo = {
                spotId: spotid,
                userId: user.id,
                startDate: sDate, endDate: eDate
            } 
            const booking = await dispatch(createBooking(bookingInfo))
                 .catch(async(res)=>{
                     const data = await res.json();
                     if (data) setErrors(data.message) 
                 })
            // history.push({
            //     pathname:'/bookings/confirm',
            //    state: bookingInfo 
            // });
            history.push(`/bookings/current`)
        }
        // dispatch(createBooking(booking))
    }

    const guestNumPlus = (e) => {
        setGuestNum(guestNum+1)
    }
    const guestNumMinus = (e) => {
        guestNum > 0 ? setGuestNum(guestNum-1) : setGuestNum(0)
    }
    const serviceFee = 60;
    return (
    <>
        <div className='errorBookingMessage'>{errors}</div>
        <div className='bookingContainer'>
            <DateRangePicker
                startDate={startDate}
                startDateId="start-date"
                endDate={endDate}
                endDateId="end-date"
                onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                    // let sDate = new Date(startDate._d).toISOString().slice(0, 10);
                    // let eDate = new Date(endDate._d).toISOString().slice(0, 10);
                    // let startingDate = new Date(sDate);
                    // let endingDate = new Date(eDate);
                
                    // let differenceTime = endingDate.getTime() - startingDate.getTime();
                    // setReservedDate(differenceTime / (1000*3600 * 24)); 
                    const dayDiff = endDate?.diff(startDate.clone().startOf('day').hour(12), 'days');
                    setReservedDate(dayDiff); 
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                startDatePlaceholderText="Check-In"
                endDatePlaceholderText="Check-Out"
                // isDayBlocked={isBlocked}
                // initialStartDate={new Date().toJSON().slice(0,10).replace(/-/g,'/')}
                // noBorder
            />
            <div className='guestNum'>
                {/* <div className='guestLabel'>

                    <div >
                        Guest
                    </div>
                    <div onClick={() => setGuestShow(!guestShow)}>
                        {guestShow ? <i className="fa fa-angle-down"></i> 
                        : <i className="fa fa-angle-up"></i>} 
                    </div>
                </div> */}
                {guestShow && <div className='guestSelect'>
                    <div>
                        Adults
                        <button onClick={guestNumMinus}>-</button>
                        {guestNum}
                        <button onClick={guestNumPlus}>+</button>
                    </div>
                    <div>Children</div>
                    <div>Infants</div>
                    <div>Pets</div>
                </div>}
            </div>
        </div>
    
        <div className='reserveBtContainer'>
            <button className='reserveBt' onClick={reserve}>Reserve</button>
        </div>
        <div className='calForCost'>
            <div className='priceNights'> ${spot.price} x {reservedDate} nights  </div>
            <div className='beforeCost'> ${spot.price*reservedDate}</div> 
        </div>
        <div className='serviceFeeTotal'>
            <div className='serviceFee'> Servie fee</div>
            <div> ${serviceFee}</div>
        </div>
        <div className='totalCost'>
            Total before taxes
            <div>
                ${serviceFee+(spot.price*reservedDate)}
            </div>
        </div>
        

    </>
    )

}

export default Booking