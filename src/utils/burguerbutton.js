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

    // Función para desplazamiento suave
    function scrollToElement(targetElement) {
        // Obtener la posición del elemento objetivo
        const targetPosition = targetElement.offsetTop - 80;

        // Duración del desplazamiento suave en milisegundos
        const duration = 800; 

        // Posición actual del documento
        const startPosition = window.pageYOffset;

        // Diferencia entre la posición actual y la posición del elemento objetivo
        const distance = targetPosition - startPosition;

        // Hora de inicio del desplazamiento
        let startTime = null;

        // Función de animación para desplazamiento suave
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Función de suavizado de movimiento (ease)
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        // Iniciar el desplazamiento suave
        requestAnimationFrame(animation);
    }

    // Asignar el desplazamiento suave a los enlaces del menú de navegación
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




