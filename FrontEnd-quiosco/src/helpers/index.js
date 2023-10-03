// Aqui declaramos las funciones y las importamos en diferentes vistas/componentes

export  const formatearDinero = cantidad=>{
    return cantidad.toLocaleString('en-US',{   
        style:'currency',
        currency:'USD'
    })
}