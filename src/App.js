import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {
 const [resourceType, setResourceType] = useState('posts')
 const [items, setItems] = useState([])
 console.log('render')
 useEffect(() => {
  // eslint-disable-next-line no-template-curly-in-string
  fetch('https://jsonplaceholder.typicode.com/${resourceType}')
  .then(response => response.json())
  .then(json => setItems(json))


 }, [resourceType])
 
 


  return (
    <div >
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      
      <hi>{resourceType}</hi>
     {items.map(items => {

      return <pre>{JSON.stringify(items)}</pre>
     })}
     
    </div>
  )
  }


