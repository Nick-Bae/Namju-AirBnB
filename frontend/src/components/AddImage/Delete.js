import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { deleteImage } from '../../store/image';
import { getSpotBySpotId } from '../../store/spot';
import './Delete.css'
// import { createImage } from '../../store/image';

const DeleteImage = ({spotid}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector(state => state.spot[spotid]);
    // console.log("spot spot spot", spot)
    console.log("imageId",id)
    console.log("spotid",spotid)

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(deleteImage(id))
        history.goBack();
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        // history.push(`/spots/${id}`);
        history.goBack();
    };

    // useEffect(() => {
    //     dispatch(getSpotBySpotId(spot?.id))
    // }, [dispatch]);

    return (
        <div>

            <p id="imageDeleteTitle">Are you sure to delete the image?</p>
            <div id="new-image">
                <button id="imageDelete" type="button" onClick={handleSubmit}>Delete</button>
                <button id="imageDeleteCancel" type="button" onClick={handleCancelClick}>Cancel</button>

            </div>
        </div>
    )
}

export default DeleteImage