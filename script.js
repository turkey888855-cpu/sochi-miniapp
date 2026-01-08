const tg = window.Telegram?.WebApp;

if (!tg) {
  alert("Откройте приложение через Telegram");
  throw new Error("Telegram WebApp not found");
}

tg.ready();
tg.expand();

const app = document.getElementById("app");
let selectedCategory = "";

// ====== КАТЕГОРИИ ======
const categories = [
  { name: "Яхта", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "Горы", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { name: "Джиппинг", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77" },
  { name: "Водопады", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9" },
  { name: "Индивидуальный заказ", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" }
];

// ====== КАТАЛОГ ======
function showCatalog() {
  app.innerHTML = `
    <div class="cards">
      ${categories.map(c => `
        <div class="card" onclick="openCategory('${c.name}')">
          <img src="${c.img}">
          <div class="label">${c.name}</div>
        </div>
      `).join("")}
    </div>
  `;
}

// ====== ОПИСАНИЕ ======
function openCategory(name) {
  selectedCategory = name;
  app.innerHTML = `
    <button onclick="showCatalog()">← Назад</button>
    <p><b>${name}</b> — отдых в Сочи и Адлере.</p>
    <button onclick="openForm()">Оставить заявку</button>
  `;
}

// ====== ФОРМА ======
function openForm() {
  app.innerHTML = `
    <button onclick="openCategory('${selectedCategory}')">← Назад</button>

    <input id="name" placeholder="Имя Фамилия">
    <input id="phone" placeholder="+7 999 123-45-67">
    <input id="city" placeholder="Адлер / Сочи">
    <input id="people" placeholder="Количество человек">

    <button id="sendBtn">Отправить заявку</button>
  `;

  document.getElementById("sendBtn").addEventListener("click", sendOrder);
}

// ====== ОТПРАВКА ======
function sendOrder() {
  const data = {
    action: "order",
    category: selectedCategory,
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    city: document.getElementById("city").value.trim(),
    people: document.getElementById("people").value.trim()
  };

  if (!data.name || !data.phone || !data.city || !data.people) {
    tg.showAlert("Заполните все поля");
    return;
  }

  tg.sendData(JSON.stringify(data));
}

// ====== СТАРТ ======
showCatalog();


