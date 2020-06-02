const sentence = prompt("Input a sentence");

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

const fourthFunction = function(sentence){
    return sentence.charAt(Math.floor(sentence.length/2))+thirdFunction(sentence);
}

const resultFunction = function(sentence){
    return fourthFunction(sentence).split('').reverse().join('');
}

console.log(sentence);
console.log(firstAndLastLetter(sentence));
console.log(reverseLetters(firstAndLastLetter(sentence)));
console.log(thirdFunction(sentence));
console.log(fourthFunction(sentence));
console.log(resultFunction(sentence));

$(document).ready(function(){
    $("button.origin").click(function() {
      $("p").text(sentence);
    });
  
    $("button.cipher").click(function() {
        $("p").text(resultFunction(sentence));
    });
});
