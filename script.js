document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("landing-screen").style.display = "none";
  document.getElementById("selection-screen").style.display = "block";
});

document.getElementById("submit-btn").addEventListener("click", () => {
  document.getElementById("selection-screen").style.display = "none";
  document.getElementById("thankyou-screen").style.display = "block";
});

const choices = {
  "meal-choices": [
    { title: "Pasta", image: "https://imgur.com/VB12aIB.png" },
    { title: "Pizza", image: "https://imgur.com/GfqVAxW.png" },
    { title: "Noodles", image: "https://imgur.com/Y5JXJws.png" },
    { title: "Whatever Available", image: "https://imgur.com/UsRQNuv.png" }
  ],
  "dessert-choices": [
    { title: "Chips", image: "https://imgur.com/AhRhgWQ.png" },
    { title: "Biscuits", image: "https://imgur.com/DiMKtTZ.png" },
    { title: "Candy", image: "https://imgur.com/iFuIhyX.png" },
    { title: "Me?", image: "https://imgur.com/Dbhw0WM.png" }
  ],
  "movie-choices": [
    { title: "My Neighbor Totoro", image: "https://imgur.com/X8pps6k.png" },
    { title: "Spirited Away", image: "https://imgur.com/7yeUyq7.png" },
    { title: "Love Actually", image: "https://imgur.com/imnrTap.png" },
    { title: "About Time", image: "https://imgur.com/vq9TqHL.png" }
  ],
  "game-choices": [
    { title: "R.O.P.O.", image: "https://imgur.com/undefined.png" },
    { title: "Minecraft", image: "https://i.imgur.com/3amvAKX.png" },
    { title: "Skribbl", image: "https://imgur.com/4C72s6r.png" },
    { title: "It Takes Two", image: "https://imgur.com/undefined.png" }
  ]
};

function createChoiceElement(title, imageUrl) {
  const container = document.createElement("div");
  container.classList.add("choice");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;
  img.classList.add("choice-image");

  const label = document.createElement("p");
  label.textContent = title;
  label.classList.add("choice-label");

  container.appendChild(img);
  container.appendChild(label);

  container.addEventListener("click", () => {
    container.classList.toggle("selected");
  });

  return container;
}

Object.entries(choices).forEach(([id, items]) => {
  const parent = document.getElementById(id);
  items.forEach(({ title, image }) => {
    const choiceElement = createChoiceElement(title, image);
    parent.appendChild(choiceElement);
  });
});
