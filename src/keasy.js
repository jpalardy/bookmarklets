(() => {
  function highlight(elem, color) {
    elem.style.textShadow = `0 0 20px ${color}`;
  }
  [...document.querySelectorAll(".card")].forEach((card) => {
    const span = card.querySelector("span");
    // one kanji (only)
    if (span.innerText.length == 1) {
      highlight(span, "cyan");
      return;
    }
    // one kanji (after trim)
    const onlyKanjis = span.innerText
      .replace(/[^\p{Script=Han}]/gu, "")
      .replace(/々/g, "")
      .replace(/[一二三四五六七八九十]/g, "");
    // 1 kanji or 0 kanjis (hiragana, katakana only)
    if (onlyKanjis.length <= 1) {
      highlight(span, "yellow");
      return;
    }
    // been a while
    const preview = card.querySelector(".preview");
    const daysAgo = Number(preview.innerHTML.split(" ")[0]);
    if (daysAgo >= 60) {
      highlight(span, "red");
      return;
    }
  });
})();
