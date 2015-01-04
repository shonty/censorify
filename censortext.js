var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inString) {
   for (index in censoredWords) {
     inString = inString.replace(censoredWords[index], "****");
   }
   for (index in customCensoredWords) {
     inString = inString.replace(customCensoredWords[index], "****");
   }
   return inString;
 }
 function addCensoredWord(word){
   customCensoredWords.push(word);
 }
 function getCensoredWords(){
   return censoredWords.concat(customCensoredWords);
 }
 exports.censor = censor;
 exports.addCensoredWord = addCensoredWord;
 exports.getCensoredWords = getCensoredWords;