(() => {
  function highlight(elem, color) {
    elem.style.textShadow = `0 0 20px ${color}`;
  }
  [...document.querySelectorAll(".card")].forEach((card) => {
    const span = card.querySelector("span");
    // been a while: old card
    const preview = card.querySelector(".preview");
    const daysAgo = Number(preview.innerHTML.split(" ")[0]);
    if (daysAgo >= 60) {
      highlight(span, "red");
      return;
    }
    let text = span.innerText;
    // 1 kanji, after tilde trim
    text = text.replace(/〜/g, "");
    if (text.length == 1) {
      highlight(span, "cyan");
      return;
    }
    // 0-1 kanjis, after serious trim (hiragana, katakana only)
    text = text
      .replace(/[^\p{Script=Han}]/gu, "")
      .replace(/々/g, "")
      .replace(/[一二三四五六七八九十]/g, "");
    if (text.length <= 1) {
      highlight(span, "yellow");
      return;
    }
  });
})();
