
// some unique id, the SHA1 of "toggleRuby"
var id = "c8f38bbf013e6f254dfe129984188c9a2646b793";
var d = document;

var style = d.getElementById(id);
if (style) {
  d.head.removeChild(style);
} else {
  style = d.createElement('style');
  style.innerHTML = "rt { visibility: hidden; }";
  style.id = id;
  d.head.appendChild(style);
}

