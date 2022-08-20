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

export const getAllSpots = () => async dispatch => {
    const response = await fetch('/api/spots');
    console.log(response)

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};

const initialState = { lists: [] }
export const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_ONE:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case LOAD:
            newState = Object.assign({}, state);
            newState.lists = [...action.lists];
            return newState;
        case DELETE:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
}