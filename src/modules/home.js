import cat from "./blincat.jpg";

export default function homeMain() {
  const mainDiv = document.createElement("div");
  mainDiv.id = "main";

  const titleDiv = document.createElement("div");
  titleDiv.innerText = "Voted the best brunch place of 2022";

  //   const catImage = new Image();
  //   catImage.src = cat;
  const myIcon = new Image();
  myIcon.src = cat;

  mainDiv.appendChild(titleDiv);
  mainDiv.appendChild(myIcon);

  return mainDiv;
}
