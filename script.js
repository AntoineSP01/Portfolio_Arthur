document.querySelector(".burger-menu").addEventListener("click", function () {
    var nav = document.querySelector("nav ul");
    var content = document.querySelector("header").nextElementSibling; // Cible le contenu en dessous du header

    if (nav.style.display === "block") {
        nav.style.display = "none";
        content.classList.remove("menu-open"); // Retire la classe quand le menu est fermé
    } else {
        nav.style.display = "block";
        content.classList.add("menu-open"); // Ajoute la classe pour décaler le contenu
    }
});
