const button = document.querySelector("button")
const paragrafoAlert = document.querySelector(".alert")


function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    
    

    if (min >= max) {
        paragrafoAlert.textContent = "O valor mínimo precisa ser menor que o valor máximo"
    } else {
        const inputResult = document.querySelector(".input-result")
        inputResult.value = (result)
        paragrafoAlert.innerHTML = ""
    }
}

button.addEventListener("click",generateNumber)