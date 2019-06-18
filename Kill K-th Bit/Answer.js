function killKthBit(n, k) {
  console.log((n >> k-1).toString(2))
  console.log(Math.pow(2, k - 1))
  return ((n >> k - 1) % 2 == 0 ? n : n - Math.pow(2, k - 1));
}
