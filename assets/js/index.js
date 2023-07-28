const menu = [
    {
       name: "Mushroom Skewer",
       category: "entree",
       description: "This simple mushroom-packed skewer has its colorful presentation to thank for its appeal.",
       image: "./assets/images/mushroomSkewer.png"
    },
    {
        name: "Meat and Mushroom Skewer",
        category: "entree",
        description: "A filling dish made by grilling various mountain ingredients with meat.",
        image: "./assets/images/meatAndMushroomSkewer.png"
     },
     {
        name: "Fish and Mushroom Skewer",
        category: "entree",
        description: "A simple dish made by cooking skewered fresh fish alongside fragrant mushrooms.",
        image: "./assets/images/fishAndMushroomSkewer.png"
     },
     {
        name: "Meat Skewer",
        category: "entree",
        description: "A juicy, filling snack made by grilling small chunks of meat on a skewer.",
        image: "./assets/images/meatSkewer.png"
     },
     {
        name: "Fish Skewer",
        category: "entree",
        description: "A simple dish made by cooking chunks of fresh fish on a skewer.",
        image: "./assets/images/fishSkewer.png"
     },
     {
        name: "Seafood Skewer",
        category: "entree",
        description: "A skewer of delicious roasted fish and shellfish.",
        image: "./assets/images/seafoodSkewer.png"
     },
     {
        name: "Copius Meat Skewers",
        category: "entree",
        description: "Just shove a bunch of meat onto a skewer, and you're good to go.",
        image: "./assets/images/copiousMeatSkewers.png"
     },
     {
        name: "Copius Fish Skewers",
        category: "entree",
        description: "It's just a whole heap of stuff shoved onto a skewer, but it's still a pretty tasty dish.",
        image: "./assets/images/copiousFishSkewers.png"
     },
     {
        name: "Steamed Fruit",
        category: "side-dish",
        description: "A regional dish made by steaming near- ripened fruits in the leaves of fragrant plants.",
        image: "./assets/images/steamedFruit.png"
     },
     {
        name: "Steamed Tomatoes",
        category: "side-dish",
        description: "Tomato cooked while wrapped in a leaf. The heat brings out its medicinal effect.",
        image: "./assets/images/steamedTomatoes.png"
     },
     {
        name: "Steamed Mushrooms",
        category: "side-dish",
        description: "A healthy vegetable dish achieved by steaming mushrooms in plant leaves.",
        image: "./assets/images/steamedMushrooms.png"
     },
     {
        name: "Steamed Meat",
        category: "entree",
        description: "This meat dish has been wrapped in fragrant leaves and steamed to preserve its moisture.",
        image: "./assets/images/steamedMeat.png"
     },
     {
        name: "Steamed Fish",
        category: "entree",
        description: "A refined dish made by wrapping a fresh fish in fragrant wild greens and cooking it.",
        image: "./assets/images/steamedFish.png"
     },
     {
        name: "Sauteed Peppers",
        category: "side-dish",
        description: "The spiciness of these sauteed peppers has been broken by the heat for a sweeter taste.",
        image: "./assets/images/sauteedPeppers.png"
     },
     {
        name: "Sauteed Nuts",
        category: "side-dish",
        description: "These sautéed tree seeds are the perfect snack for the busy adventurer on the go!",
        image: "./assets/images/sauteedNuts.png"
     },
     {
        name: "Fried Wild Greens",
        category: "side-dish",
        description: "A basic vegetable dish made by sauteing fresh wild plants.",
        image: "./assets/images/friedWildGreens.png"
     },
     {
        name: "Copious Fried Wild Greens",
        category: "side-dish",
        description: "A healthy dish made by cooking mixed greens over a strong flame.",
        image: "./assets/images/copiousFriedWildGreens.png"
     },
     {
        name: "Cooked Stambulb",
        category: "side-dish",
        description: "A wild dish of a whole stambulb roasted with its skin on. Sweet and tasty.",
        image: "./assets/images/cookedStambulb.png"
     },
     {
        name: "Buttered Stambulb",
        category: "side-dish",
        description: "A simple dish of stambulb sautéed with goat butter. Sweet with a hint of spice.",
        image: "./assets/images/butteredStambulb.png"
     },
     {
        name: "Copious Mushroom Skewers",
        category: "entree",
        description: "Fans of fungal cuisine can't resist this simple mushroom-skewer dish. Very filling.",
        image: "./assets/images/copiousMushroomSkewers.png"
     },
     {
        name: "Spiced Meat Skewer",
        category: "entree",
        description: "A special Goron spice covers up the scent of the meat, allowing its flavor to shine.",
        image: "./assets/images/spicedMeatSkewer.png"
     },
     {
        name: "Prime Spiced Meat Skewer",
        category: "entree",
        description: "The simple preparation of this steak dish belies its complex taste profile.",
        image: "./assets/images/primeSpicedMeatSkewer.png"
     },
     {
        name: "Gourmet Spiced Meat Skewer",
        category: "entree",
        description: "The rich aroma and juicy texture of this high- quality meat puts it in a league of its own.",
        image: "./assets/images/gourmetSpicedMeatSkewer.png"
     },
     {
        name: "Crab Stir-Fry",
        category: "entree",
        description: "The Goron spice used in preparing this crab pairs perfectly with the flavor of its meat.",
        image: "./assets/images/crabStir-Fry.png"
     },
    {
        name: "Milk",
        category: "beverage",
        description: "Drink it before bed to ensure a good night's sleep.",
        image: "./assets/images/milk.png"
    },
    {
        name: "Fruit Pie",
        category: "dessert",
        description: "A celebration isn't a celebration until this fruit-filled crust hits the table!",
        image: "./assets/images/fruitPie.png"
    }
]

const menuSection = document.querySelector('.menu-section');
const filterBtns = document.querySelectorAll('.filter-btn')

//load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu)
});

//filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem
            }
        });
        if (category === 'all') {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory)
        }
    });
});


function displayMenuItems (menuItems) {
    let showMenu = menuItems.map(function (item) {
        // console.log(item)
        return ` <article class="singleItem">
        <!-- single menu item -->
        <!-- image -->
<img src=${item.image} alt=${item.name} class="menu-pic"/>
        <div class="item-info">
            <!-- item info -->
            <header>
                <h4>
                    ${item.name}
                </h4>
                </header>
                <p class="item-descr">
                    <!-- item description -->
                    ${item.description}
                </p>
            </div>
    </article>`;
    });
    showMenu = showMenu.join('');
    menuSection.innerHTML = showMenu;
};
