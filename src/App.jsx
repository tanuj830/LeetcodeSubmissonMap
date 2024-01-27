import './App.css';
import Sidebar from './components/Sidebar';
import Input from './components/Input';
import SubmissonTracker from './components/SubmissonTracker';
import React,{useState} from 'react';

function App() {
  var inital = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  const [days, setDays] = useState(inital)
  
  return (
    <div className="lg:h-screen px-5 py-10 md:p-10 lg:px-20 lg:py-10">
      <div className='flex flex-col lg:flex-row gap-8'>
          <Sidebar/>
        <div className=' w-full'>
          <Input days = {days} setDays={setDays}/>
          <SubmissonTracker days={days}/>
        </div>
      </div>
    </div>
  );
}

export default App;
