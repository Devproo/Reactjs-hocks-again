import React, { useState, useMemo, useEffect} from 'react';
import './App.css';


export default function App() {
 const [number, setNumber] = useState(0)
 const [dark, setDark] = useState(false)
 const doubleNumber = useMemo(() => {
 return slowFunction(number)
}, [number])
 const themeStyles = useMemo(() => {
return {
  backgroundColor: dark ? 'dark' : 'white',
  color: dark ? 'white' : 'black'
}

 }, [dark])
 
 
  


useEffect(() => {
console.log('theme changed')


}, [themeStyles])

return (
    <> 
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={ () => setDark(prevDark => !prevDark)} > change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>

       </>
  )
  function slowFunction(num) {

    console.log('calling slow func')
    for (let i = 0; i <= 1000000; i++) {}
    return num * 5
  }
}

