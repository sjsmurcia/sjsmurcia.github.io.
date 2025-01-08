<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../assets/css/style.css">
  <title>Jessel Murcia - Portafolio</title>
</head>

<body>
  <!-- BARRA DE NAVEGACION -->
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#inicio"> MURCIA </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sobremi">Sobre Mi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#curriculum">Curriculum</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portafolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- end nav -->
  <!-- star intro section -->
  <div id="inicio" class="position-relative" style="min-height: 100vh">
    <!-- Fondo Animado -->
    <canvas id="gradient-canvas" class="gradient-colors"></canvas>

    <!-- Contenido Principal -->
    <div class="container d-flex justify-content-center align-items-center" style="height: 100vh">
      <div class="card text-center position-relative" style="z-index: 1; width: 80%; max-width: 600px">
        <div class="card-body">
          <img src="../assets/img/jesselmurcia.jpg" alt="Jessel Murcia" class="card-img-top rounded-circle"
            style="width: 150px; height: 150px; object-fit: cover" />
          <h5 class="card-title mt-3">Jessel Murcia</h5>
          <p class="card-text">Ingeniero de Software - Backend</p>
          <div class="social-icons mt-3">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-twitter"></i></a>
            <a href="#"><i class="bi bi-telegram"></i></a>
            <a href="#"><i class="bi bi-skype"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end intro section -->
  <!-- about me -->
  <section id="sobremi" class="container py-6 sobremi">
    <div class="container-flex contenido-seccion">
      <h2 class="text-center">Sobre Mí</h2>
      <p class="text-center">
        <span>Hola soy Jessel Murcia.</span> Un joven de 21 años que encuentra en el deporte, la política y la
        programacion una fuente de energía y motivación. Creo que el pasado, el presente y el futuro son la obra de
        nuestras propias manos, y que cada acción, por pequeña que sea, tiene el poder de transformar el mundo. Como
        ingeniero en formación, he descubierto en la programación una forma de dar vida a mis ideas y construir un
        futuro mejor. Desde adolescente, he explorado este vasto universo con pasión y determinación.
      </p>

      <div class="row fila">
        <!-- datos personales -->
        <div class="col-md-6  col">
          <h3 class="title-datos">Datos Personales</h3>
          <ul class="list-unstyled">
            <li><strong>Cumpleaños:</strong> 22-06-2003</li>
            <li><strong>Teléfono:</strong> +504 9443-5849</li>
            <li><strong>Email:</strong> jessejr2406@gmail.com</li>
            <li><strong>Website:</strong> www.sjsmurcia.com</li>
            <li><strong>Dirección:</strong> San Pedro Sula, Cortes, Honduras.</li>
            <li>
              <strong>Cargo:</strong>
              <span>BACKEND</span>
            </li>
          </ul>
        </div>


        <!-- intereses -->
        <div class="col-md-6  col">
          <h3>Intereses</h3>
          <div class="contenedor-intereses">
            <div class="col-6  interes">
              <i class="fa-solid fa-gamepad"></i>
              <span>JUEGOS</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-headphones"></i>
              <span>MUSICA</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-plane"></i>
              <span>VIAJAR</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-code"></i>
              <span>SOFTWARE</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-person-hiking"></i>
              <span>DEPORTE</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-book"></i>
              <span>LIBROS</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-car"></i>
              <span>AUTOS</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-camera"></i>
              <span>FOTOS</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-handshake"></i>
              <span>POLITICA</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-sack-dollar"></i>
              <span>ECONOMIA</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-notes-medical"></i>
              <span>SALUD</span>
            </div>
            <div class="col-6  interes">
              <i class="fa-solid fa-dove"></i>
              <span>PAZ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <button>
      Descargar CV <i class="bi bi-download fa-solid fa-download"></i>
      <span class="overlay"></span>
    </button>
    </div>
  </section>
  <!-- end about me -->
  <!-- SECCION SKILLS -->
  <section class="skills" id="skills">
    <div class="contenido-seccion">
      <h2>SKILLS</h2>
      <div class="row fila">
        <!-- Technical Skill -->
        <div class="col col-md-6">
          <h3>Skills Técnicas</h3>
          <div class="skill mb-3">
            <span>Javascript & Html, Css</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>80%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>Backend Developer</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>90%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>C#</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>95%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>Java</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>81%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>Angular</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>74%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>Fluter</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>60%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Professional Skills -->
        <div class="col">
          <h3>Skills Profesionales</h3>
          <div class="skill">
            <span>Comunicación</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>100%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>Trabajo en Equipo</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>99%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>Creatividad</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>99%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>Dedicación</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>90%</span>
              </div>
            </div>
          </div>
          <div class="skill">
            <span>Proyect Management</span>
            <div class="barra-skill">
              <div class="progreso proyect">
                <span>94%</span>
              </div>
            </div>

          </div>
          <div class="skill">
            <span>Control de Codigo</span>
            <div class="barra-skill">
              <div class="progreso proyect">
                <span>80%</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- seccion curriculum -->
  <section id="curriculum" class="curriculum">
    <div class="container contenido-seccion">
      <h2>Curriculum</h2>
      <div class="row fila">
        <div class="col-md-6 col izquierda">
          <h3>Educación</h3>
          <!-- <div class="item izq">
            <h4>Cursos</h4>
            <span class="casa">Internet</span>
            <span class="fecha">2017-2024</span>
            <p>He estudiado de manera automona diferentes tecnologias del backend como ser sql, php, nodejs, java, desde que tengo 14 años he explorado el mundo de la programacion. </p>
            <div class="conectori">
              <div class="circuloi"></div>
            </div>
          </div> -->
          <div class="item izq">
            <h4>Educacion Superior</h4>
            <span class="casa">Instituto Tecnologico Administracion de Empresas INTAE</span>
            <span class="fecha">2013 - 2018</span>
            <p>Educacion Superiror en el INTAE durante 5 años  en la carrera de Informatica, durante este periodo obutve los conocimientos que sentaron las bases para mi pasion por el desarrollo de codigo.
              Mencion Honorifica Termine mi educacion superior en <strong>San Juan Bosco</strong> hasta el 2019 graduandome de BTP Informatica con sobrevesaliente.</p>
            </p>
            <div class="conectori">
              <div class="circuloi"></div>
            </div>
          </div>
          <div class="item izq">
            <h4>Educacion Universitaria</h4>
            <span class="casa">Universidad  CEUTEC</span>
            <span class="fecha">2019 - 2025</span>
            <p>Estudiante de la carrera de Ingeneria en Sistemas, durante mi vida universitaria he puesto en practica mis habilidades y conocmientos 
              en diferentes retos y pruebas academicas, ademas de participar en proyectos de desarrollo de software.</p>
            </p>
            <div class="conectori">
              <div class="circuloi"></div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col derecha">
          <h3>Experiencia de trabajo</h3>
          <div class="item der">
            <h4>Front Delevoper</h4>
            <span class="casa">Consultor Independiente</span>
            <span class="fecha">09-2019</span>
            <p>Sistema Saint Enterprise 09.2019- Presente
              Brinda asesoría técnica en el uso y configuración del sistema Saint Enterprise para pequeñas empresas, optimizando sus procesos contables y de inventarios.
              Brinda soporte personalizado en la implementación del software, asesorando a los clientes en la automatización de tareas contables y en la generación de reportes financieros.
              Forma a los usuarios en las principales funcionalidades del sistema, mejorando la eficiencia operativa y la precisión de los datos contables en un 20%.
              </p>
            <div class="conectord">
              <div class="circulod"></div>
            </div>
          </div>
          <div class="item der">
            <h4>Desarrollador de Software Freelance </h4>
            <span class="casa"><a  class="casa" style="text-decoration: none;" href="www.cpashn.com">Contadores Publicos Autorizados S de R.l </a></span>
            <span class="fecha">2020 - Presente</span>
            <p>Diseñé y desarrollé aplicaciones de contabilidad personalizadas, centradas en la gestión de la facturación, el seguimiento de los pagos y la elaboración de informes.
              Implementé soluciones automatizadas para el cálculo de impuestos, la generación de balances y la gestión de inventarios, reduciendo el tiempo de procesamiento manual en un 50%.</p>
            <div class="conectord">
              <div class="circulod"></div>
            </div>
          </div>
          <div class="item der">
            <h4>Web Developer</h4>
            <span class="casa">CPA</span>
            <span class="fecha">2022</span>
            <p>Desarrolle y Implementé el sitio de www.cpashn.com desarrollando el codigo en su totalidad.</p>
            <div class="conectord">
              <div class="circulod"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- SECCION PORTFOLIO -->
  <section id="portfolio" class="portfolio py-5">
    <div class="container contenido-seccion">
      <h2 class="text-center mb-5">PORTFOLIO</h2>
      <div class="row gy-4 galeria">
        <div class="col-sm-6 col-md-4 proyecto">
          <div class="position-relative">
            <img src="../assets/img/img01-portafolio.jpeg" alt="" class="img-fluid">
            <div
              class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 text-white">
              <h3>Diseño Web</h3>
              <p>CPA</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 proyecto">
          <div class="position-relative">
            <img src="../assets/img/OIP.jpg" style="width:890px;" alt="" class="img-fluid">
            <div
              class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 text-white">
              <h3>Freelance</h3>
              <p>Fotografía</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 proyecto">
          <div class="position-relative">
            <img src="../assets/img/options1.gif" alt="" class="img-fluid">
            <div
              class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 text-white">
              <h3>Angular</h3>
              <p>Fotografía</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 proyecto">
          <div class="position-relative">
            <img src="../assets/img/csharp.jpg" alt="" class="img-fluid">
            <div
              class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 text-white">
              <h3>C Sharp</h3>
              <p>Fotografía</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 proyecto">
          <div class="position-relative">
            <img src="../assets/img/p2.jpg" alt="" class="img-fluid">
            <div
              class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 text-white">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 proyecto">
          <div class="position-relative">
            <img src="../assets/img/p5.jpg" alt="" class="img-fluid">
            <div
              class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 text-white">
              <h3>Diseño Responsivo</h3>
              <p>Fotografía</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- SECCION CONTACTO -->
  <section id="contacto" class="contacto">
    <div class="container contenido-seccion">
      <h2>CONTACTO</h2>
      <div class="fila row">
        <!-- Formulario -->
        <div class="col col-md-6 col-12 mb-4">
          <form id="contactForm">
            <div class="mb-3">
             
              <input type="text" class="form-control" id="name" placeholder="Tu Nombre" required />
            </div>
            <div class="mb-3">
            
              <input type="email" class="form-control" id="email" placeholder="Tu Correo" required />
            </div>
            <div class="mb-3">
              
              <textarea class="form-control" id="message" rows="5" placeholder="Tu Mensaje" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Enviar Mensaje <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <!-- Mapa -->
        <div class="col col-md-6 col-12 mb-4">
          <img src="./img/img-ubicacion.png" alt="" class="img-fluid rounded mb-3">
          <div class="info">
            <ul>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                Honduras, Cortes, San Pedro Sula
              </li>
              <li>
                <i class="fa-solid fa-mobile-screen"></i>
                Llamanos: +504 9443 - 5849
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                Email: jessejr2406@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- FOOTER -->
  <footer>
    <div class="container">
      <a href="#inicio" class="rounded-circle arriba">
        <i class="fa-solid fa-angles-up"></i>
      </a>
      <div class="redes mt-3  d-flex justify-content-center gap-3">
        <a href="#" class="text-light"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" class="text-light"><i class="fa-brands fa-twitter"></i></a>
        <a href="#" class="text-light"><i class="fa-brands fa-skype"></i></a>
        <a href="#" class="text-light"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#" class="text-light"><i class="fa-brands fa-telegram"></i></a>
      </div>
    </div>
  </footer>

  <script src="../assets/js/bootstrap.bundle.js"></script>
  <script src="../assets/js/main.js"></script>
  <script src="https://kit.fontawesome.com/54aee58547.js" crossorigin="anonymous"></script>
</body>

</html>