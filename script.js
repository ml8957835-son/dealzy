const button = document.getElementById("toggleBrands");

const hiddenCards = document.querySelectorAll(".hidden-brand");

let expanded = false;

button.addEventListener("click", () => {

    expanded = !expanded;

    hiddenCards.forEach(card => {

        card.style.display = expanded ? "block" : "none";

    });

    button.textContent = expanded ? "Show Less" : "Show More";

});