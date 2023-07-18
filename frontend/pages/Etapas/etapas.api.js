const urlEtapas = "http://localhost:8000/etapa";

export const getEtapas= async ()=>{
  try {
      const etapa = await fetch (`${urlEtapas}/`);
      const datoEtapas = await etapa.json();
      console.log(datoEtapas);
      return datoEtapas;
  } catch (error) {
      console.log(error);
  }
};
export const newEtapas = async (registroEtapa) => {
  console.log(registroEtapa);
  try {
    await fetch(`${urlEtapas}/`,{
      method:'post',
      body: JSON.stringify(registroEtapa),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./etapas.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteEtapas = async idEtapa =>{
  console.log(idEtapa);
  try {
    await fetch (`${urlEtapas}/${idEtapa}`,{
        method:'DELETE'
    })
    window.location="./etapas.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editEtapas = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlEtapas}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateEtapas => {
      console.log('DATOS Actualizados',updateEtapas);
    })
    window.location="./etapas.html" 
  } catch (error) {
    console.log(error);
  }
};

