document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('cart-items-list');
    const totalContainer = document.getElementById('cart-total');
    const cartBadge = document.getElementById('cart-count');
    const checkoutSection = document.getElementById('checkout-section');
    const showCheckoutBtn = document.getElementById('show-checkout-btn');

    function renderCart() {
        let cart = JSON.parse(localStorage.getItem('modea_cart')) || [];
        if (cartBadge) cartBadge.textContent = cart.length;

        if (cart.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center; padding:30px;">Количката е празна 🛍️</p>';
            totalContainer.textContent = '0.00 €';
            showCheckoutBtn.style.display = 'none';
            checkoutSection.classList.add('hidden');
            return;
        }

        listContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const priceValue = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
            total += priceValue;

            listContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}">
                    <div class="item-info">
                        <h4>${item.title}</h4>
                        <p>Размер: ${item.size}</p>
                        <p>Цена: ${item.price}</p>
                    </div>
                    <button class="remove-btn" onclick="removeItem(${index})">Премахни</button>
                </div>
            `;
        });

        totalContainer.textContent = total.toFixed(2) + ' €';
        showCheckoutBtn.style.display = 'block';
    }

    // Показване на формата за плащане
    showCheckoutBtn.addEventListener('click', () => {
        checkoutSection.classList.remove('hidden');
        checkoutSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Изпращане на формата
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Поръчката е изпратена успешно!');
        localStorage.removeItem('modea_cart');
        window.location.href = 'homepage.html';
    });

    // Функция за премахване
    window.removeItem = function(index) {
        let cart = JSON.parse(localStorage.getItem('modea_cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('modea_cart', JSON.stringify(cart));
        renderCart();
    };

    renderCart();
});