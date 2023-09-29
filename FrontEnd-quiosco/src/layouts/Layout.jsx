//*Este layout tendra el acceso a la app

import {Outlet} from 'react-router-dom' ;  //*Si empieza con mayuzculas es un componente .. si empieza con 'use' es un hooks
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';


export default function layout() {
  return (
    <div className='md:flex'>
      <Sidebar/>

        <main className='flex-1'>
        <Outlet/>

        </main>

        <Resumen/>
    </div>
  )
}
