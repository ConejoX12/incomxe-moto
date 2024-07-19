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

//PARTE DE RADIOS IMAGEN CAMBIA A TEXTO

document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');

    services.forEach((service, index) => {
        const img = service.querySelector('img');
        const content = service.querySelector('.contents');
        const imageIndicator = service.querySelector(`#image-indicator-${index + 1}`);
        const textIndicator = service.querySelector(`#text-indicator-${index + 1}`);
        
        let isTextVisible = false;

        const toggleContent = () => {
            if (isTextVisible) {
                content.classList.remove('visible');
                img.classList.remove('hidden');
                imageIndicator.classList.add('active');
                textIndicator.classList.remove('active');
            } else {
                content.classList.add('visible');
                img.classList.add('hidden');
                imageIndicator.classList.remove('active');
                textIndicator.classList.add('active');
            }
            isTextVisible = !isTextVisible;
        };

        // Función para verificar si el elemento está en el viewport
        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        // Función para cambiar al modo de texto cuando el usuario se desplaza a la sección de productos
        const handleScroll = () => {
            if (isInViewport(service) && !isTextVisible) {
                toggleContent();
                window.removeEventListener('scroll', handleScroll); // Para detener la verificación una vez cambiado al modo de texto
            }
        };

        // Verificar al cargar la página
        handleScroll();

        // Verificar al hacer scroll
        window.addEventListener('scroll', handleScroll);

        // Funciones para cambiar al modo de texto cuando se interactúa con los indicadores
        imageIndicator.addEventListener('click', () => {
            if (isTextVisible) toggleContent(); // Cambiado: Ahora se activa al hacer clic en el indicador de texto
        });

        textIndicator.addEventListener('click', () => {
            if (!isTextVisible) toggleContent(); // Cambiado: Ahora se activa al hacer clic en el indicador de imagen
        });
    });
});



// Detecta cuándo se hace scroll en la página


window.addEventListener('scroll', function() {
    // Obtén todos los elementos que tienen la clase animate-in
    var elements = document.querySelectorAll('.animate-in');
    
    // Recorre cada elemento
    elements.forEach(function(element) {
        // Obtiene la posición del elemento en relación con la ventana
        var elementPosition = element.getBoundingClientRect().top;
        
        // Calcula la mitad de la altura de la ventana
        var windowHeight = window.innerHeight / 1.5;
        
        // Si el elemento está dentro del rango de visión
        if (elementPosition < windowHeight) {
            // Añade la clase active para activar la animación
            element.classList.add('active');
        }
    });
});




// FONDO IMAGEN PRINCIPAL CAMBIO DE FONDO

document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'FONDO-2.jpg',
        'FONDO-3.jpg',
        'FONDO-4.jpeg'
    ];

    let currentIndex = 0;
    const backgroundElement = document.querySelector('.hero .background');

    function changeBackground() {
        backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;
        backgroundElement.classList.add('zoom');
        
        setTimeout(() => {
            backgroundElement.classList.remove('zoom');
        }, 15000); // Remove zoom class after 20s

        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 15000); // Change background every 20 seconds

    // Initial background setup
    changeBackground();
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const hero = document.querySelector(".hero");

    function checkScroll() {
        const heroHeight = hero.offsetHeight;
        if (window.scrollY > heroHeight) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", checkScroll);
});




    // CAMBIO DE IMAGEN DE RADIO SECCION 3 INFO, RADIO EN MEDIO

    document.addEventListener('DOMContentLoaded', function() {
        const images = [
            'MOTOTRBO R2(2).png',
            'MOTOTRBO R2(3).png',
            'MOTOTRBO R2(4).png'
        ];
        let currentIndex = 0;
        const imageElement = document.querySelector('.center-image');

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.style.opacity = 0; // Fade out
            setTimeout(() => {
                imageElement.src = images[currentIndex];
                imageElement.style.opacity = 1; // Fade in
            }, 1000); // Time must match the CSS transition duration
        }, 2000); // Change image every 2 seconds
    });







// MENU LATERAL

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navbar = document.querySelector(".navbar");
    const menuItems = document.querySelectorAll(".menu-item-has-children > a");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
        navbar.classList.toggle("white-bg");
    });

    menuItems.forEach(function(item) {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const submenu = item.nextElementSibling;
            const parentLi = item.parentElement;

            submenu.classList.toggle("active");
            parentLi.classList.toggle("active");
            item.querySelector("i").classList.toggle("rotate");
        });
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('show');
});


window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Función para volver arriba al hacer clic
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


