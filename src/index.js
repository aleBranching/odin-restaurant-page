import createNav from "./modules/navbar";
import createFooter from "./modules/footer";
import homeMain from "./modules/home";
// import cat from "./blincat.jpg";

// console.log("Change made ");
const contentDiv = document.querySelector("div#content");

// const myIcon = new Image();
// myIcon.src = cat;

contentDiv.appendChild(createNav());
contentDiv.appendChild(homeMain());
contentDiv.appendChild(createFooter());
