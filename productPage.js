// productPage.js
// Powers product.html. Reads the brand slug from the URL, finds that
// brand's data inside categoryData.js (already loaded on the page),
// and fills in the whole page with it.

const DENOMINATIONS = [500, 1000, 2000, 5000];

function slugify(str) {

    return String(str)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

}

function parseDiscountNumber(str) {

    const match = String(str).match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;

}

// Flattens categoryData (grouped by category) into a single lookup
// keyed by a URL-safe slug of the brand name.
function buildCatalog() {

    const catalog = {};

    Object.keys(categoryData).forEach(categoryKey => {

        categoryData[categoryKey].forEach(brand => {

            const slug = slugify(brand.name);

            if (!catalog[slug]) {
                catalog[slug] = { ...brand, categoryKey };
            }

        });

    });

    return catalog;

}

function renderFaqList(containerId, items) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    items.forEach(item => {

        const row = document.createElement("div");
        row.className = "faq-acc-item";

        row.innerHTML = `
            <button class="faq-acc-question">
                <span>${item.q}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-acc-answer">
                <p>${item.a}</p>
            </div>
        `;

        container.appendChild(row);

    });

    container.querySelectorAll(".faq-acc-question").forEach(btn => {

        btn.addEventListener("click", () => {

            const item = btn.parentElement;
            const answer = item.querySelector(".faq-acc-answer");
            const isOpen = item.classList.contains("open");

            item.classList.toggle("open", !isOpen);
            answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : "0px";

        });

    });

}

function renderSimilarCards(brands) {

    const track = document.getElementById("similarTrack");
    const section = document.getElementById("similarSection");

    if (!track || !section) return;

    track.innerHTML = "";

    if (brands.length === 0) {
        section.style.display = "none";
        return;
    }

    section.style.display = "";

    brands.forEach(b => {

        const card = document.createElement("div");
        card.className = "deal-card";

        const imgUrl = `https://placehold.co/220x120/${b.color}/fff?text=${encodeURIComponent(b.name)}`;

        card.innerHTML = `
            <img src="${imgUrl}" alt="${b.name}">
            <hr>
            <p class="category">${b.label}</p>
            <h3>${b.name}</h3>
            <span class="discount ${b.outOfStock ? "out-of-stock" : ""}">${b.discount}</span>
        `;

        track.appendChild(card);

    });

}

function buildFaqSetA(brandName) {

    return [
        {
            q: `What is the validity period for the ${brandName} gift card?`,
            a: `The ${brandName} gift card is valid for upto 6 months from the date of issuance.`
        },
        {
            q: `Can the ${brandName} gift card be used multiple times?`,
            a: `Yes, the balance can be used across multiple transactions until it is fully used up.`
        },
        {
            q: `Can multiple ${brandName} gift cards be used in a single transaction?`,
            a: `No, multiple ${brandName} gift cards cannot be clubbed together in a single transaction.`
        },
        {
            q: `Can the ${brandName} gift card be used with ongoing brand offers and discounts?`,
            a: `The ${brandName} gift card cannot be clubbed with ongoing brand offers or promotional discounts.`
        },
        {
            q: `Where can I use the ${brandName} gift card, and how can I check its balance?`,
            a: `You can use the ${brandName} gift card on the brand's app and website, and check your balance from your Dealzy profile or the brand's official balance-check page.`
        }
    ];

}

function buildFaqSetB(brandName) {

    return [
        {
            q: `What are ${brandName} gift cards?`,
            a: `${brandName} gift cards are prepaid vouchers that let you shop or pay at ${brandName} without using cash or a bank card directly.`
        },
        {
            q: `Can I get a ${brandName} gift card for free?`,
            a: `Dealzy occasionally runs referral and milestone rewards that can offset the cost, but gift cards are purchased at a discount rather than given away for free.`
        },
        {
            q: `How to redeem ${brandName} gift cards?`,
            a: `Add the gift card code at checkout on the ${brandName} app or website to redeem its value against your order.`
        },
        {
            q: `How to get more discounts on ${brandName}?`,
            a: `Check Dealzy regularly for updated ${brandName} discount rates and seasonal coupon codes for extra savings.`
        },
        {
            q: `Is ${brandName} Gift Voucher the same as ${brandName} Gift Card?`,
            a: `Yes, gift vouchers and gift cards for ${brandName} refer to the same prepaid stored-value product.`
        },
        {
            q: `How can I save money on ${brandName} orders?`,
            a: `Buying a discounted ${brandName} gift card from Dealzy before checkout is the easiest way to save on every order.`
        },
        {
            q: `How do I get a refund for an order cancelled using a ${brandName} gift card?`,
            a: `Refunds for orders paid with a gift card are typically credited back as gift card balance rather than cash, as per ${brandName}'s refund policy.`
        }
    ];

}

function initProductPage() {

    const notFoundBox = document.getElementById("productNotFound");
    const heroBox = document.getElementById("productHeroContent");

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("brand");

    const catalog = buildCatalog();
    const brand = slug ? catalog[slug] : null;

    if (!brand) {

        if (heroBox) heroBox.style.display = "none";
        if (notFoundBox) notFoundBox.style.display = "block";

        document.querySelectorAll(".important-points-section, .about-section, .faq-plain-section, .similar-section")
            .forEach(section => section.style.display = "none");

        return;

    }

    document.title = `Buy ${brand.name} E-Gift Card - Dealzy`;

    document.getElementById("crumbBrand").textContent = `${brand.name} Gift Card`;
    document.getElementById("brandTitle").textContent = brand.name;
    document.getElementById("brandCategory").textContent = brand.label;
    document.getElementById("brandDiscount").textContent = brand.outOfStock ? "Currently Unavailable" : brand.discount;

    // Fill in the gift-card mockup visual (logo text tinted with the
    // brand's accent color instead of a placeholder image)
    const cardBrandLogo = document.getElementById("cardBrandLogo");
    cardBrandLogo.textContent = brand.name;
    cardBrandLogo.style.color = `#${brand.color}`;

    const discountPct = parseDiscountNumber(brand.discount);

    let amount = DENOMINATIONS[1];
    let qty = 1;

    function updatePrice() {

        const payablePerCard = amount * (1 - discountPct / 100);

        document.getElementById("amountLabel").textContent = `₹ ${amount}`;
        document.getElementById("qtyLabel").textContent = `x${qty}`;
        document.getElementById("payAmount").textContent = `₹ ${(payablePerCard * qty).toFixed(2)}`;
        document.getElementById("mrpAmount").textContent = `₹${(amount * qty).toFixed(2)}`;

    }

    const amountMenu = document.getElementById("amountMenu");

    DENOMINATIONS.forEach(value => {

        const opt = document.createElement("button");
        opt.className = "amount-option" + (value === amount ? " active" : "");
        opt.textContent = `₹ ${value}`;

        opt.addEventListener("click", () => {

            amount = value;

            amountMenu.querySelectorAll(".amount-option").forEach(o => o.classList.remove("active"));
            opt.classList.add("active");

            updatePrice();
            amountMenu.classList.remove("open");

        });

        amountMenu.appendChild(opt);

    });

    document.getElementById("amountToggle").addEventListener("click", (e) => {

        e.stopPropagation();
        amountMenu.classList.toggle("open");

    });

    document.addEventListener("click", () => amountMenu.classList.remove("open"));

    document.getElementById("qtyIncrease").addEventListener("click", () => {

        if (qty < 10) {
            qty++;
            updatePrice();
        }

    });

    document.getElementById("qtyDecrease").addEventListener("click", () => {

        if (qty > 1) {
            qty--;
            updatePrice();
        }

    });

    const buyBtn = document.getElementById("buyBtn");

    if (brand.outOfStock) {

        buyBtn.textContent = "Out of Stock";
        buyBtn.disabled = true;
        buyBtn.classList.add("disabled");

    } else {

        buyBtn.addEventListener("click", () => {
            alert("This is a static mockup, so purchases aren't wired up yet — but this is where checkout / the app-download prompt would go!");
        });

    }

    updatePrice();

    document.getElementById("aboutText").innerHTML =
        `Savor every benefit with <strong>${brand.name}</strong> Gift Cards and Gift Vouchers from Dealzy. ` +
        `Enjoy ${brand.label} and more while saving instantly on every purchase, with upto <strong>${brand.discount}</strong> on every order.`;

    renderFaqList("faqListA", buildFaqSetA(brand.name));
    renderFaqList("faqListB", buildFaqSetB(brand.name));

    const similarBrands = (categoryData[brand.categoryKey] || [])
        .filter(b => slugify(b.name) !== slug)
        .slice(0, 10);

    renderSimilarCards(similarBrands);

}

document.addEventListener("DOMContentLoaded", initProductPage);