/* global location */

// dp/${ASIN}/
var match = location.href.match(/dp[/]([^/]{10})[/]/);

if (match) {
  var asin = match[1];
  location.href = "http://bp.localhost:2665/jonathan/books?show=" + asin;
} else {
  alert("no ASIN found on this page...");
}

