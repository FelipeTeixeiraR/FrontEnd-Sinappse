const MenuLine1 = document.getElementById("menu1")
const MenuLine2 = document.getElementById("menu2")
const MenuLine3 = document.getElementById("menu3")
let menu = document.getElementById("menu")
let MenuStatus = false
let SideBar = document.getElementById("sidebar")
function StatusChange() {
    MenuStatus = !MenuStatus
}

function AnimationMenuBar() {
    if (MenuStatus == true) {
        MenuLine2.style.display = "none";
        MenuLine1.style.transform = "rotate(45deg)"
        MenuLine3.style.transform = "rotate(-45deg)"
        SideBar.style.transform = "translateX(-100%)"
        menu.style.transform = "translate(-500%)"
    } else {
        MenuLine1.style.transform = "rotate(0deg)"
        MenuLine3.style.transform = "rotate(0deg)"
        SideBar.style.transform = "translateX(100%)"
        menu.style.transform = "translate(100%)"
        setTimeout(() => {
           MenuLine2.style.display = "block"
        }, 250); // 
        
    }
}

menu.addEventListener("click", function() {
    StatusChange()
    AnimationMenuBar()
    
})
