import {getRegion,newRegion,deleteRegion} from "./api.js";

addEventListener('DOMContentLoaded',()=>{
  cargaRegion();
});

async function cargaRegion(){
  const region = await getRegion();
  console.log(region);
  const tableRegion = document.querySelector("#datosRegion");

  region.forEach(element => {
    const {idReg , departamento , nombreReg} = element;
    tableRegion.innerHTML+= `
      <tr>
        <th scope="row">${idReg}</th>
        <td>${departamento}</td>
        <td>${nombreReg}</td>
        <td><button class="btn btn-outline-danger delete" id="${idReg}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" id="${idReg}">Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarRegion');
formulario.addEventListener("submit", newRegiones);


function newRegiones(e){
  e.preventDefault();
  const idReg = document.querySelector('#id').value;
  const departamento = document.querySelector('#departamento').value;
  const nombreReg  = document.querySelector('#nombre').value;

  const registro = {
    idReg ,
    departamento,
    nombreReg
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newRegion (registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosRegion');
eliminar.addEventListener('click',borrar);

function borrar (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const idRegion = e.target.getAttribute('id');
    console.log(idRegion);

    const confir = confirm("Desea eliminarlo");
    if(confir){
      deleteRegion(idRegion);
    };
  }
};



function editar (){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const idRegion = e.target.getAttribute('id');
    console.log(idRegion);

    const confir = confirm("Desea eliminarlo");
    if(confir){
      deleteRegion(idRegion);
    };
  }
};