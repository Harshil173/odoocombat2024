import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
