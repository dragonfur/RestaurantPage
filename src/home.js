const home = (() => {
    const homeDiv = document.createElement("div")
    homeDiv.setAttribute("class", "home")

    const homeTitle = document.createElement("h1")
    homeTitle.textContent = "Chez Moi"
    homeTitle.setAttribute("class", "home__title")
    
    const homeTagline = document.createElement("div")
    homeTagline.textContent = "Your happy place!"
    homeTagline.setAttribute("class", "home__tagline")

    // const homeImg = document.createElement("img")
    // homeImg.src = "../src/img/restaurant.jpg" 
    // homeImg.setAttribute("class", "home__image")

    const homeDesc = document.createElement("p")
    homeDesc.innerHTML = `All of our menu items are inspired by Moroccan cuisine and have been created by our head chef, Adam, after studying authentic Moroccan cuisine in Morocco. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from.
    <br>
    <br>
    Come dine with us & experience an authentic Chez Moi meal in an intimate dining space. We look forward to serving you!`
    homeDesc.setAttribute("class", "home__desc")

    function homeStructure(){
        homeDiv.appendChild(homeTitle)
        homeDiv.appendChild(homeTagline)
        // homeDiv.appendChild(homeImg)
        homeDiv.appendChild(homeDesc)
    }

    homeStructure()

    return {
        homeDiv
    }
})()

const header = (() => {

    const headerDiv = document.createElement("div")
    headerDiv.classList.add("headerContainer")

    const headerTabs = document.createElement('ul')
    headerTabs.setAttribute("class", "header")

    const tabNames = ["Home", "Menu", "Contact"]
    
    tabNames.forEach(tabName => {
        const headerHomeList = document.createElement("li")
        const headerTabName = document.createElement("div")
        headerTabName.textContent = tabName
        headerTabName.setAttribute("class", tabName)
        headerTabName.classList.add("tab")
        if (tabName === "Home") {
            headerTabName.setAttribute("class",`Home active tab`)
        }
        headerHomeList.appendChild(headerTabName)
        headerTabs.appendChild(headerHomeList)
    })

    function createHeader() {
        headerDiv.appendChild(headerTabs)
    }

    createHeader()

    return {
        headerDiv
    }

})()

const footer = (() => {
    const footerDiv = document.createElement("div")
    footerDiv.classList.add("footer")
    
    footerDiv.textContent = "Made for the Odin Project"
    
    return {
        footerDiv
    }
})()

const createTabs = () => {
    const body = document.querySelector("body")
    body.insertBefore(header.headerDiv, body.firstChild)
}

const createHome = () => {
    const content = document.querySelector("#content")
    content.appendChild(home.homeDiv)
}

const createFooter = () => {
    const body = document.querySelector("body")
    body.appendChild(footer.footerDiv)
}

export {createHome, createTabs, createFooter }