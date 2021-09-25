/*
* Excercise 1
*
*/


/*
* Then write a function that changes the text and the color inside the div
*
*/

const colorBlock = document.getElementById("color-block");
const hex = document.getElementById("color-name");
colorBlock.addEventListener("click", changeColor)

function changeColor(){
    if(hex.textContent === "#F08080"){
    colorBlock.style.backgroundColor = "#2DD3DF";
    hex.textContent = "#2DD3DF"}
    else
    {
    colorBlock.style.backgroundColor = "#F08080";
    hex.textContent = "#F08080"}
    }


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const convertButton = document.getElementById("convertbtn")
convertButton.addEventListener("click", convertTemp)

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    const inputTemp = document.getElementById("f-input").value
    const outputTemp = document.getElementById("c-output")
    const celcius = (inputTemp - 32) * 5/9
    outputTemp.textContent = celcius
}
