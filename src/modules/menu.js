import frenchToastIMG from "./french_toast.png";
import croissantwithIMG from "./crossaint_with_sausage.png";
import fruitPorridgeIMG from "./fruit_porridge.png";
import russianBreakfastIMG from "./russian_breakfast.png";

function createMenuItem(img, title) {
  const menuItem = document.createElement("div");
  menuItem.classList = "menuItem";

  const titleDiv = document.createElement("div");
  titleDiv.innerText = title;

  menuItem.appendChild(titleDiv);

  const foodImage = new Image();
  foodImage.src = img;

  menuItem.appendChild(foodImage);

  return menuItem;
}

function createMenuPage() {
  const menusDiv = document.createElement("div");

  menusDiv.appendChild(createMenuItem(frenchToastIMG, "French toast"));
  menusDiv.appendChild(createMenuItem(croissantwithIMG, "sausage croissants"));
  menusDiv.appendChild(createMenuItem(fruitPorridgeIMG, "Fruit Porridge"));
  menusDiv.appendChild(createMenuItem(russianBreakfastIMG, "a plater"));
  //   console.log(createMenuPage);
  return menusDiv;
}

export default createMenuPage;
