import { Route, Routes } from 'react-router-dom';
import ControlNavbar from './components/controlNavbar/controlNavbar';
import Home from './components/home/home';
import Machine from './components/machine/machine';
import ManageMachines from './components/manageMachines/manageMachines';
import { useSelector } from "react-redux"
import { useState } from 'react';

function App() {
  const categories = useSelector(state => state.categoryReducer)

  const [routes, setRoutes] = useState("")

  return (
    <div className="App">
      <ControlNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='a' element={<Machine />} />
        <Route path='b' element={<Machine />} />
        <Route path='manage' element={<ManageMachines />} />
      </Routes>
    </div>
  );
}

export default App;
