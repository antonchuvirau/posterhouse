let expandableMenuItems = null;
let menuSubItems = null;

const expandSubItemsIfAny = (e) => {
    const expandBtn = e.currentTarget;
    const menuSubitemsContainer = expandBtn.parentElement.querySelector('.admin-pages-list__subitems');


    if (!menuSubitemsContainer) {
        return;
    }

    if (menuSubitemsContainer.classList.contains('admin-pages-list__subitems--state_invisible')) {
        menuSubitemsContainer.classList.remove('admin-pages-list__subitems--state_invisible')
        menuSubitemsContainer.classList.add('admin-pages-list__subitems--state_visible')
        return;
    }

    if (menuSubitemsContainer.classList.contains('admin-pages-list__subitems--state_visible')) {
        menuSubitemsContainer.classList.add('admin-pages-list__subitems--state_invisible')
        menuSubitemsContainer.classList.remove('admin-pages-list__subitems--state_visible')
        return;
    }
}

const menuSubItemClick = (e) => {
    if (menuSubItems) {
        for (let index = 0; index < menuSubItems.length; index += 1) {
            const menuSubItem = menuSubItems[index];

            menuSubItem.classList.remove('admin-pages-list__subitem--state_active')
            menuSubItem.classList.add('admin-pages-list__subitem--state_inactive')
        }
    }

    e.currentTarget.classList.remove('admin-pages-list__subitem--state_inactive')
    e.currentTarget.classList.add('admin-pages-list__subitem--state_active')
}

const removeEventListeners = () => {
    if (expandableMenuItems) {
        for (let index = 0; index < expandableMenuItems.length; index += 1) {
            const expandableMenuItem = expandableMenuItems[index];

            expandableMenuItem.removeEventListener('click', expandSubItemsIfAny)
        }
    }

    if (menuSubItems) {
        for (let index = 0; index < menuSubItems.length; index += 1) {
            const menuSubItem = menuSubItems[index];

            menuSubItem.removeEventListener('click', menuSubItemClick)
        }
    }
}

const ExpandDashbordMenuController = () => {
    removeEventListeners();

    expandableMenuItems = document.getElementsByClassName('admin-pages-list__expandable-item');
    menuSubItems = document.getElementsByClassName('admin-pages-list__subitem');

    if (expandableMenuItems) {
        for (let index = 0; index < expandableMenuItems.length; index += 1) {
            const expandableMenuItem = expandableMenuItems[index];

            const expandBtn = expandableMenuItem.querySelector('.admin-pages-list__item');

            expandBtn.addEventListener('click', expandSubItemsIfAny)
        }
    }

    if (menuSubItems) {
        for (let index = 0; index < menuSubItems.length; index += 1) {
            const menuSubItem = menuSubItems[index];

            menuSubItem.addEventListener('click', menuSubItemClick)
        }
    }
};

window.addEventListener('unload', () => {
    removeEventListeners();
});

export default ExpandDashbordMenuController;