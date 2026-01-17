(() => {
  [...document.querySelectorAll(".card")].forEach((card) => {
    const text = card.querySelector("span").innerText;
    if (text.length == 1) {
      card.style.color = "#0D9FD9";
    }
  });
})();
