const urlClasificaciones = "http://localhost:8000/clasificacion";

export const getClasificaciones= async ()=>{
  try {
      const clasificacion = await fetch (`${urlClasificaciones}/`);
      const datoClasificaciones = await clasificacion.json();
      console.log(datoClasificaciones);
      return datoClasificaciones;
  } catch (error) {
      console.log(error);
  }
};
export const newClasificaciones = async (registroClasificacion) => {
  console.log(registroClasificacion);
  try {
    await fetch(`${urlClasificaciones}/`,{
      method:'post',
      body: JSON.stringify(registroClasificacion),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./clasificaciones.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteClasificaciones = async idClasificacion =>{
  console.log(idClasificacion);
  try {
    await fetch (`${urlClasificaciones}/${idClasificacion}`,{
        method:'DELETE'
    })
    window.location="./clasificaciones.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editClasificaciones = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlClasificaciones}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateClasificaciones => {
      console.log('DATOS Actualizados',updateClasificaciones);
    })
    window.location="./clasificaciones.html" 
  } catch (error) {
    console.log(error);
  }
};