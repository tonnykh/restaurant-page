function createHome() {

    const home = document.createElement("section");
    home.classList.add("hero-text");
    
    const heading = document.createElement("h2");
    heading.classList.add("heading");
    heading.textContent = 'Real. Good. Food.';
    
    const copyBig = document.createElement("p");
    copyBig.classList.add("copy-big");
    copyBig.textContent = 'Building healthier communities by connecting with real food';

    const copySmall = document.createElement("p");
    copySmall.classList.add("copy-small");
    copySmall.textContent = '* 100% ORGANIC CERTIFIED';

    home.appendChild(heading);
    home.appendChild(copyBig);
    home.appendChild(copySmall);

    return home;

}

function loadHome() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;