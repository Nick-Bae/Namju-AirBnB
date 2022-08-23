import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createImage } from '../../store/spot';
import { Redirect, useParams } from 'react-router-dom';
// import { createImage } from '../../store/image';

const AddImage = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const {spotId} = useParams();

    const img = useSelector(state=>state);
    console.log(img)
    const handleSubmit = (e) => {

        e.preventDefault();
        const image = {
            url: url,
            spotId: spotId
        }
        dispatch(createImage(image))
        history.pushState('/')
    }
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
            </form>
            <button > Add Image</button>
        </div>
    )
}

export default AddImage