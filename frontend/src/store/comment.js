import { csrfFetch } from './csrf';

const ADD_ONE = 'review/ADD_ONE';
const LOAD = 'review/LOAD';
const DELETE = 'review/DELETE';
const UPDATE = 'review/UPDATE'

 const addOne = review => ({
    type: ADD_ONE,
    review
});
 const load = (reviews) => ({
    type: LOAD,
    reviews
});
 const deleteOne = reviewId => ({
    type: DELETE,
    reviewId
});
 const update = review => ({
    type: UPDATE,
    review
});

export const getSpotReviews = (id) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}/reviews`);
    // console.log("review",id)

    if (response.ok) {
        const reviews = await response.json();
        dispatch(load(reviews.Reviews));
    }
};

export const createReview = (report) => async dispatch => {
    // console.log(report)
    const response = await csrfFetch(`/api/spots/${report.currSpot}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report)
    });
    const review = await response.json();
    // console.log(review)
    dispatch(addOne(review));
    return review;
}


export const editComment = data => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(update(comment));
        return comment;
    }
}

export const deleteReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(deleteOne(id));
    }
    return response;
};


// const initialState = { lists: [] }
export const reviewReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_ONE:
            newState[action.review.id] = action.review;
            return newState;
        case UPDATE:
              newState[action.review.id] = action.review
            return newState;
        case LOAD:
            const reviews = action.reviews
            // console.log('state',reviews)
            reviews.forEach((review) => {
                newState[review.id] = review
            })
            return newState;
        case DELETE:
            delete newState[action.reviewId]
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;