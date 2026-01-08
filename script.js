const tg = Telegram.WebApp;
tg.expand();

let selectedCategory = "";

const categories = [
  { title: "Джиппинг", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { title: "Море и яхты", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { title: "Горы", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { title: "Абхазия", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { title: "Индивидуальный заказ", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" },
  { title: "ИИ-маршрут", img: "https://images.unsplash.com/photo-1500534623283-312aade485b7" }
];

const cards = document.getElementById("cards");
const form = document.getElementById("form");
const title = document.getElementById("form-title");

categories.forEach((c, i) => {
  const card = document.createElement("div");
  card.className = "card zoom";
  card.style.backgroundImage = `url(${c.img})`;
  card.style.animationDelay = `${i * 0.1}s`;
  card.innerHTML = `<span>${c.title}</span>`;
  card.onclick = () => openForm(c.title);
  cards.appendChild(card);
});

function openForm(cat) {
  selectedCategory = cat;
  cards.style.display = "none";
  form.classList.remove("hidden");
  title.innerText = cat;
}

function goBack() {
  form.classList.add("hidden");
  cards.style.display = "grid";
}

function sendOrder() {
  tg.sendData(JSON.stringify({
    category: selectedCategory,
    name: name.value,
    phone: phone.value,
    city: city.value,
    people: people.value
  }));
}
