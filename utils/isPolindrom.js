export function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase()
  const cleanedStr = lowerCaseStr.split(' ').join('')
  const reverseStr = cleanedStr.split('').reverse().join('')
  return cleanedStr === reverseStr
}

