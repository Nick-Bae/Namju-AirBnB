// import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// import aphroditeInterface from 'react-with-styles-interface-aphrodite';
// import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

// ThemedStyleSheet.registerInterface(aphroditeInterface);
// ThemedStyleSheet.registerTheme(DefaultTheme);
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

export const Booking = ({spotId}) => {
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

    // const bookings = Object.values(useSelector(state => state.booking))
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState();
    const [errors, setErrors] = useState([]);
    const [guestNum, setGuestNum] = useState(0);
    const [guestShow, setGuestShow] = useState(false);
    const [reservedDate, setReservedDate] = useState(0);

    // console.log("bookings",bookings)
    // const login = (!user) ? alert("Please log in") : true
    // const permission = spot.owner.id === user.id ? setOwner(true) : setOwner(false);
    useEffect(()=>{
        dispatch(getBookingBySpotId(id))
    },[dispatch, location])

    // useEffect(()=>{
    //     dispatch()
    // },[dispatch, reservedDate])

    // const isBlocked = date => {
    //     let bookedRanges = [];
    //     let blocked;
    //     bookings.map(booking => {
    //       bookedRanges = [...bookedRanges, 
    //       moment.range(booking.startDate, booking.endDate)]
    //      }
    //     );
    //   blocked = bookedRanges.find(range => range.contains(date));
    //   return blocked;
    // };

    
   
    return (
    <>
       <DateRangePicker
  startDate={startDate} // momentPropTypes.momentObj or null,
  startDateId="startDate" // PropTypes.string.isRequired,
  endDate={endDate} // momentPropTypes.momentObj or null,
  endDateId="endDate" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => { 
    setStartDate(startDate) 
    setEndDate(endDate) 
    }} // PropTypes.func.isRequired,
  focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput =>  setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
/>
            


    </>
    )

}

export default Booking