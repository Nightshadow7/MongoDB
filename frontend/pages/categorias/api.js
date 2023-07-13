const urlCategorias = "http://localhost:8000/categoria";
console.log("hola22");

// const urlCategorias = "http://localhost:8000/categoria/all";
// const urlOneCategorias = "http://localhost:8000/categoria/one/";
// const urlNewCategorias = "http://localhost:8000/categoria/add";
// const urlDeleteCategorias = "http://localhost:8000/categoria/del/";
// const urlEditCategorias = "http://localhost:8000/categoria/upd/";

export const getCategorias= async ()=>{
  try {
      const categoria = await fetch (`${urlCategorias}/`);
      const datoCategorias = await categoria.json();
      console.log(datoCategorias);
      return datoCategorias;
  } catch (error) {
      console.log(error);
  }
};
export const newCategorias = async (registroCategoria) => {
  console.log(registroCategoria);
  try {
    await fetch(`${urlCategorias}/add`,{
      method:'post',
      body: JSON.stringify(registroCategoria),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./categorias.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteCategorias = async idCategoria =>{
  console.log(idCategoria);
  try {
    await fetch (`${urlCategorias}/del/${idCategoria}`,{
        method:'DELETE'
    })
    window.location="./categorias.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editCategorias = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlCategorias}/upd/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateCategorias => {
      console.log('DATOS Actualizados',updateCategorias);
    })
    window.location="./categorias.html" 
  } catch (error) {
    console.log(error);
  }
};