import { useState } from 'react'

import Navbar from './components/Navbar'
import './App.css'
import Page from './components/Page'
import ReactLifeCycle from './components/ReactLifeCycle'
import './index.css'
import Products from './components/Products'
import CriketUnmunt from './components/CriketUnmunt'
import SoccerUnmunt from './components/SoccerUnmunt'
function App() {
  const [activeGame, setActiveGame] = useState('cricket');
  const [isLoading, setIsLoading]=useState(false);
  const [srcData, setSrcData]=useState([]);
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
        <div>
           {/* <Navbar setData={setData} metadata={data}/> */}
    {/* <Page /> */}
      {/* <div>{
        isLoading ? (<img src="https://media.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt=" " className='w-20  animate-spin' />) : (
          <button onClick={handleClick} className='px-4 py-2 bg-blue-500 text-white rounded'>Fetch Data</button>
        )
}</div> */}
    {/* <Products metadata={data} setData={setData}/> */}
   
{/* <ReactLifeCycle/> */}
   
{activeGame === 'cricket' ? <CriketUnmunt/> :<SoccerUnmunt/>}
   <div className='flex gap-4 mt-4'>
    <button className='bg-black text-white p-2 rounded-lg' onClick={() => setActiveGame('cricket')}>Cricket</button>
    <button className='bg-black text-white p-2 rounded-lg' onClick={() => setActiveGame('soccer')}>Soccer</button>
    </div>
     </div>
    
  )
}

export default App;
