(() => {
  const cards = [...document.querySelectorAll(".card")];
  cards.forEach((card) => {
    const text = card.querySelector("span").innerText;
    const onlyKanjis = text.replace(/[^\p{Script=Han}]/gu, "");
    if (onlyKanjis.length === 1) {
      card.style.backgroundColor = "#FFFBCC";
    }
  });
})();
