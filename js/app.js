'use strict';

var ownDogs = prompt('Do I own German Shepherds?')
if(ownDogs === 'Yes') {
    alert('That is correct!');
} else if(ownDogs === 'No'){
    alert('Hahaha! Nope nice try though');
} else {
    alert('Please answer with yes or no');
}
var favColor = prompt('Is my favorite color black or green?')
if(favColor ==='Green') {
    alert('Wow you must know me very well then!');
 } else if(favColor === 'Black'){
        alert('Are you crazy why are you even taking this test?!?!');
    } else{
        alert('Please answer with green or black!').toLowerCase();
}
var favTeam = prompt('Am I a Seahawks fan or a Raiders fan?')
if(favTeam === 'Raiders') {
   alert('That is right I bleed black and silver baby!');
} else if(favTeam === 'Seahawks'){
    alert('Nope sorry wrong answer was not rasied a Seahawks fan!');
 }else{
     alert('Please answer with Raiders or Seahawks');

    }

