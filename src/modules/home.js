import cat from "./blincat.jpg";

export default function createHomeMain() {
  const containerDiv = document.createElement("div");
  containerDiv.classList = "homeMain";
  const titleDiv = document.createElement("div");
  titleDiv.innerText = "Voted the best brunch place of 2022";

  //   const catImage = new Image();
  //   catImage.src = cat;
  const myIcon = new Image();
  myIcon.src = cat;

  containerDiv.appendChild(titleDiv);
  containerDiv.appendChild(myIcon);

  return containerDiv;
}
