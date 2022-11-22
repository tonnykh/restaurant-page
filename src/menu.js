// import images from "./images"

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function createMenu() {
    const menu = document.createElement("section");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem(
        "HARVEST BOWL",
        "Roasted chicken, roasted sweet potatoes, apples, goat cheese, roasted almonds, warm wild rice, shredded kale, balsamic vinaigrette"
    ))
    
    menu.appendChild(createMenuItem(
        "CRISPY RICE BOWL",
        "Blackened chicken, raw carrots, shredded cabbage, cucumbers, cilantro, roasted almonds, crispy rice, warm wild rice, arugula, lime squeeze, spicy cashew dressing"
    ))

    menu.appendChild(createMenuItem(
        "SHROOMAMI",
        "Roasted sesame tofu, warm portobello mix, raw beets, cucumbers, basil, sunflower seeds, warm wild rice, shredded kale, miso sesame ginger dressing"
    ))

    menu.appendChild(createMenuItem(
        "CHICKEN PESTO PARM",
        "Roasted chicken, spicy broccoli, tomatoes, shaved parmesan, za’atar breadcrumbs, warm quinoa, baby spinach, sweetgreen hot sauce, pesto vinaigrette (contains gluten)"
    ))

    menu.appendChild(createMenuItem(
        "FISH TACO",
        "Roasted steelhead, avocado, shredded cabbage, cilantro, tortilla chips, warm quinoa, arugula, sweetgreen hot sauce, lime cilantro jalapeño vinaigrette"
    ))

    menu.appendChild(createMenuItem(
        "CURRY CAULIFLOWER",
        "Blackened chicken, curry roasted cauliflower (x2), shredded cabbage, cilantro, raisins, warm quinoa, arugula, sweetgreen hot sauce, peppercorn tahina dressing"
    ))

    // Salads
    menu.appendChild(createMenuItem(
        "CHICKEN + BRUSSELS",
        "Blackened chicken, roasted brussels sprouts (x2), roasted sweet potatoes, apples, roasted almonds, spring mix, chopped romaine, cranberry maple vinaigrette"
    ))

    menu.appendChild(createMenuItem(
        "SWEET BALSAMIC BRUSSELS",
        "Roasted brussels sprouts (x2), warm portobello mix, raw carrots, basil, roasted almonds, shaved parmesan, baby spinach, warm wild rice, lemon squeeze, extra virgin olive oil, balsamic vinegar"
    ))

    menu.appendChild(createMenuItem(
        "HOT HONEY CHICKEN GRAIN BOWL BAY AREA",
        "Blackened chicken, hot roasted sweet potatoes, shredded cabbage, raw carrots, spicy broccoli, basil, warm quinoa (x2), hot honey mustard sauce"
    ))

    return menu;
}

function createMenuItem(name, description) {
    
    let nameNew = ((name.replace(/[^\w]/g, "")).toLowerCase());

    const menuItem = document.createElement("article");
    menuItem.classList.add("menu-item");

    const foodImg = document.createElement("img");
    foodImg.src = images[`${nameNew}.jpeg`];
    foodImg.alt = name.toLowerCase();

    const foodName = document.createElement("h2");
    foodName.classList.add("food-name")
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;

}

function loadMenu() {
    const main = document.querySelector("main");
    main.textContent = "";

    main.appendChild(createMenu());
}

export default loadMenu;