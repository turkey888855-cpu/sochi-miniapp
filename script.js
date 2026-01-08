const tg = Telegram.WebApp;
tg.expand();

const app = document.getElementById("app");

const categories = [
  { name: "Яхта", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "Горы", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { name: "Джиппинг", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77" },
  { name: "Водопады", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9" },
  { name: "Индивидуальный заказ", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" }
];

let selectedCategory = "";

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

function openCategory(name) {
  selectedCategory = name;

  app.innerHTML = `
    <div class="content">
      <p>${name} — один из самых популярных видов отдыха в Сочи и Адлере.</p>
      <button onclick="openForm()">Оставить заявку</button>
    </div>
  `;
}

function openForm() {
  app.innerHTML = `
    <div class="content">
      <input id="name" placeholder="Имя Фамилия">
      <input id="phone" placeholder="+7 999 123-45-67">
      <input id="city" placeholder="Город (Адлер / Сочи)">
      <input id="people" placeholder="Количество человек">
      <button onclick="sendOrder()">Отправить заявку</button>
    </div>
  `;
}

function sendOrder() {
  const data = {
    action: "order",
    category: selectedCategory,
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    city: document.getElementById("city").value,
    people: document.getElementById("people").value
  };

  // ОБЯЗАТЕЛЬНО
  Telegram.WebApp.sendData(JSON.stringify(data));
}

