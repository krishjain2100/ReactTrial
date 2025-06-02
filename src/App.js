import Cards from './components/Cards';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import './App.css'

const layout1 = (sidebarStatus, setSidebarStatus) => 
  <div className='layout1'>
    <Sidebar/>
    <div className='main'> 
      <Navigation sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/>
      <Cards/>
    </div>
  </div>

const layout2 = (sidebarStatus, setSidebarStatus) =>
  <div className='layout2'>
    <Navigation sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/>
    <Cards/>
  </div>  
 

function App() {
  let [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <div className="App">
      {sidebarStatus ?  layout1(sidebarStatus, setSidebarStatus) : layout2(sidebarStatus, setSidebarStatus)}
    </div>
  );
}


export default App;
