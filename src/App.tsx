import { Layout } from 'layout/Layout';
import { Channel } from 'pages/channel/Channel';
import React from 'react';
import { Router ,createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
  },
  {
    path: "/subscriptions",
    element: <Channel />,
  },
]);


function App() {


  return (
    <RouterProvider router={router} />
  );
}

export default App;
