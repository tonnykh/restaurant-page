import heroImg from "./images/sweetgreen.jpg";

// Header
function createHeader() {
    const header = document.createElement("header");
    
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = 'Harvest-green';
    
    
    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("nav-btn");
    homeBtn.classList.add("active");
    homeBtn.textContent = "Home";
    
    homeBtn.addEventListener('click', () => {
        if (!homeBtn.classList.contains("active")) {
            removeActive();
            homeBtn.classList.add("active");
        }
    })

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("nav-btn");
    menuBtn.textContent = "Menu";

    menuBtn.addEventListener('click', () => {
        if (!menuBtn.classList.contains("active")) {
            removeActive();
            menuBtn.classList.add("active");
        }
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("nav-btn");
    contactBtn.textContent = "Contact";

    contactBtn.addEventListener('click', () => {
        if (!contactBtn.classList.contains("active")) {
            removeActive();
            contactBtn.classList.add('active');        
        }  
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function removeActive() {
    const btns = document.querySelectorAll(".nav-btn");
    btns.forEach((btn) => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
    })  
}


// Main
function createMain() {
    const main = document.createElement("main");

    const section = document.createElement("section");
    section.classList.add("hero-text");
    
    const heading = document.createElement("h2");
    heading.classList.add("heading");
    heading.textContent = 'Real. Good. Food.';
    
    const copy = document.createElement("p");
    copy.classList.add("copy");
    copy.textContent = 'Building healthier communities by connecting with real food';
    
    // const figure = document.createElement("figure");
    
    // const saladBowlImg = document.createElement("img");
    // saladBowlImg.src = heroImg;
    // saladBowlImg.alt = "salad in a bowl"
    
    
    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(copy);
    // section.appendChild(figure);
    // figure.appendChild(saladBowlImg);
    
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