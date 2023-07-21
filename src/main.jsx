import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import About from "./pages/About"
import Events from "./pages/Events"
import Community from "./pages/Community"
import Leaders from "./pages/Leaders"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },

    {
        path: "about",
        element: <About />,
    },

    {
        path: "events",
        element: <Events />,
    },

    {
        path: "community",
        element: <Community />,
    },

    {
        path: "leaders",
        element: <Leaders />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
