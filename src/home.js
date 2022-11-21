
function createHome() {

    const home = document.createElement("section");
    home.classList.add("hero-text");
    
    const heading = document.createElement("h2");
    heading.classList.add("heading");
    heading.textContent = 'Real. Good. Food.';
    
    const copy = document.createElement("p");
    copy.classList.add("copy");
    copy.textContent = 'Building healthier communities by connecting with real food';

    home.appendChild(heading);
    home.appendChild(copy);

    return home;

}

function loadHome() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;