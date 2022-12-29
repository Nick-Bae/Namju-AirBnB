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
    const [selectedImg, setSelectedImg] = useState('');
   // const id= spotId
    const spot = useSelector(state => state.spot[id]);

    useEffect(()=>{
            dispatch(getSpotBySpotId(id));
    },[dispatch])

    const addImage = (e) => {

        e.preventDefault();
        // let isPreviewImage=false;
        const isPreviewImage = document.querySelector('#preImageCheck');

        let image;
        if (isPreviewImage.checked) {
            image = {
                url: url,
                spotId: id,
                // previewImage: true
            }
        } else {
            image = {
                url: url,
                spotId: id,
                previewImage: false
            }
        }
        dispatch(createImage(image));
        dispatch(getSpotBySpotId(id));
        // history.push(`/spots/${id}`);
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

    // spot.image.map((image) =>{
    //     let img = document.getElementById(image.id)
    //                  .addEventListener('click', function(e) {
    //         setImageId()
    //         setDeleteOn(true)
    //        console.log("click")
    //     })

    // })
    
    const imageSelect = (obj) => {
       let id= obj.target.id
        setImageId(id);
        setDeleteOn(true);
        setSelectedImg(id)
    }

    const deleteBt = (e) => {

        // window.alert("Are you sure to delte the image?")
        e.preventDefault();
        dispatch(deleteImage(imageId))
        setDeleteOn(false)
        // history.push(`/spots/${id}`);
    }
    useEffect(() => {
        dispatch(getSpotBySpotId(id))
            // .then(() => dispatch(getSpotReviews(id)))
            // .then(() => setShowSpot(true))
        // .then(()=>spot.Owner.id === user.id ? setOwner(true): setOwner(false))
    }, [dispatch, deleteOn, imageId]);

    const spotNumImg = spot?.image?.length;
    const checkImgNum =()=>{
        spotNumImg > 5 ? alert("Maximum 5 images can be uploaded") : addImage()
    }

    return (
        <>
            <p id="imageEdit">Image upload & Delete</p>
            <div id="editImages">
                {spot?.image.map((image, idx) => (
                    <>
                    <img id={image.id} 
                        className={`selectedImg${idx}` }
                        src={image.url} 
                        onClick={imageSelect} 
                        style={{ boxShadow: Number(selectedImg) === Number(image.id) ? "rgba(57,56,60,0.61) 0px 5px 15px" : ""  }}
                    />
                 </>
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
                        <button id="addImage" type="submit" onClick={checkImgNum}> Add</button> 
            {(deleteOn) && 
                    <button id="imageDeleteBt" onClick={deleteBt}> &nbsp; Delete</button> 
                }&nbsp;
                        <button id="imageCancel" type="button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default AddImage