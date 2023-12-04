/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sortstring(stringg){
  return stringg.split("").sort().join("");
}
function isAnagram(str1, str2) {
  let sortedstr1=sortstring(str1.toLowerCase());
  let sortedstr2=sortstring(str2.toLowerCase());
  if(str1.length!=str2.length)
    return false;
  for(let i=0;i<str1.length;i++){
    if(sortedstr1[i]!=sortedstr2[i])
      return false;
  }
  return true;
}

module.exports = isAnagram;
