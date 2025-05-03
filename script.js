document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#loginModal form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Usuario simulado
        const usuarios = [
            { email: 'admin@wasipet.com', password: '123456', nombre: 'Administrador' },
            { email: 'cliente@wasipet.com', password: 'wasipet', nombre: 'Cliente' }
        ];

        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (usuario) {
            // Guardar en localStorage que está logueado
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
            alert(`Bienvenido, ${usuario.nombre}`);
            location.reload();
        } else {
            alert('Correo o contraseña incorrectos');
        }
    });

    // Mostrar el nombre del usuario si está logueado
    const iconUser = document.querySelector('.fa-user');
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    if (usuarioGuardado) {
        iconUser.title = usuarioGuardado.nombre;
        iconUser.classList.add('text-success'); // ícono verde para indicar sesión activa
    }

    // Permitir cerrar sesión al hacer clic
    iconUser.addEventListener('click', function () {
        if (usuarioGuardado) {
            if (confirm('¿Cerrar sesión?')) {
                localStorage.removeItem('usuarioLogueado');
                location.reload();
            }
        }
    });
});

document.getElementById("searchToggle").addEventListener("click", function () {
    document.getElementById("searchContainer").style.display = "block";
});

document.getElementById("closeSearch").addEventListener("click", function () {
    document.getElementById("searchContainer").style.display = "none";
});

// Scroll suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

//Carrito 
document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.add-to-cart');
    const contador = document.getElementById('contador-carrito');

    function actualizarContador() {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        contador.textContent = carrito.length;
    }

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = {
                id: btn.dataset.id,
                nombre: btn.dataset.nombre,
                precio: btn.dataset.precio,
                imagen: btn.dataset.imagen, // Capturamos la imagen correcta
                cantidad: 1  // Inicializamos la cantidad en 1
            };

            // Obtener carrito actual o crear uno nuevo
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Agregar producto
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarContador();

            alert(`${producto.nombre} fue añadido al carrito`);
        });
    });
    actualizarContador();

});
