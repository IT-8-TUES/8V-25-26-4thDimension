const products = [
  {
    name: "Кожена дамска чанта",
    category: "bags",
    price: 49,
    image: "https://axentbox.bg/bg/damska-kozhena-chanta-31"
  },
  {
    name: "Малка вечерна чанта",
    category: "bags",
    price: 39,
    image: "https://obuvki.bg/p/damska-chanta-guess-noelle-hwvg78-79140-bla?srsltid=AfmBOopx8XWhD_T2bPhStZxuxrIvMwQbTwNYmrLGD0-s3WMXkR-s2VST"
  },
  {
    name: "Голяма ежедневна чанта",
    category: "bags",
    price: 59,
    image: "https://gomez.bg/bg/product/guess-iwona-girlfriend-tote-hwvg93-09230"
  },
  {
    name: "Бели спортни обувки",
    category: "shoes",
    price: 65,
    image: "https://www.fashiondays.bg/g/%D0%96%D0%B5%D0%BD%D0%B8-nike/%D0%9E%D0%B1%D1%83%D0%B2%D0%BA%D0%B8-%D0%A1%D0%BF%D0%BE%D1%80%D1%82%D0%BD%D0%B8_%D0%B8_%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B8%D1%80%D0%B0%D0%BD%D0%B8_%D0%BE%D0%B1%D1%83%D0%B2%D0%BA%D0%B8"
  },
  {
    name: "Черни елегантни обувки",
    category: "shoes",
    price: 72,
    image: "https://www.aboutyou.bg/p/furla/damski-obuvki-na-tok-s-otvorena-peta-31778987"
  },
  {
    name: "Кафяви боти",
    category: "shoes",
    price: 79,
    image: "https://obuvnazona.bg/%D0%94%D0%B0%D0%BC%D1%81%D0%BA%D0%B8-%D0%B1%D0%BE%D1%82%D0%B8-JJ12-brown-15459?srsltid=AfmBOooNPDsZUr_8meojX7JLxWcRQhdxcH0Ku9TsX_G-I-3t57LlGKIN"
  }
];

const productsContainer = document.getElementById("products");
const filterButtons = document.querySelectorAll(".filter-btn");

function showProducts(category) {
  productsContainer.innerHTML = "";

  const filteredProducts = category === "all"
    ? products
    : products.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} лв.</p>
      <button class="favorite-btn">Добави в любими</button>
    `;

    productsContainer.appendChild(productCard);
  });

  addFavoriteButtonEvents();
}

function addFavoriteButtonEvents() {
  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.textContent = "Добавено ✓";
      button.style.backgroundColor = "#B86B4B";
      button.style.color = "#FFFFFF";
    });
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active-btn"));
    button.classList.add("active-btn");

    const selectedCategory = button.getAttribute("data-category");
    showProducts(selectedCategory);
  });
});

showProducts("all");
const tipButton = document.getElementById("tipButton");
const fashionTip = document.getElementById("fashionTip");

const tips = [
  "Неутралните обувки се съчетават лесно с почти всяка чанта.",
  "Ако визията е семпла, може да добавиш по-ярка чанта като акцент.",
  "За ежедневието избирай удобни обувки и практична чанта.",
  "Малката чанта е подходяща за официални поводи.",
  "Черното, бежовото и кафявото са цветове, които лесно се комбинират."
];

if (tipButton) {
  tipButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    fashionTip.textContent = tips[randomIndex];
  });
}