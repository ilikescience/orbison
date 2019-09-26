import tokens from "bitly-tokens";

const sketchLog = message => {
  window.postMessage(
    "nativeLog",
    JSON.stringify({
      command: "log",
      args: [message]
    })
  );
};

// disable the context menu (eg. the right click menu) to have a more native feel
document.addEventListener("contextmenu", e => {
  e.preventDefault();
});

// call the plugin from the webview

// build list of grid sizes
const buildGridList = sizes => {
  const gridTabContent = document.querySelector("#grid--content");
  for (let size in sizes) {
    const thisSize = tokens.grid[size];
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.innerHTML = `
    <div class="cell capitalize">${thisSize.totalWidth.attributes.type}</div>
    <div class="cell">${thisSize.totalWidth.value}px</div>
    <div class="cell">
      <div class="button action" data-command="newArtboard" data-args="${thisSize.totalWidth.attributes.type}">
        Add
      </div>
    </div>
    `;
    gridTabContent.appendChild(newRow);
  }
};

const buildColorList = colors => {
  const gridTabContent = document.querySelector("#color--content");
  for (let color in colors) {
    for (let value in tokens.color[color]) {
      const thisColor = tokens.color[color][value];
      let newRow = document.createElement("div");
      newRow.classList.add("row");
      newRow.innerHTML = `
      <div class="cell capitalize">
        <div class="swatch" style="background-color:${thisColor.value}"></div>
        hi</div>
      <div class="cell">${thisColor.value}</div>
      <div class="cell">
        <div class="button" data-command="copyColor" data-args="${thisColor.value}">
          Add
        </div>
      </div>
      `;
      gridTabContent.appendChild(newRow);
    }
    
  }
}

buildGridList(tokens.grid);
buildColorList(tokens.color);

document.querySelectorAll(".action").forEach(item => {
  item.addEventListener("click", () => {
    const message = {
      command: item.dataset.command,
      args: item.dataset.args.split(",")
    };
    window.postMessage("nativeLog", JSON.stringify(message));
  });
});