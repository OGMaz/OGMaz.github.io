document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const submitBtn = document.getElementById('submit-btn');
  const landingScreen = document.getElementById('landing-screen');
  const selectionScreen = document.getElementById('selection-screen');
  const thankyouScreen = document.getElementById('thankyou-screen');

  const mealOptions = [
    { name: "Pasta", img: "https://imgur.com/VB12aIB.png" },
    { name: "Pizza", img: "https://imgur.com/GfqVAxW.png" },
    { name: "Noodles", img: "https://imgur.com/Y5JXJws.png" },
    { name: "Whatever Available", img: "https://imgur.com/UsRQNuv.png" }
  ];

  const dessertOptions = [
    { name: "Chips", img: "https://imgur.com/AhRhgWQ.png" },
    { name: "Biscuits", img: "https://imgur.com/DiMKtTZ.png" },
    { name: "Candy", img: "https://imgur.com/iFuIhyX.png" },
    { name: "Me?", img: "https://imgur.com/Dbhw0WM.png" }
  ];

  const movieOptions = [
    { name: "My Neighbor Totoro", img: "https://imgur.com/X8pps6k.png" },
    { name: "Spirited Away", img: "https://imgur.com/7yeUyq7.png" },
    { name: "Love Actually", img: "https://imgur.com/imnrTap.png" },
    { name: "About Time", img: "https://imgur.com/vq9TqHL.png" }
  ];

  const gameOptions = [
    { name: "R.O.P.O.", img: "https://imgur.com/undefined.png" },
    { name: "Minecraft", img: "https://i.imgur.com/3amvAKX.png" },
    { name: "Skribbl", img: "https://imgur.com/4C72s6r.png" },
    { name: "It Takes Two", img: "https://imgur.com/undefined.png" }
  ];

  function renderOptions(containerId, options) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    options.forEach(opt => {
      const div = document.createElement("div");
      div.className = "choice";
      div.innerHTML = `
        <img src="${opt.img}" alt="${opt.name}" />
        <p>${opt.name}</p>
      `;

      div.addEventListener("click", () => {
        container.querySelectorAll(".choice").forEach(c => c.classList.remove("selected"));
        div.classList.add("selected");
      });

      container.appendChild(div);
    });
  }

  startBtn.addEventListener('click', () => {
    landingScreen.style.display = "none";
    selectionScreen.style.display = "block";
    renderOptions("meal-choices", mealOptions);
    renderOptions("dessert-choices", dessertOptions);
    renderOptions("movie-choices", movieOptions);
    renderOptions("game-choices", gameOptions);
  });

  submitBtn.addEventListener('click', () => {
    const getSelected = (id) => {
      const selected = document.querySelector(`#${id} .selected p`);
      return selected ? selected.textContent : "None";
    };

    const choices = {
      meal: getSelected("meal-choices"),
      dessert: getSelected("dessert-choices"),
      movie: getSelected("movie-choices"),
      game: getSelected("game-choices")
    };

    console.log("Selected choices:", choices); // You can replace this with email sending, webhook, etc.

    selectionScreen.style.display = "none";
    thankyouScreen.style.display = "block";
  });
});
