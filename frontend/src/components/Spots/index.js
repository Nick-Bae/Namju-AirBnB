import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { spotReducer } from '../../store/spot';

const spots = useSelector(state => console.log(state.spot.lists));



