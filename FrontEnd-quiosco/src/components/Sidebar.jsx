import { categorias } from "../data/categorias";
import Categoria from "./Categoria";

export default function Sidebar() {
  return (  //Este parentesis del return  muestra informacion que hay dentros
    <aside className="md:w-72">
        <div className="p-4">
            <img className="w-40" src="img/logo.svg " alt="Logo Coffee" />
        </div>
        <div className="mt-10">
            {categorias.map(categoria => (
                // console.log(categoria)
                // <p>{categoria.nombre}</p>
               

                <Categoria 
                key={categoria.id}
                categoria={categoria}/>

               
                //!Props son argumentos que se pasan entre componentes en React
                ))}

        </div>
        <div className="my-5 px-5 ">
            <button
            type="button"
            className="text-center text-base hover:text-lg  bg-red-500 w-full p-3 font-bold text-white truncate   "
            >
                Cancelar Orden
            </button>

        </div>
{/* sdfsdfsd */}
    </aside>
  )
}
