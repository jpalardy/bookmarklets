(() => {
  [...document.querySelectorAll(".card")].forEach((card) => {
    const text = card.querySelector("span").innerText;
    const onlyKanjis = text
      .replace(/[^\p{Script=Han}]/gu, "")
      .replace(/々/g, "");
    // 1 kanji or 0 kanjis (hiragana, katakana only)
    if (onlyKanjis.length <= 1) {
      card.style.boxShadow = "0 0 7px red";
    }
  });
})();
