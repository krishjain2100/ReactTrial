import Cards from './components/Cards';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import './App.css'

function App() {
  let [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <div className="App">
      {
      sidebarStatus 
      ?  
      <div className='layout'>
        <div className='side'><Sidebar/></div>
        <div className='main'> 
          <div> <Navigation sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/> </div>
          <div> <Cards/> </div>
        </div>
      </div>
      :
      <div className='layout2'>
        <div> <Navigation sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/> </div>
        <div> <Cards/> </div>
      </div>
      }  

    </div>
  );
}


export default App;
