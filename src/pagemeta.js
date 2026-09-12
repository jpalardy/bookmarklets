(() => {
  let pagemeta = document.querySelector('.pagemeta');
  if (pagemeta) {
    pagemeta.showPopover();
    return;
  }

  const escapeHtml = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  const title = (document.querySelector("title") || { innerText: "" }).innerText.trim().replace(/\s+/g, " ");
  const url = document.location.toString();

  pagemeta = document.createElement("div");
  pagemeta.popover = "auto";
  pagemeta.id = "pagemeta";
  const shadow = pagemeta.attachShadow({ mode: 'open' });
  let innerHTML = `
  <style>
    :host {
      all: revert;
      padding: 10px;
      min-width: 400px;
      width: fit-content;
      max-width: 70vw;
      border-radius: 7px;
      overflow: auto;
    }
    :host::backdrop { background: rgb(0 0 0 / 0.8); }
  </style>
  <div style="font-family: monospace; font-size: 14px;">
    ${escapeHtml(title)}<br/>${escapeHtml(url)}
  </div>
  `;
  if (navigator.clipboard) {
    innerHTML += `
      <div style="margin-top: 10px;">
        <button>copy text</button> <button>copy markdown</button>
      </div>`;
  }
  shadow.innerHTML = innerHTML;

  if (navigator.clipboard) {
    const [copyText, copyMarkdown] = shadow.querySelectorAll('button');
    copyText.onclick = () => { navigator.clipboard.writeText(`${title}\n  ${url}`) };
    copyMarkdown.onclick = () => { navigator.clipboard.writeText(`[${title}](${url})`) };
  }

  document.body.appendChild(pagemeta);
  pagemeta.showPopover();
})();
