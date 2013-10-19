
/* jshint browser: true */

// some unique id, the SHA1 of "memoraLarge"
var id = "d31320f0a68c10ee2dea47aa32b7d865d4e54e10";
var d = document;

var style = d.getElementById(id);
if (style) {
  d.head.removeChild(style);
} else {
  style = d.createElement('style');
  style.innerHTML = ".card .q { font-size: 300% }";
  style.id = id;
  d.head.appendChild(style);
}

