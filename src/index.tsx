import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Layout } from 'layout/Layout';
import { Channel } from 'pages/channel/Channel';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/c/:channelId",
        element:<div>Channel</div>,
      },
      {
        path: "/watch",
        element:<div>Video</div>,
      },
    ]
  },

]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={undefined}> */}
    <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
