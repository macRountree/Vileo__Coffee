import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const { categorias } = useQuiosco();
  const { logout, user } = useAuth({ middleware: "auth" });

  return (
    //Este parentesis del return  muestra informacion que hay dentros
    <aside className="md:w-56">
      <div className="p-4">
        <img className="w-40" src="img/logo.svg " alt="Logo Coffee" />
      </div>
      <p className="my-10 text-xl text-center">HOla {user?.name} </p>
      <div className="mt-10">
        {categorias.map((categoria) => (
          // console.log(categoria)
          // <p>{categoria.nombre}</p>

          <Categoria key={categoria.id} categoria={categoria} />

          //!Props son argumentos que se pasan entre componentes en React
        ))}
      </div>
      <div className="my-5 px-5 ">
        <button
          type="button"
          className="text-center text-base hover:text-lg  bg-red-500 w-full p-3 font-bold text-white truncate"
          onClick={logout}
        >
          Cancelar Orden
        </button>
      </div>
      {/* sdfsdfsd */}
    </aside>
  );
}
