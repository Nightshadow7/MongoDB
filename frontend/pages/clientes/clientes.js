import { getClientes , newClientes , deleteClientes , editClientes } from "./api.js";
addEventListener('DOMContentLoaded',()=>{
  cargaCliente();
});

async function cargaCliente(){
  const clientes = await getClientes();
  console.log(clientes);
  const tableCliente = document.querySelector("#datosClientes");
  clientes.forEach((element,index) => {
    const {_id , Compania , Contacto  , Titulo , Direccion , Ciudad , Regiones , CodigoPostal , Pais , Telefono , Fax} = element;
    tableCliente.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Compania}</td>
        <td>${Contacto}</td>
        <td>${Titulo}</td>
        <td>${Direccion}</td>
        <td>${Ciudad}</td>
        <td>${Regiones}</td>
        <td>${CodigoPostal}</td>
        <td>${Pais}</td>
        <td>${Telefono}</td>
        <td>${Fax}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Compania="${Compania}" Contacto="${Contacto}" Titulo="${Titulo}" Direccion="${Direccion}" Ciudad="${Ciudad}" Regiones="${Regiones}" CodigoPostal="${CodigoPostal}" Pais="${Pais}" Telefono="${Telefono}" Fax="${Fax}" >Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarCliente');
formulario.addEventListener("submit", newCliente);


function newCliente(e){
  e.preventDefault();
  const Compania = document.querySelector('#Compania').value;
  const Contacto = document.querySelector('#Contacto').value;
  const Titulo  = document.querySelector('#Titulo').value;
  const Direccion = document.querySelector('#Direccion').value;
  const Ciudad = document.querySelector('#Ciudad').value;
  const Regiones  = document.querySelector('#Regiones').value;
  const CodigoPostal = document.querySelector('#CodigoPostal').value;
  const Pais = document.querySelector('#Pais').value;
  const Telefono  = document.querySelector('#Telefono').value;
  const Fax = document.querySelector('#Fax').value;

  const registro = {
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax,
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newClientes(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosClientes');
eliminar.addEventListener('click',deleteCliente);

function deleteCliente (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar este Cliente");
    if(confir){
      deleteClientes(id);
    };
  }
};

const NewDates = document.querySelector('#datosClientes')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const com = e.target.getAttribute('Compania');
    const Compania1 = document.querySelector('#Compania2');
    Compania1.value = com;

    const con = e.target.getAttribute('Contacto');
    const Contacto1 = document.querySelector('#Contacto2');
    Contacto1.value = con;
    
    const til = e.target.getAttribute('Titulo');
    const Titulo1 = document.querySelector('#Titulo2');
    Titulo1.value = til;

    const dir = e.target.getAttribute('Direccion');
    const Direccion1 = document.querySelector('#Direccion2');
    Direccion1.value = dir;

    const ciu = e.target.getAttribute('Ciudad');
    const Ciudad1 = document.querySelector('#Ciudad2');
    Ciudad1.value = ciu;
    
    const reg = e.target.getAttribute('Regiones');
    const Regiones1 = document.querySelector('#Regiones2');
    Regiones1.value = reg;

    const cod = e.target.getAttribute('CodigoPostal');
    const CodigoPostal1 = document.querySelector('#CodigoPostal2');
    CodigoPostal1.value = cod;

    const pai = e.target.getAttribute('Pais');
    const Pais1 = document.querySelector('#Pais2');
    Pais1.value = pai;
    
    const tel = e.target.getAttribute('Telefono');
    const Telefono1 = document.querySelector('#Telefono2');
    Telefono1.value = tel;

    const fax = e.target.getAttribute('Fax');
    const Fax1 = document.querySelector('#Fax2');
    Fax1.value = fa;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateCliente)

    let datos={};
    function updateCliente(e){
      e.preventDefault();
      const Compania = document.querySelector('#Compania2').value ;
      const Contacto = document.querySelector('#Contacto2').value;
      const Titulo = document.querySelector('#Titulo2').value;
      const Direccion = document.querySelector('#Direccion2').value ;
      const Ciudad = document.querySelector('#Ciudad2').value;
      const Regiones = document.querySelector('#Regiones2').value;
      const CodigoPostal = document.querySelector('#CodigoPostal2').value ;
      const Pais = document.querySelector('#Pais2').value;
      const Telefono = document.querySelector('#Telefono2').value;
      const Fax = document.querySelector('#Fax2').value;
      datos={
        _id:datosId,
        Compania,
        Contacto,
        Titulo,
        Direccion,
        Ciudad,
        Regiones,
        CodigoPostal,
        Pais,
        Telefono,
        Fax,
      }
      console.log(datos._id);
      editClientes(datos)
    }  
  }
}