(() => {
  [...document.querySelectorAll(".card")].forEach((card) => {
    const text = card.querySelector("span").innerText;
    const onlyKanjis = text
      .replace(/[^\p{Script=Han}]/gu, "")
      .replace(/々/g, "")
      .replace(/[一二三四五六七八九十]/g, "");
    // 1 kanji or 0 kanjis (hiragana, katakana only)
    if (onlyKanjis.length <= 1) {
      card.style.color = "#0D9FD9";
    }
  });
})();
