import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSpot } from '../../store/spot';
import { Redirect, useParams } from 'react-router-dom';
// import { createImage } from '../../store/spot';
import { createImage } from '../../store/image';
import { getSpotBySpotId } from '../../store/spot';
import './createSpot.css'

const CreateSpot = ({ spot, formType }) => {
    const user = useSelector(state => state.session.user)
    const history = useHistory();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    const spotsObj = useSelector(state => state.spot);

    useEffect(() => {
        const errors = [];
        if (!address.length) errors.push('Please enter your address');
        if (!city.length) errors.push('Please enter your City');
        if (!state.length) errors.push('Please enter your State');
        if (!country.length) errors.push('Please enter your Country');
        if (lat < -90 || lat > 90 || lat ==="") errors.push('Please enter between -90 and 90 Latitude');
        if (lng < -180 || lng > 180 || lng ==="") errors.push('Please enter between -180 and 180 Longitude');
        if (!name.length) errors.push('Please enter your Name');
        if (name.length >30) errors.push('Name must be less than 30 chracters');
        if (!description.length) errors.push('Please enter your description');
        if (price==="" || price < 0) errors.push('Please enter your Correct Price');
        if (price > 5000) errors.push('Price should be less than $5,000');
        if (url==="") errors.push('Please enter url address for image')
        if (url.length>255) errors.push('url should not be over 255 characters');
        if (!url.includes('https://')) errors.push('url should starts with https://');

        setValidationErrors(errors);
    }, [address, city, state, country, lat, lng, name, description, price, url])

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!user) alert ("Please log in before submit")

        setHasSubmitted(true);
        if (validationErrors.length) return alert(`Cannot Submit`);

        spot = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price,
        };
        
        const newSpot = await  dispatch(createSpot(spot))
            .catch(async(res)=>{
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
        const imageUrl = {
            url,
            spotId: newSpot.id,
            previewImage: true
        }
        console.log("image data after", newSpot.id)

        await dispatch(createImage( imageUrl))
                        // .then((res)=> {
                        //     // const newSpot = res.json();
                        //     // newSpot.then((spot)=>{
                        //         dispatch(getSpotBySpotId(res.id))
                        //     })
                        
                        // console.log("before dispatch gettting spot by id",res.id), 
                        

        // const newImage = await dispatch(createImage(image))
        //   if(newSpot) {
        history.push(`/spots/${newSpot.id}`);
        reset();
        //   }
    };

    const reset = () => {
        setAddress("");
        setCity("");
        setState("");
        setCountry("");
        setLat("");
        setLng("");
        setName("");
        setPrice("");
        setUrl("");
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`);
    };

    return (
        <section className='createSpotForm'>
            {hasSubmitted && validationErrors.length > 0 && (
                <div id="spotErrors">
                    <p id="spotErrorTItle">The following errors were found:</p>
                    <ul id="errorMessages">
                        {validationErrors.map(error => (

                            <li key={error}>-{error} </li> 
                        ))}
                    </ul>
                </div>
            )}
            <form id="createSpotForm" onSubmit={onSubmit}>
                <h2>{formType}</h2>
                <h2 id="formTitle">Create Spot</h2>
                {errors.length > 0 && (
        <ul id="createSpot">
          <li id="createSpotTitle">Error Message:</li>
          {(Object.values(errors)).map((error, idx) => <li id="createSpotError"key={idx}>{error}</li>)}
        </ul>
        )}
            
                <div id="spotInput">
                    <label htmlFor='address'>address:</label>
                    <input 
                        id='address'
                        type='text'
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                        // required
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='city'>city:</label>
                    <input
                        id='city'
                        type='text'
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='state'>state:</label>
                    <input
                        id='state'
                        type='text'
                        onChange={e => setState(e.target.value)}
                        value={state}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='country'>country:</label>
                    <input
                        id='country'
                        type='text'
                        onChange={e => setCountry(e.target.value)}
                        value={country}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='lat'>lat:</label>
                    <input
                        id='lat'
                        type='number'
                        onChange={e => setLat(e.target.value)}
                        value={lat}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='lng'>lng:</label>
                    <input
                        id='lng'
                        type='number'
                        onChange={e => setLng(e.target.value)}
                        value={lng}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='name'>name:</label>
                    <input
                        id='name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='price'>price:</label>
                    <input
                        id='price'
                        type='number'
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='description'>description:</label>
                    <textarea
                        id='description'
                        type='text'
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='url'>url image:</label>
                    <textarea
                        // maxLength='255'
                        id='imageUrl'
                        type='text'
                        onChange={e => setUrl(e.target.value)}
                        value={url}
                    />
                </div>

                <div>
                <input id="createSpotBt" type="submit" /> &nbsp;
                <button id="creatSpotCancel" type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </section>
    );

};

export default CreateSpot;
