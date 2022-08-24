import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSpot } from '../../store/spot';
import { Redirect,useParams } from 'react-router-dom';
import { createImage } from '../../store/spot';

 const CreateSpot = ({ spot, formType }) => {
    const { id } = useSelector(state => state.session.user)
    const history = useHistory();

    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [url, setUrl] = useState();
    
    const dispatch = useDispatch();

    const spotsObj = useSelector(state => state.spot);
  const spots = Object.values(spotsObj);
// console.log(newSpotId)

    const onSubmit = async (e) => {
        e.preventDefault();

        spot = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            url,
            name,
            description,
            price,
        };

    const newSpot = await dispatch(createSpot(spot));
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
            <form onSubmit={onSubmit}>
                <h2>{formType}</h2>
                <div>
                        <label htmlFor='url'>url:</label>
                        <input
                            id='url'
                            type='text'
                            placeholder='url'
                            onChange={e => setUrl(e.target.value)}
                            value={url}
                        />
                    </div>
                <div>
                    <label htmlFor='address'>address:</label>
                    <input
                        id='address'
                        type='text'
                        placeholder='address'
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    />
                </div>
                <div>
                    <label htmlFor='city'>city:</label>
                    <input
                        id='city'
                        type='text'
                        placeholder='city'
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    />
                </div>
                <div>
                    <label htmlFor='state'>state:</label>
                    <input
                        id='state'
                        type='text'
                        onChange={e => setState(e.target.value)}
                        value={state}
                    />
                </div>
                <div>
                    <label htmlFor='country'>country:</label>
                    <input
                        id='country'
                        type='text'
                        onChange={e => setCountry(e.target.value)}
                        value={country}
                    />
                </div>
                <div>
                    <label htmlFor='lat'>lat:</label>
                    <input
                        id='lat'
                        type='number'
                        onChange={e => setLat(e.target.value)}
                        value={lat}
                    />
                </div>
                <div>
                    <label htmlFor='lng'>lng:</label>
                    <input
                        id='lng'
                        type='number'
                        onChange={e => setLng(e.target.value)}
                        value={lng}
                    />
                </div>
                <div>
                    <label htmlFor='name'>name:</label>
                    <input
                        id='name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor='description'>description:</label>
                    <input
                        id='description'
                        type='text'
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <div>
                    <label htmlFor='price'>price:</label>
                    <input
                        id='price'
                        type='number'
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                    />
                </div>

                {/* <button type='submit'>Creat new spot</button> */}
                <input type="submit" value={formType} />
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );

};

export default CreateSpot;
