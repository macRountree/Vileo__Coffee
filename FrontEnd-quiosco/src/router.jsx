import {createBrowserRouter} from 'react-router-dom'  
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Layout from './layouts/Layout'
import Login from './views/Login'
import Registro from './views/Registro'


const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout />, 
        children:[
            {
                index:true,
                element: <Inicio/>,
                
            }
        ]    //*Element es un componente de react cuando el usuario visite esa pagina 
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[
            { 
            path:'/auth/login',
            element:<Login/>
            },
            { 
            path:'/auth/registro',
            element:<Registro/>
            },
        ]
    }
])

export default router