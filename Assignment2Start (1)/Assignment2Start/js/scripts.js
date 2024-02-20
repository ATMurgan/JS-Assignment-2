// constants for query selector
var studentId = document.querySelector('#myStudentId')
var customNum = document.querySelector('#customNumber')
var custColorElement = document.querySelector('#custColor')
var randColorElement = document.querySelector('#randColor')
var imageSelect = document.querySelector('#imageSelect')
var img = document.querySelector('#images')
var page = document.querySelector('html');

// Array for all the image options 
var imageSources = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg"
];

// function to change bg color from user input and add student id
function changeCustomColor() {
    var userInput = parseInt(customNum.value);
    studentId.textContent = "Your Student ID: " + userInput;

    // If and else if statements that check the value of user input and change html color accordingly 
    if(userInput < 0 || userInput > 100){
        page.style.backgroundColor = "red"
    }
    else if(userInput > 0 && userInput < 20){
        page.style.backgroundColor = "green"
    }
    else if(userInput > 20 && userInput < 40){
        page.style.backgroundColor = "blue"
    }
    else if(userInput > 40 && userInput < 60){
        page.style.backgroundColor = "orange"
    }
    else if(userInput > 60 && userInput < 80){
        page.style.backgroundColor = "purple"
    }
    else if(userInput > 80 && userInput < 100){
        page.style.backgroundColor = "yellow"
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    // Generates a random number between 1-100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Uses the same number verification as the changeCustomColor function based on the rand num
    if(randomNumber < 0 || randomNumber > 100){
        page.style.backgroundColor = "red"
    }
    else if(randomNumber > 0 && randomNumber < 20){
        page.style.backgroundColor = "green"
    }
    else if(randomNumber > 20 && randomNumber < 40){
        page.style.backgroundColor = "blue"
    }
    else if(randomNumber > 40 && randomNumber < 60){
        page.style.backgroundColor = "orange"
    }
    else if(randomNumber > 60 && randomNumber < 80){
        page.style.backgroundColor = "purple"
    }
    else if(randomNumber > 80 && randomNumber < 100){
        page.style.backgroundColor = "yellow"
    }

}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Makes it so the list length doesn't increase every click 
    imageSelect.innerHTML = '';

    // For loop to cycle through all the img options for the user to select 
    for(i = 0; i < imageSources.length; i++){
        var option = document.createElement("option");
        option.value = i;
        option.text = "Image " + (i + 1);
        // Adds the image to the option element to display on the page 
        imageSelect.appendChild(option);
    }
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {
    var selectedIndex = document.getElementById("imageSelect").value;
    var image = document.createElement("img");
    image.src = imageSources[selectedIndex];

    var existingImage = document.querySelector('#images img');
    
    // Checks to see if an existing image is on the page and then removes 
    if (existingImage) {
        existingImage.remove();
    }

    // Adds the new image to the page 
    document.body.appendChild(image);
}

// event listeners for on click event of buttons and select
custColorElement.addEventListener('click', changeCustomColor)
randColorElement.addEventListener('click', changeRandomColor)
imageSelect.addEventListener('click', addList)

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage)