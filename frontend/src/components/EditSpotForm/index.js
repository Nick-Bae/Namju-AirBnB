import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { editSpot } from '../../store/spot';
import {useHistory} from 'react-router-dom';
import  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'

export const EditSpotForm = () => {
  const { id } = useParams();
  const spot = useSelector(state => state.spot[id])
    const history = useHistory();
    // let updateSpot= spot.find(info => info.id == spotId)
    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [lat, setLat] = useState(spot.lat);
    const [lng, setLng] = useState(spot.lng);
    const [name, setName] = useState(spot.name);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);
    const [url, setUrl] = useState(spot.image);
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();

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
        history.push(`/`);
    };

    return (
        <section>
            <form onSubmit={onSubmit}>
                <h2>Update</h2>
                <div>
                        <label htmlFor='url'>url</label>
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
                <button type="submit"  > Update</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
        // <div><h1>hello??</h1></div>
    );

};

export default EditSpotForm;