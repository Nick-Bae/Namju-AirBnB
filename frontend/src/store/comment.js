// import { csrfFetch } from './csrf';

// const ADD_ONE = 'comment/ADD_ONE';
// const LOAD = 'comment/LOAD';
// const DELETE = 'comment/DELETE';
// const UPDATE = 'comment/UPDATE'

//  const addOne = comment => ({
//     type: ADD_ONE,
//     comment
// });
//  const load = (comments) => ({
//     type: LOAD,
//     comments
// });
//  const deleteOne = commentId => ({
//     type: DELETE,
//     commentId
// });
//  const update = comment => ({
//     type: UPDATE,
//     comment
// });

// export const getAllComments = () => async dispatch => {
//     const response = await csrfFetch('/api/comments');
//     console.log(response)

//     if (response.ok) {
//         const comments = await response.json();
//         dispatch(load(comments));
//     }
// };

// export const createComment = (payload) => async dispatch => {
//     const response = await csrfFetch(`/api/spots/:spotId/reviews`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//     });
//     const comment = await response.json();
//     dispatch(addOne(comment));
//     return comment;
// }

// export const createImage = (payload) => async dispatch => {
//     const response = await csrfFetch('/api/:spotId/images', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//     });
//     const image = await response.json();
//     dispatch(addOne(image));
//     return image;
// }

// export const editComment = data => async dispatch => {
//     const response = await csrfFetch(`/api/reviews/${data.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     });

//     if (response.ok) {
//         const comment = await response.json();
//         dispatch(update(comment));
//         return comment;
//     }
// }

// export const deleteSpot = (id) => async (dispatch) => {
//     const response = await csrfFetch(`/api/reviews/:reviewId${id}`, {
//         method: "DELETE",
//     });

//     if (response.ok) {
//         dispatch(deleteOne(id));
//     }
//     return response;
// };


// // const initialState = { lists: [] }
// export const commentReducer = (state = {}, action) => {
//     let newState = { ...state };
//     switch (action.type) {
//         case ADD_ONE:
//             newState[action.comment.id] = action.comment;
//             return newState;
//         case UPDATE:
//             // console.log('ns', newState)
//               newState[action.comment.id] = action.comment
//             return newState;
//         case LOAD:
//             const comments = action.spots.Spots
//             spots.forEach((spot) => {
//                 newState[spot.id] = spot
//             })
//             return newState;
//         case DELETE:
//             delete newState[action.id]
//             return newState;
//         default:
//             return state;
//     }
// }