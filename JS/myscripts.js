




window.onload = function(){


// MODAL 1 ////////////////////////////////////////////


// Get the modal
var modal1 = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// END MODAL 1 ////////////////////////////////////////////



// MODAL 2 ////////////////////////////////////////////


// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}


// END MODAL 2 ////////////////////////////////////////////

// MODAL 3 ////////////////////////////////////////////


// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}


// END MODAL 3 ////////////////////////////////////////////


// MODAL 4 ////////////////////////////////////////////


// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}


// END MODAL 4 ////////////////////////////////////////////



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
      modal2.style.display = "none";
    }

  if (event.target == modal3) {
      modal3.style.display = "none";
    }

  if (event.target == modal4) {
      modal4.style.display = "none";
    }
}
};


// Carousel activity

// ===== Carrusel de Videos (3 visibles con centro activo) =====

document.addEventListener("DOMContentLoaded", function () {
  const slides = Array.from(document.querySelectorAll('.video-slide'));
  const dots = document.querySelectorAll('.video-dots .dot');
  const prevBtn = document.querySelector('.video-btn.prev');
  const nextBtn = document.querySelector('.video-btn.next');
  const allVideos = document.querySelectorAll('#portfolio-videos video');
  let current = 0; // índice del video central

  if (!slides.length) return;

  // Pausar todos los videos
  function pauseAllVideos() {
    allVideos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  }

  // Actualizar los 3 visibles y el activo
  function updateSlides() {
    const total = slides.length;

    // Limpiar clases
    slides.forEach(slide =>
      slide.classList.remove('is-prev', 'is-center', 'is-next')
    );

    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;

    slides[prevIndex].classList.add('is-prev');
    slides[current].classList.add('is-center');
    slides[nextIndex].classList.add('is-next');

    // Actualizar dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[current].classList.add('active');

    // Solo el centro se puede reproducir
    slides.forEach(slide => {
      const video = slide.querySelector('video');
      if (!video) return;

      if (slide.classList.contains('is-center')) {
        video.controls = true;
      } else {
        video.controls = false;
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  function goToSlide(index) {
    pauseAllVideos();
    const total = slides.length;
    current = (index + total) % total;
    updateSlides();
  }

  // Flechas
  prevBtn.addEventListener('click', () => goToSlide(current - 1));
  nextBtn.addEventListener('click', () => goToSlide(current + 1));

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });

  // Impedir reproducción en laterales
  allVideos.forEach(video => {
    video.addEventListener('play', () => {
      const parent = video.closest('.video-slide');
      if (!parent.classList.contains('is-center')) {
        video.pause();
      }
    });
  });

  // Inicializar carrusel
  updateSlides();
});


// End of Carousel activity
