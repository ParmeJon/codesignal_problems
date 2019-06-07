function lateRide(n) {
 const hrs = Math.floor(n / 60)
 const hrsDigit1 = Math.floor(hrs / 10)
 const hrsDigit2 = hrs % 10
 const mins = n % 60
 const minsDigit1 = Math.floor(mins / 10)
 const minsDigit2 = mins % 10

 return hrsDigit1 + hrsDigit2 + minsDigit1 + minsDigit2
}
