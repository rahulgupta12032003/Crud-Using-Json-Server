import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import View from './components/View';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

         <Route path="/" element={<Home />}/>
         <Route path="/add-user" element={<AddUser />} />
         <Route path="/user/:id" element={<View />} />
         <Route path="/edit-user/:id" element={<Edit />} />
         
      </Routes>
      
    </div>
  );
}

export default App;
