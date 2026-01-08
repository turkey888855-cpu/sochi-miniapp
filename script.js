const tg = Telegram.WebApp;
tg.expand();

const app = document.getElementById("app");

let selectedCategory = "";

// ================== КАТЕГОРИИ ==================
const categories = [
  {
    name: "Яхта",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    name: "Горы",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    name: "Джиппинг",
    img: "https://images.unsplash.com/photo-1526676037777-05a232554f77"
  },
  {
    name: "Водопады",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9"
  },
  {
    name: "Индивидуальный заказ",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  }
];

// ================== ЭКРАН 1: КАТАЛОГ ==================
function showCatalog() {
  app.innerHTML = `
    <div class="cards">
      ${categories.map(cat => `
        <div class="card" onclick="openCategory('${cat.name}')">
          <img src="${cat.img}">
          <div class="label">${cat.name}</div>
        </div>
      `).join("")}
    </div>
  `;
}

// ================== ЭКРАН 2: ОПИСАНИЕ ==================
function openCategory(name) {
  selectedCategory = name;

  app.innerHTML = `
    <div class="content">
      <button onclick="showCatalog()" style="margin-bottom:12px">← Назад</button>

      <p style="font-size:17px;line-height:1.5">
        <b>${name}</b> — популярный формат отдыха в Сочи и Адлере.
        Подходит как для компаний, так и для индивидуальных путешественников.
      </p>

      <button onclick="openForm()">Оставить заявку</button>
    </div>
  `;
}

// ================== ЭКРАН 3: ФОРМА ==================
function openForm() {
  app.innerHTML = `
    <div class="content">
      <button onclick="openCategory('${selectedCategory}')" style="margin-bottom:12px">
        ← Назад
      </button>

      <input id="name" placeholder="Имя Фамилия">
      <input id="phone" placeholder="+7 999 123-45-67">
      <input id="city" placeholder="Город (Адлер / Сочи)">
      <input id="people" placeholder="Количество человек">

      <button onclick="sendOrder()">Отправить заявку</button>
    </div>
  `;
}

// ================== ОТПРАВКА ЗАЯВКИ ==================
function sendOrder() {
  if (!selectedCategory) {
    alert("Выберите вид отдыха");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const city = document.getElementById("city").value.trim();
  const people = document.getElementById("people").value.trim();

  if (!name || !phone || !city || !people) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  const data = {
    action: "order",
    category: selectedCategory,
    name: name,
    phone: phone,
    city: city,
    people: people
  };

  // 🔥 КЛЮЧЕВОЙ ВЫЗОВ
  Telegram.WebApp.sendData(JSON.stringify(data));
}

// ================== СТАРТ ==================
showCatalog();





