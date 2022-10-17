import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSpot } from '../../store/spot';
import { Redirect, useParams } from 'react-router-dom';
import { createImage } from '../../store/spot';
import { getSpotBySpotId } from '../../store/spot';
import './createSpot.css'

const CreateSpot = ({ spot, formType }) => {
    // const { id } = useSelector(state => state.session.user)
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
    const dispatch = useDispatch();
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const spotsObj = useSelector(state => state.spot);
    const spots = Object.values(spotsObj);
    // console.log(newSpotId)

    useEffect(() => {
        const errors = [];
        if (!address.length) errors.push('Please enter your address');
        if (!city.length) errors.push('Please enter your City');
        if (!state.length) errors.push('Please enter your State');
        if (!country.length) errors.push('Please enter your Country');
        if (!lat.length) errors.push('Please enter your Latitude');
        // if (!lat < -90) errors.push('Please enter your Latitude');
        if (!lng.length) errors.push('Please enter your Longitude');
        // if (!lng.length) errors.push('Please enter your Longitude');
        if (!name.length) errors.push('Please enter your Name');
        if (name.length >15) errors.push('Name must be less than 15 chracters');
        if (!description.length) errors.push('Please enter your description');
        if (!price.length || price < 0) errors.push('Please enter your Correct Price');
        setValidationErrors(errors);
    }, [address, city, state, country, lat, lng, name, description, price,])

    const onSubmit = async (e) => {
        e.preventDefault();

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
     console.log("this is showing")
     console.log("before dispatch",spot)
        const newSpot = await dispatch(createSpot(spot))
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
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`);
    };

    return (
        <section>
            {hasSubmitted && validationErrors.length > 0 && (
                <div>
                    The following errors were found:
                    <ul>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <form id="createSpotForm" onSubmit={onSubmit}>
                <h2>{formType}</h2>
                <h2 id="formTitle">Create Spot</h2>
                {/* <div>
                        <label htmlFor='url'>url:</label>
                        <input
                            id='url'
                            type='text'
                            placeholder='url'
                            onChange={e => setUrl(e.target.value)}
                            value={url}
                        />
                    </div> */}
            
                <div id="spotInput">
                    <label htmlFor='address'>address:</label>
                    <input 
                        id='address'
                        type='text'
                        // placeholder='address'
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    />
                </div>
                <div id="spotInput">
                    <label htmlFor='city'>city:</label>
                    <input
                        id='city'
                        type='text'
                        // placeholder='city'
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

                {/* <button type='submit'>Creat new spot</button> */}
                <div>
                <input id="spotBt" type="submit" value={formType} /> &nbsp;
                <button id="spotBt" type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </section>
    );

};

export default CreateSpot;
