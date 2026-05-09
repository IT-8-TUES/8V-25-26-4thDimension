// script.js

// ADD TO CART

const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Продуктът беше добавен в количката!");

    });

});

// SEARCH

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

// CATEGORY FILTER

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