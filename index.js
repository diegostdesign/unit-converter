/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let units = [
    {
        property: "length",
        metric: "meters",
        imperial: "imperial",
        metricValue: 3.281,
        imperialValue: 0.3048
    },
    {
        property: "volume",
        metric: "liters",
        imperial: "gallons",
        metricValue: 0.264,
        imperialValue: 3.78541
    },
    {
        property: "mass",
        metric: "kilos",
        imperial: "pounds",
        metricValue: 2.204,
        imperialValue: 0.45359237
    }
]

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const property = Array.from(document.querySelectorAll(".property"))

convertBtn.addEventListener("click", function(){
    let inputValue = Number(inputEl.value)
    conversion(inputValue)
    inputEl.value = ""
})

function conversion(value){
    let metricConversion = []
    let imperialConversion = []
    
    for(let i = 0; i < property.length; i++){
        metricConversion.push( parseFloat( (value * units[i].imperialValue).toFixed(3) ) )
        imperialConversion.push( parseFloat( (value * units[i].metricValue).toFixed(3) ) ) 
    }
    
    render(value, metricConversion, imperialConversion)
}

function render(unit, metricUnit, imperialUnit){
    for (let i = 0; i < property.length; i++){
        property[i].innerHTML = `
            ${unit} ${units[i].metric} = ${imperialUnit[i]} ${units[i].imperial} | ${unit} ${units[i].imperial} = ${metricUnit[i]} ${units[i].metric}
        `
        
    }
}