import { Routes , Route ,  Outlet } from 'react-router-dom';
import CurrentPageContextProvider from './Context/CurrentPage';
import { Fragment } from 'react';

import Home from './Pages/Home';
import Main from './Pages/Dashboard/Main';
import Profile from './Pages/Dashboard/Profile';
import Setting from './Pages/Dashboard/Setting';
import Auth from './Pages/Auth/Auth';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Forgot from './Pages/Auth/Forgot';
import Logout from './Pages/Auth/Logout';

function App() {
  return (
    <Fragment>
      <CurrentPageContextProvider>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Main />} />
            <Route path='profile' element={<Profile />} />
            <Route path='setting' element={<Setting />} />
          </Route>
          <Route path='/auth' element={<Auth />}>
            <Route index element={<Login />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgot' element={<Forgot />} />
            <Route path='logout' element={<Logout />} />
          </Route>
        </Routes>
        <Outlet />
      </CurrentPageContextProvider>
    </Fragment>
  );
}

export default App;
