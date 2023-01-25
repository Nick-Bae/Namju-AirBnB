// import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// import aphroditeInterface from 'react-with-styles-interface-aphrodite';
// import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

// ThemedStyleSheet.registerInterface(aphroditeInterface);
// ThemedStyleSheet.registerTheme(DefaultTheme);
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";
import { getSpotBySpotId } from "../../store/spot"
import { useParams, Link, Route, Redirect, NavLink } from 'react-router-dom';
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

export const Booking = ({spotId, userId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
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

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState();

    // const login = (!user) ? alert("Please log in") : true
    // const permission = spot.owner.id === user.id ? setOwner(true) : setOwner(false);

    const reserve = (e) =>{
        e.preventDefault();

        console.log ("startDate",startDate)
        const booking = {
            spotId,
            userId,
            startDate, endDate
        } 
        dispatch(createBooking(booking))
    }

    return (
    <>
        <div className='bookingContainer'>
            <DateRangePicker
                startDate={startDate}
                startDateId="start-date"
                endDate={endDate}
                endDateId="end-date"
                onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                startDatePlaceholderText="Check-In"
                endDatePlaceholderText="Check-Out"
            />
            <button className='reserveBt' onClick={reserve}>Reserve</button>
        </div>
        {/* <p>{startDate.map(single=>(
            <p>single</p>
        ))}</p> */}
    </>
    )

}

export default Booking