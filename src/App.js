import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoginForm from './Components/LoginForm';
import DashBoard from './Components/DashBoard';
import Error from './Components/Error';
import Denylogin from './Components/Denylogin';

const router=createBrowserRouter([
  {path: '/', element: <Navbar/>},
  {path: '/login', element: <LoginForm/>},
  {path: '/dash', element: <DashBoard/>},
  {path: '/error', element: <Error />},
  {path: '/denylogin', element: <Denylogin/>}
]);

function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;
