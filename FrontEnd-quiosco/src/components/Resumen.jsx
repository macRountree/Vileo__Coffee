import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {
  const { pedido } = useQuiosco();
  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black"> Mi pedido </h1>
      <p className="text-lg my-5">
        Aqui podras ver el resumen y totales de tu pedido
      </p>

      <div className="py-10">
        {pedido.lenght === 0 ? (
          <p className="text-center text-2xl">No hay elementos agregados</p>
        ) : (
          pedido.map((producto) => (
            <ResumenProducto
              key={producto.id}
              //le pasamos un prop de producto
              producto={producto}
            />
          ))
        )}
      </div>
      <p className="text-xl mt-10">Total: {""}</p>

      <form className="w-full">
        <div className="mt-5">
          <input
            type="submit"
            className=" w-full bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded text-center text-white uppercase cursor-pointer font-bold "
            value=" confirmar pedido"
          />
        </div>
      </form>
    </aside>
  );
}
