import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { deleteImage } from '../../store/image';
import './Delete.css'
// import { createImage } from '../../store/image';

const DeleteImage = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();


    const handleSubmit = (e) => {

        // window.alert("Are you sure to delte the image?")
        e.preventDefault();
        dispatch(deleteImage(id))
        history.push(`/spots/${id}`);
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        // history.push(`/spots/${id}`);
        history.goBack();
    };

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