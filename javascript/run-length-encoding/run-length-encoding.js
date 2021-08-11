export const encode = (input) => {

  function recursive_encode(input){
    if(input.length <= 0) return ''

    let i = 1
    let num = ''
    while(input[0] === input[i]) i++
    if(i>1) num = i
    return `${num}${input[0]}${recursive_encode(input.slice(i))}`

  }
  return recursive_encode(input)

}


export const decode = (input) => {

  function recursive_decode(input){
    if(input.length <= 0) return ''

    if(isNaN(input[0]) || input[0] === ' ')
      return `${input[0]}${recursive_decode(input.slice(1))}`

    let i = 1
    let num = input[0]
    while(!(isNaN(input[i])) && !(input[i] === ' ')){
      num = num + input[i]
      i++
    }
    return `${input[i].repeat(parseInt(num)-1)}${recursive_decode(input.slice(i))}`

  }
  return recursive_decode(input)

}
