 /* function showValue(){
    let input = document.getElementById('input').value
    let result = document.getElementById('resultInput')

    if(2 > 1) {
        result.innerHTML = input
        document.getElementById('input').value = ""
    }
    
} */

let btnImc = document.getElementById('btnImc')
btnImc.innerHTML = '<p>SEU IMC: </p>'



function showValue() {
     let Heigth = document.getElementById('height').value
     let Weight = document.getElementById('weight').value

     let heightSquared = Heigth * Heigth
     let result = Weight / heightSquared
     let resultFinal = result.toFixed(2)

     if(2 > 1){
        btnImc.innerHTML = '<p">SEU IMC: </p>' + resultFinal
     }
     
}