

// ESTE ES EL SCRIPT DE JS PARA LA SIDEBAR QUE INCLUYE EL EFECTO DE QUE CUANDO DOY CLICK EN CUALQUIER PARTE O EN EL BOTON CLOSE AUTOMATICAMENTE SE CIERRE LA SIDEBAR.....

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".close-icon");
  const sidebar = document.querySelector(".sidebar");

  hamburgerMenu.addEventListener("click", function() {
    sidebar.classList.add("show-sidebar");
    hamburgerMenu.style.visibility = "hidden"; // Hacer el botón hamburguesa invisible al abrir la sidebar
    closeIcon.style.display = "block"; // Mostrar el ícono de cierre cuando se abre la sidebar
  });

  closeIcon.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
    closeIcon.style.display = "none"; // Ocultar el ícono de cierre cuando se cierra la sidebar
    hamburgerMenu.style.visibility = "visible"; // Hacer nuevamente visible el botón hamburguesa al cerrar la sidebar
  });

  // Agregar evento de clic al área del documento
  document.addEventListener("click", function(event) {
    // Verificar si el clic ocurrió fuera de la sidebar, no en el botón de cierre y no en el botón hamburguesa
    if (
      !sidebar.contains(event.target) &&
      event.target !== closeIcon &&
      event.target !== hamburgerMenu &&
      !hamburgerMenu.contains(event.target)
    ) {
      sidebar.classList.remove("show-sidebar");
      closeIcon.style.display = "none";
      hamburgerMenu.style.visibility = "visible"; // Hacer nuevamente visible el botón hamburguesa al cerrar la sidebar
    }
  });
});



// SIDEBAR "BRANDS" ARROW CLICK EVENT


/**
 *document.addEventListener('DOMContentLoaded', function() {
  const brandsLink = document.querySelector('.sidebar-sub-menu-item');
  const brandsSubMenu = brandsLink.querySelector('.brands-submenu');
  const arrowIcon = brandsLink.querySelector('.arrow-icon-sidebar');

  brandsLink.addEventListener('click', function(event) {
      event.preventDefault();
      brandsSubMenu.classList.toggle('brands-submenu-open'); // Toggle the class

      // Cambia la clase de la flecha sin aplicar ninguna rotación
      arrowIcon.classList.toggle('arrow-icon-flipped');
  });
});
 */




// SCRIPT PARA REDIRECCION SUBMENU BRANDS
  document.addEventListener('DOMContentLoaded', function() {
  const brandsLink = document.querySelector('.sidebar-sub-menu-item');
  const brandsSubMenu = brandsLink.querySelector('.brands-submenu');
  const arrowIcon = brandsLink.querySelector('.arrow-icon-sidebar');

  brandsLink.addEventListener('click', function(event) {
    // Evitar que el comportamiento del enlace funcione
    event.preventDefault();

    // Si es un enlace del submenú, redirecciona inmediatamente
    if (event.target.tagName === 'A' && event.target.parentElement.parentElement.classList.contains('brands-submenu')) {
      window.location.href = event.target.getAttribute('href');
      return; // Detener la ejecución adicional
    }

    // Cambiar el estado del menú y el icono
    brandsSubMenu.classList.toggle('brands-submenu-open');
    arrowIcon.classList.toggle('arrow-icon-flipped');
  });
});



// SCRIPT ADAPTADO PARA LA VERSION MOVILE BRANDS
document.addEventListener('DOMContentLoaded', function() {
  const mobileBrandsLink = document.getElementById('mobile-brands-link');
  const mobileBrandsSubMenu = document.querySelector('.mobile-brands-submenu');
  const mobileArrowIcon = document.querySelector('#mobile-brands-link .arrow-icon-sidebar');

  mobileBrandsLink.addEventListener('click', function(event) {
    event.preventDefault();
    mobileBrandsSubMenu.classList.toggle('mobile-brands-submenu-open');
    mobileArrowIcon.classList.toggle('arrow-icon-flipped');
  });
});



// SCRIPT PARA LAS SECCIONES DE RESEARCH, SOLUTIONS & PORTFOLIO EN RESPONSIVE DESIGN




