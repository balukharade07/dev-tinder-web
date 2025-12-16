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
import ConnectionRequest from './components/ConnectionRequest';
import Connection from './components/Connection';
import UserComponents from './components/UserComponents';

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
            <Route path='user' element={<UserComponents />}>
              <Route path='feed' element={<Feed />} />
              <Route path='connection' element={<Connection />} />
              <Route
                path='connection-request'
                element={<ConnectionRequest />}
              />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
