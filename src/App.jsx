import './App.css'
import React, { useEffect } from 'react'
import { Header, Navbar, Content } from './Components/imports'
import { SearchContent } from './Components/SearchContent/SearchContent'
import { BrowserRouter, createBrowserRouter, Routes, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content/>,
  },
  {
    path: "/b",
    element: <SearchContent/>
  }
]);

const App = () => {
  return (
    <BrowserRouter>
      <div className='main'>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Content/>}/>
          <Route path = '/search' element = {<SearchContent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;