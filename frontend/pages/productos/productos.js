import { getProductos , newProductos , deleteProductos , editProductos } from "./api.js";
addEventListener('DOMContentLoaded',()=>{
  cargaProducto();
});

async function cargaProducto(){
  const producto = await getProductos();
  console.log(producto);
  const tableProducto = document.querySelector("#datosProductos");
  producto.forEach((element,index) => {
    const {_id , ProductoNombre , CantidadPorUnidad  , PrecioUnitario , UnidadesStock , UnidadesPedidas , NivelReorden , Discontinuado} = element;
    tableProducto.innerHTML+= `
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

const formulario = document.getElementById('registrarProducto');
formulario.addEventListener("submit", newProducto);


function newProducto(e){
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
  }return newProductos(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosProductos');
eliminar.addEventListener('click',deleteProducto);

function deleteProducto (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar este Producto");
    if(confir){
      deleteProductos(id);
    };
  }
};

const NewDates = document.querySelector('#datosProductos')
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
    newDat.addEventListener('submit', updateProducto);


    let datos={};
    function updateProducto(e){
      e.preventDefault();
      const ProductoNombre = document.querySelector('#ProductoNombre2').value ;
      const CantidadPorUnidad = document.querySelector('#CantidadPorUnidad2').value;
      const PrecioUnitario = document.querySelector('#PrecioUnitario2').value;
      const UnidadesStock = document.querySelector('#UnidadesStock2').value ;
      const UnidadesPedidas = document.querySelector('#UnidadesPedidas2').value;
      const NivelReorden = document.querySelector('#NivelReorden2').value;
      const Discontinuado = document.querySelector('#Discontinuado2').value ;

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
      editProductos(datos)
    }  
  }
}