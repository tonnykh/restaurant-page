// Header
function createHeader() {
    const header = document.createElement("header");

    const brandDiv = document.createElement("div");
    brandDiv.class = "brand";
    
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = 'Harvest-green';
    
    
    header.appendChild(brandDiv);
    brandDiv.appendChild(restaurantName);

    return header;
}


// Main
function createMain() {
    const main = document.createElement("main");

    const section = document.createElement("section");
    section.id = "hero-text";
    
    const heading = document.createElement("h2");
    heading.textContent = 'Real. Good. Food.';
    
    const copy = document.createElement("p");
    copy.textContent = 'Building healthier communities by connecting with real food';
    
    const figure = document.createElement("figure");
    
    const saladBowlImg = document.createElement("img");
    saladBowlImg.src = "../images/sweetgreen.jpg";
    saladBowlImg.alt = "salad in a bowl"
    
    
    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(copy);
    section.appendChild(figure);
    figure.appendChild(saladBowlImg);
    
    return main;
}


// Footer
function createFooter() {
    const footer = document.createElement("footer");

    const copyright = document.createElement("p");
    copyright.textContent = 'Copyright \u00A9 2022 tonny';
    
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/tonnykh/restaurant-page";
    
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa");
    githubIcon.classList.add("fa-brands");
    githubIcon.classList.add("fa-github");
    
    
    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    
    return footer;
}

//Initialize website
function initializeWebsite() {
    const content = document.querySelector("#content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default initializeWebsite;