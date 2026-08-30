(() => {
  let pagemeta = document.querySelector('.pagemeta');
  if (pagemeta) {
    pagemeta.showPopover();
    return;
  }

  const style = document.createElement("style");
  style.textContent = `
    .pagemeta {
      all: revert;
      font-family: monospace;
      padding: 10px;
      min-width: 400px;
      width: fit-content;
      max-width: 70vw;
      overflow: auto;
      border-radius: 7px;
    }
    [popover]::backdrop {
      background: rgb(0 0 0 / 0.8);
    }`;
  document.head.appendChild(style);

  let title = (document.querySelector("title") || { innerText: "" }).innerText.trim().replace(/\s+/g, " ");
  const url = document.location.toString();

  pagemeta = document.createElement("div");
  pagemeta.popover = "auto";
  pagemeta.className = "pagemeta";

  const content = document.createElement('div');
  content.innerText = `${title}\n${url}`;
  pagemeta.appendChild(content);

  if (navigator.clipboard) {
    content.style.marginBottom = "5px";
    [
      { text: "copy text", payload: `${title}\n  ${url}` },
      { text: "copy markdown", payload: `[${title}](${url})` }
    ].forEach((props) => {
      const button = document.createElement("button");
      button.textContent = props.text;
      button.style.marginRight = "5px";
      button.onclick = () => { navigator.clipboard.writeText(props.payload) };
      pagemeta.appendChild(button);
    });
  }

  document.body.appendChild(pagemeta);
  pagemeta.showPopover();
})();
