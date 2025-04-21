function nextScreen() {
  const screens = document.querySelectorAll(".screen");
  let currentScreenIndex = [...screens].findIndex(s => !s.classList.contains("hidden"));

  if (currentScreenIndex < screens.length - 1) {
    screens[currentScreenIndex].classList.add("hidden");
    screens[currentScreenIndex + 1].classList.remove("hidden");
  }
}

// Handle hover boxes (show/hide sub-options)
document.querySelectorAll(".hover-box").forEach(box => {
  const sub = box.querySelector(".sub-options");
  box.addEventListener("mouseenter", () => sub.classList.remove("hidden"));
  box.addEventListener("mouseleave", () => sub.classList.add("hidden"));
});

// Track selected choices (optional)
const selectedChoices = {};

document.querySelectorAll(".choices img").forEach(img => {
  img.addEventListener("click", () => {
    const category = img.closest(".category").querySelector("h3").textContent;
    selectedChoices[category] = img.getAttribute("data-choice");

    // Highlight selected
    img.parentElement.querySelectorAll("img").forEach(i => i.classList.remove("selected"));
    img.classList.add("selected");
  });
});

document.querySelectorAll(".sub-options p").forEach(p => {
  p.addEventListener("click", () => {
    const parent = p.closest(".hover-box");
    const category = parent.querySelector("img").getAttribute("data-choice");
    selectedChoices[category] = p.getAttribute("data-sub");

    // Highlight selected sub-option
    parent.querySelectorAll("p").forEach(p => p.classList.remove("selected"));
    p.classList.add("selected");
  });
});

// Add button click functionality
document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const submitBtn = document.getElementById("submitBtn");

  if (enterBtn) {
    enterBtn.addEventListener("click", nextScreen);
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", nextScreen);
  }
});

// Store selections
const selections = {};

// Select all choices
document.querySelectorAll('.choice').forEach(choice => {
  choice.addEventListener('click', () => {
    // Remove "selected" class from siblings
    const parent = choice.parentElement;
    parent.querySelectorAll('.choice').forEach(sibling => {
      sibling.classList.remove('selected');
    });

    // Add selected style
    choice.classList.add('selected');

    // Save selection
    const category = choice.dataset.category;
    const value = choice.dataset.choice;
    selections[category] = value;

    console.log(selections); // You can use this later to display or send data
  });
});

// Show screen 3 and animate the final paragraph
function showFinalScreen() {
  // Hide all screens (optional, if you're navigating between them)
  document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));

  // Show the final screen
  const finalScreen = document.querySelector('#screen3');
  finalScreen.classList.remove('hidden');

  // Animate the text
  const subtext = finalScreen.querySelector('.subtext');
  subtext.classList.remove('typewriter'); // Reset if it was added before
  void subtext.offsetWidth; // Trigger reflow to restart animation
  subtext.classList.add('typewriter');
}

// Example trigger (replace this with your real navigation trigger)
document.querySelector('#final-enter-button')?.addEventListener('click', showFinalScreen);

