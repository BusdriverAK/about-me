'use strict';

var ownDogs = prompt('Do I own German Shepherds?')
if(ownDogs === 'yes') {
    alert('That is correct!');
} else if(ownDogs === 'no'){
    alert('Hahaha! Nope nice try though');
} else {
    alert('Please answer with yes or no');
}
var favColor = prompt('Is my favorite color black or green?')
if(favColor ==='green') {
    alert('Wow you must know me very well then!');
 } else if(favColor === 'black'){
        alert('Are you crazy why are you even taking this test?!?!');
    } else{
        alert('Please answer with green or black!').toLowerCase();
}
