/* global document */

// some unique id, the SHA1 of "memoraLarge"
const id = "d31320f0a68c10ee2dea47aa32b7d865d4e54e10";
const d = document;

const style = d.getElementById(id);
if (style) {
  d.head.removeChild(style);
} else {
  const style = d.createElement("style");
  style.innerHTML = ".card .text { font-size: 300%; font-family: 'Hiragino Kaku Gothic ProN' }";
  style.id = id;
  d.head.appendChild(style);
}
