import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSpot } from '../../store/spot';

const CreatePokemonForm = () => {
  //!!START SILENT
  const [errorMessages, setErrorMessages] = useState({});
  //!!END
 

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  useEffect(() => {
    if (pokeTypes.length && !type) {
      setType(pokeTypes[0]);
    }
  }, [pokeTypes, type]);

  //PHASE 3
  const handleSubmit = async (e) => {
    e.preventDefault();

    //!!START SILENT
    const payload = {
        ownerId: user.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price,
        // date: getDateWithoutTime(createdAt)
        createdAt
    };
    
    let createdPokemon;
    //!!START SILENT
    try {
      createdPokemon = await dispatch(createPokemon(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrorMessages(error.errors);
      // If error is not a ValidationError, add slice at the end to remove extra
      // "Error: "
      else setErrorMessages({ overall: error.toString().slice(7) })
    }
    //!!END
    if (createdPokemon) {
      //!!START SILENT
      setErrorMessages({});
      //!!END
      history.push(`/pokemon/${createdPokemon.id}`);
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    //!!START SILENT
    setErrorMessages({});
    //!!END
    hideForm();
  };

  return (
    <section>
    <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='userId'>userId:</label>
          <input
            id='userId'
            type='text'
            placeholder='userId'
            onChange={e => setUserId(e.target.value)}
            value={userId}
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
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
      </section>
  );
};

export default CreatePokemonForm;
