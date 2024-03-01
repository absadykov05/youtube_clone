import React from 'react'
import s from './SearchContent.module.css'

const SearchVideo = ({id, url, title}) => {
  return (
	<a className={s.search_video_block} href = {`https://www.youtube.com/watch?v=${id}`}>
		<div className={s.search_img_block}>
        	     <img className={s.search_img} src = {url}/>
		</div>
        	<div className={s.search_video_title}>
		     <div>{title}</div>
		     <div>Itpedia</div>
		     <div>2022 August 08</div>
		</div>
	</a>
  )
}

export default SearchVideo;