import React from 'react'
import s from './Content.module.css'

const Video = ({id, url, title}) => {
  return (
	<a className={s.video_block} href = {`https://www.youtube.com/watch?v=${id}`}>
		<div className={s.img_block}>
        	     <img className={s.img} src = {url}/>
		</div>
        	<div className={s.video_title}>{title}</div>
	</a>
  )
}

export default Video