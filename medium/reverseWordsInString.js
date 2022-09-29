function reverseWordsInString(string) {
  // Write your code here.
  string = string.split(' ')
  return string.reverse().join(' ');
}

console.log(reverseWordsInString("AlgoExpert is the best!"));
