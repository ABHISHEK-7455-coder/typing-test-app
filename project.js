const typingText= document.querySelector('#text');
const btn = document.querySelector('.start');
const showText = document.querySelector('.show-text');
const score = document.querySelector('.section1')
const time = document.querySelector('.time');
const wpm = document.querySelector('.wpm');
const mistake = document.querySelector('.mistake');


const sentences = [
                     "The quick brown fox jumps over a lazy dog",
                    
                     "An Average person Laughs 13 Times a day",
                    
                     "Practice makes a Person Perfect",
                    
                     "Genius is one percent inspiration and ninety-nine percent perspiration.",
                    
                     "Keep your friends close, but your enemies closer.",
                ];

const countMistakes = (originalText, typedText) => {
  let originalWords = originalText.split(" ");
  let typedWords = typedText.split(" ");
  let mistakes = 0;

  for (let i = 0; i < Math.max(originalWords.length, typedWords.length); i++) {
    if(originalWords[i] !== typedWords[i]) {
      mistakes++;
    }
  }
  return mistakes;
}

const typingSpeed = (timeTaken) => {
    let totalWords = typingText.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let speed = (actualWords / timeTaken) * 60;
        speed = Math.round(speed)
        
      let originalText = showText.innerHTML;
      let mistakes = countMistakes(originalText, totalWords)

        score.innerHTML = `<p class="time">Time:${totalTimeTaken} sec</p>
                            <p class="wpm">WPM:${speed}</p>
                            <p class="mistake">Mistakes:${mistakes}</p>`;
    }
}

const endTyping = () => {
    btn.innerText = 'START';
    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime - startTime) / 1000;
    totalTimeTaken = Math.round(totalTimeTaken)
  

    typingSpeed(totalTimeTaken);
    showText.innerHTML = "";
    typingText.value = "";
}

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    showText.innerHTML = sentences[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'Done';
}

btn.addEventListener('click', () => {
  const buttonText = btn.innerText.toLowerCase();
  if (buttonText === "start") {
    btn.innerText = "DONE"
    typingText.removeAttribute('disabled');
    startTyping();
  } else if (buttonText === "done") {
    btn.innerText = "START"
    typingText.setAttribute('disabled', 'true');
    endTyping();
  }
});


