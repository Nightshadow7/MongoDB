import { getClasificaciones , newClasificaciones , deleteClasificaciones , editClasificaciones } from "./clasificaciones.api.js";
addEventListener('DOMContentLoaded',()=>{
  cargaClasificacion();
});

async function cargaClasificacion(){
  const clasificacion = await getClasificaciones();
  console.log(clasificacion);
  const tableClasificacion = document.querySelector("#datosClasificaciones");
  clasificacion.forEach((element,index) => {
    const {_id , Tipo , Descripcion} = element;
    tableClasificacion.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Tipo}</td>
        <td>${Descripcion}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Tipo="${Tipo}" Descripcion="${Descripcion}">Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarClasificacion');
formulario.addEventListener("submit", newClasificacion);


function newClasificacion(e){
  e.preventDefault();
  const Tipo = document.querySelector('#Tipo').value;
  const Descripcion = document.querySelector('#Descripcion').value;

  const registro = {
    Tipo,
    Descripcion
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newClasificaciones(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosClasificaciones');
eliminar.addEventListener('click',deleteClasificacion);

function deleteClasificacion (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar esta Clasificacion");
    if(confir){
      deleteClasificaciones(id);
    };
  }
};

const NewDates = document.querySelector('#datosClasificaciones')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const tipcla = e.target.getAttribute('Tipo');
    const Tipo1 = document.querySelector('#Tipo2');
    Tipo1.value = tipcla;

    const descla = e.target.getAttribute('Descripcion');
    const Descripcion1 = document.querySelector('#Descripcion2');
    Descripcion1.value = descla;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateClasificacion)


    let datos={};
    function updateClasificacion(e){
      e.preventDefault();
      const Tipo = document.querySelector('#Tipo2').value ;
      const Descripcion = document.querySelector('#Descripcion2').value;
      console.log(Tipo);

      datos={
        _id:datosId,
        Tipo,
        Descripcion
      }
      console.log(datos._id);
      editClasificaciones(datos)
    }  
  }
}