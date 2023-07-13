import { getEmpleados , newEmpleados , deleteEmpleados , editEmpleados } from "./api.js";
addEventListener('DOMContentLoaded',()=>{
  cargaEmpleado();
});

async function cargaEmpleado(){
  const empleado = await getEmpleados();
  console.log(empleado);
  const tableEmpleado = document.querySelector("#datosEmpleados");
  empleado.forEach((element,index) => {
    const {_id , ProductoNombre , CantidadPorUnidad  , PrecioUnitario , UnidadesStock , UnidadesPedidas , NivelReorden , Discontinuado} = element;
    tableEmpleado.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${ProductoNombre}</td>
        <td>${CantidadPorUnidad}</td>
        <td>${PrecioUnitario}</td>
        <td>${UnidadesStock}</td>
        <td>${UnidadesPedidas}</td>
        <td>${NivelReorden}</td>
        <td>${Discontinuado}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" ProductoNombre="${ProductoNombre}" CantidadPorUnidad="${CantidadPorUnidad}" PrecioUnitario="${PrecioUnitario}" UnidadesStock="${UnidadesStock}" UnidadesPedidas="${UnidadesPedidas}" NivelReorden="${NivelReorden}" Discontinuado="${Discontinuado}" >Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarEmpleado');
formulario.addEventListener("submit", newEmpleado);


function newEmpleado(e){
  e.preventDefault();
  const ProductoNombre = document.querySelector('#ProductoNombre').value;
  const CantidadPorUnidad = document.querySelector('#CantidadPorUnidad').value;
  const PrecioUnitario  = document.querySelector('#PrecioUnitario').value;
  const UnidadesStock  = document.querySelector('#UnidadesStock').value;
  const UnidadesPedidas  = document.querySelector('#UnidadesPedidas').value;
  const NivelReorden  = document.querySelector('#NivelReorden').value;
  const Discontinuado  = document.querySelector('#Discontinuado').value;
  const registro = {
    ProductoNombre ,
    CantidadPorUnidad  ,
    PrecioUnitario ,
    UnidadesStock ,
    UnidadesPedidas ,
    NivelReorden ,
    Discontinuado
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newEmpleados(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosEmpleados');
eliminar.addEventListener('click',deleteEmpleado);

function deleteEmpleado (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar esta Empleado");
    if(confir){
      deleteEmpleados(id);
    };
  }
};

const NewDates = document.querySelector('#datosEmpleados')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const prodn = e.target.getAttribute('ProductoNombre');
    const ProductoNombre1 = document.querySelector('#ProductoNombre2');
    ProductoNombre1.value = prodn;

    const cantp = e.target.getAttribute('CantidadPorUnidad');
    const CantidadPorUnidad1 = document.querySelector('#CantidadPorUnidad2');
    CantidadPorUnidad1.value = cantp;
    
    const precu = e.target.getAttribute('PrecioUnitario');
    const PrecioUnitario1 = document.querySelector('#PrecioUnitario2');
    PrecioUnitario1.value = precu;

    const unids = e.target.getAttribute('UnidadesStock');
    const UnidadesStock1 = document.querySelector('#UnidadesStock2');
    UnidadesStock1.value = unids;

    const unidp = e.target.getAttribute('UnidadesPedidas');
    const UnidadesPedidas1 = document.querySelector('#UnidadesPedidas2');
    UnidadesPedidas1.value = unidp;
    
    const nivr = e.target.getAttribute('NivelReorden');
    const NivelReorden1 = document.querySelector('#NivelReorden2');
    NivelReorden1.value = nivr;

    const disc = e.target.getAttribute('Discontinuado');
    const Discontinuado1 = document.querySelector('#Discontinuado2');
    Discontinuado1.value = disc;
    
    const datosId= e.target.getAttribute('id');
    console.log(datosId);
    const newDat = document.querySelector('#edit');
    newDat.addEventListener('submit', updateEmpleado);


    let datos={};
    function updateEmpleado(e){
      e.preventDefault();
      const ProductoNombre = document.querySelector('#ProductoNombre2').value ;
      const CantidadPorUnidad = document.querySelector('#CantidadPorUnidad2').value;
      const PrecioUnitario = document.querySelector('#PrecioUnitario2').value;
      const UnidadesStock = document.querySelector('#UnidadesStock2').value ;
      const UnidadesPedidas = document.querySelector('#UnidadesPedidas2').value;
      const NivelReorden = document.querySelector('#NivelReorden2').value;
      const Discontinuado = document.querySelector('#Discontinuado2').value ;
      console.log(Nombre);

      datos={
        _id:datosId,
        ProductoNombre ,
        CantidadPorUnidad  ,
        PrecioUnitario ,
        UnidadesStock ,
        UnidadesPedidas ,
        NivelReorden ,
        Discontinuado
      }
      console.log(datos._id);
      editEmpleados(datos)
    }  
  }
}