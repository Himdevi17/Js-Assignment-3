function replaceWord(sentence, wrong, correct) {
    return sentence.replace(new RegExp(wrong, 'gi'), correct);
}

let sentence = "The colr of the sky is bleu.";
let correctedSentence = replaceWord(sentence, 'colr', 'color');
console.log(correctedSentence); 
