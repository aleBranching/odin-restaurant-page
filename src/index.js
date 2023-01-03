import createNav from "./modules/navbar";
import createFooter from "./modules/footer";
import createHomeMain from "./modules/home";
import createMenuPage from "./modules/menu";
// import cat from "./blincat.jpg";

// console.log("Change made ");
const contentDiv = document.querySelector("div#content");
// console.log(contentDiv);
// console.log(mainContent);

function clearContent() {
  const mainContent = document.querySelector("#main");
  while (mainContent.firstChild) {
    mainContent.firstChild.remove();
  }
}

// const myIcon = new Image();
// myIcon.src = cat;

const navBar = createNav();

contentDiv.appendChild(navBar.navTag);
const homeMain = createHomeMain();
contentDiv.appendChild(homeMain);
contentDiv.appendChild(createFooter());

navBar.homeBTN.addEventListener("click", () => {
  console.log(`I've been clicked by`);
});

navBar.menuBTN.addEventListener("click", () => {
  const mainContent = document.querySelector("#main");

  clearContent();

  mainContent.appendChild(createMenuPage());
});

navBar.contactBTN.addEventListener("click", () => {});
