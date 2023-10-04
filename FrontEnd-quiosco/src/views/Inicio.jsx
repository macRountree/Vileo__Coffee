import Productos from "../components/Productos";
import { productos as data } from "../data/productos"
import useQuiosco from "../hooks/useQuiosco";




export default function Inicio() {

  const {categoriaActual}= useQuiosco();

  const productos = data.filter( producto=> producto.categoria_id === categoriaActual.id)
  return (
   
<>
    <h1 className="text-4xl font-black">
      {categoriaActual.nombre}
    </h1>
    <p className="text-2xl my-10">
      Elige y personaliza tu pedido a continuación
    </p>

    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {/* Iteramos los productos */}

      {productos.map(producto =>(
        <Productos
        
        key= {producto.imagen} //No es necesariamente pasarle un ID a key.. le pasamos img porque es unica para cada producto
        producto={producto}
        
        />

      ))}




    </div>

</>
    
  ) 
}
