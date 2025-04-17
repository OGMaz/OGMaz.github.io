// script.js

// Selections store
const selections = {
  lunch: null,
  dessert: null,
  movie: null,
  game: null
};

function updateSelection(category, value) {
  selections[category] = value;
}

function goToScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.style.display = 'none');
  document.getElementById(screenId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('enter-btn').addEventListener('click', () => {
    goToScreen('selection-screen');
  });

  document.getElementById('submit-btn').addEventListener('click', () => {
    goToScreen('final-screen');
    console.log('User Selections:', selections);
    // optionally send selections via form, webhook, or backend
  });

  document.querySelectorAll('[data-category]').forEach(choice => {
    choice.addEventListener('click', () => {
      const category = choice.getAttribute('data-category');
      const value = choice.getAttribute('data-value');
      updateSelection(category, value);
      // optional: highlight selected
      document.querySelectorAll(`[data-category="${category}"]`).forEach(el => el.classList.remove('selected'));
      choice.classList.add('selected');
    });
  });
});
