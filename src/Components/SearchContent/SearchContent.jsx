import React from 'react'
import s from './SearchContent.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../../Redux/videoReducer';
import YTSearch from 'youtube-api-search'
import SearchVideo from './SearchVideo'

export const SearchContent = () => {
  const data = useSelector((state) => state.video.data)
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
    <div className={s.main}>
      {  data.map( obj => {
        return <SearchVideo key = {obj.id.videoId} id = {obj.id.videoId} url = {obj.snippet.thumbnails.high.url}
		   	title = {obj.snippet.title}/>
      })}
    </div>
  )
}
