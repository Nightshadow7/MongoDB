import { getEtapas , newEtapas , deleteEtapas , editEtapas } from "./etapas.api.js";
console.log("holaaaaaaaaaa");
addEventListener('DOMContentLoaded',()=>{
  cargaEtapa();
});

async function cargaEtapa(){
  const etapa = await getEtapas();
  console.log(etapa);
  const tableEtapa = document.querySelector("#datosEtapas");
  etapa.forEach((element,index) => {
    const {_id , Numero , Fecha  , Salida , Llegada } = element;
    tableEtapa.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Numero}</td>
        <td>${Fecha}</td>
        <td>${Salida}</td>
        <td>${Llegada}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Numero="${Numero}" Fecha="${Fecha}" Salida="${Salida}" Llegada="${Llegada}">Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarEtapa');
formulario.addEventListener("submit", newEtapa);


function newEtapa(e){
  e.preventDefault();
  const Numero = document.querySelector('#Numero').value;
  const Fecha = document.querySelector('#Fecha').value;
  const Salida  = document.querySelector('#Salida').value;
  const Llegada = document.querySelector('#Llegada').value;

  const registro = {
    Numero,
    Fecha,
    Salida,
    Llegada
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newEtapas(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosEtapas');
eliminar.addEventListener('click',deleteEtapa);

function deleteEtapa (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar esta Etapa");
    if(confir){
      deleteEtapas(id);
    };
  }
};

const NewDates = document.querySelector('#datosEtapas')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const etanum = e.target.getAttribute('Numero');
    const Numero1 = document.querySelector('#Numero2');
    Numero1.value = etanum;

    const etafec = e.target.getAttribute('Fecha');
    const Fecha1 = document.querySelector('#Fecha2');
    Fecha1.value = etafec;
    
    const etasal = e.target.getAttribute('Salida');
    const Salida1 = document.querySelector('#Salida2');
    Salida1.value = etasal;

    const etale = e.target.getAttribute('Llegada');
    const Llegada1 = document.querySelector('#Llegada2');
    Llegada1.value = etale;
    
    const datosId= e.target.getAttribute('id')
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateEtapa)


    let datos={};
    function updateEtapa(e){
      e.preventDefault();
      const Numero = document.querySelector('#Numero2').value ;
      const Fecha = document.querySelector('#Fecha2').value;
      const Salida = document.querySelector('#Salida2').value;
      const Llegada = document.querySelector('#Llegada2').value;

      datos={
        _id:datosId,
        Numero,
        Fecha,
        Salida,
        Llegada
      }
      console.log(datos._id);
      editEtapas(datos)
    }  
  }
}