(() => {
  const sel = prompt("selector:", "a[href]");
  if (!sel) return;
  document.querySelectorAll(sel).forEach(el => {
    el.style.setProperty("background", "yellow", "important");
    el.style.setProperty("padding", "5px");
  });
})();
