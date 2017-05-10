exports.words = function words(word){
  value = split(word," ");
  results = {};
  for (var i = 0, j = value.length; i < j; i++) {
    results[value[i]] = (results[value[i]] || 0) + 1;
  }
  
   return results;
}
function split(myString, splitParameter) {
        var splitArray = [];
        stringElement = "",
        splitter = "",
        strLen = myString.length
        j = 0;
    
    for (var i = 0; i < strLen; i++) {
          if (myString[i] !== splitParameter) {
              stringElement += myString[i];
              splitArray[j] = stringElement;
          }else {
              j++;
              stringElement = "";
              splitter += myString[i];
          }     
    }
    return splitArray;
}





