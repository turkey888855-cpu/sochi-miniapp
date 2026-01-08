const tg = window.Telegram.WebApp;
tg.expand();

const tours = {
  "Джиппинг": {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Горы, водопады, оффроуд, драйв и лучшие виды Сочи."
  },
  "Абхазия": {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Озеро Рица, Гагра, Новый Афон и горные пейзажи."
  },
  "Яхта": {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Морская прогулка, закат, купание и фото."
  }
};

function selectCategory(category) {
  localStorage.setItem("tour", category);
  window.location.href = "tour.html";
}

if (window.location.pathname.includes("tour.html")) {
  const tour = localStorage.getItem("tour");
  document.getElementById("tourTitle").innerText = tour;
  document.getElementById("tourDescription").innerText = tours[tour].description;
  document.getElementById("tourImage").style.backgroundImage =
    `url(${tours[tour].image})`;
}

function sendOrder() {
  const tour = localStorage.getItem("tour");

  tg.sendData(JSON.stringify({
    action: "order",
    tour: tour
  }));

  tg.close();
}
