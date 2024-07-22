const jsonData = {
    "women": {
        "women's clothing": [
            "tops",
            "bottoms",
            "bodysuits",
            "unitards",
            "Outerwear",
            "Underwear"
        ],
        "women's bags": [
            "Shoulder bags",
            "Clutches",
            "Wallets",
            "Crossbody bags",
            "Tote bags",
            "Backpacks",
            "Waist bags",
            "chest pack"
        ]
    },
    "men": {
        "men's clothing": [
            "tops",
            "bottoms",
            "Outerwear",
            "Underwear"
        ],
        "men's bags": [
            "Handbags",
            "Clutches",
            "Shoulder Bags",
            "Backpacks",
            "Crossbody Bags",
            "Waist Bags",
            "Chest Bags",
            "Wallets",
            "Card Holders"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.getElementById('main-menu');
    const subMenu = document.getElementById('sub-menu');

    // 创建一级菜单
    Object.keys(jsonData).forEach((category, index) => {
        const li = document.createElement('li');
        li.textContent = category;
        li.addEventListener('click', () => {
            displaySubMenu(category);
            setActiveMenuItem(li);
        });
        mainMenu.appendChild(li);
        // 默认显示第一个分类的子分类
        if (index === 0) {
            displaySubMenu(category);
            li.classList.add('active');
        }
    });

    function displaySubMenu(category) {
        subMenu.innerHTML = '';
        const subCategories = jsonData[category];
        Object.keys(subCategories).forEach(subCategory => {
            const subCategoryTitle = document.createElement('li');
            subCategoryTitle.textContent = subCategory;
            subMenu.appendChild(subCategoryTitle);
            const subList = document.createElement('ul');
            subCategories[subCategory].forEach((item, index) => {
                const subItem = document.createElement('li');
                const img = document.createElement('img');
                img.src = `https://via.placeholder.com/100?text=${encodeURIComponent(item)}`;
                const text = document.createElement('span');
                text.textContent = item;
                subItem.appendChild(img);
                subItem.appendChild(text);
                subList.appendChild(subItem);
            });
            subMenu.appendChild(subList);
        });
    }

    function setActiveMenuItem(activeItem) {
        const menuItems = mainMenu.querySelectorAll('li');
        menuItems.forEach(item => item.classList.remove('active'));
        activeItem.classList.add('active');
    }
});
