
export default function Categoria({categoria}) {
    // console.log(categoria); //Si se muestran

    const {icono ,id, nombre} = categoria;
    // console.log(categoria);
  return (
    <div className="flex items-center gap-4 border w-full  p-3 hover:p-6 hover:bg-amber-400 cursor-pointer">

      <img   
      src={`/img/icono_${icono}.svg`} 
      alt="Imagen ICONO" 
      className="w-12 hover:w-16" />

      <p className="text-lg hover:text-xl font-bold cursor-pointer truncate">{nombre}</p>
    </div>
  )
}
