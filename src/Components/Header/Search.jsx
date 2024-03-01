import React, { useState } from 'react'
import s from './Header.module.css'
import { useDispatch } from 'react-redux'
import { setTopic } from '../../Redux/videoReducer';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const Search = (text) => {
    dispatch(setTopic(text));
    navigate("/search")
  }
  return (
    	<div className={s.div_search}>
          <input value={searchText} onChange={(event) => setSearchText(event.target.value)}
             className={s.search} placeholder='Enter a request'/>
            <Button onClick={() => Search(searchText)} className={s.search_button}>Search</Button>
        </div>
  )
}
