import  {formatearDinero}  from "../helpers"; //Importamos la funcion para formatear dinero

export default function Productos({producto}) {

    const{nombre,precio,imagen}=producto;
  return (  //!La parte de Return Solamente es para mostrar info.. no podemos declarar funciones

    <div className="border p-3 shadow bg-white"> 
    <img 
    alt={ `imagen ${nombre}` }
    className="w-full"
    src={`/img/${imagen}.jpg`} 
    
    />
    <div className="p-5">
        <h3 className="text-2xl font-bold ">  {nombre} </h3>
        <p className="mt-5 font-black text-4xl text-amber-500"> {formatearDinero(precio)} </p> 
    </div>

    </div>
  )
}
