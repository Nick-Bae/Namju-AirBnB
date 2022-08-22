const ADD_ONE = 'spot/ADD_ONE';
const LOAD = 'spot/LOAD';
const DELETE = 'spot/DELETE';

const addOne = spot => ({
    type: ADD_ONE,
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

export const getSpots =(state)=>Object.values(state.spot)

export const getAllSpots = () => async dispatch => {
    const response = await fetch('/api/spots');
    console.log(response)

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};

export const createSpot = (payload)=>async dispatch => {
    const response = await fetch(`/api/spots`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(payload)
    });
    const spot = await response.json();
    dispatch(addOne(spot));
    return spot;
}

// const initialState = { lists: [] }
export const spotReducer = (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case ADD_ONE:
            newState.spot = action.spot;
            return newState;
        case LOAD:
            const spots = action.spots.Spots
           spots.forEach((spot)=> {
            newState[spot.id]= spot
           })
            return newState;
        case DELETE:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
}