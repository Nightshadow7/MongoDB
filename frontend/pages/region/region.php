<?php 
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);

require_once("./../../../backend/models.php");

$data = new Departamento();/* creamos nueva clase de config */
$allData = $data->getDepartamento();
print_r($allData);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Facturas</title>
  <!-- typografia -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
    rel="stylesheet">
  <!-- boostrap  -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

  <!-- link css -->
  <link rel="stylesheet" href="./../../css/index.css">





</head>

<body>
  <nav class="navbar navbar-expand-lg " style="background-color: rgb(35, 35, 95);">
        <div class="container-fluid">
            <a class="navbar-brand logo mx-4 " href="#">Aq</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse colorMenu" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 px-5 mb-lg-0">
                    
                    <li class="nav-item mx-4">
                        <a class="nav-link active" aria-current="page" href="./../pais/pais.html">Paises</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a class="nav-link active" aria-current="page" href="./../departamento/departamento.php">Departamento</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a class="nav-link" href="./region.php">Regiones</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a class="nav-link" href="./../campers/campers.php">Campers</a>
                    </li>
                    
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

  <h1 class="m-5" id="title">Regiones</h1>
    <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Registrar nueva Region</button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Registrar nueva Region</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="registrarRegion" method="post" class="d-flex row">
              <div class="col-4">
                <label for="id" class="col-form-label">ID</label>
                <input 
                  type="number" 
                  class="form-control" 
                  id="id"
                  name="id"
                  required
                />
              </div>

              <div class="col-8">
                <label for="departamento" class="form-label">Departamento</label>
                <select name="departamento" id="departamento" class="form-select">
                <?php
                  foreach ($allData as $key => $val): 
                  ?> 
                  <option value="<?= $val['idDep']?>"><?= $val['nombreDep']?></option>
                <?php 
                endforeach; 
                ?> 
                </select>
              </div>
                
              <div class="col-12">
                <label for="nombre" class="col-form-label">Nombre Region</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="nombre"
                  name="nombre"
                  required
                />
              </div>
              
              <div class="modal-footer my-3">
                <button type="submit" id="" class="btn btn-outline-info mx-4">Añadir</button>
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Regiones</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Departamento</th>
                        <th>Nombre Region</th>
                      </tr>
                    </thead>
                    

                    <tbody id="datosRegion">
                      
                  
                      

                    </tbody>
               
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content -->
  </div>



  <script src="./region.js" type="module" ></script>



  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

</body>

</html>