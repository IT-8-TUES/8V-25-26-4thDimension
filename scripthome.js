document.addEventListener('DOMContentLoaded', () => {
    console.log("Скриптът е зареден успешно!"); // Това ще се появи в F12 Console

    let cart = JSON.parse(localStorage.getItem('modea_cart')) || [];
    const cartBadge = document.getElementById('cart-count');
    
    if (cartBadge) cartBadge.textContent = cart.length;

    const addButtons = document.querySelectorAll('.add-btn');
    console.log("Намерени бутони:", addButtons.length);

    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.product-card');
            if (!card) {
                console.error("Грешка: Не мога да намеря .product-card около бутона!");
                return;
            }

            const sizeSelect = card.querySelector('.size-select');
            const size = sizeSelect ? sizeSelect.value : "";

            if (!size || size === "Размер") {
                alert("Моля, избери размер!");
                return;
            }

            const product = {
                title: card.querySelector('h3').innerText,
                price: card.querySelector('.price, .product-price').innerText,
                img: card.querySelector('img').src,
                size: size
            };

            cart.push(product);
            localStorage.setItem('modea_cart', JSON.stringify(cart));

            if (cartBadge) cartBadge.textContent = cart.length;
            
            alert("Добавено: " + product.title);
        });
    });
});