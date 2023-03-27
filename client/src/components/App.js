import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import Test from './Test';
import Result from './Result';

/** react routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  },
  {
    path: '/main',
    element: <Main></Main>
  },
  {
    path: '/test',
    element: <Test></Test>
  },
  {
    path: '/result',
    element: <Result></Result>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
