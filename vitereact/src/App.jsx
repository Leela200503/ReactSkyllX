import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import mydata from './data/Myproducts.js'
import Card from './components/Card.jsx'
import './index.css'

function App() {
const [myState, setMyState]=useState(mydata)
const handleFunction=()=>{
  const mydata2=myState.filter((elements)=>{
    if(elements.price>=100){
      return elements
    }});
    setMyState(mydata2)
  };




  return (<>
    <div className="flex gap-3 flex-wrap px-5 "> 
      {myState.map((product) => (
        <Card data={product} />
      ))}
      <button onClick={handleFunction}>Click Me</button>
      </div>
    </>
  );
}

export default App
