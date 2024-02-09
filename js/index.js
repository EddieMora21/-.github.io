
document.addEventListener("DOMContentLoaded", function() {
  const giftBox = document.getElementById("giftBox");
  const giftText = document.getElementById("giftText");
  const music = document.getElementById("music");
  const roseContainer = document.getElementById("roseContainer");
  const abrelo = document.getElementById("abrelo");
  let isOpen = false;
  giftBox.style.display="none"
  abrelo.style.display="none"

  // Texto a mostrar gradualmente
  const textParts = [
    { text: "¿Quieres", image: "url('img/;3.jpeg')" },
    { text: "ser mi", image: "url('img/;3.jpeg')" },
    { text: "San Valentín Date :3?", image: "url('img/33.jpeg')" }
];
  
  let currentPartIndex = 0;
  let currentText = "";

  function showNextTextPart() {
    if (currentPartIndex < textParts.length - 1) {
        currentText += textParts[currentPartIndex].text + " ";
        giftText.textContent = currentText;
        giftBox.style.backgroundImage = textParts[currentPartIndex].image;
        giftBox.style.backgroundSize = "cover"; // La imagen cubrirá todo el contenedor
      giftBox.style.backgroundRepeat = "no-repeat"; // Evita que la imagen se repita
        currentPartIndex++;
        setTimeout(showNextTextPart, 5000); // Mostrar la siguiente parte después de 5 segundos
    } else {
        // Mostrar la última parte del texto inmediatamente
        currentText += textParts[currentPartIndex].text + " ";
        giftText.textContent = currentText;
        giftBox.style.backgroundImage = textParts[currentPartIndex].image;

        // Cambiar la canción inmediatamente
        music.src = "music/Y2meta.app - Jungkook - Standing Next to You (Traducida al Español) (128 kbps).mp3"; // Cambiar la ruta de la nueva canción
        music.play();
        music.currentTime += 22
    }
}


  // Escuchar eventos de clic en la caja de regalo
  giftBox.addEventListener("click", function() {
    // Abrir la caja de regalo agregando la clase "open"
    isOpen = !isOpen;

    if (isOpen){
      giftBox.classList.toggle("open");
      giftText.classList.toggle("hidden");
      giftBox.classList.toggle("dark-background");
      giftBox.classList.add("slide-background");
      giftBox.style.backgroundColor="#B28ACE"
      showNextTextPart();
      
      music.play()
      music.currentTime += 2
      abrelo.style.display="none"
    // Generar las rosas
    generateRoses();
    }else{
      // Eliminar la clase "open" para cerrar la caja de regalo
      giftBox.classList.remove("open");
      giftBox.style.backgroundImage="none"
      giftBox.style.backgroundColor="#ff98a3"
      // Detener la lluvia de rosas eliminando las rosas generadas
      roseContainer.innerHTML = "";
      music.pause()
      abrelo.style.display="block"

    }
   
  });
});

function hidetext(){
  const text= document.getElementById("regalotxt")
  const giftBox = document.getElementById("giftBox");
  giftBox.style.display="block"
  text.style.display="none";
  abrelo.style.display="block"
  abrelo.style.color="#ffffff"
}

// Función para generar las rosas
function generateRoses() {
  // Cantidad de rosas que quieres que caigan
  const numberOfRoses = 50;

  for (let i = 0; i < numberOfRoses; i++) {
      const rose = document.createElement("div");
      rose.classList.add("rose");
      rose.style.left = Math.random() * window.innerWidth + "px";
      rose.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duración de la animación aleatoria entre 2 y 5 segundos
      roseContainer.appendChild(rose);
  }
}
