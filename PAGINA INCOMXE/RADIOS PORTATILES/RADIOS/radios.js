//PARTE DE CUADRO FLOTANTE

document.querySelectorAll('.support-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const supportBox = document.getElementById('support-box');
        const rect = event.target.getBoundingClientRect();

        supportBox.style.top = rect.bottom + 'px';
        supportBox.style.left = rect.left + 'px';
        supportBox.style.display = 'block';
    });
});

document.getElementById('close-support').addEventListener('click', function() {
    document.getElementById('support-box').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const supportBox = document.getElementById('support-box');
    if (!supportBox.contains(event.target) && !event.target.classList.contains('support-link')) {
        supportBox.style.display = 'none';
    }
});

//GALERIA

function changeImage(src, title, summary) {
    document.getElementById('largeImage').src = src;
    document.getElementById('title').textContent = title;
    document.getElementById('summary').textContent = summary;
}

//ZOOM IMAGEN

const mainImage = document.getElementById('largeImage');
const zoomBox = document.querySelector('.zoom-box');
const zoomContainer = document.querySelector('.zoom-container');

// Mostrar cuadro de zoom cuando se pasa el cursor sobre la imagen grande
zoomContainer.addEventListener('mousemove', (e) => {
    const rect = zoomContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const zoomLevel = 2.5; // Nivel de zoom
    const zoomBoxWidth = zoomContainer.offsetWidth / zoomLevel;
    const zoomBoxHeight = zoomContainer.offsetHeight / zoomLevel;

    const leftPos = x - zoomBoxWidth / 2;
    const topPos = y - zoomBoxHeight / 2;

    zoomBox.style.backgroundImage = `url('${mainImage.src}')`;
    zoomBox.style.backgroundSize = `${mainImage.offsetWidth * zoomLevel}px ${mainImage.offsetHeight * zoomLevel}px`;
    zoomBox.style.backgroundPosition = `-${leftPos * zoomLevel}px -${topPos * zoomLevel}px`;
    zoomBox.style.width = `${zoomBoxWidth}px`;
    zoomBox.style.height = `${zoomBoxHeight}px`;
    zoomBox.style.left = `${leftPos}px`;
    zoomBox.style.top = `${topPos}px`;
    zoomBox.style.display = 'block';
});

// Ocultar cuadro de zoom cuando se retira el cursor de la imagen grande
zoomContainer.addEventListener('mouseleave', () => {
    zoomBox.style.display = 'none';
});

//CUADRO FLOTANTE COMPRAR

function openPopup() {
    document.getElementById("buyPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("buyPopup").style.display = "none";
}

document.getElementById("buyButton").addEventListener("click", openPopup);






// VIDEO DEL BOTON 3 

 // Obtener el modal
 var modal = document.getElementById("videoModal");

 // Obtener el enlace que abre el modal
 var btn = document.getElementById("videoLink");

 // Obtener el <span> que cierra el modal
 var span = document.getElementsByClassName("close")[0];

 // Cuando el usuario hace clic en el enlace, abrir el modal
 btn.onclick = function(event) {
     event.preventDefault();
     modal.style.display = "block";
 }

 // Cuando el usuario hace clic en <span> (x), cerrar el modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Cuando el usuario hace clic fuera del modal, cerrarlo
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }



// MENU LATERAL MOVIL

document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('nav.navbar').classList.toggle('active');
});


//MENU LATERAL DE NOSOTROS

document.getElementById('Nosotros-link').addEventListener('click', function(event) {
    event.preventDefault();
    var submenuIcon = this.querySelector('i');
    submenuIcon.classList.toggle('rotate');
    this.parentElement.classList.toggle('active');
}); 

document.getElementById('support-link').addEventListener('click', function(event) {
    event.preventDefault();
    var submenuIcon = this.querySelector('i');
    submenuIcon.classList.toggle('rotate');
    this.parentElement.classList.toggle('active');
}); 




document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown-btn');
    const footers = document.querySelectorAll('.footer-distributed');
    let originalMarginTop = footers.length > 0 ? footers[0].style.marginTop || '0px' : '0px';

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', adjustFooterMargin);
        dropdown.addEventListener('mouseleave', resetFooterMargin);
        const dropdownContent = dropdown.nextElementSibling;
        dropdownContent.addEventListener('mouseenter', adjustFooterMargin);
        dropdownContent.addEventListener('mouseleave', resetFooterMargin);
    });

    function adjustFooterMargin() {
        let maxHeight = 0;
        dropdowns.forEach(function (dropdown) {
            const dropdownContent = dropdown.nextElementSibling;
            if (dropdownContent.offsetHeight > 0) {
                maxHeight = Math.max(maxHeight, dropdownContent.offsetHeight);
            }
        });
        footers.forEach(footer => {
            footer.style.marginTop = maxHeight + 'px';
        });
    }

    function resetFooterMargin() {
        footers.forEach(footer => {
            footer.style.marginTop = originalMarginTop;
        });
    }
});














