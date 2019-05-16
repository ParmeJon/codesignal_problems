function evenDigitsOnly(n) {
 let nString = n.toString()
 for( let i = 0; i < nString.length; i++) {
  if (nString[i] % 2 !== 0) {
   return false
  }
 }
 return true
}
