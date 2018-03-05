/* global document */

// some unique id, the SHA1 of "toggleRuby"
const id = "c8f38bbf013e6f254dfe129984188c9a2646b793";
const d = document;

const style = d.getElementById(id);
if (style) {
  d.head.removeChild(style);
} else {
  const style = d.createElement("style");
  style.innerHTML = "rt { visibility: hidden; }";
  style.id = id;
  d.head.appendChild(style);
}
