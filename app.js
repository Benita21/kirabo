const menuIcon =document.getElementById("show")
const xIcon =document.getElementById("close")
const sideBar =document.getElementById("side")

menuIcon.addEventListener("click",bring)
function bring(){
    sideBar.style.display="block"
}
xIcon.addEventListener("click",remove)
function remove(){
    sideBar.style.display="none"
    // alert ("uuuu")
}