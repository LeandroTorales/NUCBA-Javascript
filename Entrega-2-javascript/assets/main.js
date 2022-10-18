const form = document.getElementById("form");
const cardsContainer = document.getElementById("cards__renders--containers");

let item = JSON.parse(localStorage.getItem("item")) || [];
const saveLocalStorage = () => {
  localStorage.setItem("items", JSON.stringify(item));
};

const saveItems = () => {
    
}