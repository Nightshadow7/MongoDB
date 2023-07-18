import { getEquipos , newEquipos , deleteEquipos , editEquipos } from "./equipos.api.js";
addEventListener('DOMContentLoaded',()=>{
  cargaEquipo();
});

async function cargaEquipo(){
  const equipo = await getEquipos();
  console.log(equipo);
  const tableEquipo = document.querySelector("#datosEquipos");
  equipo.forEach((element,index) => {
    const {_id , Nombre , Patrocinador} = element;
    tableEquipo.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Nombre}</td>
        <td>${Patrocinador}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Nombre="${Nombre}" Patrocinador="${Patrocinador}">Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarEquipo');
formulario.addEventListener("submit", newEquipo);


function newEquipo(e){
  e.preventDefault();
  const Nombre = document.querySelector('#Nombre').value;
  const Patrocinador = document.querySelector('#Patrocinador').value;

  const registro = {
    Nombre,
    Patrocinador
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newEquipos(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosEquipos');
eliminar.addEventListener('click',deleteEquipo);

function deleteEquipo (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar esta Equipo");
    if(confir){
      deleteEquipos(id);
    };
  }
};

const NewDates = document.querySelector('#datosEquipos')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const nomequ = e.target.getAttribute('Nombre');
    const Nombre1 = document.querySelector('#Nombre2');
    Nombre1.value = nomequ;

    const patequ = e.target.getAttribute('Patrocinador');
    const Patrocinador1 = document.querySelector('#Patrocinador2');
    Patrocinador1.value = patequ;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateEquipo)


    let datos={};
    function updateEquipo(e){
      e.preventDefault();
      const Nombre = document.querySelector('#Nombre2').value ;
      const Patrocinador = document.querySelector('#Patrocinador2').value;
      console.log(Nombre);

      datos={
        _id:datosId,
        Nombre,
        Patrocinador
      }
      console.log(datos._id);
      editEquipos(datos)
    }  
  }
}