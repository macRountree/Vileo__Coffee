import { createContext, useState } from "react";
import { categorias as categoriasDb } from "../data/categorias";

const QuioscoContext = createContext(categoriasDb);
const QuioscoProvider = ({ children }) => {
  //Podemos pasarle strings  funciones state etc dentro del value/

  const [categorias, setCategorias] = useState(categoriasDb); //se utiliza corchetes en el destructuring
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]); //cuando presionamos una categoria se cambia ala categoria actual
  const [modal, setmodal] = useState(false); //Cuando el usuario presione 'Agregar' se debemostrar un modal
  const [producto, setProducto] = useState({}); //se inicia con un objeto vacio
  const [pedido, setPedido] = useState([]); //se inicia como arreglo vacio , setPedido tendra varias acciones agregar quitar actualizar pedidos en la misma function

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };
  const handleClickModal = () => {
    setmodal(!modal);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleAgregarPedido = ({ categoria_id, imagen, ...producto }) => {
    // En react no debemos modificar el state por lo que no se recomienda utilizar push,unshift etc
    setPedido([...pedido, producto]);
  };

  return (
    //Colocamos variables o funciones donde sea para importarlos en cualquier componente

    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
