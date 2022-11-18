import { csrfFetch } from './csrf';

const ADD_ONE = 'like_story/ADD_ONE';
const DELETE = 'spot/DELETE';
// const LOAD = 'spot/LOAD';


const addOne = numLike => ({
    type: ADD_ONE,
    numLike
});

const deleteLike = storyId => ({
    type: DELETE,
    storyId
});


export const likeStory = (storyId) => async (dispatch) => {
    const response = await csrfFetch(`/api/stories/${storyId}/likes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body is neccessary?
        body: JSON.stringify(storyId)
    });
    const numLike = await response.json();
    dispatch(addOne(numLike));
    return numLike;
}

export const deleteLikeStory = (storyId) => async (dispatch) => {
    const response = await csrfFetch(`/api/stories/${storyId}/likes`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(deleteLike(storyId));
    }
};

export const likeStoryReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_ONE:
            newState[action.numLike.story_id] = action.numLike;
            return newState;
        case DELETE:
            delete newState[action.numLike.story_id]
            return newState;
        default:
            return state;
    }
}

export default likeStoryReducer