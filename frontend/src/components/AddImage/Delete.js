import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { deleteImage } from '../../store/image';
// import { createImage } from '../../store/image';

const DeleteImage = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();


    console.log('spotid',id)

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(deleteImage(id))
        history.push(`/images/${id}`);
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`);
    };

    return (

        <div id="new-image">
            <button type="button" onClick={handleCancelClick}>Cancel</button>
            <button type="button" onClick={handleSubmit}>Delete</button>

        </div>
    )
}

export default DeleteImage