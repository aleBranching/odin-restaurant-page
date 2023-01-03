import createNav from "./modules/navbar";
import createFooter from "./modules/footer";
import createHomeMain from "./modules/home";
import createMenuPage from "./modules/menu";
import createContact from "./modules/contact";
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
const mainDiv = document.createElement("div");
mainDiv.id = "main";
const homeMain = createHomeMain();
contentDiv.appendChild(mainDiv);
mainDiv.appendChild(homeMain);

contentDiv.appendChild(createFooter());

navBar.homeBTN.addEventListener("click", () => {
  //   navBar.homeBTN.classList.toggle = "clicked";
  //   console.log(`I've been clicked by`);
  const mainContent = document.querySelector("#main");
  clearContent();
  console.log(mainContent);
  mainContent.appendChild(homeMain);
});

navBar.menuBTN.addEventListener("click", () => {
  const mainContent = document.querySelector("#main");

  clearContent();

  mainContent.appendChild(createMenuPage());
});

navBar.contactBTN.addEventListener("click", () => {
  const mainContent = document.querySelector("#main");
  clearContent();
  mainContent.appendChild(createContact());
});
