//made by Raya Krasimiriova Kirilova
// Cart counter
let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");

const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountEl.textContent = cartCount;

        // bump animation
        cartCountEl.classList.add("bump");
        setTimeout(() => cartCountEl.classList.remove("bump"), 300);

        // button feedback
        button.textContent = "Добавено ✓";
        button.disabled = true;
        setTimeout(() => {
            button.textContent = "Добави";
            button.disabled = false;
        }, 1500);
    });
});

// Search
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();
    let visibleCount = 0;

    productCards.forEach(card => {
        const productName = card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    // show/hide no results message
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "flex" : "none";
    }
});

// Category filter with active state
const categoryButtons = document.querySelectorAll(".category-btn");

// set "all" as active by default
categoryButtons[0]?.classList.add("active");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        // update active state
        categoryButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;
        let visibleCount = 0;

        productCards.forEach(card => {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (noResults) {
            noResults.style.display = visibleCount === 0 ? "flex" : "none";
        }

        // clear search when switching category
        searchInput.value = "";
    });
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("visible", window.scrollY > 300);
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mark active nav link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
        link.classList.add("active");
    }
});

// Lazy load images with fade-in
document.querySelectorAll(".product-card img").forEach(img => {
    img.setAttribute("loading", "lazy");
});

// mobile view hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
    });

    // close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
        });
    });
}

// product details modal popup window
const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalMaterial = document.getElementById("modalMaterial");

if (modal) {

    // Open modal when clicking on image or title
    productCards.forEach(card => {
        const img = card.querySelector("img");
        const title = card.querySelector("h3");

        function openModal() {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalTitle.textContent = title.textContent;
            modalPrice.textContent = card.querySelector(".price").textContent;

            // Read data attributes
            const desc = card.dataset.description;
            const mat = card.dataset.material;

            modalDescription.textContent = desc || "";
            modalMaterial.textContent = mat ? "Материал: " + mat : "";

            modal.classList.add("open");
            document.body.style.overflow = "hidden";
        }

        img.addEventListener("click", openModal);
        title.addEventListener("click", openModal);
    });

    // Close modal
    function closeModal() {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", closeModal);

    // Close on clicking overlay (outside modal)
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
}
