import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
