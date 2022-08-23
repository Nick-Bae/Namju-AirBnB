import { csrfFetch } from './csrf';

const ADD_ONE = 'image/ADD_ONE';
const LOAD = 'image/LOAD';
const DELETE = 'image/DELETE';

const addOne = image => ({
    type: ADD_ONE,
    image
});
const load = (image) => ({
    type: LOAD,
    image
});
const deleteOne = imageId => ({
    type: DELETE,
    imageId
});

export const getAllImages = () => async dispatch => {
    const response = await csrfFetch('/api/spots');
    console.log(response)

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};
export const createImage = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/:spotId/images`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(payload)
    });
    const image = await response.json();
    dispatch(addOne(image));
    return image;
}


// const initialState = { lists: [] }
export const imageReducer = (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case ADD_ONE:
            newState.url = action.url;
            return newState;
        case LOAD:
            const images = action.urls
           images.forEach((image)=> {
            newState[image.id]= image
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

export default imageReducer;