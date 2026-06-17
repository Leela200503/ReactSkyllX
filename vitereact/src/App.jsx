import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import mydata from './data/Myproducts.js'
import Card from './components/Card.jsx'
import './index.css'
import Nav from './components/Nav.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom'

function App() {
// const [myState, setMyState]=useState(mydata)
// const handleFunction=()=>{
//   const mydata2=myState.filter((elements)=>{
//     if(elements.price>=100){
//       return elements
//     }});
//     setMyState(mydata2)
//   };




  return (< >
  <div >
    {/* <div className="flex gap-3 flex-wrap px-5 "> 
      {myState.map((product) => (
        <Card data={product} />
      ))}
      <button onClick={handleFunction}>Click Me</button>
      </div> */}
    
    <ReactRouter className='text-xl text-center text-white'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </ReactRouter>


      </div>
    </>
  );
}

export default App
