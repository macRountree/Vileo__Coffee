//*Este layout tendra el acceso a la app

import {Outlet} from 'react-router-dom' ;  //*Si empieza con mayuzculas es un componente .. si empieza con 'use' es un hooks


export default function layout() {
  return (
    <div>
        Layout
        <Outlet/>
    </div>
  )
}
