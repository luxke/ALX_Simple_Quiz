
function checkAnswer() {
 
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  
  const feedbackElement = document.getElementById('feedback');

  
  const correctAnswer = "4"; 
  if (!selectedOption) {
      feedbackElement.textContent = 'Please select an answer before submitting.';
      feedbackElement.style.color = 'red';
      return;
  }

  
  const userAnswer = selectedOption.value;

  
  if (userAnswer === correctAnswer) {
      feedbackElement.textContent = 'Correct! Well done.';
      feedbackElement.style.color = 'green';
  } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
      feedbackElement.style.color = 'red';
  }
}


const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);

