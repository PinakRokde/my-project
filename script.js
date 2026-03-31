const form = document.getElementById('feedback-form');
const responseBox = document.getElementById('response');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showResponse('Please complete every field before sending feedback.', false);
    return;
  }

  showResponse(`Thank you, ${name}! Your feedback has been received.`, true);
  form.reset();
});

function showResponse(message, isSuccess) {
  responseBox.textContent = message;
  responseBox.className = 'response ' + (isSuccess ? 'success' : 'error');
}
