var answerArray = ['It is certain.', 'It is decidely so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
var answer = answerArray[Math.floor(Math.random()*answerArray.length)];
var getAnswer = document.querySelector('#get-answer');
var userQuestion = document.querySelector('#question');
var showQuestion = document.querySelector('.user-question');
var showAnswer = document.querySelector('.random-answer');
var displayResult = document.querySelector('#result');
var eightBall = document.querySelector('#eight-ball');
var clearButton = document.querySelector('#clear');

getAnswer.addEventListener('click', randomAnswer);

clearButton.addEventListener('click', clear);

function randomAnswer() {
  showQuestion.innerText = `"${userQuestion.value}"\n ${answer}`;
  userQuestion.value = '';
  eightBall.style.display = "none";
  displayResult.style.display = "inline";
};

function clear() {
  eightBall.style.display = "inline";
  displayResult.style.display = "none";
}
