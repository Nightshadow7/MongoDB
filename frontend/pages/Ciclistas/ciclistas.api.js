const urlCiclistas = "http://localhost:8000/ciclista";

export const getCiclistas= async ()=>{
  try {
      const ciclista = await fetch (`${urlCiclistas}/`);
      const datoCiclistas = await ciclista.json();
      console.log(datoCiclistas);
      return datoCiclistas;
  } catch (error) {
      console.log(error);
  }
};
export const newCiclistas = async (registroCiclista) => {
  console.log(registroCiclista);
  try {
    await fetch(`${urlCiclistas}/`,{
      method:'post',
      body: JSON.stringify(registroCiclista),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./ciclistas.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteCiclistas = async idCiclista =>{
  console.log(idCiclista);
  try {
    await fetch (`${urlCiclistas}/${idCiclista}`,{
        method:'DELETE'
    })
    window.location="./ciclistas.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editCiclistas = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlCiclistas}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateCiclistas => {
      console.log('DATOS Actualizados',updateCiclistas);
    })
    window.location="./ciclistas.html" 
  } catch (error) {
    console.log(error);
  }
};