function javob(){
   var elInput1 = document.querySelector('.input1').value
   var elInput2 = document.querySelector('.input2').value
   var elVirojenie = document.querySelector('.virojenie').value

    var probavit = Number(elInput1)+Number(elInput2)
    var razdelit = Number(elInput1)/Number(elInput2)
    var minus = Number(elInput1)-Number(elInput2)
    var umnojit = Number(elInput1)*Number(elInput2)
   
    if (elVirojenie== '+' ){
        alert( 'Ваш Ответ: ' + probavit)
    }
    else if (elVirojenie == '/'){
        alert( 'Ваш Ответ: ' + razdelit)
    }
    else if (elVirojenie == '-'){
        alert( 'Ваш Ответ: ' + minus)
    }
    else if (elVirojenie == '*'){
        alert( 'Ваш Ответ: ' + umnojit)
    }
    else{
        alert('siz notogri amal kiritingiz')
    }
}