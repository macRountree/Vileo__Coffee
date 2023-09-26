//*Este layout es en donde el usuario llenara un formulario con sus credenciales

import { Outlet } from "react-router-dom"

//!Continuar AQUI 
export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex-col ">
        <img src='../img/logo.svg' alt="imagen logotipo" className="max-w-xs" />
        <div>

        <Outlet/>
        </div>
    </main>
  )
}
