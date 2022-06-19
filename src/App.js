import { Route, Routes } from 'react-router-dom';
import ControlNavbar from './components/controlNavbar/controlNavbar';
import Home from './components/home/home';
import Machine from './components/machine/machine';
import ManageMachines from './components/manageMachines/manageMachines';
import { useSelector } from "react-redux"

function App() {
  const categories = useSelector(state => state.categoryReducer)

  return (
    <div className="App">
      <ControlNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {
          categories.map(item => {
            return <Route key={item.id} path={item.typeName} element={<Machine type={item.typeName}/>} />
          })
        }
        <Route path='manage' element={<ManageMachines />} />
        
        {/* <Route path='*' element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
