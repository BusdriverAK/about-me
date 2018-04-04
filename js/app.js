'use strict';

var ownDogs = prompt('Do I own German Shepherds?').toLowerCase();
if(ownDogs === 'yes') {
  alert('That is correct!');
  console.log('That is correct');
} else if(ownDogs === 'no'){
  alert('Hahaha! Nope nice try though');
  console.log('Hahaha! Nope nice try though');
} else {
  alert('Please answer with yes or no');
  console.log('Please answer with yes or no');
}
var favColor = prompt('Is my favorite color black or green?').toLowerCase();
if(favColor ==='green') {
  alert('Wow you must know me very well then!');
  console.log('Wow you must know me very well then!');
}else if(favColor === 'black'){
  alert('Are you crazy why are you even taking this test?!?!');
  console.log('Are you crazy why are you even taking this test?!?!'); } else{
  alert('Please answer with green or black!');
  console.log('PLease answer with green or black');
}
var favTeam = prompt('Am I a Seahawks fan or a Raiders fan?');
if(favTeam === 'Raiders') {
  alert('That is right I bleed black and silver baby!');
  console.log('That is right I bleed black and silver baby!');
} else if(favTeam === 'Seahawks'){
  alert('Nope sorry wrong answer was not rasied a Seahawks fan!');
  console.log('Nope sorry wrong answer was not raised a Seahawks fan!');
}else{ alert('Please answer with Raiders or Seahawks');
  console.log('Please answer with Raiders or Seahawks');
}var favMusic = prompt('Do I like Rock or Heavy Metal more?');
if(favMusic === 'Heavy Metal') {
  alert('Great choice lets go join a mosh pit');
} else if(favMusic === 'Rock'){
  alert('Lets be dumb and go crowd surfing');
}else{
  console.log('Choose your destiny by selecting Heavy Metal of Rock');
  var favCandy = prompt('Do I like Skittles better or Turkish Delight?');
  if(favCandy === 'Skittles') {
    alert('That would be correct');
  } else if(favCandy === 'Turkish Delight'){
    alert('Eww gross that is not even remotely close');
  }else{
    alert('Thanks for taking my quiz hope you had fun');
    console.log('Thanks for taking my quiz hope you had fun');
  }
}
var favNumber 
var favNumber = 17;
var favNumbertries = 4;
var numGuess;
do{
    var favNumber = parseInt(prompt('Can you guess my favorite number'));
    

}



var favIceCream = ['rocky road, cookie dough, mint chip, cotton candy, jamocha almond fudge'];
console.log(favIceCream.length);
var guessFlavor =  prompt('Can you guess my favorite flavor of icecream?').toLowerCase();
for(var i = 0; i < favIceCream.length; i++) {
  if(guessFlavor === favIceCream[i]) {
    alert('Correct!');
    break;
  } else if (i < 3) {
    prompt();
    continue;
  } else {
    alert('Sorry no that is not correct');
  }
}

