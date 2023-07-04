const menu = [
    {
       name: "Mushroom Skewer",
       category: "entree",
       description: "This simple mushroom-packed skewer has its colorful presentation to thank for its appeal.",
       image: "./assets/images/mushroomSkewer.png"
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

const menuSection = document.querySelector('.menu');
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
<img src=${item.image} alt=${item.name} />
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
