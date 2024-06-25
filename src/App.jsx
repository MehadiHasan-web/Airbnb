
import { useState } from 'react';
import './App.css'
import PublicRouter from './Router/PublicRouter'
import { RouterProvider } from 'react-router-dom';
import PrivateRouter from './Router/PrivateRouter';


function App() {
  const [auth, setAuth] = useState(false);


  return (
    <>
      {auth ? <RouterProvider router={PrivateRouter} /> : <RouterProvider router={PublicRouter} />}

    </>
  )
}

export default App
