const buttonText = document.getElementById("buttonText")

buttonText.addEventListener("click", function(){

    const inputText = document.getElementById("inputText")
    localStorage.setItem("inputText", inputText.value)
    
})