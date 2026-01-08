const home = document.getElementById("home");
const category = document.getElementById("category");
const title = document.getElementById("categoryTitle");

function openCategory(name) {
  title.innerText = name;

  home.classList.add("hidden");
  category.classList.remove("hidden");
}

function goBack() {
  category.classList.add("hidden");
  home.classList.remove("hidden");
}
