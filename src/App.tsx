import { RouterProvider} from 'react-router-dom';
import './App.css';
import router from './Router/Index';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Profile">Profile</a></li>
        <li><a href="/Setting">Setting</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/Signup">Signup</a></li>
      </ul>
    </nav>

    <RouterProvider router={router} />
    </>
  );
}

export default App;
