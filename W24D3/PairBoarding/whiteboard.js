function digitalRoot(num){
  if(num < 10) return num
  return digitalRoot((num % 10) + Math.floor(num / 10))
}
console.log(digitalRoot(282))

function caesarCipher(str, shift){
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let index = 0;
  let ciphered = ''
  str.split('').forEach(char => {
    if(char === ' ') {
      ciphered += char
      return ;
    }
    index = (alpha.indexOf(char) + shift) % 26
    ciphered += alpha[index]
  })
  return ciphered
}
console.log(caesarCipher("luke", 2))
console.log(caesarCipher("nyue", 2))