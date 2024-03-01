import React from 'react'
import s from './Navbar.module.css'

import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import SubtitlesOffOutlinedIcon from '@mui/icons-material/SubtitlesOffOutlined';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

const Navbar = () => {
  const params = [
    { title: 'Home', icon: HomeOutlinedIcon },
    { title: 'Shorts', icon: SubtitlesOffOutlinedIcon },
    { title: 'Subscription', icon: SubscriptionsOutlinedIcon },
    { title: 'History', icon: HistoryIcon },
  ]
  const [index, setIndex] = React.useState(0);
  return (
    <div className={s.navbar}>
      {params.map((el, ind) => {
        const Icon = el.icon
        return <div onClick = {() => setIndex(ind)} key = {ind} className={index == ind ? s.label_active : s.label}>
          <Icon/>
          <div>{el.title}</div>
        </div>
      })}
    </div>
  )
}

export default Navbar;