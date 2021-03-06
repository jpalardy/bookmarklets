/* eslint-disable no-alert */
(() => {
  if (!navigator.clipboard) {
    alert("clipboard not found!");
    return;
  }

  const now = new Date();
  const today = new Date(now - now.getTimezoneOffset() * 60 * 1000).toISOString().replace(/T.*/, "");
  const title = (document.querySelector("title") || {innerText: ""}).innerText.trim().replace(/\s+/g, " ");
  const url = document.location.toString();

  const blob = `
${today}
  ${title}
    ${url}
`.trim();

  const banner = document.createElement("div");
  banner.style = `
  position: fixed;
  bottom: 0;
  padding: 20px;
  width: 100%;
  background: #bbb;
  border-top: 1px solid #777;
  font-family: monospace;
  font-size: 16px;
  z-index: 9999;
  text-align: left;
`;
  banner.innerText = blob;
  banner.onclick = () => {
    navigator.clipboard
      .writeText(blob)
      .then(() => banner.remove())
      .catch(() => alert("clipboard copy failed"));
  };
  document.body.appendChild(banner);
})();
