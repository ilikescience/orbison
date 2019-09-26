import BrowserWindow from "sketch-module-web-view";
import { getWebview } from "sketch-module-web-view/remote";
import tokens from "bitly-tokens";
const sketch = require("sketch");

const webviewIdentifier = "orbison.webview";

export default function() {
  const options = {
    identifier: webviewIdentifier,
    width: 455,
    height: 667,
    moveable: true,
    remembersWindowFrame: true,
    alwaysOnTop: true,
    maximizable: false,
    minimizable: false,
    resizable: false
  };

  const browserWindow = new BrowserWindow(options);

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once("ready-to-show", () => {
    browserWindow.show();
  });

  const webContents = browserWindow.webContents;

  // add a handler for a call from web content's javascript
  webContents.on("nativeLog", s => {
    const message = JSON.parse(s);
    log("got message:" + message.command);
    switch (message.command) {
      case "newArtboard":
        newArtboard(...message.args);
        break;
      case "log":
        log(message.args.toString());
        break;
      default:
        log("i dont know how to do that");
    }
  });

  browserWindow.loadURL(require("../resources/webview.html"));
}

// When the plugin is shutdown by Sketch (for example when the user disable the plugin)
// we need to close the webview if it's open
export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier);
  if (existingWebview) {
    existingWebview.close();
  }
}

/**
 * Makes a new artboard with the correct dimensions and grid settings
 * @param {string} size - the size of the artboard. Should be 'xl', 'l', 'm' or 's'.
 */
function newArtboard(size) {
  const frameSizes = {
    xl: {
      width: "1440",
      height: "900"
    },
    l: {
      width: "900",
      height: "800"
    },
    m: {
      width: "600",
      height: "800"
    },
    s: {
      width: "375",
      height: "667"
    }
  };
  const layoutSettings = tokens.grid[size];
  const artboard = new sketch.Artboard({
    name: `Bitly - ${size.toUpperCase()}`,
    parent: sketch.fromNative(context.document).selectedPage,
    frame: {
      width: frameSizes[size].width,
      height: frameSizes[size].height
    }
  });
  const layout = MSLayoutGrid.alloc().init();

  layout.setNumberOfColumns(layoutSettings.numberOfColumns.value);
  layout.setTotalWidth(layoutSettings.totalWidth.value);
  layout.setHorizontalOffset(
    (artboard.frame.width - layoutSettings.totalWidth.value) / 2
  );
  layout.setGuttersOutside(
    layoutSettings.guttersOutside.value === "true" ? 1 : 0
  );
  layout.setGutterWidth(layoutSettings.gutterWidth.value);
  layout.setColumnWidth(layoutSettings.columnWidth.value);

  artboard.sketchObject.setLayout(layout);
}

// function createPalettes() {
//   let colorAssets = []
//   for (let color in tokens.color) {
//     for (let value in tokens.color[color]) {
//       const thisColor = tokens.color[color][value].value;
//       const colorObj = hexToRgb(thisColor);
//       colorName = `${tokens.color[color][value].category}-${tokens.color[color][value].type}-${tokens.color[color][value].item}`;
//       const mscolor = MSColor.colorWithRed_green_blue_alpha(
//         colorPalette[i].red,
//         colorPalette[i].green,
//         colorPalette[i].blue,
//         colorPalette[i].alpha
//       );
//       colorAssets.push(MSColorAsset.alloc().initWithAsset_name(mscolor, colorName));
//     }
//   }
// }

// function hexToRgb(hex) {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result ? {
//     red: parseInt(result[1], 16),
//     green: parseInt(result[2], 16),
//     blue: parseInt(result[3], 16),
//     alpha: 1
//   } : null;
// }