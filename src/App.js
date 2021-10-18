
import { useState } from 'react';
import './App.css';

function App() {

  
  const[myValue, setMyValue] = useState('');

  const myFunction = (e) => {

      let nValue = e.target.name;
      setMyValue(myValue.concat(nValue));
}

  const valueZero = () =>{
    setMyValue('');
  }

  const backValue = () => {
      setMyValue(String(myValue.slice(0, -1)));
  }
  const divideByhund = () => {
    setMyValue(String(myValue / 100));
  }

  const result = () => {
    setMyValue(eval(myValue).toString());
  }
  
 


  return (
    <div className="App">
    <div className='text-center'>
         <h1 className='text-red-400 text-3xl pt-2'>Normal Calculator</h1>
       
       <div className='pt-12'>
         <div className=''>
         <form>
         <input type='text' value={myValue} readOnly className='text-white outline-none  bg-transparent text-2xl border-b-2 border-gray-600 p-3 text-right lg:w-1/3' />
        </form>
        </div> 
        </div>
        <div className='mt-4 grid grid-cols-4 px-8 md:px-48 lg:px-96'>
            <button onClick={valueZero} className='text-red-400 text-2xl py-4 cursor-pointer'>AC</button>
            <button  onClick={backValue} className='text-red-400 text-2xl py-4 cursor-pointer'>C</button>
            
            <button  onClick={divideByhund} name='%' className='text-red-400 text-2xl py-4 cursor-pointer'>%</button>
            <button  onClick={myFunction} name='+'  className='text-red-400 text-2xl py-4 cursor-pointer'>+</button>
            <button   onClick={myFunction} name='7' className='text-white text-2xl py-4 cursor-pointer'>7</button>
            <button  onClick={myFunction}  name='8' className='text-white text-2xl py-4 cursor-pointer'>8</button>
            <button  onClick={myFunction} name='9'  className='text-white text-2xl py-4 cursor-pointer'>9</button>
            <button  onClick={myFunction} name='-'  className='text-red-400 text-2xl py-4 cursor-pointer'>-</button>
            <button  onClick={myFunction} name='4'  className='text-white text-2xl py-4 cursor-pointer' >4</button>
            <button  onClick={myFunction} name='5'  className='text-white text-2xl py-4 cursor-pointer'>5</button>
            <button  onClick={myFunction} name='6'  className='text-white text-2xl py-4 cursor-pointer' >6</button>
            <button  onClick={myFunction} name='*'  className='text-red-400 text-2xl py-4 cursor-pointer'>*</button>
            <button  onClick={myFunction} name='1'  className='text-white text-2xl py-4 cursor-pointer'>1</button>
            <button  onClick={myFunction} name='3'  className='text-white text-2xl py-4 cursor-pointer'>2</button>
            <button  onClick={myFunction} name='3'  className='text-white text-2xl py-4 cursor-pointer'>3</button>
            <button  onClick={myFunction} name='/'  className='text-red-400 text-2xl py-4 cursor-pointer'>/</button>
            <button  onClick={myFunction} name='.'  className='text-white text-2xl py-4 cursor-pointer'>.</button>
            <button  onClick={myFunction} name='0'  className='text-white text-2xl py-4 cursor-pointer'>0</button>
            <button  onClick={result}  className=' text-2xl py-4 cursor-pointer bg-red-400 text-white rounded-xl '>=</button>
        </div>
       
      
      </div>
    </div>
  );
}

export default App;
