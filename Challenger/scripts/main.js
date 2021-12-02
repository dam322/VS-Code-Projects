function punto1(array){
    var compare = array.every(comparacion);
    document.getElementById("ejercicio1").innerHTML = compare;
}

function comparacion(value, index, array){
    return array[0] === array[index]
}

function punto2(word){
    var new_word = ""
    for(let i = 0; i < word.length; i++){
        new_word = new_word.concat(String.fromCharCode(word.charCodeAt(i)+1));
    }
    document.getElementById("ejercicio2").innerHTML = new_word;
}

function punto3(array){
    let avg = array.reduce(function (total, value) {return total + value;});
    document.getElementById("ejercicio3").innerHTML = avg/array.length;
}

function punto4(array){
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i+1] == null){
            if(array[i].length >= max.length){
                max = array[i];
            }
            break;
        }
        if(array[i].length >= array[i+1].length){
            max = array[i];
        }
    }
    document.getElementById("ejercicio4").innerHTML = max;
}


function punto5(date1, date2){
    let hours = date1.getHours() - date2.getHours();
    let minutes = date1.getMinutes() - date2.getMinutes();
    let seconds = date1.getSeconds() - date2.getSeconds();
    if(hours < 0){
        hours = -1*hours;
    }
    if(minutes < 0){
        minutes = -1*minutes;
    }
    if(seconds < 0){
        seconds = -1*seconds;
    }
    date3 = {hrs:hours, min:minutes, sec:seconds};
    document.getElementById("ejercicio5").innerHTML = JSON.stringify(date3);
}
