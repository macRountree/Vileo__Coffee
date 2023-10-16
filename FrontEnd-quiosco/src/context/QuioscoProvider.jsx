import { createContext, useState, useEffect } from "react";
// import { categorias as categoriasDb } from "../data/categorias";
import { toast } from "react-toastify"; //!Instalamos toastify y agremaos al provider.. tambien instalamos los componentes de CSS
import clienteAxios from "../config/axios";

const QuioscoContext = createContext();
const QuioscoProvider = ({ children }) => {
  //Podemos pasarle strings  funciones state etc dentro del value/

  const [categorias, setCategorias] = useState([]); //se utiliza corchetes en el destructuring y empieza con un arreglo vacio
  const [categoriaActual, setCategoriaActual] = useState({}); //cuando presionamos una categoria se cambia ala categoria actual e inicia como objeto
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
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      const { data } = await clienteAxios("/api/categorias", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

  const handleSubmitNuevaOrden = async (logout) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      const { data } = await clienteAxios.post(
        "/api/pedidos",
        {
          total,
          productos: pedido.map((producto) => {
            return {
              id: producto.id,
              cantidad: producto.cantidad,
            };
          }),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(data.message);
      setTimeout(() => {
        setPedido([]);
      }, 1000);

      // Cerrar la sesión del usuario
      setTimeout(() => {
        localStorage.removeItem("AUTH_TOKEN");
        logout();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
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
        handleSubmitNuevaOrden,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
