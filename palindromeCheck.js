function isPalindrome(string) {
  if (string == string.split("").reverse().join("")) {
    return true;
  }

  return false;
}
