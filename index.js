const typesOfConversions = [
    {
        header: "Length (Meter/Feet)",
        unitOne: "meters",
        unitTwo: "feet"
    },
    {
        header: "Volume (Liters/Gallons)",
        unitOne: "liters",
        unitTwo: "gallons"
    },
    {
        header: "Mass (Kilograms/Pounds)",
        unitOne: "kilos",
        unitTwo: "pounds"
    }
]

let convertedValues = []
const numberInput = document.querySelector("#number-input")
const convertBtn = document.querySelector("#convert-button")
let conversion = document.querySelectorAll(".conversion")

convertBtn.addEventListener("click", function(){
    convertedValues = convert(numberInput.value)
    show(convertedValues)
})

function convert(value){
    let meter = value
    let liters = value
    let kilograms = value
    let feet = value
    let gallon = value
    let pound = value
    
    meter *= 3.281
    liters *= 0.264
    kilograms *= 2.204
    
    feet *= 0.3048
    gallon *= 3.78541
    pound *= 2.20462
    
    return [{one: meter, two: feet}, {one: liters, two: gallon}, {one: kilograms, two: pound}]
}

function show(convertedValues){
    for(let i = 0; i < convertedValues.length; i++){
        conversion[i].innerHTML = 
            `${numberInput.value} ${typesOfConversions[i].unitOne} = ${convertedValues[i].one.toFixed(3)} ${typesOfConversions[i].unitTwo} 
            
            | 
            
            ${numberInput.value} ${typesOfConversions[i].unitTwo} = ${convertedValues[i].two.toFixed(3)} ${typesOfConversions[i].unitOne}`
    }
}
