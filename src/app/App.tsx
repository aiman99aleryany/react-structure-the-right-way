import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import './assets/sass/css/index.css';

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={AppRoutes} />
        </React.StrictMode>
    );
}

export default App;
