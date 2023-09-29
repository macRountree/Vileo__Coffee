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
                <Categoria
                    categoria={categoria.nombre}
                />  
                //!Props son argumentos que se pasan entre componentes en React
            ))}

        </div>
    </aside>
  )
}
