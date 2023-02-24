//TODO: Look at the HTML and see what id you need to access

//TODO: Open your json server
//! If you need to a refresher on this, the command for this is
//! pineed to the slack channel
//TODO: Fetch the cats that exist in the database
//TODO: Create a div element for each cat and append to "cat-container"
//TODO: Iterate through your data and add it to the cat div,
//TODO: Create an h3, img, and p tag to hold your data and
//TODO: append it to the created div
//////////////////////////////////////////////////////////////

const catCont = document.getElementById("cat-container")
const dogCont = document.getElementById("dog-container")

fetch("http://localhost:3000/cats")
.then(response => response.json())
.then(cats => {
    cats.forEach(cats => {
        const cat = document.createElement("div")
        const nameHead = document.createElement("h3")
        const imgTag = document.createElement("img")
        const breedP = document.createElement("p")
        
        catCont.append(cat)
        cat.append(nameHead, imgTag, breedP)

        nameHead.innerText = cats.name
        imgTag.src = cats.image
        breedP.innerText = cats.breed
    })
})

//////////////////////////////////////////////////////////////
//TODO: Fetch again and repeat to add dogs to the "dog-container"
//////////////////////////////////////////////////////////////

fetch("http://localhost:3000/dogs")
.then(response => response.json())
.then(dogs => {
    dogs.forEach(dogs => {
        const dog = document.createElement("div")
        const nameHead = document.createElement("h3")
        const imgTag = document.createElement("img")
        const breedP = document.createElement("p")
        
        dogCont.append(dog)
        dog.append(nameHead, imgTag, breedP)

        nameHead.innerText = dogs.name
        imgTag.src = dogs.image
        breedP.innerText = dogs.breed
    })
})

//////////////////////////////////////////////////////////////