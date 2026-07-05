// Brand data for each category. Keys are lowercase category names.
const categoryData = {

    "travel": [
        { name: "Thomas Cook", label: "Travel", discount: "12% Off", color: "1d3557" },
        { name: "Yatra", label: "Travel", discount: "10% Off", color: "e63946" },
        { name: "MakeMyTrip", label: "Travel", discount: "6.50% Off", color: "e63946" },
        { name: "OYO", label: "Hotels", discount: "14% Off", color: "e63946" },
        { name: "IRCTC", label: "Travel", discount: "5% Off", color: "1d3557" },
        { name: "Cleartrip", label: "Travel", discount: "8% Off", color: "0d89ff" },
        { name: "Ixigo", label: "Travel", discount: "7% Off", color: "2a9d8f" },
        { name: "Goibibo", label: "Travel", discount: "9% Off", color: "e76f51" }
    ],

    "subscription": [
        { name: "JioHotstar", label: "Subscription", discount: "7.50% Off", color: "6c3ce9" },
        { name: "Zee 5", label: "Subscription", discount: "21% Off", color: "111111" },
        { name: "Amazon Prime - 1 Year", label: "Subscription", discount: "15% Off", color: "0d89ff" },
        { name: "Amazon Prime Shopping", label: "Subscription", discount: "15% Off", color: "0d89ff" },
        { name: "Prime Video", label: "Subscription", discount: "15% Off", color: "0d89ff" },
        { name: "Tinder", label: "Subscription", discount: "7% Off", color: "e63946" },
        { name: "Epic On - 1 Year", label: "Subscription", discount: "7.25% Off", color: "ff5b21" },
        { name: "Epic On - 1 Month", label: "Subscription", discount: "7.25% Off", color: "ff5b21" },
        { name: "Reader's Digest", label: "Subscription", discount: "35% Off", color: "333333" },
        { name: "Epic On - 6 Months", label: "Subscription", discount: "7.25% Off", color: "ff5b21" },
        { name: "SonyLiv Subscription", label: "Subscription", discount: "Out of Stock", color: "6c3ce9", outOfStock: true },
        { name: "BrainGym Jr", label: "Subscription", discount: "12% Off", color: "f4a261" }
    ],

    "health & beauty": [
        { name: "Mamaearth", label: "Health & Beauty", discount: "12% Off", color: "2a9d8f" },
        { name: "RAMA", label: "Health & Beauty", discount: "9% Off", color: "e76f51" },
        { name: "Nykaa", label: "Health & Beauty", discount: "10% Off", color: "e63946" },
        { name: "CLAYCO", label: "Health & Beauty", discount: "21% Off", color: "b08968" },
        { name: "Lakme", label: "Health & Beauty", discount: "8% Off", color: "e63946" },
        { name: "Forest Essentials", label: "Health & Beauty", discount: "15% Off", color: "2a9d8f" }
    ],

    "food": [
        { name: "Swiggy", label: "Food", discount: "10% Off", color: "fc8019" },
        { name: "Zomato", label: "Food", discount: "9% Off", color: "e23744" },
        { name: "Dominos", label: "Food", discount: "16% Off", color: "0d89ff" },
        { name: "Big Basket", label: "Grocery", discount: "4% Off", color: "84c225" },
        { name: "Eat Sure", label: "Food", discount: "10% Off", color: "6c3ce9" },
        { name: "Minus30", label: "Food", discount: "16% Off", color: "e63946" }
    ],

    "entertainment": [
        { name: "Gaana - 599", label: "Entertainment", discount: "15% Off", color: "e63946" },
        { name: "Gaana - 99", label: "Entertainment", discount: "15% Off", color: "e63946" },
        { name: "Lionsgate Play", label: "Entertainment", discount: "12% Off", color: "111111" },
        { name: "BookMyShow", label: "Entertainment", discount: "8% Off", color: "e0245e" },
        { name: "SonyLiv", label: "Entertainment", discount: "7.25% Off", color: "6c3ce9" },
        { name: "PVR Cinemas", label: "Entertainment", discount: "6% Off", color: "111111" }
    ],

    "accessories": [
        { name: "Lenskart", label: "Accessories", discount: "10% Off", color: "ffb703" },
        { name: "Titan Eye+", label: "Accessories", discount: "9% Off", color: "adb5bd" },
        { name: "Fossil", label: "Accessories", discount: "12% Off", color: "6c757d" },
        { name: "Fastrack", label: "Accessories", discount: "8% Off", color: "e63946" },
        { name: "Ray-Ban", label: "Accessories", discount: "15% Off", color: "111111" },
        { name: "TBH", label: "Accessories", discount: "26% Off", color: "6c757d" }
    ],

    "electronics": [
        { name: "Croma", label: "Electronics", discount: "2.75% Off", color: "0aa14a" },
        { name: "Vijay Sales", label: "Electronics", discount: "3% Off", color: "e63946" },
        { name: "Reliance Digital", label: "Electronics", discount: "4% Off", color: "0d89ff" },
        { name: "Apple Store", label: "Electronics", discount: "2% Off", color: "111111" },
        { name: "Samsung Shop", label: "Electronics", discount: "5% Off", color: "1428a0" },
        { name: "Boat Lifestyle", label: "Electronics", discount: "25% Off", color: "e63946" }
    ],

    "jewellery": [
        { name: "Kalyan Jewellers", label: "Jewellery", discount: "3% Off", color: "b08968" },
        { name: "Tanishq", label: "Jewellery", discount: "4% Off", color: "9c6644" },
        { name: "Malabar Gold", label: "Jewellery", discount: "2.5% Off", color: "b08968" },
        { name: "Melorra", label: "Jewellery", discount: "23% Off", color: "e76f51" },
        { name: "CaratLane", label: "Jewellery", discount: "5% Off", color: "9c6644" }
    ],

    "fashion": [
        { name: "Myntra", label: "Fashion", discount: "10% Off", color: "e0245e" },
        { name: "Max Fashion", label: "Fashion", discount: "8% Off", color: "e63946" },
        { name: "AJIO", label: "Fashion", discount: "7.25% Off", color: "111111" },
        { name: "Snitch", label: "Fashion", discount: "8% Off", color: "111111" },
        { name: "H&M", label: "Fashion", discount: "6% Off", color: "e63946" },
        { name: "Zara", label: "Fashion", discount: "5% Off", color: "111111" },
        { name: "Pantaloons", label: "Fashion", discount: "6.70% Off", color: "2a9d8f" },
        { name: "Levi's", label: "Fashion", discount: "22% Off", color: "343a40" },
        { name: "Tira", label: "Fashion", discount: "5% Off", color: "e63946" }
    ],

    "sports & fitness": [
        { name: "TEGO", label: "Sports & Fitness", discount: "10% Off", color: "212529" },
        { name: "Fitpass", label: "Sports & Fitness", discount: "20% Off", color: "495057" },
        { name: "Decathlon", label: "Sports & Fitness", discount: "8% Off", color: "0d6efd" },
        { name: "Cult.fit", label: "Sports & Fitness", discount: "12% Off", color: "111111" },
        { name: "Nike", label: "Sports & Fitness", discount: "7% Off", color: "111111" }
    ],

    "gifting": [
        { name: "Archies", label: "Gifting", discount: "20% Off", color: "e76f51" },
        { name: "IGP", label: "Gifting", discount: "15% Off", color: "f4a261" },
        { name: "FNP", label: "Gifting", discount: "18% Off", color: "e63946" }
    ],

    "shopping": [
        { name: "Nautica", label: "Shopping", discount: "9% Off", color: "1d3557" },
        { name: "Adventra", label: "Shopping", discount: "17% Off", color: "2a9d8f" },
        { name: "Tata Cliq", label: "Shopping", discount: "8.75% Off", color: "e63946" },
        { name: "Amazon Pay", label: "Payments", discount: "2% Off", color: "0d89ff" }
    ],

    "pharmacy": [
        { name: "Apollo Pharmacy", label: "Pharmacy", discount: "17% Off", color: "ff5b21" },
        { name: "Netmeds", label: "Pharmacy", discount: "10% Off", color: "0d89ff" },
        { name: "PharmEasy", label: "Pharmacy", discount: "12% Off", color: "0aa14a" },
        { name: "1mg", label: "Pharmacy", discount: "9% Off", color: "e63946" }
    ],

    "footwear": [
        { name: "Birkenstock", label: "Footwear", discount: "10% Off", color: "111111" },
        { name: "Call It Spring", label: "Footwear", discount: "16% Off", color: "6c757d" },
        { name: "Bata", label: "Footwear", discount: "8% Off", color: "e63946" },
        { name: "Woodland", label: "Footwear", discount: "12% Off", color: "2a5c1a" },
        { name: "Skechers", label: "Footwear", discount: "9% Off", color: "111111" }
    ],

    "hotels": [
        { name: "Elivaas", label: "Hotels", discount: "16% Off", color: "adb5bd" },
        { name: "Lemon Tree", label: "Hotels", discount: "10% Off", color: "e63946" },
        { name: "Yatra Hotels & Holidays", label: "Hotels", discount: "6% Off", color: "e63946" },
        { name: "OYO", label: "Hotels", discount: "14% Off", color: "e63946" }
    ],

    "home furnishing": [
        { name: "Black+Decker", label: "Home Furnishing", discount: "15% Off", color: "ffb703" },
        { name: "The Sleep Company", label: "Home Furnishing", discount: "13% Off", color: "023047" },
        { name: "IKEA", label: "Home Furnishing", discount: "6.20% Off", color: "0d6efd" },
        { name: "Urban Ladder", label: "Home Furnishing", discount: "11% Off", color: "6c757d" }
    ],

    "luxury brands": [
        { name: "Gucci", label: "Luxury Brands", discount: "4% Off", color: "111111" },
        { name: "Tommy Hilfiger", label: "Luxury Brands", discount: "10% Off", color: "1d3557" },
        { name: "Coach", label: "Luxury Brands", discount: "6% Off", color: "6c3ce9" }
    ],

    "gaming": [
        { name: "PlayStation Store", label: "Gaming", discount: "8% Off", color: "003791" },
        { name: "Xbox", label: "Gaming", discount: "7% Off", color: "107c10" },
        { name: "Steam Wallet", label: "Gaming", discount: "5% Off", color: "1b2838" },
        { name: "Garena Free Fire", label: "Gaming", discount: "10% Off", color: "e63946" }
    ],

    "grocery": [
        { name: "Big Basket", label: "Grocery", discount: "4% Off", color: "84c225" },
        { name: "Blinkit", label: "Grocery", discount: "5% Off", color: "f8cb46" },
        { name: "Zepto", label: "Grocery", discount: "6% Off", color: "6c3ce9" }
    ],

    "online shopping": [
        { name: "Amazon", label: "Online Shopping", discount: "2% Off", color: "0d89ff" },
        { name: "Flipkart", label: "Online Shopping", discount: "3% Off", color: "f4a261" },
        { name: "Meesho", label: "Online Shopping", discount: "12% Off", color: "e63946" },
        { name: "Ajio", label: "Online Shopping", discount: "7.25% Off", color: "111111" }
    ],

    "kids": [
        { name: "FirstCry", label: "Kids", discount: "18% Off", color: "e0245e" },
        { name: "Hamleys", label: "Kids", discount: "14% Off", color: "0d89ff" },
        { name: "Mothercare", label: "Kids", discount: "10% Off", color: "e76f51" }
    ]

};

// Render the category page based on the ?category= URL param

let currentBrands = [];

function parseDiscount(str) {
    const match = str.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : -1;
}

function renderGrid(brands) {

    const grid = document.getElementById("categoryGrid");
    if (!grid) return;

    grid.innerHTML = "";

    if (brands.length === 0) {

        grid.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#888;padding:40px 0;'>No brands found for this category yet.</p>";
        return;

    }

    brands.forEach(brand => {

        const card = document.createElement("div");
        card.className = "deal-card";

        const imgUrl = `https://placehold.co/220x120/${brand.color}/fff?text=${encodeURIComponent(brand.name)}`;

        card.innerHTML = `
            <img src="${imgUrl}" alt="${brand.name}">
            <hr>
            <p class="category">${brand.label}</p>
            <h3>${brand.name}</h3>
            <span class="discount ${brand.outOfStock ? "out-of-stock" : ""}">${brand.discount}</span>
        `;

        grid.appendChild(card);

    });

}

function sortBrands(sortType) {

    const sorted = [...currentBrands];

    if (sortType === "alpha-asc") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "alpha-desc") {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortType === "discount-asc") {
        sorted.sort((a, b) => parseDiscount(a.discount) - parseDiscount(b.discount));
    } else if (sortType === "discount-desc") {
        sorted.sort((a, b) => parseDiscount(b.discount) - parseDiscount(a.discount));
    }
    // "popularity" = original order, no re-sort needed

    renderGrid(sorted);

}

function renderCategoryPage() {

    const grid = document.getElementById("categoryGrid");
    const nameEl = document.getElementById("categoryName");

    if (!grid || !nameEl) return;

    const params = new URLSearchParams(window.location.search);
    const rawCategory = params.get("category") || "Travel";
    const key = rawCategory.toLowerCase();

    nameEl.textContent = rawCategory;

    currentBrands = categoryData[key] || [];

    renderGrid(currentBrands);

    // Highlight matching pill in the filter bar, if present
    document.querySelectorAll(".filter-pill").forEach(pill => {

        pill.classList.remove("active");

        const pillCategory = new URLSearchParams(pill.getAttribute("href")?.split("?")[1] || "").get("category");

        if (pillCategory && pillCategory.toLowerCase() === key) {
            pill.classList.add("active");
        }

    });

// Highlight matching item in the merged dropdown
    document.querySelectorAll("#megaCategoryList a").forEach(item => {
        item.classList.remove("active");

        const itemCategory = new URLSearchParams(item.getAttribute("href")?.split("?")[1] || "").get("category");

        if (itemCategory && itemCategory.toLowerCase() === key) {
            item.classList.add("active");
        }

    });

}

renderCategoryPage();

// ===== Merged dropdown (categories + sort filters) =====

const menuToggleBtn = document.getElementById("menuToggleBtn");
const megaDropdown = document.getElementById("megaDropdown");

function closeMenu() {
    if (megaDropdown) megaDropdown.classList.remove("open");
    if (menuToggleBtn) menuToggleBtn.classList.remove("open");
}

if (menuToggleBtn && megaDropdown) {

    menuToggleBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        const isOpen = megaDropdown.classList.contains("open");

        closeMenu();

        if (!isOpen) {
            megaDropdown.classList.add("open");
            menuToggleBtn.classList.add("open");
        }

    });

}

// Sort option clicks (now live inside the merged dropdown)
document.querySelectorAll(".mega-dropdown .sort-option").forEach(option => {

    option.addEventListener("click", () => {

        document.querySelectorAll(".mega-dropdown .sort-option").forEach(o => o.classList.remove("active"));
        option.classList.add("active");

        sortBrands(option.getAttribute("data-sort"));

        closeMenu();

    });

});

// Close when clicking outside
document.addEventListener("click", (e) => {

    if (megaDropdown && !megaDropdown.contains(e.target) && e.target !== menuToggleBtn && !menuToggleBtn?.contains(e.target)) {
        closeMenu();
    }

});