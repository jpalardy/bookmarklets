[...document.querySelectorAll("a")]
  .filter((link) => link.href.indexOf("amazon.com") >= 0)
  .forEach((link) => {
    link.href = link.href.replace(/amazon.com/, "amazon.ca");
  });
