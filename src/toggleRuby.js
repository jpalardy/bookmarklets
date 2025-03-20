// some unique id, the SHA1 of "toggleRuby"
const id = "c8f38bbf013e6f254dfe129984188c9a2646b793";

const style = document.getElementById(id);
if (style) {
  document.head.removeChild(style);
} else {
  const style = document.createElement("style");
  style.innerHTML = `
    rt { visibility: hidden; }
    ruby:hover rt { visibility: visible; }
  `;
  style.id = id;
  document.head.appendChild(style);
}
