import Productos from "../components/Productos";
// import { productos as data } from "../data/productos"; //Aqui tenemos los productos pero lo eliminamos para importar SWR
import useSWR from "swr";
import clienteAxios from "../config/axios";
import useQuiosco from "../hooks/useQuiosco";

export default function Inicio() {
  const { categoriaActual } = useQuiosco();

  //Consultamos SWR
  const fetcher = () =>
    clienteAxios("/api/productos").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/api/productos", fetcher, {
    refreshInterval: 1000,
  });
  console.log(data);

  if (isLoading) return "Cargando...";
  // console.log(isLoading);
  const productos = data.data.filter(
    (producto) => producto.categoria_id === categoriaActual.id
  );
  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {/* Iteramos los productos */}

        {productos.map((producto) => (
          <Productos
            key={producto.imagen} //No es necesariamente pasarle un ID a key.. le pasamos img porque es unica para cada producto
            producto={producto}
          />
        ))}
      </div>
    </>
  );
}
