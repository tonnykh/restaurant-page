import restaurantLocation from "./images/restaurant_location.png"

function createContact() {
    const contact = document.createElement("address");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("a");
    phoneNumber.classList.add("phone-number");
    phoneNumber.href = "tel:+1123456789";
    phoneNumber.textContent = "📞 123 456 789";

    const address = document.createElement("p");
    address.textContent = "📍 Shop no 15/A, Khan Market, New Delhi, Delhi 110003";

    const restaurantLocationImg = document.createElement("img");
    restaurantLocationImg.classList.add("restaurant-location-img");
    restaurantLocationImg.src = restaurantLocation;
    restaurantLocationImg.alt = "Harvest-green restaurant location";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocationImg);

    return contact;
}

function loadContact() {
    const main = document.querySelector("main");
    main.textContent = "";
    
    main.appendChild(createContact());
}

export default loadContact;