import { useState } from 'react'

import Navbar from './components/Navbar'
import './App.css'
import Page from './components/Page'
import './index.css'
import Products from './components/Products'
function App() {
  const [isLoading, setIsLoading]=useState(false);
  const [data, setData]=useState([]);
  async function handleClick(){
    try{
      setIsLoading(true);
      const res=await fetch('https://dummyjson.com/products');
      const data=await res.json();
      setData(data.products);
      console.log(data.products);
    } catch(error){
      console.log(error);
    } finally{
      setIsLoading(false);
    }
  }

  return (
        <div className=' min-h-screen'>
           <Navbar />
    {/* <Page /> */}
      <div>{
        isLoading ? (<img src="https://media.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt=" " className='w-20  animate-spin' />) : (
          <button onClick={handleClick} className='px-4 py-2 bg-blue-500 text-white rounded'>Fetch Data</button>
        )
}</div>
    <Products metadata={data} setData={setData}/>
   

   
     </div>
    
  )
}

export default App;
