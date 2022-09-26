import { Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Index';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

export default App;
