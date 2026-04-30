const colorPicker = document.getElementById("colorPicker");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const copyBtn = document.getElementById("copyBtn");

// Update color
colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    colorBox.style.background = selectedColor;
    colorCode.textContent = selectedColor;
});

// Copy to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode.textContent);
    alert("Color code copied!");
});