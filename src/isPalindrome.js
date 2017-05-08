export default function isPalindrome(input){

  const newString = input.replace(/[\W_]+/g, '').toLowerCase()
  const compairStr = newString.split('').reverse().join('')
  return newString === compairStr

}
