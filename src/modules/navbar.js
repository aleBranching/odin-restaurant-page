function createLink(text) {
  const aLink = document.createElement("a");
  aLink.id = `${text.toLowerCase()}BTN`;
  aLink.innerText = text;
  return aLink;
}

function createNav() {
  const navTag = document.createElement("nav");
  const title = document.createElement("h2");
  const linksDiv = document.createElement("div");

  title.innerText = "Breakfast Bar";

  linksDiv.className = "links";
  const homeBTN = createLink("Home");
  const menuBTN = createLink("Menu");
  const contactBTN = createLink("Contact");
  linksDiv.appendChild(homeBTN);
  linksDiv.appendChild(menuBTN);
  linksDiv.appendChild(contactBTN);

  navTag.appendChild(title);
  navTag.appendChild(linksDiv);
  return { navTag, homeBTN, menuBTN, contactBTN };
}

export default createNav;
