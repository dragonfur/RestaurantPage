import { createHome, createTabs, createFooter } from "./home"
import { createContact } from "./contact"
import { createMenu } from "./menu"
import './style.css'

createTabs()
createHome()
createFooter()

const content = document.getElementById("content")
const HomeTab = document.querySelector("div.Home")
const ContactTab = document.querySelector("div.Contact")
const MenuTab = document.querySelector("div.Menu")

HomeTab.addEventListener("click", () => {
    ContactTab.classList.remove("active") 
    MenuTab.classList.remove("active")
    content.innerHTML = ""
    createHome()
    HomeTab.classList.add("active")
})

ContactTab.addEventListener("click", () => {
    HomeTab.classList.remove("active") 
    MenuTab.classList.remove("active")
    content.innerHTML = ""
    createContact()
    ContactTab.classList.add("active")
})

MenuTab.addEventListener("click", () => {
    HomeTab.classList.remove("active") 
    ContactTab.classList.remove("active")
    content.innerHTML = ""
    createMenu()
    MenuTab.classList.add("active")
})