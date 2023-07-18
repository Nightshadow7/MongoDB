const urlEquipos = "http://localhost:8000/equipo";

export const getEquipos= async ()=>{
  try {
      const equipo = await fetch (`${urlEquipos}/`);
      const datoEquipos = await equipo.json();
      console.log(datoEquipos);
      return datoEquipos;
  } catch (error) {
      console.log(error);
  }
};
export const newEquipos = async (registroEquipo) => {
  console.log(registroEquipo);
  try {
    await fetch(`${urlEquipos}/`,{
      method:'post',
      body: JSON.stringify(registroEquipo),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./equipos.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteEquipos = async idEquipo =>{
  console.log(idEquipo);
  try {
    await fetch (`${urlEquipos}/${idEquipo}`,{
        method:'DELETE'
    })
    window.location="./equipos.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editEquipos = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlEquipos}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateEquipos => {
      console.log('DATOS Actualizados',updateEquipos);
    })
    window.location="./equipos.html" 
  } catch (error) {
    console.log(error);
  }
};