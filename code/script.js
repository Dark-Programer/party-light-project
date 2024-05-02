// generate random colors
function randomColors() {
  let color = "#";
  const hex_value = "123567890ABCDEF";

  for (let i = 0; i < 6; i++) {
    color += hex_value[Math.floor(Math.random() * hex_value.length)];
  }
  console.log(color);
  return color;
}

let intervalId;
const startLighting = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColors();
    }, 100);
  }
};
const stopLighting = () => {
  clearInterval(intervalId);
  console.log(`Interval ID was: ${intervalId}`);
  intervalId = null; // memory efficient
};

document.querySelector("#start").addEventListener("click", startLighting);
document.querySelector("#stop").addEventListener("click", stopLighting);

