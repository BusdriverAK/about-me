newFunction();
var guessNumber;
var favNumber = 17;
var favNumbertries = 4;
var flag = false;
do{
  guessNumber = parseInt(prompt('Can you guess my favorite number'));
  favNumbertries --;
  if(guessNumber === favNumber)
  { flag = true;
    alert('You guessed right');
  } else if(favNumbertries === 0) {
    flag = true;
    alert('You are out of attempts');
  } else if(guessNumber < favNumber) {
    alert('thats to low try again');
  } else if(guessNumber > favNumber){
    alert('thats to high try again');
  } else {
    alert('please enter a number');
  }
} while(flag === false);

var favIceCream = ['rocky road', 'cookie dough', 'mint chip', 'cotton candy', 'jamocha almond fudge'];
console.log(favIceCream.length);
var matchCondition = -1;
var limitCounter = 0;

do{
  var guessFlavor =  prompt('Can you guess my favorite flavor of icecream?').toLowerCase();

  for (var j = 0; j < favIceCream.length; j++) {
    if(guessFlavor === favIceCream[j]) {
      matchCondition = j;

      break;
    }
  }
  if (matchCondition > -1) {
    alert('that is correct');
  }
  else {
    alert('Sorry no that is not correct');
    limitCounter++;

  }
}while(limitCounter <5 && matchCondition === -1);
function newFunction() {
  'use strict';
  var ownDogs = prompt('Do I own German Shepherds?').toLowerCase();
  if (ownDogs === 'yes') {
    alert('That is correct!');
    console.log('That is correct');
  }
  else if (ownDogs === 'no') {
    alert('Hahaha! Nope nice try though');
    console.log('Hahaha! Nope nice try though');
  }
  else {
    alert('Please answer with yes or no');
    console.log('Please answer with yes or no');
  }
  var favColor = prompt('Is my favorite color black or green?').toLowerCase();
  if (favColor === 'green') {
    alert('Wow you must know me very well then!');
    console.log('Wow you must know me very well then!');
  }
  else if (favColor === 'black') {
    alert('Are you crazy why are you even taking this test?!?!');
    console.log('Are you crazy why are you even taking this test?!?!');
  }
  else {
    alert('Please answer with green or black!');
    console.log('PLease answer with green or black');
  }
  var favTeam = prompt('Am I a Seahawks fan or a Raiders fan?');
  if (favTeam === 'Raiders') {
    alert('That is right I bleed black and silver baby!');
    console.log('That is right I bleed black and silver baby!');
  }
  else if (favTeam === 'Seahawks') {
    alert('Nope sorry wrong answer was not rasied a Seahawks fan!');
    console.log('Nope sorry wrong answer was not raised a Seahawks fan!');
  }
  else {
    alert('Please answer with Raiders or Seahawks');
    console.log('Please answer with Raiders or Seahawks');
  }
  var favMusic = prompt('Do I like Rock or Heavy Metal more?');
  if (favMusic === 'Heavy Metal') {
    alert('Great choice lets go join a mosh pit');
  }
  else if (favMusic === 'Rock') {
    alert('Lets be dumb and go crowd surfing');
  }
  else {
    console.log('Choose your destiny by selecting Heavy Metal of Rock');
    var favCandy = prompt('Do I like Skittles better or Turkish Delight?');
    if (favCandy === 'Skittles') {
      alert('That would be correct');
    }
    else if (favCandy === 'Turkish Delight') {
      alert('Eww gross that is not even remotely close');
    }
    else {
      alert('Maybe next time');
    }
  }
}

