const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

const defaultColor = "#3498db";

// Load saved color from localStorage if available
const savedColor = localStorage.getItem("color");
if (savedColor) {
  colorBox.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}

// Change color on input
colorPicker.addEventListener("input", () => {
  const selectedColor = colorPicker.value;
  colorBox.style.backgroundColor = selectedColor;
  localStorage.setItem("color", selectedColor);
});

// Reset to default
resetBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = defaultColor;
  colorPicker.value = defaultColor;
  localStorage.removeItem("color");
});
