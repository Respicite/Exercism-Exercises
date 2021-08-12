const Encoding = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
}

export const decodedValue = (array) => {

  /*Not needed because only two are tested and accepted
  function recursiveValueAdder(array){
    if(array.length <= 0) return ''
    console.log(Encoding[array[0]])
    return `${Encoding[array.shift()]}${recursiveValueAdder(array)}`
  }
  return parseInt(recursiveValueAdder(array))*/

  return parseInt(`${Encoding[array[0]]}${Encoding[array[1]]}`)

};
