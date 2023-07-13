import { getEmpleados , newEmpleados , deleteEmpleados , editEmpleados } from "./api.js";
addEventListener('DOMContentLoaded',()=>{
  cargaEmpleado();
});

async function cargaEmpleado(){
  const empleado = await getempleados();
  console.log(empleado);
  const tableEmpleado = document.querySelector("#datosEmpleados");
  empleado.forEach((element,index) => {
    const {_id , Apellido , Nombre  , Titulo , TituloCortesia , FechaNacimiento , FechaContratacion , Direccion , Ciudad , Regiones , CodigoPostal , Pais , Telefono , Extension , Foto , Notas , Jefe , RutaFoto} = element;
    tableEmpleado.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Apellido}</td>
        <td>${Nombre}</td>
        <td>${Titulo}</td>
        <td>${TituloCortesia}</td>
        <td>${FechaNacimiento}</td>
        <td>${FechaContratacion}</td>
        <td>${Direccion}</td>
        <td>${Ciudad}</td>
        <td>${Regiones}</td>
        <td>${CodigoPostal}</td>
        <td>${Pais}</td>
        <td>${Telefono}</td>
        <td>${Extension}</td>
        <td>${Foto}</td>
        <td>${Notas}</td>
        <td>${Jefe}</td>
        <td>${RutaFoto}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Apellido="${Apellido}" Nombre="${Nombre}" Titulo="${Titulo}" TituloCortesia="${TituloCortesia}" FechaNacimiento="${FechaNacimiento}" FechaContratacion="${FechaContratacion}" Direccion="${Direccion}" Ciudad="${Ciudad}" Regiones="${Regiones}" CodigoPostal="${CodigoPostal}" Pais="${Pais}" Telefono="${Telefono}" Extension="${Extension}" Foto="${Foto}" Notas="${Notas}" Jefe="${Jefe}" RutaFoto="${RutaFoto}" >Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarEmpleado');
formulario.addEventListener("submit", newEmpleado);


function newEmpleado(e){
  e.preventDefault();
  const Apellido = document.querySelector('#Apellido').value;
  const Nombre = document.querySelector('#Nombre').value;
  const Titulo  = document.querySelector('#Titulo').value;
  const TituloCortesia = document.querySelector('#TituloCortesia').value;
  const FechaNacimiento = document.querySelector('#FechaNacimiento').value;
  const FechaContratacion = document.querySelector('#FechaContratacion').value;
  const Direccion  = document.querySelector('#Direccion').value;
  const Ciudad = document.querySelector('#Ciudad').value;
  const Regiones = document.querySelector('#Regiones').value;
  const CodigoPostal = document.querySelector('#CodigoPostal').value;
  const Pais  = document.querySelector('#Pais').value;
  const Telefono = document.querySelector('#Telefono').value;
  const Extension = document.querySelector('#Extension').value;
  const Foto = document.querySelector('#Foto').value;
  const Notas  = document.querySelector('#Notas').value;
  const Jefe = document.querySelector('#Jefe').value;
  const RutaFoto = document.querySelector('#RutaFoto').value;

  const registro = {
    Apellido ,
    Nombre  ,
    Titulo ,
    TituloCortesia ,
    FechaNacimiento ,
    FechaContratacion ,
    Direccion ,
    Ciudad ,
    Regiones ,
    CodigoPostal ,
    Pais ,
    Telefono ,
    Extension ,
    Foto ,
    Notas ,
    Jefe ,
    RutaFoto,
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

    const apell = e.target.getAttribute('Apellido');
    const Apellido1 = document.querySelector('#Apellido2');
    Apellido1.value = apell;

    const nombr = e.target.getAttribute('Nombre');
    const Nombre1 = document.querySelector('#Nombre2');
    Nombre1.value = nombr;
    
    const titu = e.target.getAttribute('Titulo');
    const Titulo1 = document.querySelector('#Titulo2');
    Titulo1.value = titu;

    const tutl = e.target.getAttribute('TituloCortesia');
    const TituloCortesia1 = document.querySelector('#TituloCortesia2');
    TituloCortesia1.value = tutl;

    const fecg = e.target.getAttribute('FechaNacimiento');
    const FechaNacimiento1 = document.querySelector('#FechaNacimiento2');
    FechaNacimiento1.value = fecg;

    const fechc = e.target.getAttribute('FechaContratacion');
    const FechaContratacion1 = document.querySelector('#FechaContratacion2');
    FechaContratacion1.value = fechc;

    const direc = e.target.getAttribute('Direccion');
    const Direccion1 = document.querySelector('#Direccion2');
    Direccion1.value = direc;

    const ciud = e.target.getAttribute('Ciudad');
    const Ciudad1 = document.querySelector('#Ciudad2');
    Ciudad1.value = ciud;

    const regi = e.target.getAttribute('Regiones');
    const Regiones1 = document.querySelector('#Regiones2');
    Regiones1.value = regi;

    const codpo = e.target.getAttribute('CodigoPostal');
    const CodigoPostal1 = document.querySelector('#CodigoPostal2');
    CodigoPostal1.value = codpo;

    const paid = e.target.getAttribute('Pais');
    const Pais1 = document.querySelector('#Pais2');
    Pais1.value = paid;

    const telc = e.target.getAttribute('Telefono');
    const Telefono1 = document.querySelector('#Telefono2');
    Telefono1.value = telc;

    const exte = e.target.getAttribute('Extension');
    const Extension1 = document.querySelector('#Extension2');
    Extension1.value = exte;

    const foteo = e.target.getAttribute('Foto');
    const Foto1 = document.querySelector('#Foto2');
    Foto1.value = foteo;

    const nott = e.target.getAttribute('Notas');
    const Notas1 = document.querySelector('#Notas2');
    Notas1.value = nott;
    
    const gefess = e.target.getAttribute('Jefe');
    const Jefe1 = document.querySelector('#Jefe2');
    Jefe1.value = gefess;

    const rutfot = e.target.getAttribute('RutaFoto');
    const RutaFoto1 = document.querySelector('#RutaFoto2');
    RutaFoto1.value = rutfot;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateEmpleado)


    let datos={};
    function updateEmpleado(e){
      e.preventDefault();
      const Apellido = document.querySelector('#Apellido2').value ;
      const Nombre = document.querySelector('#Nombre2').value;
      const Titulo = document.querySelector('#Titulo2').value;
      const TituloCortesia = document.querySelector('#TituloCortesia2').value;
      const FechaNacimiento = document.querySelector('#FechaNacimiento2').value;
      const FechaContratacion = document.querySelector('#FechaContratacion2').value;
      const Direccion = document.querySelector('#Direccion2').value;
      const Ciudad = document.querySelector('#Ciudad2').value;
      const Regiones = document.querySelector('#Regiones2').value;
      const CodigoPostal = document.querySelector('#CodigoPostal2').value;
      const Pais = document.querySelector('#Pais2').value;
      const Telefono = document.querySelector('#Telefono2').value;
      const Extension = document.querySelector('#Extension2').value;
      const Foto = document.querySelector('#Foto2').value;
      const Notas = document.querySelector('#Notas2').value;
      const Jefe = document.querySelector('#Jefe2').value;
      const RutaFoto = document.querySelector('#RutaFoto2').value;

      console.log(Nombre);

      datos={
        _id:datosId,
        Apellido ,
        Nombre  ,
        Titulo ,
        TituloCortesia ,
        FechaNacimiento ,
        FechaContratacion ,
        Direccion ,
        Ciudad ,
        Regiones ,
        CodigoPostal ,
        Pais ,
        Telefono ,
        Extension ,
        Foto ,
        Notas ,
        Jefe ,
        RutaFoto
      }
      console.log(datos._id);
      editEmpleados(datos)
    }  
  }
}