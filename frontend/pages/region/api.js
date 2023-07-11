//de debe cambiar la ruta "ArTeM02-065/php" por el parametro en cada caso y crear una carpeta llamada campuslands en donde ahi se alojan los archivos

//parametro en Artemist --ArTeM02-065/php--
//parametro en un pc de campus --SkylAb-107--


//se usa el parametro para artemist --http://localhost/ArTeM02-065/clase2/backend/controller.php?op=getAll--
const urlRegion = "http://localhost/SkylAb-107/campusland/backend/region/regioncontroller.php?op=getAll";
//se usa para el parametro artemist --http://localhost/ArTeM02-065/clase2/backend/controller.php?op=insert--
const urlnewRegion = "http://localhost/SkylAb-107/campusland/backend/region/regioncontroller.php?op=insert";

const urlDeleteRegion = "http://localhost/SkylAb-107/campusland/backend/region/regioncontroller.php?op=delete";

const urlEditRegion = "http://localhost/SkylAb-107/campusland/backend/region/regioncontroller.php?op=edit";

export const getRegion =  async () => {
  try {
    const region = await fetch(urlRegion);
    const datosRegion = await region.json(
      );
    return datosRegion;
  } catch (error) {
    console.log(error);
  }
}
export const newRegion = async (registro) => {
  try {
    await fetch(urlnewRegion,{
      method:'post',
      body: JSON.stringify(registro),
      headers:{
        'Content-Type': 'application/json'
      }
  });
  } catch (error) {
    console.log(error);
  }
}

export const deleteRegion = async idRegion => {
  try {
    await fetch(`${urlDeleteRegion}&id=${idRegion}`,{
      method:'DELETE',
    });
  } catch (error) {
    console.log(error);
  }
}

export const editRegion = async idRegion => {
  try {
    await fetch(`${urlEditRegion}&id=${idRegion}`,{
      method:'EDIT',
    });
  } catch (error) {
    console.log(error);
  }
}