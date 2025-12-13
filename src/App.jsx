import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import AuthLayout from './components/AuthLayout';
import Body from './components/Body';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body/>} >

          <Route path='auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
