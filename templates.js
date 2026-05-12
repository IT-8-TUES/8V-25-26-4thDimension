// to make all pages in the same style
// haeder template
document.getElementById("header").innerHTML = `
<nav class="navbar">
        <h1 class="logo">
            <a href="../bella/index.html">
                <img src="../resources/logo.png" alt="Modea">
            </a>
        </h1>
        <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-links">
            <li><a href="../bella/index.html">Начало</a></li>
            <li><a href="../Darina/hoodies.html">Суичъри</a></li>
            <li><a href="../Darina/tshirts.html">Тениски</a></li>
            <li><a href="../RayaK/jeans.html">Дънки</a></li>
            <li><a href="../RayaK/dresses.html">Роkли</a></li>
            <li><a href="../soraya/8V-25-26-4thDimension/soraq/bags-shoes.html">Чанти и обувки</a></li>
            <li><a href="../soraya/8V-25-26-4thDimension/soraq/bags-shoes-gude.html">Модни съвети</a></li>
            <li><span class="cart-icon">🛒 <span id="cartCount">0</span></span></li>
        </ul>
    </nav>
`;

// footer template
document.getElementById("footer").innerHTML = `
<div class="footer-content">
        <h2><a href="../bella/index.html">Modea</a></h2>
        <p>Минималистична мода за всеки</p>
        <p class="footer-links"><a href="https:instagram.com">Instagram - Modea_official</a></p>
        <p class="footer-links"><a href="https:tiktok.com">TikTok - Modea_style</a></p>
        <p class="footer-links">Phone number - 088******9</p>
        <p class="copyright">© 2026 Modea. Всички права запазени.</p>
    </div>
`;