import { getPremios , newPremios , deletePremios , editPremios } from "./premios.api.js";

addEventListener('DOMContentLoaded',()=>{
  cargaPremio();
});

async function cargaPremio(){
  const premio = await getPremios();
  console.log(premio);
  const tablePremio = document.querySelector("#datosPremios");
  premio.forEach((element,index) => {
    const {_id , Tipo , Descripcion} = element;
    tablePremio.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Tipo}</td>
        <td>${Descripcion}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Tipo="${Tipo}" Descripcion="${Descripcion}" >Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarPremio');
formulario.addEventListener("submit", newPremio);


function newPremio(e){
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
  }return newPremios(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosPremios');
eliminar.addEventListener('click',deletePremio);

function deletePremio (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar esta registro de Premio");
    if(confir){
      deletePremios(id);
    };
  }
};

const NewDates = document.querySelector('#datosPremios')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const pretip = e.target.getAttribute('Tipo');
    const Tipo1 = document.querySelector('#Tipo2');
    Tipo1.value = pretip;

    const predes = e.target.getAttribute('Descripcion');
    const Descripcion1 = document.querySelector('#Descripcion2');
    Descripcion1.value = predes;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updatePremio)


    let datos={};
    function updatePremio(e){
      e.preventDefault();
      const Tipo = document.querySelector('#Tipo2').value ;
      const Descripcion = document.querySelector('#Descripcion2').value;
      
      datos={
        _id:datosId,
        Tipo,
        Descripcion
      }
      console.log(datos._id);
      editPremios(datos)
    }  
  }
}