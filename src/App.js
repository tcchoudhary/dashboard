import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar'
import { useState } from 'react';

const App = () =>{
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const desing = (
<div className='grid-container'>
<Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
<Home/>
</div>
  );
  return desing;
}

export default App;
