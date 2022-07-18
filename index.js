function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return 'This one is on me!'
  } else if (feet > 400, feet < 2000){
    return 'That will be twenty bucks.'
  } else if (feet > 2000, feet < 2501){
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
        return 'Thank you so much.'
    case 'not as generous':
        return 'Thank you.'
    default: 
        return 'Bye.'
      
  }
}

console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(500));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(5000));
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Pittsburgh'));
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('good luck'));
