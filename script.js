const enterBtn = document.getElementById('enterBtn');
const submitChoices = document.getElementById('submitChoices');
const intro = document.getElementById('intro');
const choices = document.getElementById('choices');
const thankyou = document.getElementById('thankyou');

enterBtn.addEventListener('click', () => {
  intro.classList.remove('active');
  choices.classList.add('active');
});

submitChoices.addEventListener('click', () => {
  choices.classList.remove('active');
  thankyou.classList.add('active');
});
