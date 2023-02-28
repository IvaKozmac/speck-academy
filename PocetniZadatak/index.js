const addButton = document.getElementById("buttonAdd");
addButton.addEventListener("click", addTechnology);

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addTechnology();
    }
});

const technologyContainerElement = document.getElementById("containerTechnology");
const inputElement = document.getElementById("innerTextInput");

function addTechnology(){
    const technologyContainer = document.createElement("div")
    technologyContainer.classList.add("technology") 

    const textElement = document.createElement("p")
    textElement.classList.add("inputTechnology")
    textElement.innerText = inputElement.value

    technologyContainer.appendChild(textElement)

    technologyContainerElement.appendChild(technologyContainer)

    inputElement.value = ""
}


const deleteButton = document.getElementById("removeText");
deleteButton.addEventListener("click", removeAllTechnologies);

function removeAllTechnologies(){
    technologyContainerElement.innerHTML = ""
}