// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show")
        })
    }
}

showMenu("menu-btn", "nav-menu")

// Remnove the menu in mobile
const navLink = document.querySelectorAll(".link")

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    // Removing the mobile menu
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))