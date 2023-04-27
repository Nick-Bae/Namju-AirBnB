import { csrfFetch } from './csrf';

const LOAD = 'booking/LOAD';
const LOADBYUSER = 'booking/LOADBYUSER';
const READ = 'booking/READ';
const CREATE = 'booking/ADD_ONE'
const DELETE = 'booking/DELETE';
const UPDATE = 'booking/UPDATE'

const read = bookings => ({
    type: READ,
    bookings
});
const create = booking => ({
    type: CREATE,
    booking
});
const load = (bookings) => ({
    type: LOAD,
    bookings
});
const loadByUser = (bookings) => ({
    type: LOADBYUSER,
    bookings
});
const deleteOne = bookingId => ({
    type: DELETE,
    bookingId
});
const update = booking => ({
    type: UPDATE,
    booking
});

// export const getSpots =(state)=>Object.values(state.spot)

// export const getAllBookings = () => async dispatch => {
//     const response = await csrfFetch('/api/spots');
//     console.log(response)

//     if (response.ok) {
//         const spots = await response.json();
//         dispatch(load(spots.Spots));
//     }
// };

export const getBookingBySpotId =spotId =>async dispatch =>{
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`)

    if (response.ok) {
        const bookings = await response.json();

        dispatch(read(bookings));
        return bookings;
    };
}

// export const getBookingByUser =()=> async dispatch => {
//     const response = await csrfFetch(`/api/bookings/current`);
//     if (response.ok){
//         const bookings = await response.json();
//         dispatch(loadByUser(bookings));
//         return bookings;
//     }
// }

let newSpot ={}
export const createBooking = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${payload.spotId}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
    const booking = await response.json();
    dispatch(create(booking));
    return booking;
    }
}

export const editBooking = data => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${data.bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const booking = await response.json();
        dispatch(update(booking));
        return booking;
    }
}

export const deleteBooking = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(deleteOne(id));
    }
};


// const initialState = { lists: [] }
export const bookingReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD:
            const spots = action.spots
            spots.forEach((spot) => {
                newState[spot.id] = spot
            })
            // console.log("all spots case", spots)
            return newState;
        case LOADBYUSER:
            const bookingsByUser = action.bookings.Bookings
            bookingsByUser.forEach((booking) => {
                newState[booking.id] = booking
            })
            return newState;
        case READ:
            const bookingsBySpot = action.bookings.Bookings
            bookingsBySpot.forEach((booking, idx) => {
                newState[idx] = booking
            });
            return newState;
        case CREATE:
            newState[action.booking.id] = action.booking;
            return newState;
        case UPDATE:
            newState[action.booking.id] = action.booking
            return newState;
        case DELETE:
            delete newState[action.bookingId]
            // delete newState[action.spot]
            return newState;
        default:
            return state;
    }
}

export default bookingReducer