import { formatearDinero } from '../helpers'; //Importamos la funcion para formatear dinero
import useQuiosco from '../hooks/useQuiosco';
export default function Productos({
  producto,
  botonAgregar = false,
  botonDisponible = false,
}) {
  const { handleClickModal, handleSetProducto, handleClickProductoAgotado } =
    useQuiosco();

  const { nombre, precio, imagen } = producto;
  return (
    //!La parte de Return Solamente es para mostrar info.. no podemos declarar funciones

    <div className="border p-3 shadow bg-white">
      <img
        alt={`imagen ${nombre}`}
        className="w-full"
        src={`/img/${imagen}.jpg`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold "> {nombre} </h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        {/*funcion que maneja el signo de dolar */}

        {botonAgregar && (
          <button
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={() => {
              handleClickModal();
              handleSetProducto(producto);
            }}
          >
            Agregar
          </button>
        )}

        {botonDisponible && (
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={() => handleClickProductoAgotado(producto.id)}
          >
            Producto Agotado
          </button>
        )}
      </div>
    </div>
  );
}
