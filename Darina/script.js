const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Продуктът беше добавен в количката!");

    });

});

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    productCards.forEach(card => {

        const productName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if(productName.includes(searchValue)){

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        productCards.forEach(card => {

            if(category === "all"){

                card.style.display = "block";

            }

            else if(card.classList.contains(category)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

});

productCards.forEach(card => {

    card.addEventListener("click", (event) => {

        if (event.target.closest("select") || event.target.closest("button")) {
            return;
        }

        event.stopPropagation();

        const description = card.getAttribute("data-description");

        const imageSrc = card.querySelector("img").src;

        const title = card.querySelector("h3").textContent;

        if(description){

            document.getElementById("modalImage").src = imageSrc;

            document.getElementById("modalTitle").textContent = title;

            document.getElementById("modalDescription").textContent = description;

            document.getElementById("productModal").style.display = "flex";

        }

    });

});

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".close").addEventListener("click", () => {

        document.getElementById("productModal").style.display = "none";

    });

    window.addEventListener("click", (event) => {

        const modal = document.getElementById("productModal");

        if (event.target === modal) {

            modal.style.display = "none";

        }

    });

});

document.querySelector(".close").addEventListener("click", () => {

    document.getElementById("productModal").style.display = "none";

});

window.addEventListener("click", (event) => {

    const modal = document.getElementById("productModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

});
