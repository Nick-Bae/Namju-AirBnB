import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { createImage } from '../../store/image';
import { deleteImage } from '../../store/image';
import { getAllImages } from '../../store/image';
import { getSpotBySpotId } from '../../store/spot';
import './addImage.css'
// import { createImage } from '../../store/image';

const AddImage = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
   const { id } = useParams();

   const [deleteOn, setDeleteOn]=useState(false);
   const [imageId, setImageId] = useState('');
// const id= spotId
    const spot = useSelector(state => state.spot[id])
   
    const addImage = (e) => {

        e.preventDefault();
        // let isPreviewImage=false;
        const isPreviewImage = document.querySelector('#preImageCheck');

        let image;
        if (isPreviewImage.checked) {
            image = {
                url: url,
                spotId: id,
                previewImage: true
            }
        } else {
            image = {
                url: url,
                spotId: id,
                previewImage: false
            }
        }
        console.log("previewImage", isPreviewImage.checked)
        dispatch(createImage(image))
        history.push(`/spots/${id}`);
        reset();
    }
    const reset = () => {
        setUrl('');
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        // history.push(`/spots/${id}`);
        history.goBack();
    };

    // let img = document.getElementById(spot.id).addEventListener('click', function(e) {
    //     setImageId()
    //     setDeleteOn(true)

    // })

    const deleteBt = (e) => {

        // window.alert("Are you sure to delte the image?")
        e.preventDefault();
        dispatch(deleteImage(id))
        history.push(`/spots/${id}`);
    }
    useEffect(() => {
        dispatch(getSpotBySpotId(id))
            // .then(() => dispatch(getSpotReviews(id)))
            // .then(() => setShowSpot(true))
        // .then(()=>spot.Owner.id === user.id ? setOwner(true): setOwner(false))
    }, [dispatch]);



    return (
        <>
            <div id="editImages">
                {spot?.image.map(image => (
                    <img id={image.id} className="imgdetail" src={image.url} />
                ))}
            </div>

            <div id="new-image">
                <form id="new-image-form" onSubmit={addImage}>
                    <textarea
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Add a image"
                        id="new-image-form-textarea"
                    />
                    <div>
                        <input id='preImageCheck' type="checkbox" value="previewImage" />
                        <label for="previewImage"> Preview Image</label>
                    </div>

                    <div id="addImageBt">
                        <button id="addImage" type="submit"> Add Image</button> &nbsp;
                        <button id="imageCancel" type="button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>
            </div>
            
            deleteOn && {
                    <button id="imageDeleteBt" onClick={deleteBt}> Delete</button>
                }
        </>
    )
}

export default AddImage