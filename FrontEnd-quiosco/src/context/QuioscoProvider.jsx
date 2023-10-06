import { createContext, useState, useEffect } from "react";
// import { categorias as categoriasDb } from "../data/categorias";
import { toast } from "react-toastify"; //!Instalamos toastify y agremaos al provider.. tambien instalamos los componentes de CSS
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const QuioscoContext = createContext();
const QuioscoProvider = ({ children }) => {
  //Podemos pasarle strings  funciones state etc dentro del value/

  const [categorias, setCategorias] = useState([]); //se utiliza corchetes en el destructuring
  const [categoriaActual, setCategoriaActual] = useState({}); //cuando presionamos una categoria se cambia ala categoria actual
  const [modal, setmodal] = useState(false); //Cuando el usuario presione 'Agregar' se debemostrar un modal
  const [producto, setProducto] = useState({}); //se inicia con un objeto vacio
  const [pedido, setPedido] = useState([]); //se inicia como arreglo vacio , setPedido tendra varias acciones agregar quitar actualizar pedidos en la misma function
  const [total, setTotal] = useState(0); //se inicia en 0 por obvias razones

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/api/categorias`
      );
      setCategorias(data.data);
      setCategoriaActual(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

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

  const handleAgregarPedido = ({ categoria_id, ...producto }) => {
    // En react no debemos modificar el state por lo que no se recomienda utilizar push,unshift etc
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado Correctamente");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado a Pedido");
    }
  };

  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter(
      (producto) => producto.id === id
    )[0];
    setProducto(productoActualizar);
    setmodal(!modal);
  };

  const handleEliminarProductoPedido = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success("Pedido Eliminado");
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
        handleEditarCantidad,
        handleEliminarProductoPedido,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
