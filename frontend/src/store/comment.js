import { csrfFetch } from './csrf';

const LOAD_ONE = 'review/LOAD_ONE';
const LOAD = 'review/LOAD';
const DELETE = 'review/DELETE';
const UPDATE = 'review/UPDATE';
const CREATE ='review/CREATE';

const load = (reviews) => ({
    type: LOAD,
    reviews
});
const loadOne = reviews => ({
    type: LOAD_ONE,
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

const create = review =>({
    type:CREATE,
    review
})

export const getAllReviews = () => async (dispatch) => {
    const response = await csrfFetch("/api/reviews");

    if (response.ok) {
        const reviews = await response.json();
        dispatch(load(reviews));

    };
};



export const getSpotReviews = (id) => async dispatch => {

    const response = await csrfFetch(`/api/spots/${id}/reviews`);
    // console.log(response)

    if (response.ok) {
        const reviews = await response.json();
        // console.log(reviews.message)
        // if (reviews.message !== "No Review yet"){
        // dispatch(loadOne(reviews.Reviews));
        dispatch(loadOne(reviews.reviews));
        // }
        return reviews

    }
};

export const createReview = (report) => async dispatch => {
    // console.log(report)
    const response = await csrfFetch(`/api/spots/${report.spotId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report)
    });
    const review = await response.json();
    // console.log(review)
    dispatch(create(review));
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
        case LOAD:
            const allReviews = action.reviews
            // console.log('state',reviews)
            allReviews.forEach((review) => {
                newState[review.id] = review
            })
            return newState;
        case LOAD_ONE:
            const reviews = action.reviews
            reviews.forEach((review) => {
                newState[review.id] = review
            })
            return newState;
        case CREATE: 
            newState[action.review.id] = action.review
            return newState   
        case UPDATE:
            newState[action.review.id] = action.review
            return newState;
        case DELETE:
            delete newState[action.reviewId]
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;