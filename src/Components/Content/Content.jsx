import React from 'react'
import s from './content.module.css'
import Video from './Video';
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../../Redux/videoReducer';
import YTSearch from 'youtube-api-search'

const Content = () => {
	const data = useSelector((state) => state.video.data);
	//* const URL = 'https://youtube.googleapis.com/youtube/v3/search?key='
	//* const key = 'AIzaSyCOWRgA4-zgCc2wrjaxDIHloGj57G2YeTE'

	const topic = useSelector((state) => state.video.topic);
  	const dispatch = useDispatch()

 	const videoSearch = (term) => {
  		YTSearch({key: 'AIzaSyCOWRgA4-zgCc2wrjaxDIHloGj57G2YeTE', term: term}, (videos) => {
    		dispatch(setData(videos));
    		console.log(videos);
  	})}
  	
	React.useEffect(() => {
   	 videoSearch(topic)
  	}, [topic])

  return (
	<div className={s.content}>
       		<div className={s.videos}>
        	 { data.map( obj => {
        	  	return <Video key = {obj.id.videoId} id = {obj.id.videoId} url = {obj.snippet.thumbnails.high.url}
		   	title = {obj.snippet.title}/>
        	 })} 
       		</div>
      	</div>
  );
};

export default Content;