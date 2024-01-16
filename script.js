// hexColor Code
const hex = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

// Select All Btns
const colorsButtons = document.querySelectorAll("button");
colorsButtons.forEach(function (btns) {
  btns.textContent = randomColorGenerate();
  btns.style.backgroundColor = randomColorGenerate();
});

// Generate Random Color
function randomColorGenerate() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return randomColor;
}
