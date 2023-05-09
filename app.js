const textArea = document.querySelector('#Text');
const UPPER = document.querySelector('#UPPERCASE');
const lower = document.querySelector('#lowercase');
const capitalize = document.querySelector('#Capitalize');
const reverse = document.querySelector('#Reverse');
const clear = document.querySelector('#Clear')
const inverse = document.querySelector('#alternate')
const charNum = document.querySelector("#characters");
const wordsNum = document.querySelector("#Words");


// count 
function charCount() {
    var len = textArea.value.length;
    charNum.innerHTML= len;
    
    var words = textArea.value.split(' ');
    var countwords = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] != '') {
            countwords++;
        }
        
    }
    wordsNum.innerHTML = countwords;
}
charCount();
//UPPERCASE
UPPERCASE.addEventListener('click', () => {
    const textareaValue = textArea.value.toUpperCase();
    textArea.value = textareaValue;
})
//lowercase
lower.addEventListener('click', () => {
    const lowertext = textArea.value.toLowerCase();
    textArea.value = lowertext;
})
//capitalize
capitalize.addEventListener('click', () => {
    const lowertext = textArea.value.toLowerCase();
    textArea.value = lowertext;
    const capitalizedText = textArea.value.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
      });
      textArea.value = capitalizedText;
})
//reverse
reverse.addEventListener('click', () => {
    const textRev = textArea.value.split("").reverse().join("");
    textArea.value = textRev;
    
})
// inverse
inverse.addEventListener('click', () => {
    
    
    var inveText = "";
    for (let i = 0; i < textArea.value.length; i++) {
        if (i % 2 === 0) {
          inveText += textArea.value.charAt(i).toLowerCase();
        } else {
          inveText += textArea.value.charAt(i).toUpperCase();
        }
    }
    textArea.value = inveText;
})
// clear 
clear.addEventListener('click', () => {
    textArea.value = '';
    charNum.innerHTML = '0';
    wordsNum.innerHTML = '0';
})
         
        
        
