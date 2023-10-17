import useQuiosco from "../hooks/useQuiosco";


export default function Categoria({categoria}) {
    // console.log(categoria); //Si se muestran
    const {handleClickCategoria ,categoriaActual} = useQuiosco();
    const {icono ,id, nombre} = categoria;

    const resaltarCategoriaActual = ()=> categoriaActual.id===id ? "bg-amber-400" : "bg-white"
    return (
    <div className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full  p-3 hover:p-6 hover:bg-amber-400 cursor-pointer`}>

      <img   
      src={`/img/icono_${icono}.svg`} 
      alt="Imagen ICONO" 
      className="w-12 " />

      <button 
       className="text-lg  font-bold cursor-pointer truncate"
       type="button"
       onClick={()=>(handleClickCategoria(id))}
           
       >
        {nombre}
        </button>
    </div>
  )
}
