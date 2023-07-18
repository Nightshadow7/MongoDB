import { getResultados , newResultados , deleteResultados , editResultados } from "./resultados.api.js";
addEventListener('DOMContentLoaded',()=>{
  cargaResultado();
});

async function cargaResultado(){
  const resultado = await getResultados();
  console.log(resultado);
  const tableResultado = document.querySelector("#datosResultados");
  resultado.forEach((element,index) => {
    const {_id , Etapa , Ciclista  , Equipo , Tiempo} = element;
    console.log(Tiempo);
    // const form = document.querySelector('#registrarResultado');
    // const tablaResultados = document.querySelector('#tablaResultados tbody');

    // form.addEventListener('submit', function(event) {
    //   event.preventDefault();
      
    //   const tiempoInput = document.querySelector('#Tiempo');
    //   const tiempoIngresado = tiempoInput.value;
      
    //   const tiempoFormateado = formatearTiempo(tiempoIngresado);
      
    //   agregarFilaTabla(tiempoFormateado);
      
    //   tiempoInput.value = '';
    // });

    tableResultado.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Etapa}</td>
        <td>${Ciclista}</td>
        <td>${Equipo}</td>
        <td>${Tiempo}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Etapa="${Etapa}" Ciclista="${Ciclista}" Equipo="${Equipo}" Tiempo="${Tiempo}">Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarResultado');
formulario.addEventListener("submit", newResultado);


function newResultado(e){
  e.preventDefault();
  const Etapa = document.querySelector('#Etapa').value;
  const Ciclista = document.querySelector('#Ciclista').value;
  const Equipo  = document.querySelector('#Equipo').value;
  const Tiempo  = document.querySelector('#Tiempo').value;

  

  const registro = {
    Etapa,
    Ciclista,
    Equipo,
    Tiempo
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newResultados(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosResultados');
eliminar.addEventListener('click',deleteResultado);

function deleteResultado (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar esta Resultado");
    if(confir){
      deleteResultados(id);
    };
  }
};

const NewDates = document.querySelector('#datosResultados')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const nomcat = e.target.getAttribute('Etapa');
    const Nombre1 = document.querySelector('#Nombre2');
    Nombre1.value = nomcat;

    const descat = e.target.getAttribute('Ciclista');
    const Ciclista1 = document.querySelector('#Ciclista2');
    Ciclista1.value = descat;
    
    const imgcat = e.target.getAttribute('Equipo');
    const Equipo1 = document.querySelector('#Equipo2');
    Equipo1.value = imgcat;
    
    const tiempo = e.target.getAttribute('Tiempo');
    const Tiempo1 = document.querySelector('#Tiempo2');
    Tiempo1.value = tiempo;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateResultado)


    let datos={};
    function updateResultado(e){
      e.preventDefault();
      const Etapa = document.querySelector('#Nombre2').value ;
      const Ciclista = document.querySelector('#Ciclista2').value;
      const Equipo = document.querySelector('#Equipo2').value;
      const Tiempo = document.querySelector('#Tiempo2').value;
      console.log(Etapa);

      datos={
        _id:datosId,
        Etapa,
        Ciclista,
        Equipo,
        Tiempo
      }
      console.log(datos._id);
      editResultados(datos)
    }  
  }
}