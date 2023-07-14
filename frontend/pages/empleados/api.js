const urlEmpleados = "http://localhost:8000/empleado";
console.log("hola22");

// const urlEmpleados = "http://localhost:8000/empleado/";
// const urlOneEmpleados = "http://localhost:8000/empleado/one/";
// const urlNewEmpleados = "http://localhost:8000/empleado/add";
// const urlDeleteEmpleados = "http://localhost:8000/empleado/del/";
// const urlEditEmpleados = "http://localhost:8000/empleado/upd/";

export const getEmpleados= async ()=>{
  try {
      const empleado = await fetch (`${urlEmpleados}/`);
      const datoEmpleados = await empleado.json();
      console.log(datoEmpleados);
      return datoEmpleados;
  } catch (error) {
      console.log(error);
  }
};
export const newEmpleados = async (registroEmpleado) => {
  console.log(registroEmpleado);
  try {
    await fetch(`${urlEmpleados}/`,{
      method:'post',
      body: JSON.stringify(registroEmpleado),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./empleados.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteEmpleados = async idEmpleado =>{
  console.log(idEmpleado);
  try {
    await fetch (`${urlEmpleados}/${idEmpleado}`,{
        method:'DELETE'
    })
    window.location="./empleados.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editEmpleados = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlEmpleados}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateEmpleados => {
      console.log('DATOS Actualizados',updateEmpleados);
    })
    window.location="./empleados.html" 
  } catch (error) {
    console.log(error);
  }
};