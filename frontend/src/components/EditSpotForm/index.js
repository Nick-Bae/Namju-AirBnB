import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editSpot } from '../../store/spot';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './EditSpotForm.css'

export const EditSpotForm = () => {
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id])
    const history = useHistory();
    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [lat, setLat] = useState(spot.lat);
    const [lng, setLng] = useState(spot.lng);
    const [name, setName] = useState(spot.name);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);
    const dispatch = useDispatch();
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];
        if (!address.length) errors.push('Please enter your address');
        if (city==="") errors.push('Please enter your City');
        if (state==="") errors.push('Please enter your State');
        if (country==="") errors.push('Please enter your Country');
        if (lat < -90 || lat > 90 || lat ==="") errors.push('Please enter between -90 and 90 Latitude');
        if (lng < -180 || lng > 180 || lng ==="") errors.push('Please enter between -180 and 180 Longitude');
        if (name.length ==="") errors.push('Please enter your Name');
        if (name.length >30) errors.push('Name must be less than 15 chracters');
        if (!description.length) errors.push('Please enter your description');
        if (price==="" || price < 0) errors.push('Please enter your Correct Price');
        if (price> 5000) errors.push('Price should not be over $5,000');
        setValidationErrors(errors);
    }, [address, city, state, country, lat, lng, name, description, price,])

    const onSubmit = async (e) => {
        e.preventDefault();

        setHasSubmitted(true);
        if (validationErrors.length) return alert(`Cannot Submit`);

        const spot = {
            id: id,
            // ownerId: id,
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

        await dispatch(editSpot(spot));

        //  if (updateSpot) {

        history.push(`/spots/${id}`);
        reset();
        //  }

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
        history.push(`/spots/${id}`);
    };

    return (
        <section id="editSpotForm">
            {hasSubmitted && validationErrors.length > 0 && (
                <div id="errorDisplay">
                    <p id="errorTitle">The following errors were found:</p>
                <ul>
                    {validationErrors.map(error => (
                        <li key={error} id="updateError">-{error}</li>
                    ))}
                </ul>
            </div>
        )}
            

            <form id="updateForm" onSubmit={onSubmit}>
                <h2 id="updateTitle">Update</h2>
                {/* <div>
                        <label htmlFor='url'>url</label>
                        <input
                            id='url'
                            type='text'
                            placeholder='url'
                            onChange={e => setUrl(e.target.value)}
                            value={url}
                        />
                    </div> */}
                <div id="updateAddress">
                    <label htmlFor='address'>address:</label>
                    <input
                        id='address'
                        type='text'
                        placeholder='address'
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    />
                </div>

                <div id="updateCity">
                    <label htmlFor='city'>city:</label>
                    <input
                        id='city'
                        type='text'
                        placeholder='city'
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    />
                </div>

                <div id="updateState">
                    <label htmlFor='state'>state:</label>
                    <input
                        id='state'
                        type='text'
                        onChange={e => setState(e.target.value)}
                        value={state}
                    />
                </div>

                <div id="updateCountry">
                    <label htmlFor='country'>country:</label>
                    <input
                        id='country'
                        type='text'
                        onChange={e => setCountry(e.target.value)}
                        value={country}
                    />
                </div>

                <div id="updateLat">
                    <label htmlFor='lat'>lat:</label>
                    <input
                        id='lat'
                        type='number'
                        onChange={e => setLat(e.target.value)}
                        value={lat}
                    />
                </div>

                <div id="updateLng">
                    <label htmlFor='lng'>lng:</label>
                    <input
                        id='lng'
                        type='number'
                        onChange={e => setLng(e.target.value)}
                        value={lng}
                    />
                </div>

                <div id="updateName">
                    <label htmlFor='name'>name:</label>
                    <input
                        id='name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div id="updatePrice">
                    <label htmlFor='price'>price:</label>
                    <input
                        id='price'
                        type='number'
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                    />
                </div>

                <div id="updateDescription">
                    <label htmlFor='description'>description:</label>
                    <textarea
                        id='description'
                        type='text'
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />
                </div>

                {/* <button type='submit'>Creat new spot</button> */}
                <div id="updateButtons">
                    <button id="updateBt" type="submit"  > Update</button> &nbsp;
                    <button id="updateCancel" type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </section>
        
    );

};

export default EditSpotForm;