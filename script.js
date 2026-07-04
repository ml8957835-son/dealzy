const button = document.getElementById("toggleBrands");

const hiddenCards = document.querySelectorAll(".hidden-brand");

let expanded = false;

if (button) {

    button.addEventListener("click", () => {

        expanded = !expanded;

        hiddenCards.forEach(card => {

            card.style.display = expanded ? "block" : "none";

        });

        button.textContent = expanded ? "Show Less" : "Show More";

    });

}

// Show more categories

const categoryButton = document.getElementById("toggleCategories");
const hiddenCategories = document.querySelectorAll(".hidden-category");

let categoriesExpanded = false;

if (categoryButton) {

    categoryButton.addEventListener("click", () => {

        categoriesExpanded = !categoriesExpanded;

        hiddenCategories.forEach(card => {

            card.style.display = categoriesExpanded ? "block" : "none";

        });

        categoryButton.textContent = categoriesExpanded ? "Show Less" : "Show More";

    });

}

// More about Dealzy accordion

const aboutToggle = document.getElementById("aboutToggle");
const aboutContent = document.getElementById("aboutContent");

let aboutOpen = false;

if (aboutToggle && aboutContent) {

    aboutContent.style.maxHeight = "0px";

    aboutToggle.addEventListener("click", () => {

        aboutOpen = !aboutOpen;

        aboutToggle.classList.toggle("open", aboutOpen);
        aboutContent.classList.toggle("open", aboutOpen);

        if (aboutOpen) {
            aboutContent.style.maxHeight = aboutContent.scrollHeight + "px";
        } else {
            aboutContent.style.maxHeight = "0px";
        }

    });

}

// =====================================================================
// Brand card navigation
// Clicking any brand card (Popular Deals, New Brands, All Brands,
// Category page results, or "Similar cards" on a product page) sends
// the user to product.html?brand=<slug-of-brand-name>.
// This is delegated on the document so it also works for cards that
// get rendered dynamically after this script loads.
// =====================================================================

function slugifyBrandName(str) {

    return String(str)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

}

document.addEventListener("click", (e) => {

    const card = e.target.closest(".deal-card, .brand-card");

    if (!card) return;

    const nameEl = card.querySelector("h3");

    if (!nameEl) return;

    const slug = slugifyBrandName(nameEl.textContent);

    window.location.href = `product.html?brand=${slug}`;

});