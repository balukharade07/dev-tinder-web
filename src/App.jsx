import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import AuthLayout from './components/AuthLayout';
import Body from './components/Body';
import appStore from './components/store/appStore';
import Feed from './components/Feed';
import Profile from './components/Profile';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='auth' element={<AuthLayout />}>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
            <Route path='/user/request' element={<Feed />} />
            <Route path='/user/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
