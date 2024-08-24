(() => {
  const now = new Date();
  const title = (document.querySelector("title") || { innerText: "" }).innerText.trim().replace(/\s+/g, " ");
  const url = document.location.toString();
  const copyText = `${title}\n  ${url}`;

  const banner = document.createElement("div");
  banner.className = "pagemeta";

  const style = document.createElement("style");
  style.textContent = `
.pagemeta {
  all: revert;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(0, 0, 0, 0.7);
  z-index: 9999;
}
.pagemeta div {
  all: revert;
  padding: 20px;
  color: white;
  font-family: monospace;
  font-size: 16px;
  text-align: left;
  white-space: pre;
}
.pagemeta button {
  all: revert;
  position: absolute;
  top: 10px;
  right: 10px;
}`;
  document.head.appendChild(style);

  const textDiv = document.createElement("div");
  textDiv.textContent = copyText;
  banner.appendChild(textDiv);

  const button = document.createElement("button");
  button.textContent = navigator.clipboard ? "copy and close" : "close";
  banner.appendChild(button);

  document.body.appendChild(banner);

  button.onclick = () => {
    if (!navigator.clipboard) {
      banner.remove();
      return;
    }
    navigator.clipboard
      .writeText(copyText)
      .then(() => banner.remove())
      .catch(() => alert("clipboard copy failed"));
  };
})();
