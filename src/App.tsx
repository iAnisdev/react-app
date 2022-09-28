import { Outlet, RouterProvider } from 'react-router-dom';
import router from './Router/Index';
import CurrentPageContextProvider from './Context/CurrentPage';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <CurrentPageContextProvider>
        <RouterProvider router={router} />
        <Outlet />
      </CurrentPageContextProvider>
    </Fragment>
  );
}

export default App;
