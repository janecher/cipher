const sentence = prompt("Input a sentence");
console.log(sentence);
console.log(sentence.length);

const firstAndLastLetter = function(words){
    const firstLetter = words.charAt(0).toUpperCase();
    const lastLetter = words.charAt(words.length-1).toUpperCase();
    return firstLetter+lastLetter;
}

const reverseLetters = function(twoLetterWord){
    return twoLetterWord.charAt(1)+twoLetterWord.charAt(0);
}

const thirdFunction = function(sentence){
    return sentence+reverseLetters(firstAndLastLetter(sentence));
}

console.log(firstAndLastLetter(sentence));
console.log(reverseLetters(firstAndLastLetter(sentence)));
console.log(thirdFunction(sentence));