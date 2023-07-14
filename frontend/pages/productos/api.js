const urlProductos = "http://localhost:8000/producto";
console.log("hola22");

// const urlProductos = "http://localhost:8000/producto/";
// const urlOneProductos = "http://localhost:8000/producto/one/";
// const urlNewProductos = "http://localhost:8000/producto/add";
// const urlDeletPproductos = "http://localhost:8000/producto/del/";
// const urlEditProductos = "http://localhost:8000/producto/upd/";

export const getProductos= async ()=>{
  try {
      const producto = await fetch (`${urlProductos}/`);
      const datoProductos = await producto.json();
      console.log(datoProductos);
      return datoProductos;
  } catch (error) {
      console.log(error);
  }
};
export const newProductos = async (registroProducto) => {
  console.log(registroProducto);
  try {
    await fetch(`${urlProductos}/`,{
      method:'post',
      body: JSON.stringify(registroProducto),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./productos.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteProductos = async idProducto =>{
  console.log(idProducto);
  try {
    await fetch (`${urlProductos}/${idProducto}`,{
        method:'DELETE'
    })
    window.location="./productos.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editProductos = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlProductos}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateProductos => {
      console.log('DATOS Actualizados',updateProductos);
    })
    window.location="./productos.html" 
  } catch (error) {
    console.log(error);
  }
};