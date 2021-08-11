export const isArmstrongNumber = (number) => {
  if(number<10) return true

  if(number<100) return false

  let array = Array.from(String(number))
  let length = array.length
  let calculated = 0
  array.forEach(x => calculated += x ** length)
  if(calculated === number) return true; else return false

};
