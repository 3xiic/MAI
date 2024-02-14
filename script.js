function toggleText(id) {
    var texto = document.getElementById('texto' + id);
    var boton = document.getElementById('boton' + id);
    var isVisible = texto.style.display === 'block'; // Verificar si el texto ya está visible
  
    if (!isVisible) {
      texto.style.display = 'block';
      boton.classList.add('mostrar-texto');
    } else {
      texto.style.display = 'none';
      boton.classList.remove('mostrar-texto');
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
  function boton5(id){
    mostrarCompAleatoria();
    toggleText(id);
  }
  function boton4(id){
    mostrarFraseAleatoria();
    toggleText(id);
  }
