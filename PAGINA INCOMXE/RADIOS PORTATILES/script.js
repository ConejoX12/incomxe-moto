//PARTE DE CUADRO FLOTANTE

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

// BUSCADOR
document.addEventListener("DOMContentLoaded", () => {
    const radios = [
        { title: "MOTOTRBO R2", description: "El MOTOTRBO R2 es un potente equipo de última generación que unifica durabilidad y ergonomía para garantizar un manejo seguro y sencillo. Con un alcance superior, audio configurable y una integración perfecta, el R2 es una adición confiable a un dia de trabajo ininterrumpido.", img: "Radio1.png", url: "radios/Radio1.html" },
        { title: "Radios portátiles de dos vías Serie DEP™500e", description: "Con soporte de sistemas y audio fuerte y claro, estos radios de próxima generación ofrecen conectividad rentable para su organización. Solo con Radios portátiles de dos vías Serie DEP™ 500e.", img: "Radio2.jpg", url: "radios/Radio2.html" },
        { title: "MOTOTRBO™ RADIO DIGITAL PORTÁTIL DE DOS VÍAS DEP™450", description: "Simple y asequible, el radio portátil de dos vías DEP 450 MOTOTRBO es un Radio Digital para los usuarios que lo utilizan todos los días y desean permanecer conectados.", img: "Radio3.jpg", url: "radios/Radio3.html" },
        { title: "MOTOTRBO™ Radio portátil de dos vías SL500", description: "Comunicación sencilla y confiable pulsar para hablar para los usuarios móviles que lo utilizan todos los días. Con un diseño delgado, fácil de utilizar y la tecnología más reciente para un óptimo funcionamiento, el SL500 proporciona comunicación confiable cuando la necesita.", img: "Radio4.jpg", url: "radios/Radio4.html" },
        { title: "MOTOTRBO R7 Series", description: "MOTOTRBO R7 ofrece capacidades de audio revolucionarias en un radio portátil de dos vías resistente y preparado para el futuro. R7 le permite a su equipo escuchar y ser escuchado la primera vez, cuando más importa.", img: "Radio5.png", url: "radios/Radio5.html" },
        { title: "Radios portátiles de dos vías Serie DGP™8000e/DGP™5000e", description: "Con voz y datos integrados de alto desempeño y funciones avanzadas para mayor eficiencia, estos radios ofrecen niveles máximos de conectividad para su organización.", img: "Radio6.jpg", url: "radios/Radio6.html"},
        { title: "MOTOTRBO™ Radio portátil de dos vías SL8550", description: "Sorprendentemente delgado y liviano; lo último en comunicaciones discretas MOTOTRBO.", img: "Radio7.jpg", url: "radios/Radio7.html" },
        { title: "Radio portátil de dos vías SL500e", description: "Con su diseño delgado y liviano, el radio portátil SL500e es elegante y discreto.", img: "Radio8.jpg", url: "radios/Radio8.html" },
        { title: "Radio Inteligente MOTOTRBO™ Ion", description: "Acceda a voz y datos críticos e instantáneos de banda ancha en un dispositivo resistente con la radio inteligente MOTOTRBO Ion.", img: "Radio9.png", url: "radios/Radio9.html" },
        { title: "MOTOTRBO™ Radio portátil de dos vías DEP™450 (Analógico)", description: "Simple y asequible, el radio portátil de dos vías DEP 450 es un radio analógico que conecta eficazmente a su fuerza de trabajo y tiene la flexibilidad para crecer junto con su negocio.", img: "Radio10.jpg", url: "radios/Radio10.html" },
        { title: "MOTOTRBO™ Radio Portátil de dos vías DGP™8550EX", description: "El radio portátil MOTOTRBO™ DGP™8550EX mantiene a sus trabajadores conectados, seguros y productivos, donde sea que trabajen. Además tiene la más alta clasificación de grupo de explosión de gases ATEX/INMETRO.", img: "Radio11.jpg", url: "radios/Radio11.html" },
        { title: "RADIO PORTÁTIL MOTOTRBO DEP 250", description: "El radio MOTOTRBO DEP 250 será su nueva opción. Esta serie puede mejorar la eficiencia de la comunicación y es fácil de usar. Es un práctico radio diseñado y fabricado para profesionales.", img: "Radio12.png", url: "radios/Radio12.html" }
    ];

    const radioContainer = document.getElementById('radioContainer');
    const searchBar = document.getElementById('searchBar');

    function createRadioElement(radio) {
        const radioElement = document.createElement("div");
        radioElement.classList.add("radio");

        const imgElement = document.createElement("img");
        imgElement.src = radio.img;
        imgElement.alt = radio.title;

        const contentsElement = document.createElement("div");
        contentsElement.classList.add("contents");

        const titleElement = document.createElement("h2");
        const titleLink = document.createElement("a");
        titleLink.href = radio.url; // Esto redirige en la misma pestaña
        titleLink.textContent = radio.title;
        titleElement.appendChild(titleLink);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = radio.description;

        contentsElement.appendChild(titleElement);
        contentsElement.appendChild(descriptionElement);

        radioElement.appendChild(imgElement);
        radioElement.appendChild(contentsElement);

        return radioElement;
    }

    function displayRadios(filteredRadios) {
        radioContainer.innerHTML = '';
        filteredRadios.forEach((radio, index) => {
            const columnIndex = Math.floor(index / 4);
            let column = radioContainer.querySelector(`.radio-column[data-index="${columnIndex}"]`);
            if (!column) {
                column = document.createElement('div');
                column.className = 'radio-column';
                column.setAttribute('data-index', columnIndex);
                radioContainer.appendChild(column);
            }
            const radioItem = createRadioElement(radio);
            column.appendChild(radioItem);
        });
    }

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredRadios = radios.filter(radio => 
            radio.title.toLowerCase().includes(searchTerm) ||
            radio.description.toLowerCase().includes(searchTerm)
        );
        displayRadios(filteredRadios);
    });

    displayRadios(radios);
});

// MENU LATERAL

document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('nav.navbar').classList.toggle('active');
});


// SUB MENÚ
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