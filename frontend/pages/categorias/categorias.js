import { getCategorias , newCategorias , deleteCategorias , editCategorias } from "./api.js";
console.log("holaaaaaaaaaa");
addEventListener('DOMContentLoaded',()=>{
  cargaCategoria();
});

async function cargaCategoria(){
  const categoria = await getCategorias();
  console.log(categoria);
  const tableCategoria = document.querySelector("#datosCategorias");
  categoria.forEach((element,index) => {
    const {_id , Nombre , Descripcion  , Imagen} = element;
    tableCategoria.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${Nombre}</td>
        <td>${Descripcion}</td>
        <td>${Imagen}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#examplemodal2" id="${_id}" Nombre="${Nombre}" Descripcion="${Descripcion}" Imagen="${Imagen}">Editar</button></td>
      </tr>
    `
  });
};

const formulario = document.getElementById('registrarCategoria');
formulario.addEventListener("submit", newCategoria);


function newCategoria(e){
  e.preventDefault();
  const Nombre = document.querySelector('#Nombre').value;
  const Descripcion = document.querySelector('#Descripcion').value;
  const Imagen  = document.querySelector('#Imagen').value;

  const registro = {
    Nombre,
    Descripcion,
    Imagen,
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newCategorias(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosCategorias');
eliminar.addEventListener('click',deleteCategoria);

function deleteCategoria (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar esta Categoria");
    if(confir){
      deleteCategorias(id);
    };
  }
};

const NewDates = document.querySelector('#datosCategorias')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const nomcat = e.target.getAttribute('Nombre');
    const Nombre1 = document.querySelector('#Nombre2');
    Nombre1.value = nomcat;

    const descat = e.target.getAttribute('Descripcion');
    const Descripcion1 = document.querySelector('#Descripcion2');
    Descripcion1.value = descat;
    
    const imgcat = e.target.getAttribute('Imagen');
    const Imagen1 = document.querySelector('#Imagen2');
    Imagen1.value = imgcat;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateCategoria)


    let datos={};
    function updateCategoria(e){
      e.preventDefault();
      const Nombre = document.querySelector('#Nombre2').value ;
      const Descripcion = document.querySelector('#Descripcion2').value;
      const Imagen = document.querySelector('#Imagen2').value;
      console.log(Nombre);

      datos={
        _id:datosId,
        Nombre,
        Descripcion,
        Imagen
      }
      console.log(datos._id);
      editCategorias(datos)
    }  
  }
}