const measure =  document.getElementById("quantity")
const convertBtn = document.getElementById("convert")
const lengthMet = document.getElementById("length")




function convertLength(){
    lengthMet.textContent = ` ${measure.value} metres =  ${measure.value * 3.281} and
                              ${measure.value} feet = ${measure.value*0.304}`
    


}