document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = loginForm.elements.namedItem('username');
      const password = loginForm.elements.namedItem('password');

      username?.setAttribute('aria-invalid', !username.value ? 'true' : 'false');
      password?.setAttribute('aria-invalid', !password.value ? 'true' : 'false');

      if (username?.value && password?.value) {
        window.location.href = 'course-selection.html';
      }
    });
  }

  const createQuizButton = document.getElementById('create-quiz-button');
  if (createQuizButton) {
    createQuizButton.addEventListener('click', () => {
      window.location.href = 'quiz-builder.html';
    });
  }

  const chipToggles = document.querySelectorAll('.chip-toggle');
  if (chipToggles.length) {
    chipToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        chipToggles.forEach((btn) => btn.classList.remove('is-active'));
        toggle.classList.add('is-active');
      });
    });
  }

  const navigationTriggers = document.querySelectorAll('[data-target]');
  if (navigationTriggers.length) {
    navigationTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const target = trigger.getAttribute('data-target');
        if (target) {
          window.location.href = target;
        }
      });
    });
  }
});
