// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const sideNav = document.querySelector(".side_nav");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation_item");

// Set Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        sideNav.classList.add("show");
        navigation.classList.add("show");

        navItems.forEach(item => item.classList.add("show"));
        // Reset Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        sideNav.classList.remove("show");
        navigation.classList.remove("show");

        navItems.forEach(item => item.classList.remove("show"));
        // Reset Menu State
        showMenu = false;
    }
}
