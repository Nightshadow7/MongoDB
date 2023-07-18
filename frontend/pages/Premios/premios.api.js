const urlPremios = "http://localhost:8000/premio";

export const getPremios= async ()=>{
  try {
      const premio = await fetch (`${urlPremios}/`);
      const datoPremios = await premio.json();
      console.log(datoPremios);
      return datoPremios;
  } catch (error) {
      console.log(error);
  }
};
export const newPremios = async (registroPremio) => {
  console.log(registroPremio);
  try {
    await fetch(`${urlPremios}/`,{
      method:'post',
      body: JSON.stringify(registroPremio),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./premios.html";
  } catch (error) {
    console.log(error);
  }
};
export const deletePremios = async idPremio =>{
  console.log(idPremio);
  try {
    await fetch (`${urlPremios}/${idPremio}`,{
        method:'DELETE'
    })
    window.location="./premios.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editPremios = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlPremios}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updatePremios => {
      console.log('DATOS Actualizados',updatePremios);
    })
    window.location="./premios.html" 
  } catch (error) {
    console.log(error);
  }
};