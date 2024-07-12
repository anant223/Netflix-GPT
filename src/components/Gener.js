import React from 'react';
import useApi from '../hooks/useApi';
import TMDB_API_OPTION from '../config/tmdbConfig';
import { useDispatch } from 'react-redux';
import { choosenGener } from '../slice/preferencesSlice';

const Gener = ({gener}) => {
    const api = useApi(gener, TMDB_API_OPTION);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        console.log(selectedValue);
        dispatch(choosenGener(selectedValue));
    };

    return (
        <select className="select select-bordered select-sm bg-black" onChange={handleChange} defaultValue="">
            <option value="" disabled>
                Gener
            </option>
            {api?.state?.genres?.map((gen) => (
                <option key={gen.id} value={gen.id}>{gen.name}</option>
            ))}
        </select>
    );
};



export default Gener
