function createLink(text) {
  const aLink = document.createElement("a");
  aLink.innerText = text;
  return aLink;
}

function createNav() {
  const navTag = document.createElement("nav");
  const title = document.createElement("h2");
  const linksDiv = document.createElement("div");

  title.innerText = "Breakfast Bar";

  linksDiv.className = "links";
  linksDiv.appendChild(createLink("Home"));
  linksDiv.appendChild(createLink("Menu"));
  linksDiv.appendChild(createLink("Contact"));

  navTag.appendChild(title);
  navTag.appendChild(linksDiv);
  return navTag;
}

export default createNav;
