// Menú de navegación responsive
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menuItems = document.getElementById('menu-items');
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
});

// Validación del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Por favor completa todos los campos antes de enviar.');
        event.preventDefault(); // Evita el envío del formulario
    }
});

// Efecto de desvanecimiento al desplazarse
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    var windowHeight = window.innerHeight;
    
    elements.forEach(function(element) {
        var positionFromTop = element.getBoundingClientRect().top;
        
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('visible');
        }
    });
});
