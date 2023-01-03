export default function createContact() {
  const containerDiv = document.createElement("div");
  const phonenumber = document.createElement("div");
  phonenumber.innerText = "📞 074925625";
  const address = document.createElement("p");
  address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  containerDiv.appendChild(phonenumber);
  containerDiv.appendChild(address);
  return containerDiv;
}
