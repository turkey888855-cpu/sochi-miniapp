const tg = window.Telegram.WebApp;
tg.expand();

function selectTour(tour) {
  const data = {
    tour: tour
  };

  tg.sendData(JSON.stringify(data));
}
