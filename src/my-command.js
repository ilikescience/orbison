import BrowserWindow from "sketch-module-web-view";
import { getWebview } from "sketch-module-web-view/remote";
import tokens from "bitly-tokens";
const sketch = require('sketch');

const webviewIdentifier = "orbison.webview";

export default function() {
  const options = {
    identifier: webviewIdentifier,
    width: 240,
    height: 180,
    show: false
  };

  const browserWindow = new BrowserWindow(options);

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once("ready-to-show", () => {
    browserWindow.show();
  });

  const webContents = browserWindow.webContents;

  // print a message when the page loads
  webContents.on("did-finish-load", () => {
    sketch.UI.message("UI loaded!");
  });

  // add a handler for a call from web content's javascript
  webContents.on("nativeLog", s => {
    sketch.UI.message(s);
    newArtboard();
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

function newArtboard() { 
  const artboard = new sketch.Artboard({
    name: 'Bitly - XL',
    parent: sketch.fromNative(context.document).selectedPage,
    frame: {
      width: 1440,
      height: 900
    }
  });
  const layout = MSLayoutGrid.alloc().init();
  layout.setNumberOfColumns(tokens.grid.xl.numberOfColumns.value);
  artboard.sketchObject.setLayout(layout);
  log(artboard.sketchObject);
  log(tokens.grid.xl.numberOfColumns);
}