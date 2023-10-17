import React from 'react'
import ReactDOM from 'react-dom/client'
import { QuioscoProvider } from './context/QuioscoProvider';
import {RouterProvider} from 'react-router-dom';
import router from './router';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuioscoProvider> {/* Aqui Rodeamos el RoutePRovider de nuestra App con el QuioscoProv */}
    |<RouterProvider router={router}/>

    </QuioscoProvider>

    
  </React.StrictMode>,
)
