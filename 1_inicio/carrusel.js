$(document).ready(function () {
  const carrusel = $(".testimonios-container");

  // ==========================================
  // BOTÓN DERECHO (SIGUIENTE)
  // ==========================================
  $("#nextTestimonial").on("click", function () {
    // 1. Identificamos la primera tarjeta de la fila actual
    const primeraTarjeta = $(".testimonio-card").first();

    // 2. Calculamos cuánto mide para saber cuánto movernos
    const anchoTarjeta = primeraTarjeta.outerWidth();
    const espacioGap = parseInt(carrusel.css("gap")) || 0;
    const paso = anchoTarjeta + espacioGap;

    // 3. Animamos el contenedor moviéndolo hacia la izquierda
    carrusel.animate(
      {
        marginLeft: "-" + paso + "px",
      },
      400,
      function () {
        // ¡Esta función se ejecuta SOLO cuando la animación termina!
        // 4. Movemos la tarjeta al final del HTML
        carrusel.append(primeraTarjeta);
        // 5. Reseteamos el margen a 0 al instante para que no se note el cambio
        carrusel.css("margin-left", "0px");
      },
    );
  });

  // ==========================================
  // BOTÓN IZQUIERDO (ANTERIOR)
  // ==========================================
  $("#prevTestimonial").on("click", function () {
    // 1. Identificamos la última tarjeta de la fila actual
    const ultimaTarjeta = $(".testimonio-card").last();

    // 2. Calculamos el tamaño del paso
    const anchoTarjeta = ultimaTarjeta.outerWidth();
    const espacioGap = parseInt(carrusel.css("gap")) || 0;
    const paso = anchoTarjeta + espacioGap;

    // 3. PASO SECRETO: Movemos la última tarjeta al inicio del HTML antes de animar
    carrusel.prepend(ultimaTarjeta);

    // 4. Empujamos el carrusel a la izquierda de golpe para ocultar el cambio
    carrusel.css("margin-left", "-" + paso + "px");

    // 5. Animamos el margen de regreso a 0 para que se deslice hacia la derecha
    carrusel.animate(
      {
        marginLeft: "0px",
      },
      400,
    );
  });
});

/*$(document).ready(function () {
  // Variables de los elementos
  const contenedor = $(".testimonios-container");
  const tarjetas = $(".testimonio-card");

  // Variables de control (Fáciles de entender)
  let posicionActual = 0;
  const totalTarjetas = tarjetas.length; // En tu HTML hay 5 tarjetas
  const tarjetasVisibles = 3; // Queremos mostrar de 3 en 3

  // BOTÓN DERECHO (SIGUIENTE)
  $("#nextTestimonial").on("click", function () {
    // Si hay espacio para avanzar a la derecha, sumamos 1
    if (posicionActual < totalTarjetas - tarjetasVisibles) {
      posicionActual = posicionActual + 1;
    } else {
      // Si llegamos al final, volvemos mágicamente a la primera (Infinito)
      posicionActual = 0;
    }
    actualizarMovimiento();
  });

  // BOTÓN IZQUIERDO (ANTERIOR)
  $("#prevTestimonial").on("click", function () {
    // Si estamos más adelante del inicio, retrocedemos 1
    if (posicionActual > 0) {
      posicionActual = posicionActual - 1;
    } else {
      // Si estamos en la primera y damos atrás, saltamos al final (Infinito)
      posicionActual = totalTarjetas - tarjetasVisibles;
    }
    actualizarMovimiento();
  });

  // FUNCIÓN QUE CALCULA LOS PÍXELES Y MUEVE EL CARRUSEL
  function actualizarMovimiento() {
    // Medimos el ancho de una sola tarjeta
    const anchoTarjeta = tarjetas.outerWidth();
    // Obtenemos el espacio (gap) configurado en tu CSS
    const espacioGap = parseInt(contenedor.css("gap")) || 0;

    // Multiplicamos la posición actual por el tamaño de un paso completo
    const pixelesADesplazar = posicionActual * (anchoTarjeta + espacioGap);

    // Aplicamos el movimiento usando transform de CSS
    contenedor.css("transform", "translateX(-" + pixelesADesplazar + "px)");
  }
});
*/
/*
$( document ).ready( function () {
  const carrusel = $(".testimonios-container");

  // ==========================================
  // BOTÓN DERECHO (SIGUIENTE)
  // ==========================================
  $("#nextTestimonial").on("click", function () {
    // 1. Tomamos la primera tarjeta de la fila
    const primeraTarjeta = $(".testimonio-card").first();

    // 2. La movemos al final de la fila en el HTML (.append)
    carrusel.append(primeraTarjeta);
  });

  // ==========================================
  // BOTÓN IZQUIERDO (ANTERIOR)
  // ==========================================
  $("#prevTestimonial").on("click", function () {
    // 1. Tomamos la última tarjeta de la fila
    const ultimaTarjeta = $(".testimonio-card").last();

    // 2. La movemos al principio de la fila en el HTML (.prepend)
    carrusel.prepend(ultimaTarjeta);
  });
});/*



/*$(document).ready(function () {
    // 1. Guardamos los elementos en variables fáciles de entender
    const carrusel = $('.testimonios-container');
    const tarjetas = $('.testimonio-card');
    
    // 2. Variables de control básicas
    let posicionActual = 0;              // Empezamos en la tarjeta 0 (la primera)
    const totalTarjetas = tarjetas.length; // ¿Cuántas tarjetas hay en total? (En tu caso son 5)
    const tarjetasVisibles = 3;           // ¿Cuántas se ven al mismo tiempo en pantalla?

    // ==========================================
    // BOTÓN DERECHO (SIGUIENTE)
    // ==========================================
    $('#nextTestimonial').on('click', function () {
        // Si todavía no llegamos al límite del carrusel, avanzamos 1 posición
        if (posicionActual < totalTarjetas - tarjetasVisibles) {
            posicionActual = posicionActual + 1;
        } else {
            // Si ya no hay más tarjetas a la derecha, regresamos al inicio (Efecto Infinito)
            posicionActual = 0;
        }
        
        moverCarrusel();
    });

    // ==========================================
    // BOTÓN IZQUIERDO (ANTERIOR)
    // ==========================================
    $('#prevTestimonial').on('click', function () {
        // Si estamos más adelante de la primera tarjeta, retrocedemos 1 posición
        if (posicionActual > 0) {
            posicionActual = posicionActual - 1;
        } else {
            // Si estamos en la primera y damos atrás, saltamos al final (Efecto Infinito)
            posicionActual = totalTarjetas - tarjetasVisibles;
        }
        
        moverCarrusel();
    });

    // ==========================================
    // FUNCIÓN PARA MOVER EL CARRUSEL
    // ==========================================
    function moverCarrusel() {
        // Medimos cuánto mide una tarjeta (ejemplo: 310px) más su separación (gap: 30px)
        const anchoTarjeta = tarjetas.outerWidth();
        const separacion = parseInt(carrusel.css('gap')) || 0;
        const tamañoPaso = anchoTarjeta + separacion;

        // Calculamos cuántos píxeles debemos movernos en total
        const totalPixeles = posicionActual * tamañoPaso;

        // Movemos el contenedor hacia la izquierda usando CSS
        carrusel.css('transform', 'translateX(-' + totalPixeles + 'px)');
    }
});
*/

// $(document).ready(function () {
//   const $container = $(".testimonios-container");
//   let isMoving = false; // Evita bugs si el usuario hace clic muy rápido

//   // 1. BOTÓN SIGUIENTE (Derecha)
//   $("#nextTestimonial").on("click", function () {
//     if (isMoving) return;
//     isMoving = true;

//     const $firstCard = $(".testimonio-card").first();
//     const step =
//       $firstCard.outerWidth() + (parseInt($container.css("gap")) || 0);

//     // Desplazamos suavemente hacia la izquierda usando la animación de tu CSS
//     $container.css("transform", `translateX(-${step}px)`);

//     // Esperamos los 500ms (0.5s) que dura tu transición de CSS
//     setTimeout(function () {
//       // Apagamos la transición para mover la tarjeta en secreto
//       $container.css("transition", "none");
//       $container.append($firstCard);
//       $container.css("transform", "translateX(0px)");

//       // TRUCO MÁGICO: Forzamos al navegador a procesar el cambio de posición
//       // ANTES de volver a encender la animación.
//       requestAnimationFrame(function () {
//         requestAnimationFrame(function () {
//           $container.css("transition", "transform 0.5s ease-in-out");
//           isMoving = false;
//         });
//       });
//     }, 500);
//   });

//   // 2. BOTÓN ANTERIOR (Izquierda)
//   $("#prevTestimonial").on("click", function () {
//     if (isMoving) return;
//     isMoving = true;

//     const $lastCard = $(".testimonio-card").last();
//     const step =
//       $lastCard.outerWidth() + (parseInt($container.css("gap")) || 0);

//     // Preparamos el terreno apagando la animación
//     $container.css("transition", "none");
//     $container.prepend($lastCard);
//     $container.css("transform", `translateX(-${step}px)`);

//     // Esperamos un instante mínimo para que el navegador entienda la nueva posición inicial
//     requestAnimationFrame(function () {
//       requestAnimationFrame(function () {
//         $container.css("transition", "transform 0.5s ease-in-out");
//         $container.css("transform", "translateX(0px)");

//         // Bloqueamos clics hasta que termine de deslizarse por completo
//         setTimeout(function () {
//           isMoving = false;
//         }, 500);
//       });
//     });
//   });
// });
