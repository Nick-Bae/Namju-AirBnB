import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { createImage } from '../../store/image';
import { deleteImage } from '../../store/image';
import { getSpotBySpotId } from '../../store/spot';
import './addImage.css'

const AddImage = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
   
    const [deleteOn, setDeleteOn]=useState(false);
    const [imageId, setImageId] = useState('');
    const [selectedImg, setSelectedImg] = useState('');
    const spot = useSelector(state => state.spot[id]);
    // const spotImg = useSelector(state => state.spot[id].image);

    useEffect(()=>{
            dispatch(getSpotBySpotId(id));
    },[dispatch])

    // const checkPreviewImg = spotImg.find((img)=>{
    //     img.previewImage === true ? img.id
    // })
    
    const addImage = () => {
        const spotNumImg = spot?.image?.length;
        if (spotNumImg >= 5) {
            alert("Maximum 5 images can be uploaded") 
        }else {
        
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
            dispatch(createImage(image));
            dispatch(getSpotBySpotId(id));
            
            reset();
        }
    }
    const reset = () => {
        setUrl('');
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        // history.push(`/spots/${id}`);
        history.push(`/spots/${id}`);
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
        
    }
    useEffect(() => {
        dispatch(getSpotBySpotId(id))
            // .then(() => dispatch(getSpotReviews(id)))
            // .then(() => setShowSpot(true))
        // .then(()=>spot.Owner.id === user.id ? setOwner(true): setOwner(false))
    }, [dispatch, deleteOn, imageId]);

    console.log("spot information", spot )
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
                        <button id="addImage" type="submit" > Add</button> 
            {(deleteOn) && 
                    <button id="imageDeleteBt" onClick={deleteBt}> &nbsp; Delete</button> 
                }&nbsp;
                        <button id="imageCancel" type="button" onClick={handleCancelClick}>Return </button>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default AddImage