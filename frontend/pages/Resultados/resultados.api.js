const urlResultados = "http://localhost:8000/resultado";

export const getResultados= async ()=>{
  try {
      const resultado = await fetch (`${urlResultados}/`);
      const datoResultados = await resultado.json();
      console.log(datoResultados);
      return datoResultados;
  } catch (error) {
      console.log(error);
  }
};
export const newResultados = async (registroResultado) => {
  console.log(registroResultado);
  try {
    await fetch(`${urlResultados}/`,{
      method:'post',
      body: JSON.stringify(registroResultado),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./resultados.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteResultados = async idResultado =>{
  console.log(idResultado);
  try {
    await fetch (`${urlResultados}/${idResultado}`,{
        method:'DELETE'
    })
    window.location="./resultados.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editResultados = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlResultados}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateResultados => {
      console.log('DATOS Actualizados',updateResultados);
    })
    window.location="./resultados.html" 
  } catch (error) {
    console.log(error);
  }
};