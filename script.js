function updateColor() {
  const hex = document.getElementById('colorInput').value;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  applyColor(r, g, b, hex);
}

function updateFromSliders() {
  const r = parseInt(document.getElementById('rSlider').value);
  const g = parseInt(document.getElementById('gSlider').value);
  const b = parseInt(document.getElementById('bSlider').value);

  const hex = '#' +
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0');

  document.getElementById('colorInput').value = hex;
  applyColor(r, g, b, hex);
}

function applyColor(r, g, b, hex) {
  // update preview
  document.getElementById('previewBox').style.background = hex;

  // update values
  document.getElementById('hexVal').textContent = hex.toUpperCase();
  document.getElementById('rgbVal').textContent = `rgb(${r}, ${g}, ${b})`;
  document.getElementById('hslVal').textContent = rgbToHsl(r, g, b);

  // update sliders
  document.getElementById('rSlider').value = r;
  document.getElementById('gSlider').value = g;
  document.getElementById('bSlider').value = b;
  document.getElementById('rVal').textContent = r;
  document.getElementById('gVal').textContent = g;
  document.getElementById('bVal').textContent = b;
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function setColor(hex) {
  document.getElementById('colorInput').value = hex;
  updateColor();
}

function copyValue(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('toast');
    toast.textContent = '✓ Copied: ' + text;
    setTimeout(() => { toast.textContent = ''; }, 2000);
  });
}