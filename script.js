// script.js

// Switch to choices page
const enterBtn = document.getElementById("enterBtn");
const submitChoices = document.getElementById("submitChoices");
const screens = document.querySelectorAll(".screen");

enterBtn.addEventListener("click", () => {
  screens[0].classList.remove("active");
  screens[1].classList.add("active");
});

submitChoices.addEventListener("click", () => {
  // Gather selections
  const selections = {};
  document.querySelectorAll(".options").forEach(group => {
    const selected = group.querySelector(".option.selected");
    if (selected) {
      const category = group.getAttribute("data-group");
      const value = selected.innerText.trim();
      selections[category] = value;
    }
  });

  console.log("User Selections:", selections);
  // You could send this to a webhook or store in localStorage if needed

  // Show thank you page
  screens[1].classList.remove("active");
  screens[2].classList.add("active");
  screens[2].innerHTML = `
    <h2>Thank you for customizing our date! 💖</h2>
    <p>Can't wait to enjoy everything with you 😚</p>
  `;
});

// Only allow one selected option per group
const allOptionGroups = document.querySelectorAll(".options");
allOptionGroups.forEach(group => {
  group.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
      group.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
      option.classList.add("selected");
    });
  });
});
