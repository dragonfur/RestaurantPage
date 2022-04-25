const menu = (() => {
    const menuDiv = document.createElement("div")
    menuDiv.classList.add("menu")

    const menuTitle = document.createElement ("h1")
    menuTitle.textContent = "Our Menu"
    menuTitle.setAttribute("class", "menu__title")

    const menuHolder = document.createElement("div")

    const menuItemOne = document.createElement("div")
    menuItemOne.classList.add("menuItemOne")
    const menuItemOneImg = document.createElement("img")
    menuItemOneImg.src = "../src/img/tajine.jpg"
    const itemOneDetails = document.createElement("div")
    const itemOneName = document.createElement("h3")
    const itemOneDesc = document.createElement("p")
    itemOneName.textContent = "Veggie Tajine"
    itemOneDesc.textContent = "This Moroccan dish consists of the finest vegetables you can find: potatoes, carrots, onions, and garlic."
    itemOneDetails.append(itemOneName, itemOneDesc)
    menuItemOne.append(menuItemOneImg, itemOneDetails)

    const menuItemTwo = document.createElement("div")
    menuItemTwo.classList.add("menuItemTwo")
    const menuItemTwoImg = document.createElement("img")
    menuItemTwoImg.src = "../src/img/tajineChicken.jpg"
    const itemTwoDetails = document.createElement("div")
    const itemTwoName = document.createElement("h3")
    const itemTwoDesc = document.createElement("p")
    itemTwoName.textContent = "Chicken Tajine"
    itemTwoDesc.textContent = "The all-famous Moroccan classic. It is a traditional dish of chicken pieces braised with spices, garlic, onion, olives, and preserved lemons."
    itemTwoDetails.append(itemTwoName, itemTwoDesc)
    menuItemTwo.append(menuItemTwoImg, itemTwoDetails)

    const menuItemThree = document.createElement("div")
    menuItemThree.classList.add("menuItemThree")
    const menuItemThreeImg = document.createElement("img")
    menuItemThreeImg.src = "../src/img/couscous.jpg"
    const itemThreeDetails = document.createElement("div")
    const itemThreeName = document.createElement("h3")
    const itemThreeDesc = document.createElement("p")
    itemThreeName.textContent = "Couscous"
    itemThreeDesc.textContent = "I don't even know if this is Moroccan, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    itemThreeDetails.append(itemThreeName, itemThreeDesc)
    menuItemThree.append(menuItemThreeImg, itemThreeDetails)

    itemOneDetails.classList.add("details")
    itemTwoDetails.classList.add("details")
    itemThreeDetails.classList.add("details")

    menuHolder.appendChild(menuItemOne)
    menuHolder.appendChild(menuItemTwo)
    menuHolder.appendChild(menuItemThree)


    function menuStructure(){
        menuDiv.appendChild(menuTitle)
        menuDiv.appendChild(menuHolder)
    }

    menuStructure()

    return {
        menuDiv
    }
})()

const createMenu = () => {
    const content = document.querySelector("#content")
    content.appendChild(menu.menuDiv)
}

export { createMenu }