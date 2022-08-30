import { csrfFetch } from './csrf';

const LOAD = 'spot/LOAD';
const READ = 'spot/ADD_ONE';
const CREATE = 'spot/ADD_ONE'
const DELETE = 'spot/DELETE';
const UPDATE = 'spot/UPDATE'

const read = spotId => ({
    type: READ,
    spotId
});
const create = spot => ({
    type: CREATE,
    spot
});
const load = (spots) => ({
    type: LOAD,
    spots
});
const deleteOne = spotId => ({
    type: DELETE,
    spotId
});
const update = spot => ({
    type: UPDATE,
    spot
});



// export const getSpots =(state)=>Object.values(state.spot)

export const getAllSpots = () => async dispatch => {
    const response = await csrfFetch('/api/spots');
    console.log(response)

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};

export const getSpotBySpotId =spotId =>async dispatch =>{
    console.log("getSpotBySpotId is running")
    const response = await csrfFetch(`/api/spots/${spotId}`)

    if (response.ok) {
        const spot = await response.json();
        dispatch(read(spot));
        return spot;
    };
}

export const createSpot = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
    const spot = await response.json();
    dispatch(create(spot));
    return spot;
    }
}

export const createImage = (payload) => async dispatch => {
    // const response = await csrfFetch(`/api/${payload.image.spotId}/images`, {
    const response = await csrfFetch(`/api/spots/:spotId/images`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    const image = await response.json();
    dispatch(create(image));
    return image;
}

export const editSpot = data => async dispatch => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const spot = await response.json();
        dispatch(update(spot));
        return spot;
    }
}

export const deleteSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(deleteOne(id));
    }
    // return response;
};


// const initialState = { lists: [] }
export const spotReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD:
            const spots = action.spots.Spots
            spots.forEach((spot) => {
                newState[spot.id] = spot
            })
            return newState;
        case READ:
            newState[action.spotId.id] = action.spotId;
            return newState;
        case CREATE:
            newState[action.spot.id] = action.spot;
            return newState;
        case UPDATE:
            newState[action.spot.id] = action.spot
            return newState;
        case DELETE:
            delete newState[action.spotId]
            return newState;
        default:
            return state;
    }
}

export default spotReducer