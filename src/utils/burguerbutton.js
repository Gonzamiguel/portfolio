function toggleMenu() {
    // Selecciona el elemento <ul> en el DOM
    let list = document.querySelector('ul');

    // Toggle de la clase 'top-[80px]': si la tiene, la quita; si no la tiene, la añade.
    list.classList.toggle('top-[80px]');

    // Toggle de la clase 'opacity-100': si la tiene, la quita; si no la tiene, la añade.
    list.classList.toggle('opacity-100');
}


function closeMenu() {
    // Selecciona el elemento <ul> en el DOM
    let list = document.querySelector('ul');

    // Quita las clases que hacen visible el menú
    list.classList.remove('top-[80px]');
    list.classList.remove('opacity-100');
}


function downloadCV() {
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.click();
}


// Muestra los elementos adicionales cuando se pasa el mouse sobre la imagen
document.querySelectorAll('.w-80').forEach(item => {
    item.addEventListener('mouseenter', event => {
        const hiddenContent = item.querySelector('.hidden');
        hiddenContent.classList.remove('hidden');
    });

    // Oculta los elementos adicionales cuando se retira el mouse de la imagen
    item.addEventListener('mouseleave', event => {
        const hiddenContent = item.querySelector('.hidden');
        hiddenContent.classList.add('hidden');
    });
});


    // Funcion scroll
    
    function scrollToElement(targetElement) {
        const targetPosition = targetElement.offsetTop - 110;

        const duration = 800; 

        const startPosition = window.pageYOffset;

        const distance = targetPosition - startPosition;

        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                scrollToElement(targetElement);
            }
        });
    });




// Obtener referencias a los botones
const btnTodos = document.getElementById('btnTodos');
const btnReact = document.getElementById('btnReact');
const btnTailwind = document.getElementById('btnTailwind');
const btnSass = document.getElementById('btnSass');

// Obtener todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

// Agregar controladores de eventos a los botones
btnTodos.addEventListener('click', filtrarPorTodos);
btnReact.addEventListener('click', filtrarPorReact);
btnTailwind.addEventListener('click', filtrarPorTailwind);
btnSass.addEventListener('click', filtrarPorSass);

// Funciones para filtrar las tarjetas de proyectos
function filtrarPorTodos() {
    tarjetas.forEach(tarjeta => {
        tarjeta.style.display = 'block';
    });
}

function filtrarPorReact() {
    tarjetas.forEach(tarjeta => {
        if (tarjeta.classList.contains('proyecto-react')) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

function filtrarPorTailwind() {
    tarjetas.forEach(tarjeta => {
        if (tarjeta.classList.contains('proyecto-tailwind')) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

function filtrarPorSass() {
    tarjetas.forEach(tarjeta => {
        if (tarjeta.classList.contains('proyecto-sass')) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}