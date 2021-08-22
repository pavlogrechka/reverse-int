module.exports = function reverse(n) {
  let temp = Math.abs(n).toString();
  result = +temp.split('').reverse().join('');
  return result;
}
