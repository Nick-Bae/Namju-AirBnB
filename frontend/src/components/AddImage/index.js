import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { createImage } from '../../store/image';
import { getAllImages } from '../../store/image';
// import { createImage } from '../../store/image';

const AddImage = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const img = useSelector(state => state);

    // console.log('spotid',id)

    const handleSubmit = (e) => {

        e.preventDefault();
        const image = {
            url: url,
            spotId: id
        }
        dispatch(createImage(image))
        history.push(`/spots/${id}`);
        reset();
    }
    const reset = () => {
        setUrl('');
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`);
    };

    return (

        <div id="new-image">
            <form id="new-image-form" onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Add a image"
                    id="new-image-form-textarea"
                />
            <button type="submit"> Add Image</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>

        </div>
    )
}

export default AddImage