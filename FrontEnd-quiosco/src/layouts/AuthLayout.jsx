//*Este layout es en donde el usuario llenara un formulario con sus credenciales

import { Outlet } from "react-router-dom"

//!Continuar AQUI 
export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center ">
        <img src='../img/logo.svg' alt="imagen logotipo" className="max-w-xs" />
        <div className="p-10 w-full">

        <Outlet/>
        </div>
    </main>
  )
}
