$(document).ready(function () {
    // 💕 Evento cuando se presiona "Sí"
    $("#yes-btn").click(function () {
        $("body").html("<div class='container'><h1>💖 ¡Sabía que dirías que sí! 💖</h1><p>Te amo mucho, mi amor 🥰</p></div>");
    });

    // 💔 Hacer que el botón "No" se mueva
    $("#no-btn").hover(function () {
        let x = Math.random() * ($(window).width() - $(this).width());
        let y = Math.random() * ($(window).height() - $(this).height());
        $(this).css({ position: "absolute", left: x + "px", top: y + "px" });
    });

    // 🌸 Generar flores automáticamente cada 500ms (0.5s)
    setInterval(createFlower, 500);

    function createFlower() {
        let flower = $("<div class='flower'>🌸</div>");

        // Posición aleatoria en la parte superior
        let startX = Math.random() * $(window).width();
        flower.css({
            left: startX + "px",
            top: "-50px",
        });

        $("body").append(flower);

        // Animación para que la flor caiga lentamente
        flower.animate(
            {
                top: $(window).height() + "px",
                opacity: 0
            },
            5000, // 5 segundos para caer
            function () {
                flower.remove();
            }
        );
    }
});
