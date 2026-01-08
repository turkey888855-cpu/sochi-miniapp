const tg = window.Telegram.WebApp;
tg.expand();

function selectCategory(category) {
  tg.sendData(JSON.stringify({
    category: category
  }));
}
