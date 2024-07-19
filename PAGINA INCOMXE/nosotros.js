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
