// بيانات المنتجات المعروضة
const products = [
  {
    name: "خاتم ذهب",
    weight: "10g",
    price: "950 AED",
    image: "gold-ring.png",
    whatsapp: "971501234567"
  },
  {
    name: "سوار ذهبي",
    weight: "15g",
    price: "1350 AED",
    image: "gold-bracelet.png",
    whatsapp: "971502345678"
  },
  {
    name: "قلادة ذهبية",
    weight: "20g",
    price: "1850 AED",
    image: "gold-necklace.png",
    whatsapp: "971503456789"
  }
];

// عرض المنتجات على الصفحة
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach((p, i) => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>الوزن: ${p.weight}</p>
        <p>السعر: ${p.price}</p>
        <button onclick="contactSeller('${p.whatsapp}')">تواصل مع البائع</button>
        <button onclick="addToCart(${i})">أضف إلى السلة</button>
      </div>
    `;
  });
}

// إضافة إلى السلة
function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("goldus_cart") || "[]");
  cart.push(products[index]);
  localStorage.setItem("goldus_cart", JSON.stringify(cart));
  alert(`${products[index].name} تمت إضافته إلى السلة!`);
}

// تواصل مع البائع عبر واتساب
function contactSeller(phone) {
  window.open(`https://wa.me/${phone}`, "_blank");
}

// تسجيل دخول وهمي
function login() {
  alert("تسجيل دخول (تجريبي) - سيتم ربطه لاحقاً بقاعدة بيانات.");
}

// عند تحميل الصفحة
window.onload = () => {
  renderProducts();
};
