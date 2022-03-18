import { r as registerInstance, h, g as getElement, f as BindModel } from './index-6da8c321.js';

const audio = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");

const filters = {
  invertedSymbolsFilter: (filterProps) => {
    const { canvas } = filterProps;
    const context = canvas.getContext("2d");
    // invert colors of the current frame
    const image = context.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < image.data.length; i += 4) {
      image.data[i] = image.data[i] ^ 255;
      image.data[i + 1] = image.data[i + 1] ^ 255;
      image.data[i + 2] = image.data[i + 2] ^ 255;
    }
    context.putImageData(image, 0, 0);
  },
};

function scale(element, screen) {
  const r = Math.min(element.width / screen.width, element.height / screen.height);
  const w = screen.width * r;
  const h = screen.height * r;
  return [w, h];
}
function center(target, background) {
  const max = {
    width: Math.max(target.width, background.width),
    height: Math.max(target.height, background.height),
  };
  const min = {
    width: Math.min(target.width, background.width),
    height: Math.min(target.height, background.height),
  };
  const x = (max.width - min.width) * 0.5;
  const y = (max.height - min.height) * 0.5;
  return [x, y];
}
function isElementVisibleInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
function drawFrameOnCanvas(source, canvas, options) {
  if (!options || typeof options !== "object") {
    options = {};
  }
  if (typeof options.stopInternalCropping !== "boolean") {
    options.stopInternalCropping = false;
  }
  const context = canvas.getContext("2d");
  context.imageSmoothingEnabled = false;
  if (options.points && options.points.length === 6) {
    const [sx, sy, sw, sh, dx, dy, dw, dh] = options.points;
    context.imageSmoothingEnabled = false;
    context.drawImage(source, sx, sy, sw, sh, dx, dy, dw, dh);
    return options.points;
  }
  const inputDimensions = {
    width: canvas.width,
    height: canvas.height,
  };
  if (source instanceof HTMLVideoElement) {
    // console.log("video", { width: source.videoWidth, height: source.videoHeight });
    if (source.videoWidth) {
      inputDimensions.width = source.videoWidth;
      inputDimensions.height = source.videoHeight;
    }
  }
  else {
    // console.log("image", { width: source.width, height: source.height });
    inputDimensions.width = source.width;
    inputDimensions.height = source.height;
  }
  if (options.stopInternalCropping) {
    canvas.width = inputDimensions.width;
    canvas.height = inputDimensions.height;
    const p = [0, 0, inputDimensions.width, inputDimensions.height, 0, 0, inputDimensions.width, inputDimensions.height];
    context.drawImage.apply(context, [source, ...p]);
    return p;
  }
  let [w, h] = scale(inputDimensions, canvas);
  // console.log(
  //     'screen', {
  //         width: canvas.width,
  //         height: canvas.height,
  //     },
  //     'canvas', {
  //         width: w,
  //         height: h,
  //     },
  //     'frame', {
  //         width: input.width,
  //         height: input.height,
  //     },
  //     'not-rounded', {
  //         width: w,
  //         height: h
  //     }
  // );
  canvas.width = Math.floor(w);
  canvas.height = Math.floor(h);
  let [x, y] = center(canvas, inputDimensions);
  // x = Math.floor(x)
  // y = Math.floor(y)
  let p = [x, y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height];
  context.drawImage.apply(context, [source, ...p]);
  return p;
}
function waitUntilElementIsVisibleInViewport(element, delay) {
  return new Promise((resolve) => {
    if (isElementVisibleInViewport(element)) {
      resolve();
      return;
    }
    const interval = setInterval(() => {
      if (isElementVisibleInViewport(element)) {
        resolve();
        clearInterval(interval);
        return;
      }
    }, delay);
  });
}
function waitUntilAnimationFrameIsPossible() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(resolve);
  });
}
function waitUntilVideoMetadataIsLoaded(video) {
  return new Promise((resolve) => {
    video.addEventListener("loadedmetadata", () => resolve(), false);
  });
}
function setVideoStream(video, stream) {
  return new Promise((resolve) => {
    video.addEventListener("loadedmetadata", () => resolve(), false);
    video.srcObject = stream;
  });
}
function createElement(name, props) {
  if (!props) {
    props = {};
  }
  if (!props.style) {
    props.style = {};
  }
  if (!props.text) {
    props.text = "";
  }
  const { style, text } = props;
  delete props.style;
  delete props.text;
  const element = Object.assign(document.createElement(name), props);
  Object.keys(style).forEach((rule) => (element.style[rule] = style[rule]));
  element.innerHTML = text;
  return element;
}
function snapFrame(video) {
  const h = video.videoHeight;
  const w = video.videoWidth;
  const canvas = document.createElement("canvas");
  canvas.id = "snapVideo";
  canvas.width = w;
  canvas.height = h;
  const context = canvas.getContext("2d");
  canvas.style.position = "absolute";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.objectFit = "cover";
  context.drawImage(video, 0, 0, w, h);
  video.parentElement.insertBefore(canvas, video);
}
async function loadFrame(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.src = src;
  });
}
async function timeout(time) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve();
      clearTimeout(timeout);
    }, time);
  });
}
async function listVideoInputDevices() {
  if (!window.navigator) {
    throw new Error("Can't enumerate devices, navigator is not present.");
  }
  if (!window.navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    throw new Error("Can't enumerate devices, method not supported.");
  }
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = [];
  for (const device of devices) {
    const { kind } = device;
    if (kind !== 'videoinput') {
      continue;
    }
    const deviceId = device.deviceId;
    const label = device.label || `Video device ${videoDevices.length + 1}`;
    const groupId = device.groupId;
    const videoDevice = { deviceId, label, kind, groupId };
    videoDevices.push(videoDevice);
  }
  return videoDevices;
}
function captureFrame(canvas) {
  if (canvas.id === "invertedSymbols") {
    filters.invertedSymbolsFilter({ canvas });
  }
  return {
    png: canvas.toDataURL("image/png"),
    jpg: canvas.toDataURL("image/jpeg"),
  };
}
function setInLocalStorage(key, value) {
  if (!('localStorage' in window)) {
    return false;
  }
  localStorage.setItem(key, value);
  return true;
}
function getFromLocalStorage(key) {
  if (!('localStorage' in window)) {
    return undefined;
  }
  return localStorage.getItem(key);
}
function cloneCanvas(canvas) {
  const newCanvas = document.createElement('canvas');
  const context = newCanvas.getContext('2d');
  newCanvas.width = canvas.width;
  newCanvas.height = canvas.height;
  context.drawImage(canvas, 0, 0);
  return newCanvas;
}

const getCleanupStyleForShadowDOM = () => {
  // It resets the default shadow dom styles from Apple
  const style = document.createElement('style');
  style.append(`
*::-webkit-media-controls-panel {
  display: none !important;
  -webkit-appearance: none;
}
*::-webkit-media-controls-play-button {
  display: none !important;
  -webkit-appearance: none;
}
*::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}`);
  return style.innerHTML;
};
const style = {
  base: {
    display: "grid",
    gridTemplateRows: "1fr",
    width: "100%",
    height: "100%",
  },
  container: {
    position: "relative",
    display: "grid",
    gridTemplateRows: "1fr",
    overflow: "hidden",
    minHeight: "350px",
    padding: "0",
    margin: "0",
  },
  video: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0",
  },
  input: {
    display: "none",
  },
  button: {
    position: "absolute",
    zIndex: "1",
    padding: "0.3em 0.6em",
    bottom: "1em",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#FFFFFF",
    background: "transparent",
    borderRadius: "2px",
    border: "2px solid rgba(255, 255, 255, 0.75)",
    fontSize: "15px",
    textAlign: "center",
  },
};

var STATUS;
(function (STATUS) {
  STATUS["INIT"] = "Initializing component...";
  STATUS["LOADING_CAMERAS"] = "Detecting your cameras...";
  STATUS["DETECTION_STARTED"] = "Detection is starting...";
  STATUS["DETECTION_IN_PROGRESS"] = "Detection in progress...";
  STATUS["DETECTION_DONE"] = "Detection is stopping...";
  STATUS["NO_DETECTION"] = "No camera detected.";
  STATUS["ACCESS_DENIED"] = "Access denied";
  STATUS["CHANGE_CAMERA"] = "Change camera";
})(STATUS || (STATUS = {}));
class InternalState {
  constructor(status, isLogging) {
    this._status = status;
    this._isLogging = isLogging;
  }
  set status(status) {
    this._status = status;
    if (this._isLogging) {
      console.log("[psk-barcode-scanner] Status:", this._status);
    }
  }
  get status() {
    return this._status;
  }
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const KEY_ACTIVE_DEVICE = "psk-scanner-device-id";
const KEY_NO_DECODING = "No MultiFormat Readers were able to detect the code.";
const KEY_ZXING_PATH = "webcardinal/extended/cardinal-barcode/worker/zxing-browser.min.js"; // v0.0.10
const KEY_WEB_WORKER_PATH = "webcardinal/extended/cardinal-barcode/worker/scan-worker.js";
// INTERVAL_BETWEEN_SCANS is used only when Web Workers are deliberate disabled
// const INTERVAL_BETWEEN_SCANS = 1000;   // 1fr/s
// const INTERVAL_BETWEEN_SCANS = 125;    // 8fr/s
// const INTERVAL_BETWEEN_SCANS = 25;     // 40fr/s
// const INTERVAL_BETWEEN_SCANS = 50 / 3; // 60fs/s
const INTERVAL_BETWEEN_SCANS = 250; // 4fr/s
const DEV_FLAGS = {
  ACTIVATE_INTERNAL_CANVASES: "dev-activate-internal-canvases",
  DISABLE_SOME_SLOTS: "dev-disable-some-slots",
};
const templates = {
  init: createElement("div", {
    style: style.button,
    text: "Booting camera...",
  }),
  active: createElement("button", {
    style: style.button,
    text: "Change camera",
  }),
  done: createElement("div", { style: style.button, text: "Scan complete!" }),
  error: createElement("div", {
    style: style.button,
    text: "No camera device found!",
  }),
  feedback: createElement("div", {
    style: style.button,
    text: "Checking permissions...",
  }),
  access_denied: createElement("div", {
    style: style.button,
    text: "Access denied...",
  }),
};
templates.active.setAttribute("change-camera", "");
const PskBarcodeScanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Decides if a screenshot is made after scanning.
     */
    this.snapVideo = false;
    /**
     * If <code>true</code>, setFrames can be used and custom frames will be scanned.
     */
    this.useFrames = false;
    /**
     * If <code>true</code>, a Web Worker (scanner-worker.js) will be instantiated.
     * Its purpose is to decode codes.
     *
     * If <code>false</code> decoding will take place in the main thread.
     */
    this.useWebWorker = true;
    /**
     * Decides if internal status of component is logged into the console.
     */
    this.useLogs = true;
    /**
     * Decides if the received frame should be cropped according with the screen aspect-ration.
     */
    this.stopInternalCropping = false;
    this.state = new InternalState(STATUS.INIT, this.useLogs);
    this.devices = [];
    this.frame = {
      canvas: null,
      source: null,
      points: [],
      filters: [],
    };
    // Pre-rendering or loading...
    this.initializeReferencesToElements = () => {
      const container = this.host.shadowRoot.querySelector("#container");
      if (!container) {
        console.error("[psk-barcode-scanner] Component can not render #container");
        return;
      }
      const video = this.host.shadowRoot.querySelector("#video");
      if (!video) {
        console.error("[psk-barcode-scanner] Component can not render #video");
        return;
      }
      this.container = container;
      this.video = video;
    };
    this.initializeScanningMethod = async () => {
      if (this.useWebWorker) {
        if (!this.scanWorker) {
          this.scanWorker = new Worker(KEY_WEB_WORKER_PATH);
        }
        return;
      }
      if (this.scanWorker) {
        this.scanWorker.terminate();
      }
    };
    this.createSlotElement = (name) => {
      if (this.host.querySelector(`[slot=${name}]`)) {
        return createElement("slot", { name });
      }
      templates[name].part = name;
      return templates[name];
    };
    this.attachOnClickForChangeCamera = () => {
      const toggle = this.host.shadowRoot.querySelector("[change-camera]");
      if (toggle) {
        toggle.onclick = async () => await this.switchCamera();
      }
    };
    this.renderContent = () => {
      let element;
      switch (this.state.status) {
        case STATUS.INIT:
          element = this.createSlotElement("init");
          break;
        case STATUS.NO_DETECTION:
          element = this.createSlotElement("error");
          break;
        case STATUS.DETECTION_DONE:
          element = this.createSlotElement("done");
          break;
        case STATUS.LOADING_CAMERAS:
          if (this.host.hasAttribute(DEV_FLAGS.DISABLE_SOME_SLOTS)) {
            element = "";
            return;
          }
          element = this.createSlotElement("feedback");
          break;
        case STATUS.ACCESS_DENIED:
          element = this.createSlotElement("access_denied");
          break;
        default: {
          if (this.host.hasAttribute(DEV_FLAGS.DISABLE_SOME_SLOTS)) {
            element = "";
            return;
          }
          element = this.createSlotElement("active");
        }
      }
      const t = createElement("div");
      t.append(element);
      return t.innerHTML;
    };
    // Overlays
    this.drawOverlays = async () => {
      if (!this.host || !this.host.shadowRoot || this.host.querySelector("[slot=active]")) {
        return;
      }
      const { shadowRoot } = this.host;
      const videoElement = shadowRoot.querySelector("#video");
      const scannerContainer = shadowRoot.querySelector("#container");
      const { VideoOverlay } = await import('./index-f62fd3a6.js');
      this.overlay = new VideoOverlay(scannerContainer, videoElement);
      const success = this.overlay.createOverlaysCanvases("lensCanvas", "overlayCanvas");
      if (success) {
        this.overlay.drawLensCanvas();
      }
    };
    this.cleanupOverlays = () => {
      if (this.overlay) {
        this.overlay.removeOverlays();
      }
    };
    // Event handlers
    this.onZXingBrowserLoad = async () => {
      const hints = new Map();
      hints.set(3, true); // TRY_HARDER
      this.scanner = new window.ZXingBrowser.BrowserMultiFormatReader(hints);
      // this mechanism is not recommended since de UI thread is slowed down
      // also if ZXingBrowser is loaded faster then the creation of all the filters some intervals will also be applied
      const scanInterval = async () => {
        await this.scan();
        await timeout(INTERVAL_BETWEEN_SCANS);
        if (this.state.status === STATUS.DETECTION_IN_PROGRESS) {
          await scanInterval();
        }
      };
      await scanInterval();
    };
    this.onVideoPlay = async () => {
      this.cleanupOverlays();
      await this.drawOverlays();
      this.video.removeAttribute("hidden");
    };
    this.onCanvasPlay = async () => {
      this.cleanupOverlays();
      await this.drawOverlays();
      this.frame.canvas.removeAttribute("hidden");
    };
    // Scanning & Decoding...
    this.decodeCallback = (error, result, payload) => {
      if (result && this.state.status === STATUS.DETECTION_IN_PROGRESS) {
        this.stopScanning();
        if (this.useLogs) {
          console.log("[psk-barcode-scanner] Scanned data:", result);
        }
        if (this.modelHandler) {
          audio.play();
          if (this.overlay) {
            this.overlay.drawOverlay(result.resultPoints);
          }
          if (this.snapVideo) {
            snapFrame(this.video);
          }
          if (this.useMetadata) {
            result.frames = captureFrame(payload.canvas);
            result.video = {
              width: this.video.videoWidth,
              height: this.video.videoHeight,
            };
            result.useWebWorker = this.useWebWorker;
            try {
              result.container = JSON.parse(JSON.stringify(this.container.getBoundingClientRect()));
            }
            catch (e) {
              console.error("[psk-barcode-scanner] Could not log container dimensions!");
            }
            this.modelHandler.updateModel("results", result);
          }
          this.modelHandler.updateModel("data", result.text);
          if (!this.snapVideo) {
            this.cleanupOverlays();
          }
        }
        this.stopVideoStream();
        return;
      }
      if (typeof error === "string" && error === KEY_NO_DECODING) {
        // this error can be received only from Web Worker
        // error has typeof string because in Safari the error received from ZXing is not transferable
        return;
      }
      if (typeof error === "object" && error.message === KEY_NO_DECODING) {
        // this error can be received only from main tread
        return;
      }
      console.error("[psk-barcode-scanner] Error while decoding", error);
    };
    this.decode = async (canvas, filterAction) => {
      if (this.state.status === STATUS.DETECTION_DONE) {
        return;
      }
      drawFrameOnCanvas(this.frame.source, canvas, {
        points: this.frame.points,
        stopInternalCropping: this.stopInternalCropping,
      });
      const filterId = canvas.id;
      if (typeof filterAction === "function") {
        // filtered scanning
        const filterProps = { canvas };
        await filterAction(filterProps);
      }
      // decoding in main thread
      if (!this.useWebWorker) {
        if (this.scanner) {
          try {
            const result = this.scanner.decodeFromCanvas(canvas);
            result.filter = { name: filterId, width: canvas.width, height: canvas.height };
            this.decodeCallback(undefined, result, { canvas });
          }
          catch (error) {
            this.decodeCallback(error, undefined, undefined);
          }
        }
        return;
      }
      // decoding in web worker
      const context = canvas.getContext("2d");
      const { width, height } = canvas;
      const imageData = context.getImageData(0, 0, width, height);
      this.scanWorker.postMessage({ message: "start decoding", imageData, width, height, filterId });
    };
    this.scan = async () => {
      await Promise.all(this.frame.filters.map(({ filterAction }) => filterAction()));
    };
    this.createFilter = (filterId, filterAction) => {
      const canvas = cloneCanvas(this.frame.canvas);
      canvas.id = filterId;
      canvas.style.width = "unset";
      canvas.style.height = "unset";
      if (this.host.hasAttribute(DEV_FLAGS.ACTIVATE_INTERNAL_CANVASES)) {
        canvas.style.position = "fixed";
        canvas.style.left = "0";
        canvas.style.top = "0";
        canvas.style.objectFit = "unset";
        canvas.style.zIndex = "1000";
        canvas.style.display = "none";
        this.host.shadowRoot.append(canvas);
      }
      this.frame.filters.push({ filterId, filterAction: () => this.decode(canvas, filterAction) });
    };
    this.createFilters = () => {
      if (this.useWebWorker) {
        const filters = new Set();
        this.scanWorker.addEventListener("message", async (e) => {
          const { error, result, filterId, metadata } = e.data;
          if (error && !this.useFrames) {
            filters.add(filterId);
            if (filters.size === this.frame.filters.length) {
              filters.clear();
              await this.scan();
            }
          }
          let workerCanvas = undefined;
          if (!error && this.useMetadata) {
            workerCanvas = createElement("canvas", {
              id: filterId,
              width: metadata.width,
              height: metadata.height,
            });
            workerCanvas.getContext("2d").putImageData(metadata.imageData, 0, 0);
          }
          this.decodeCallback(error, result, { canvas: workerCanvas });
        });
        this.scanWorker.addEventListener("error", (e) => {
          console.error("[psk-barcode-scanner] scan-worker error", e);
        });
      }
      // default filter
      this.createFilter("default", undefined);
      // invertedSymbols filter
      this.createFilter("invertedSymbols", filters.invertedSymbolsFilter);
    };
    this.startVideoStream = async (deviceId) => {
      var _a, _b, _c, _d, _e;
      let width = this.container.offsetWidth;
      let height = this.container.offsetHeight;
      // since stencil-router uses display "none" in order to avoid flickering
      // values for offset/client dimensions will be 0
      // so in order to get real values
      if (((_c = (_b = (_a = window.WebCardinal) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.page) === null || _c === void 0 ? void 0 : _c.loader) && width === 0) {
        const stencilRoute = window.WebCardinal.state.page.loader.parentElement;
        const display = stencilRoute.style.display;
        stencilRoute.style.display = "unset";
        width = this.container.offsetWidth;
        height = this.container.offsetHeight;
        if ((_e = (_d = window === null || window === void 0 ? void 0 : window.cardinal) === null || _d === void 0 ? void 0 : _d.barcodeScanner) === null || _e === void 0 ? void 0 : _e.dimensions) {
          window.cardinal.barcodeScanner.dimensions.width = width;
          window.cardinal.barcodeScanner.dimensions.height = height;
        }
        stencilRoute.style.display = display;
      }
      const video = this.video;
      const constraints = {
        audio: false,
        video: {
          facingMode: "environment",
          width: { ideal: 3 * width },
          height: { ideal: 3 * height },
        },
      };
      if (deviceId && deviceId !== "no-camera") {
        delete constraints.video.facingMode;
        constraints.video["deviceId"] = { exact: deviceId };
      }
      try {
        const canvas = createElement("canvas", { id: "videoCanvas", width, height });
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        await setVideoStream(video, stream);
        const points = drawFrameOnCanvas(video, canvas, {
          stopInternalCropping: this.stopInternalCropping,
        });
        this.frame = { canvas, source: video, points, filters: [] };
      }
      catch (error) {
        this.state.status = STATUS.ACCESS_DENIED;
        console.error("[psk-barcode-scanner] Error while getting userMediaStream", error);
      }
      if (!video.srcObject) {
        return;
      }
      try {
        const stream = video.srcObject;
        const tracks = stream.getVideoTracks();
        for (let i = 0; i < tracks.length; i++) {
          const device = tracks[i];
          if (device.readyState === "live") {
            this.activeDeviceId = device.getSettings().deviceId;
            setInLocalStorage(KEY_ACTIVE_DEVICE, this.activeDeviceId);
            break;
          }
        }
      }
      catch (error) {
        console.error("[psk-barcode-scanner] Error while getting activeDeviceId", error);
      }
      this.createFilters();
      await this.scan();
    };
    this.stopVideoStream = () => {
      if (!this.video) {
        return;
      }
      const stream = this.video.srcObject;
      if (!stream) {
        return;
      }
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      this.video.srcObject = null;
    };
    this.stopScanning = () => {
      this.state.status = STATUS.DETECTION_DONE;
      // stop web worker
      if (this.scanWorker) {
        this.scanWorker.terminate();
        this.scanWorker = undefined;
      }
      // clear frame context
      if (this.host.hasAttribute(DEV_FLAGS.ACTIVATE_INTERNAL_CANVASES)) {
        this.frame.filters.forEach(({ filterId }) => {
          const canvas = this.host.shadowRoot.getElementById(filterId);
          canvas && canvas.remove();
        });
      }
      this.frame.filters = [];
      delete this.frame.canvas;
      delete this.frame.source;
      delete this.frame.points;
    };
    window.addEventListener("resize", async () => {
      await waitUntilAnimationFrameIsPossible();
      this.cleanupOverlays();
      await this.drawOverlays();
    });
  }
  // Public Methods
  async switchCamera() {
    const ids = this.devices.map((device) => device.deviceId);
    const currentIndex = ids.indexOf(this.activeDeviceId);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % ids.length;
    this.activeDeviceId = ids[nextIndex];
    this.stopScanning();
    this.stopVideoStream();
    this.state.status = STATUS.CHANGE_CAMERA;
  }
  async setFrame(src) {
    if (!this.useFrames) {
      return;
    }
    if (!this.host || !this.host.shadowRoot) {
      await this.host.componentOnReady();
    }
    const image = await loadFrame(src);
    if (!this.frame.canvas) {
      const canvas = this.host.shadowRoot.querySelector("#frame");
      const { width, height } = this.container.getBoundingClientRect();
      canvas.width = Math.floor(width);
      canvas.height = Math.floor(height);
      const points = drawFrameOnCanvas(image, canvas, {
        stopInternalCropping: this.stopInternalCropping,
      });
      this.frame = { canvas, source: image, points, filters: [] };
      await this.onCanvasPlay();
      await this.createFilters();
      await this.scan();
      return;
    }
    this.frame.source = image;
    drawFrameOnCanvas(this.frame.source, this.frame.canvas, {
      stopInternalCropping: this.stopInternalCropping,
    });
    await this.scan();
  }
  // Lifecycle
  async componentWillLoad() {
    if (!this.host.isConnected) {
      return;
    }
    this.state.status = STATUS.LOADING_CAMERAS;
    try {
      this.devices = await listVideoInputDevices();
    }
    catch (error) {
      console.error("[psk-barcode-scanner] Error while getting video devices", error);
    }
    if (this.host.hasAttribute("results")) {
      this.useMetadata = true;
    }
    if (this.useFrames) {
      this.state.status = STATUS.DETECTION_STARTED;
      return;
    }
    const preferredDeviceId = getFromLocalStorage(KEY_ACTIVE_DEVICE);
    if (preferredDeviceId) {
      this.activeDeviceId = preferredDeviceId;
    }
    if (this.devices.length === 0) {
      this.state.status = STATUS.NO_DETECTION;
      return;
    }
    this.state.status = STATUS.DETECTION_STARTED;
  }
  async componentDidRender() {
    switch (this.state.status) {
      case STATUS.DETECTION_STARTED:
      case STATUS.CHANGE_CAMERA: {
        this.state.status = STATUS.DETECTION_IN_PROGRESS;
        // initialize references and listeners to DOM elements
        this.initializeReferencesToElements();
        this.attachOnClickForChangeCamera();
        await this.initializeScanningMethod();
        // wait until video is in viewport
        await waitUntilElementIsVisibleInViewport(this.video, 50);
        // request an animation frame
        await waitUntilAnimationFrameIsPossible();
        if (!this.useFrames) {
          await this.startVideoStream(this.activeDeviceId);
        }
      }
    }
  }
  async disconnectedCallback() {
    this.stopScanning();
    this.stopVideoStream();
  }
  render() {
    return [
      h("style", null, getCleanupStyleForShadowDOM()),
      this.useWebWorker ? null : h("script", { async: true, src: KEY_ZXING_PATH, onLoad: this.onZXingBrowserLoad }),
      h("div", { part: "base", style: style.base }, h("div", { id: "container", part: "container", style: style.container }, h("input", { type: "file", accept: "video/*", capture: "environment", style: style.input }), h("video", { id: "video", part: "video", onPlay: this.onVideoPlay, autoplay: true, playsinline: true, hidden: true, style: style.video }), h("canvas", { id: "frame", part: "frame", hidden: true, style: style.video }), h("div", { id: "content", part: "content", innerHTML: this.renderContent() }))),
    ];
  }
  get host() { return getElement(this); }
};
__decorate([
  BindModel()
], PskBarcodeScanner.prototype, "modelHandler", void 0);

export { PskBarcodeScanner as psk_barcode_scanner };
