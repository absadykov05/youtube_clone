import React from 'react'
import s from './Header.module.css'
import {Search} from './Search'

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCamIcon from '@mui/icons-material/Videocam';

const Header = () => {
  return (
    <div className={s.header}>
	    <div className={s.logo_div}>
        <img className={s.logo} src = 'https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png'/>
	    </div>
	    <Search/>
      <div className={s.buttons}>
        <VideoCamIcon className={s.button}/>
        <NotificationsIcon className={s.button}/>
        <AccountCircleIcon className={s.button}/>
      </div>
    </div>
  )
}

export default Header;