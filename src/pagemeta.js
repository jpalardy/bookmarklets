(() => {
  document.getElementById("pagemeta")?.remove();
  const title = document.title.trim().replace(/\s+/g, " ");
  const url = location.href;

  const pagemeta = document.createElement("div");
  pagemeta.popover = "auto";
  pagemeta.id = "pagemeta";
  pagemeta.style = "margin: auto; background: white; padding: 10px";
  const shadow = pagemeta.attachShadow({ mode: 'open' });
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(`
    :host {
      all: revert;
      min-width: 400px;
      width: fit-content;
      max-width: 70vw;
      border-radius: 7px;
      overflow: auto;
    }
    :host::backdrop { background: rgb(0 0 0 / 0.8); }
    .info { font: 14px monospace; }
    .actions { margin-top: 10px; display: flex; gap: 6px; }
  `);
  shadow.adoptedStyleSheets = [sheet];

  const info = document.createElement('div');
  info.className = 'info';
  info.append(title, document.createElement('br'), url);
  shadow.append(info);

  if (navigator.clipboard) {
    const actions = document.createElement('div');
    actions.className = 'actions';

    [
      { label: "copy text", text: `${title}\n  ${url}` },
      { label: "copy markdown", text: `[${title}](${url})` }
    ].forEach((spec) => {
      const btn = document.createElement('button');
      btn.textContent = spec.label;
      btn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(spec.text);
          pagemeta.hidePopover();
        } catch {
          btn.textContent = "copy failed";
          setTimeout(() => { btn.textContent = spec.label; }, 1200);
        }
      };
      actions.append(btn);
    });

    shadow.append(actions);
  }

  pagemeta.addEventListener('toggle', (e) => {
    if (e.newState === 'closed') pagemeta.remove();
  });

  document.body.append(pagemeta);
  pagemeta.showPopover();
})();
