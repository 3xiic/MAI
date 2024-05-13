function toggleText(id) {
  var texto = document.getElementById('texto' + id);
  var boton = document.getElementById('boton' + id);
  var isVisible = texto.style.display === 'block'; 

  if (!isVisible) {
    texto.style.display = 'block';
  } else {
    texto.style.display = 'none';
  }
}

function mostrarContenido(opcion) {
  var contenido = document.getElementById('contenido');

  switch (opcion) {
    case 'inicio':
      cambiarFondo("Hermosa.jpg")
      contenido.innerHTML = '<h2>Inicio</h2><p>¡Bienvenido a nuestra página de inicio!</p>';
      break;
    case 'acerca':
      cambiarFondo("Juntos.jpg")
      contenido.innerHTML = '<h2>Acerca de</h2><p>Aquí puedes encontrar información sobre nosotros.</p>';
      break;
    case 'contacto':
      cambiarFondo("Cuatro.jpg")
      contenido.innerHTML = '<h2>Contacto</h2><p>Puedes contactarnos a través de nuestro correo electrónico: contacto@ejemplo.com</p>';
      break;
    default:
      contenido.innerHTML = '<h2>Contenido no encontrado</h2><p>Lo sentimos, el contenido que buscas no está disponible.</p>';
      break;
  }
}
var frases = [
  "Por que me encantan tus ojos preciosos",
  "Por que me haces feliz",
  "Por que eres mi primer pensamiento cuando me despierto",
  "Por que estar tiempo contigo me hace sentirme mejor",
  "Por que eres el sol que hace olvidar mis tormentas",
  "Por que me encanta dormir contigo",
  "Por que me encanta estar contigo en la universidad",
  "Por que me haces feliz cuando me miras con ojos de amor",
  "Por que cada que me hablas bonito, siento bonito",
  "Por que me encanta cuando me das cositas",
  "Por que amo cada que tienes un detalle conmigo",
  "Por que agradezco infinitamente cada accion que haces por mi",
  "Por que me encanta que tenemos una mini familia formada con Cho",
  "Por que cada dia que pasa siento que te amo mas",
  "Por que me encanta mucho tu sonrisa, no sabes cuanto",
  "Por que eres la mejor novia que el mundo me pudo haber dado",
  "Por que simplemente eres una mujer maravillosa",
  "Por que contamos con muchos gustos en comun, en cuanto hobbies y musicaless",
  "Por que eres una mujer muy inteligente y una motivacion a seguir",
  "Por que eres una mujer enfocada en sus metas y dedicida jeje",
  "Por que eres una niña muy consentidaa y me encanta consentirte"
];
var compromisos = [
  "Estar siempre presente: Prometo estar siempre ahí para ti, en los buenos y malos momentos, para apoyarte, escucharte y compartir contigo cada etapa de nuestra vida juntos.",
  "Me comprometo a amarte cada día más, a cultivar nuestra relación con amor y dedicación, y a construir juntos un futuro lleno de amor, confianza y felicidad",
  "Me comprometo a respetarte en todo momento, valorar tus opiniones, creencias y deseos, y trabajar juntos para resolver cualquier desacuerdo de manera objetiva y constructiva.",
  "Me comprometo a poner siempre tu felicidad y bienestar en primer lugar, y a tomar decisiones que beneficien nuestra relación y nuestro futuro juntos",
  "Prometo apoyarte en tu crecimiento personal y profesional, y animarte a alcanzar tus metas y sueño",
  "Prometo dedicar tiempo y esfuerzo a crear recuerdos inolvidables juntos, en viajes, Universiad, experiencias nuevas o simplemente disfrutando de nuestra compañía mutua en la vida cotidiana.",
  "Me comprometo a buscar la solucion a los obstaculos que enfrentemos como pareja, y a estar a tu lado para superar los desafíos que la vida nos presente, con amor, paciencia y comprensión",
  "Me comprometo a demostrarte mi amor y cariño a través de pequeños gestos diarios, abrazos y besos, recordándote lo especial que eres para mí",
  "Me comprometo conmigo mismo a esforzarme cada dia por nuestra relacion y que podamos salir adelante juntos",
  "Me comprometo a mejorar como persona para que nuestra relacion se construya de la mejor manera",
  "Me comprometo conmigo mismo a amarte cada dia mas para que te sientas las mujer mas amada de todas",
  "Prometo demostrarte mi amor de la mejor manera, tal como te lo meresces para que te llegues a sentir la mujer mas afortunada del planeta",
  "Me comprometo a ayudarte en cualquier momento que tu necesites de mi y estar siempre para ti",
  "Me comprometo a consentirte muchoo muchote pq yo se que eres una niña consentida jeje"
];

function mostrarFraseAleatoria() {
  var indice = Math.floor(Math.random() * frases.length);
  var frase = frases[indice];
  document.getElementById("texto4").innerHTML = "<p>" + frase + "</p>";
}
function mostrarCompAleatoria() {
  var indices = Math.floor(Math.random() * compromisos.length);
  var compromiso = compromisos[indices];
  document.getElementById("texto5").innerHTML = "<p>" + compromiso + "</p>";
}
function boton5(id) {
  mostrarCompAleatoria();
  toggleText(id);
}
function boton4(id) {
  mostrarFraseAleatoria();
  toggleText(id);
}
const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
  moveToRight()
}, 3000);


let operacion = 0,
  counter = 0,
  widthImg = 100 / sliderSection.length;

function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
    return;
  }
  counter++;
  operacion = operacion + widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s"

}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operacion = widthImg * (sliderSection.length - 1)
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
    return;
  }
  operacion = operacion - widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s"


}

var time = new Date();
var deltaTime = 0;

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(Init, 1);
} else {
  document.addEventListener("DOMContentLoaded", Init);
}

function Init() {
  time = new Date();
  Start();
  Loop();
}

function Loop() {
  deltaTime = (new Date() - time) / 1000;
  time = new Date();
  Update();
  requestAnimationFrame(Loop);
}

//****** GAME LOGIC ********//

var sueloY = 22;
var velY = 0;
var impulso = 1000;
var gravedad = 2500;

var dinoPosX = 42;
var dinoPosY = sueloY;

var sueloX = 0;
var velEscenario = 1280 / 3;
var gameVel = 1;
var score = 0;

var parado = false;
var saltando = false;

var tiempoHastaObstaculo = 2;
var tiempoObstaculoMin = 0.7;
var tiempoObstaculoMax = 1.8;
var obstaculoPosY = 16;
var obstaculos = [];

var tiempoHastaNube = 0.5;
var tiempoNubeMin = 0.7;
var tiempoNubeMax = 2.7;
var maxNubeY = 270;
var minNubeY = 100;
var nubes = [];
var velNube = 0.5;

var contenedor;
var dino;
var textoScore;
var suelo;
var gameOver;

function Start() {
  gameOver = document.querySelector(".game-over");
  suelo = document.querySelector(".suelo");
  contenedor = document.querySelector(".game-container");
  textoScore = document.querySelector(".score");
  dino = document.querySelector(".dino");
  document.addEventListener("keydown", HandleKeyDown);
}

function Update() {
  if (parado) return;

  MoverDinosaurio();
  MoverSuelo();
  DecidirCrearObstaculos();
  DecidirCrearNubes();
  MoverObstaculos();
  MoverNubes();
  DetectarColision();

  velY -= gravedad * deltaTime;
}

function HandleKeyDown(ev) {
  if (ev.keyCode == 32) {
    Saltar();
  }
  if (ev.keyCode == 38) {
    Saltar();
  }
  if (ev.keyCode == 87) {
    Saltar();
  }
  if (ev.keyCode == 83) {
    Bajar();
  }
}

function Saltar() {
  if (dinoPosY === sueloY) {
    saltando = true;
    velY = impulso;
    dino.classList.remove("dino-corriendo");
  }
}
function Bajar() {
  if (saltando) {
    dinoPosY = sueloY;
    TocarSuelo();
  }
}

function MoverDinosaurio() {
  dinoPosY += velY * deltaTime;
  if (dinoPosY < sueloY) {

    TocarSuelo();
  }
  dino.style.bottom = dinoPosY + "px";
}

function TocarSuelo() {
  dinoPosY = sueloY;
  velY = 0;
  if (saltando) {
    dino.classList.add("dino-corriendo");
  }
  saltando = false;
}

function MoverSuelo() {
  sueloX += CalcularDesplazamiento();
  suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
}

function CalcularDesplazamiento() {
  return velEscenario * deltaTime * gameVel;
}

function Estrellarse() {
  dino.classList.remove("dino-corriendo");
  dino.classList.add("dino-estrellado");
  parado = true;
}

function DecidirCrearObstaculos() {
  tiempoHastaObstaculo -= deltaTime;
  if (tiempoHastaObstaculo <= 0) {
    CrearObstaculo();
  }
}

function DecidirCrearNubes() {
  tiempoHastaNube -= deltaTime;
  if (tiempoHastaNube <= 0) {
    CrearNube();
  }
}

function CrearObstaculo() {
  var obstaculo = document.createElement("div");
  contenedor.appendChild(obstaculo);
  obstaculo.classList.add("perro");
  if (Math.random() > 0.5) obstaculo.classList.add("perro2");
  obstaculo.posX = contenedor.clientWidth;
  obstaculo.style.left = contenedor.clientWidth + "px";

  obstaculos.push(obstaculo);
  tiempoHastaObstaculo = tiempoObstaculoMin + Math.random() * (tiempoObstaculoMax - tiempoObstaculoMin) + 0.2 / gameVel;
}

function CrearNube() {
  var nube = document.createElement("div");
  contenedor.appendChild(nube);
  nube.classList.add("nube");
  nube.posX = contenedor.clientWidth;
  nube.style.left = contenedor.clientWidth + "px";
  nube.style.bottom = minNubeY + Math.random() * (maxNubeY - minNubeY) + "px";

  nubes.push(nube);
  tiempoHastaNube = tiempoNubeMin + Math.random() * (tiempoNubeMax - tiempoNubeMin) / gameVel;
}

function MoverObstaculos() {
  for (var i = obstaculos.length - 1; i >= 0; i--) {
    if (obstaculos[i].posX < -obstaculos[i].clientWidth) {
      obstaculos[i].parentNode.removeChild(obstaculos[i]);
      obstaculos.splice(i, 1);
      GanarPuntos();
    } else {
      obstaculos[i].posX -= CalcularDesplazamiento();
      obstaculos[i].style.left = obstaculos[i].posX + "px";
    }
  }
}

function MoverNubes() {
  for (var i = nubes.length - 1; i >= 0; i--) {
    if (nubes[i].posX < -nubes[i].clientWidth) {
      nubes[i].parentNode.removeChild(nubes[i]);
      nubes.splice(i, 1);
    } else {
      nubes[i].posX -= CalcularDesplazamiento() * velNube;
      nubes[i].style.left = nubes[i].posX + "px";
    }
  }
}

function GanarPuntos() {
  score++;
  textoScore.innerText = score;
  if (score == 5) {
    gameVel = 1.5;
    contenedor.classList.add("mediodia");
  } else if (score == 10) {
    contenedor.classList.add("tarde");
    gameVel = 2;
    suelo.classList.add("suelo-tarde")
  } else if (score == 20) {
    gameVel = 2.5;
    contenedor.classList.add("noche");
    suelo.classList.add("suelo-noche")
  } else if (score == 40) {
    gameVel = 3;
    contenedor.className = 'game-container';
    suelo.className = 'suelo';
  } else if (score == 65) {
    gameVel = 3;
    contenedor.classList.add("tarde");
    suelo.classList.add("suelo-tarde")
  } else if (score == 80) {
    gameVel = 3;
    contenedor.classList.add("noche");
    suelo.classList.add("suelo-noche")
  }
  suelo.style.animationDuration = (3 / gameVel) + "s";
}

function GameOver() {
  Estrellarse();
  gameOver.style.display = "block";
}

function DetectarColision() {
  for (var i = 0; i < obstaculos.length; i++) {
    if (obstaculos[i].posX > dinoPosX + dino.clientWidth) {
      //EVADE
      break; //al estar en orden, no puede chocar con más
    } else {
      if (IsCollision(dino, obstaculos[i], 10, 30, 15, 20)) {
        GameOver();
      }
    }
  }
}

function IsCollision(a, b, paddingTop, paddingRight, paddingBottom, paddingLeft) {
  var aRect = a.getBoundingClientRect();
  var bRect = b.getBoundingClientRect();

  return !(
    ((aRect.top + aRect.height - paddingBottom) < (bRect.top)) ||
    (aRect.top + paddingTop > (bRect.top + bRect.height)) ||
    ((aRect.left + aRect.width - paddingRight) < bRect.left) ||
    (aRect.left + paddingLeft > (bRect.left + bRect.width))
  );
}
function ResetGame() {
  gameOver.style.display = "none";
  score = 0;
  textoScore.innerText = score;
  dino.classList.remove("dino-estrellado");
  dino.classList.add("dino-corriendo");
  parado = false;
  dinoPosY = sueloY; // Reset the position of the dinosaur
  obstaculos.forEach(obstaculo => obstaculo.parentNode.removeChild(obstaculo));
  obstaculos = [];
  nubes.forEach(nube => nube.parentNode.removeChild(nube));
  nubes = [];
  sueloX = 0;
  gameVel = 1;
  contenedor.className = 'game-container'; // Reset the background to initialç
  suelo.className = 'suelo'; // Reset the background to initial
  Loop(); // Restart the game loop if stopped
}
