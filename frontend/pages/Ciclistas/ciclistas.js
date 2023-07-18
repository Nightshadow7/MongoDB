import { getCiclistas , newCiclistas , deleteCiclistas , editCiclistas } from "./ciclistas.api.js";
addEventListener('DOMContentLoaded',()=>{
  cargaCiclista();
});

async function cargaCiclista(){
  const ciclista = await getCiclistas();
  console.log(ciclista);
  const tableCiclista = document.querySelector("#datosCiclistas");
  ciclista.forEach((element,index) => {
    const {_id , Nombre , Nacionalidad  , Numero , ColorCamisa} = element;
    tableCiclista.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Nombre}</td>
        <td>${Nacionalidad}</td>
        <td>${Numero}</td>
        <td>${ColorCamisa}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}"><i class="bi bi-trash"></i>Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Nombre="${Nombre}" Nacionalidad="${Nacionalidad}" Numero="${Numero}" ColorCamisa="${ColorCamisa}">Editar</button></td>
      </tr>
    `
  });
}

// const cambiarBotton = document.querySelector('#datosCiclistas');
// cambiarBotton.addEventListener('mousemove', hovermouse);
// function hovermouse(e){
//   if(e.target.classList.contains('icono')){
//     const botton = e.target
//     console.log(botton);
//     botton.classList. add("class")  

//   }

// };

const formulario = document.getElementById('registrarCiclista');
formulario.addEventListener("submit", newCiclista);


function newCiclista(e){
  e.preventDefault();
  const Nombre = document.querySelector('#Nombre').value;
  const Nacionalidad = document.querySelector('#Nacionalidad').value;
  const Numero  = document.querySelector('#Numero').value;
  const ColorCamisa  = document.querySelector('#ColorCamisa').value;

  const registro = {
    Nombre,
    Nacionalidad,
    Numero,
    ColorCamisa,
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newCiclistas(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosCiclistas');
eliminar.addEventListener('click',deleteCiclista);

function deleteCiclista (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar esta Ciclista");
    if(confir){
      deleteCiclistas(id);
    };
  }
};

const NewDates = document.querySelector('#datosCiclistas')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const nomcil = e.target.getAttribute('Nombre');
    const Nombre1 = document.querySelector('#Nombre2');
    Nombre1.value = nomcil;

    const desnac = e.target.getAttribute('Nacionalidad');
    const Nacionalidad1 = document.querySelector('#Nacionalidad2');
    Nacionalidad1.value = desnac;
    
    const numcil = e.target.getAttribute('Numero');
    const Numero1 = document.querySelector('#Numero2');
    Numero1.value = numcil;

    const colcal = e.target.getAttribute('ColorCamisa');
    const ColorCamisa1 = document.querySelector('#ColorCamisa2');
    ColorCamisa1.value = colcal;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateCiclista)


    let datos={};
    function updateCiclista(e){
      e.preventDefault();
      const Nombre = document.querySelector('#Nombre2').value ;
      const Nacionalidad = document.querySelector('#Nacionalidad2').value;
      const Numero = document.querySelector('#Numero2').value;
      const ColorCamisa = document.querySelector('#ColorCamisa2').value;

      console.log(Nombre);

      datos={
        _id:datosId,
        Nombre,
        Nacionalidad,
        Numero,
        ColorCamisa
      }
      console.log(datos._id);
      editCiclistas(datos)
    }  
  }
}