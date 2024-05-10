function countConsonantsAndVowels(str) {
    let vowels = 0;
    let consonants = 0;
    const strLower = str.toLowerCase();
    for (let char of strLower) {
        if ('aeiou'.includes(char)) {
            vowels++;
        } else if (char >= 'a' && char <= 'z') {
            consonants++;
        }
    }
    return { vowels, consonants };
}

const inputString = "This is a sample string with more than twenty characters.";
const { vowels, consonants } = countConsonantsAndVowels(inputString);

console.log("Number of vowels:", vowels);
console.log("Number of consonants:", consonants);
