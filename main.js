let stopButton = document.getElementById("stopButton")
let slowButton = document.getElementById("slowButton")
let goButton = document.getElementById("goButton")

let stopLight = document.getElementById("stopLight")
let slowLight = document.getElementById("slowLight")
let goLight = document.getElementById("goLight")

stopButton.addEventListener("click",()=>{
    stopLight.style.backgroundColor="red"
    slowLight.style.backgroundColor="black"
    goLight.style.backgroundColor="black"
})

slowButton.addEventListener("click",()=>{
    stopLight.style.backgroundColor="black"
    slowLight.style.backgroundColor="yellow"
    goLight.style.backgroundColor="black"
})


goButton.addEventListener("click",()=>{
    stopLight.style.backgroundColor="black"
    slowLight.style.backgroundColor="black"
    goLight.style.backgroundColor="green"
})
