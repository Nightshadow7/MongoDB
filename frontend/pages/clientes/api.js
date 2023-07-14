const urlClientes = "http://localhost:8000/cliente";

// const urlClientes = "http://localhost:8000/cliente/";
// const urlOneClientes = "http://localhost:8000/cliente/one/";
// const urlNewClientes = "http://localhost:8000/cliente/add";
// const urlDeleteClientes = "http://localhost:8000/cliente/del/";
// const urlEditClientes = "http://localhost:8000/cliente/upd/";

export const getClientes= async ()=>{
  try {
      const cliente = await fetch (`${urlClientes}/`);
      const datoClientes = await cliente.json();
      console.log(datoClientes);
      return datoClientes;
  } catch (error) {
      console.log(error);
  }
};
export const newClientes = async (registroCliente) => {
  console.log(registroCliente);
  try {
    await fetch(`${urlClientes}/`,{
      method:'post',
      body: JSON.stringify(registroCliente),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./clientes.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteClientes = async idCliente =>{
  console.log(idCliente);
  try {
    await fetch (`${urlClientes}/${idCliente}`,{
        method:'DELETE'
    })
    window.location="./clientes.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editClientes = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlClientes}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateClientes => {
      console.log('DATOS Actualizados',updateClientes);
    })
    window.location="./clientes.html" 
  } catch (error) {
    console.log(error);
  }
};