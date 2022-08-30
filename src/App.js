import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {
 const [windowWidth, setWindowWidth] = useState(window.innerWidth)
const handleResize = () => {
setWindowWidth(window.innerWidth)

}

useEffect(() => {

window.addEventListener('resize', handleResize)
return () => {


  window.removeEventListener('resize', handleResize)
}




}, [])
 
return (
    <div > {windowWidth} </div>
  )
  }


