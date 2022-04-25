const contact = (() => {
    const contactDiv = document.createElement("div")
    contactDiv.classList.add("contact")

    const contactTitle = document.createElement ("h1")
    contactTitle.textContent = "Contact Us"
    contactTitle.setAttribute("class", "contact__title")

    const contactHolder = document.createElement("div")
    contactHolder.classList.add("contactHolder")

    const numberHolder = document.createElement("div")
    numberHolder.classList.add("numberHolder")
    const phoneFavicon = document.createElement("img")
    phoneFavicon.src = "../src/favicons/phone.svg"
    const phoneNumber = document.createElement("div")
    phoneNumber.textContent = "123-456-7890"
    numberHolder.appendChild(phoneFavicon)      
    numberHolder.appendChild(phoneNumber)      

    const restaurantPlace = document.createElement("div")
    restaurantPlace.classList.add("restaurantPlace")
    const destFavicon = document.createElement("img")
    destFavicon.src = "../src/favicons/destination.svg"
    const destText = document.createElement("div")
    destText.textContent = "Point Nemo, Pacific Ocean"
    restaurantPlace.appendChild(destFavicon)
    restaurantPlace.appendChild(destText)
    
    const destImg = document.createElement("img")
    destImg.src = "../src/img/pointNemo.jpg"
    destImg.classList.add("destImg")

    contactHolder.appendChild(numberHolder)
    contactHolder.appendChild(restaurantPlace)
    contactHolder.appendChild(destImg)

    // point nemo = https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.boatsnews.com%2Fstory%2F35068%2Fa-thousand-miles-from-any-inhabited-land-point-nemo-the-remotest-place-on-earth&psig=AOvVaw2v1jOmoI7o5Y4JpNYJyNjv&ust=1650896770132000&source=images&cd=vfe&ved=0CAoQjhxqFwoTCIDLqfDzrPcCFQAAAAAdAAAAABAD

    function contactStructure(){
        contactDiv.appendChild(contactTitle)
        contactDiv.appendChild(contactHolder)
    }

    contactStructure()

    return {
        contactDiv
    }
})()

const createContact = () => {
    const content = document.querySelector("#content")
    content.appendChild(contact.contactDiv)
}

export { createContact }