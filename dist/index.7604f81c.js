// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9GzPh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f15ebad47604f81c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"3rStQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _infoVeiw = require("./Veiws/infoVeiw");
var _infoVeiwDefault = parcelHelpers.interopDefault(_infoVeiw);
var _veiw = require("./Veiws/veiw");
var _veiwDefault = parcelHelpers.interopDefault(_veiw);
var _selectPlanVeiw = require("./Veiws/selectPlanVeiw");
var _selectPlanVeiwDefault = parcelHelpers.interopDefault(_selectPlanVeiw);
var _addOnVeiw = require("./Veiws/addOnVeiw");
var _addOnVeiwDefault = parcelHelpers.interopDefault(_addOnVeiw);
var _addon = require("./Veiws/addon");
var _addonDefault = parcelHelpers.interopDefault(_addon);
var _summaryView = require("./Veiws/summaryView");
var _summaryViewDefault = parcelHelpers.interopDefault(_summaryView);
const loadSelectPlan = function(parentEl) {
    if (checkDataPresent((0, _infoVeiwDefault.default)._username) && checkMail((0, _infoVeiwDefault.default)._email) && checkDataPresent((0, _infoVeiwDefault.default)._phNumber)) {
        (0, _infoVeiwDefault.default)._render((0, _infoVeiwDefault.default)._generateMarkup(), parentEl);
        (0, _infoVeiwDefault.default)._activateCurrentSection((0, _infoVeiwDefault.default)._currentSection);
    }
    //if no username entered
    if (!checkDataPresent((0, _infoVeiwDefault.default)._username)) (0, _infoVeiwDefault.default)._userNameNASection.classList.remove('hide');
    if (!checkMail._email) (0, _infoVeiwDefault.default)._emailNASection.classList.remove('hide');
    if (!checkDataPresent((0, _infoVeiwDefault.default)._phNumber)) (0, _infoVeiwDefault.default)._phNumberNASection.classList.remove('hide');
};
//function to load previous(info) plan
const loadInfoPlan = function(parentEl) {
    (0, _infoVeiwDefault.default)._render((0, _infoVeiwDefault.default)._currentPageMarkup, parentEl);
};
//function to test weather data is present in the text box
const checkDataPresent = function(element) {
    if (element.value) return true;
};
//function to check weather email is in the correct format
const checkMail = function(element) {
    if (element.value.includes('@') && element.value.endsWith('.com')) return true;
};
//function to load add-on page
const loadAddOn = function(parentEl) {
    (0, _addOnVeiwDefault.default)._render((0, _addOnVeiwDefault.default)._generateMarkup(), parentEl);
    (0, _addOnVeiwDefault.default)._activateCurrentSection((0, _addOnVeiwDefault.default)._currentSection);
};
//function to load summary page
const loadSummary = function(parentEl) {
    (0, _summaryViewDefault.default)._render((0, _summaryViewDefault.default)._generateMarkup(), parentEl);
    (0, _summaryViewDefault.default)._activateCurrentSection((0, _summaryViewDefault.default)._currentSection);
};
//load sucess message
const loadSucessMessage = function(parentEl) {
    (0, _summaryViewDefault.default)._render((0, _summaryViewDefault.default)._generateSucessMarkUp(), parentEl);
};
let init = function() {
    (0, _infoVeiwDefault.default).addHandlerRender(loadSelectPlan);
    (0, _selectPlanVeiwDefault.default).addHandlerActivateCard();
    (0, _selectPlanVeiwDefault.default).addHandlerToggle();
    (0, _addOnVeiwDefault.default).addHandlerRenderAddOn(loadAddOn);
    (0, _addonDefault.default).addHandlerGetData();
    (0, _summaryViewDefault.default).addHandlerRender(loadSummary);
    (0, _addOnVeiwDefault.default).addHandlerRenderSelectPlan(loadSelectPlan);
    (0, _summaryViewDefault.default).addHandlerRenderAddOn(loadAddOn);
    (0, _summaryViewDefault.default).insertAddonsSelected();
    (0, _summaryViewDefault.default).renderSelectPlanOnClick(loadSelectPlan);
    (0, _summaryViewDefault.default).renderSucessMessage(loadSucessMessage);
    (0, _addOnVeiwDefault.default).onClickCheckBox();
};
init();

},{"./Veiws/infoVeiw":"gp6od","./Veiws/veiw":"fjehN","./Veiws/selectPlanVeiw":"enGlT","./Veiws/addOnVeiw":"2H5aB","./Veiws/addon":"7OOIn","./Veiws/summaryView":"goTV8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gp6od":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _veiw = require("./veiw");
var _veiwDefault = parcelHelpers.interopDefault(_veiw);
var _iconArcadeSvg = require("url:../assets/images/icon-arcade.svg");
var _iconArcadeSvgDefault = parcelHelpers.interopDefault(_iconArcadeSvg);
var _iconAdvancedSvg = require("url:../assets/images/icon-advanced.svg");
var _iconAdvancedSvgDefault = parcelHelpers.interopDefault(_iconAdvancedSvg);
var _iconProSvg = require("url:../assets/images/icon-pro.svg");
var _iconProSvgDefault = parcelHelpers.interopDefault(_iconProSvg);
class Infoview extends (0, _veiwDefault.default) {
    _parentEl = document.querySelector('#container');
    _currentSection = document.querySelectorAll('.plan-section');
    _previousSectionBtn = document.querySelector('.infoSection');
    _username = document.querySelector('#username');
    _email = document.querySelector('#email');
    _phNumber = document.querySelector('#ph-no');
    _userNameNASection = document.querySelector('.messageUserName');
    _emailNASection = document.querySelector('.messageemail');
    _phNumberNASection = document.querySelector('.messagePhNumber');
    veiw = new (0, _veiwDefault.default)();
    _generateMarkup() {
        return `<section class="select-plan">
  <div class="heading">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing</p>
  </div>
  <div class="card-container">
<div class="card" data-planSelected='arcade-card'>
  <div class="card-icons">
    <img src="${0, _iconArcadeSvgDefault.default}" alt="">
  </div>
  <div class="card-info">
    <h3 class='planname'>Arcade</h3>
    <p class="arcade-cost">$9/mo</p>
    <p class="free-duration hide">2 months free</p>
  </div>
  </div>
  <div class="card" data-planSelected='advanced-card'>
    <div class="card-icon">
      <img src="${0, _iconAdvancedSvgDefault.default}" alt="">
    </div>
    <div class="card-info">
      <h3>Advanced</h3>
      <p class="advanced-cost">$12/mo</p>
      <p class="free-duration hide">2 months free</p>
    </div>
    </div>
    <div class="card pro-card" data-planSelected='pro-card'>
      <div class="card-icon">
        <img src="${0, _iconProSvgDefault.default}" alt="">
      </div>
      <div class="card-info">
        <h3>Pro</h3>
        <p class="pro-cost">$15/mo</p>
        <p class="free-duration hide">2 months free</p>
      </div>
      </div>
  </div>
<div class="toggle-section">
  <label for="month">Monthly</label>
  <div class="radio-btn">
    <input type="radio" name="option" value="month"  id="month" class="option">
    <input type="radio" name="option" value="year" id="year"  class="option">
    <div class="slider"></div>
  </div>
  <label for="year">Yearly</label>
</div>
</section>
<div class="back-btn">
  <button class='infoSection'>Go Back</button>
</div>
<div class="button">
  <button class="select-plan">Next Step</button>
</div>`;
    }
    _currentPageMarkup() {
        return `
  <section class="your-info">
<div class="heading">
  <h1>Personal info</h1>
  <p>Please provide your name,email address, and phone number.</p>
</div>
<div class="name input-style ">
  <label for="username">Name</label>
  <input type="text" name="" id="username" placeholder="e.g Mir Hanan" class="textbox-style" required>
</div>
<div class="email input-style ">
  <label for="email">Email Address</label>
<input type="email" name="" id="email" class="textbox-style" placeholder="hanan@gmail.com" required>
</div>
<div class="phone-number input-style ">
  <label for="ph-no">Phone Number</label>
<input type="number" name="" id="ph-no" class="textbox-style" placeholder="+91 7780964843" required>
</div>
</section>
<div class="button">
  <button class="next">Next Step</button>
</div>
  `;
    }
    addHandlerRender(handler) {
        this.veiw._btnNext.addEventListener('click', (e)=>{
            e.preventDefault();
            handler(this._parentEl);
        });
    }
    addHanderRender(handler) {
        this._previousSectionBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            handler(this._parentEl);
        });
    }
}
exports.default = new Infoview();

},{"./veiw":"fjehN","url:../assets/images/icon-arcade.svg":"5k8VQ","url:../assets/images/icon-advanced.svg":"9gsvG","url:../assets/images/icon-pro.svg":"ei7Nk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjehN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    _btnNext = document.querySelector('.next');
    _listOfSections = document.querySelectorAll('.step-count');
    //function to render the html form
    _render = function(data, parentEl) {
        this._data = data;
        let markup = this._data;
        this.clear(parentEl);
        parentEl.insertAdjacentHTML('afterbegin', markup);
    };
    clear(parentEl) {
        parentEl.innerHTML = '';
    }
    //function that will highlight the current active section
    _activateCurrentSection = function(curSection) {
        this._listOfSections.forEach((section)=>{
            section.classList.remove('active');
        });
        curSection.forEach((section)=>{
            section.classList.add('active');
            section.style.color = "black";
        });
    };
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5k8VQ":[function(require,module,exports,__globalThis) {
module.exports = require("f6ac3733935f832a").getBundleURL('kIO2i') + "icon-arcade.44dd9f51.svg" + "?" + Date.now();

},{"f6ac3733935f832a":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9gsvG":[function(require,module,exports,__globalThis) {
module.exports = require("70a8c7602aaa9bf8").getBundleURL('kIO2i') + "icon-advanced.c39f718a.svg" + "?" + Date.now();

},{"70a8c7602aaa9bf8":"lgJ39"}],"ei7Nk":[function(require,module,exports,__globalThis) {
module.exports = require("94a891b2e1f4b76").getBundleURL('kIO2i') + "icon-pro.1aade4d1.svg" + "?" + Date.now();

},{"94a891b2e1f4b76":"lgJ39"}],"enGlT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _veiw = require("./veiw");
var _veiwDefault = parcelHelpers.interopDefault(_veiw);
class SelectPlanVeiw extends (0, _veiwDefault.default) {
    _parentEl = document.querySelector('.right');
    optionSelected = 'month';
    _planSelected;
    _costEl;
    _planCost;
    //function for option selected
    optionSelectedfun(option) {
        this.optionSelected = option;
    }
    //using event delegation
    addHandlerActivateCard() {
        this._parentEl.addEventListener('click', (e)=>{
            const clickedCard = e.target.closest('.card');
            //To activate the current card
            if (e.target.classList.contains('card')) {
                const allCards = document.querySelectorAll('.card');
                allCards.forEach((card)=>{
                    card.classList.remove('active-card');
                });
                if (!clickedCard) return;
                clickedCard.classList.add('active-card');
                this._planSelected = clickedCard.dataset.planselected;
                this._costEl = document.querySelector(`.${this._planSelected.replace('-card', '-cost')}`);
                this._planCost = this._costEl.innerHTML;
                console.log(this._planCost);
            }
        });
    }
    //To move the toggle section and change the data on the card accordingly
    addHandlerToggle() {
        this._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('option')) {
                let selectedOption = e.target.value;
                let arcadeCost = document.querySelector('.arcade-cost');
                let advancedCost = document.querySelector('.advanced-cost');
                let proCost = document.querySelector('.pro-cost');
                let description = document.querySelectorAll('.free-duration');
                if (selectedOption == 'month') {
                    arcadeCost.innerHTML = '';
                    arcadeCost.innerHTML = "$9/month";
                    advancedCost.innerHTML = "";
                    advancedCost.innerHTML = "$12/mo";
                    proCost.innerHTML = "";
                    proCost.innerHTML = "$15/mo";
                    description.forEach((des)=>{
                        des.classList.add('hide');
                    });
                    this.optionSelectedfun('month');
                    this._planCost = this._costEl.innerHTML;
                    console.log(this._planCost);
                }
                if (selectedOption == 'year') {
                    arcadeCost.innerHTML = '';
                    arcadeCost.innerHTML = "$90/yr";
                    advancedCost.innerHTML = "";
                    advancedCost.innerHTML = "$120/yr";
                    proCost.innerHTML = "";
                    proCost.innerHTML = "$150/yr";
                    description.forEach((des)=>{
                        des.classList.remove('hide');
                    });
                    this.optionSelectedfun('year');
                    this._planCost = this._costEl.innerHTML;
                    console.log(this._planCost);
                }
            }
        });
    }
}
exports.default = new SelectPlanVeiw();

},{"./veiw":"fjehN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2H5aB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _veiw = require("./veiw");
var _veiwDefault = parcelHelpers.interopDefault(_veiw);
var _selectPlanVeiw = require("./selectPlanVeiw");
var _selectPlanVeiwDefault = parcelHelpers.interopDefault(_selectPlanVeiw);
var _infoVeiw = require("./infoVeiw");
var _infoVeiwDefault = parcelHelpers.interopDefault(_infoVeiw);
class AddOnVeiw extends (0, _veiwDefault.default) {
    planSelected;
    planCost;
    _currentSection = document.querySelectorAll('.addOn-section');
    _selectedAddOn = document.querySelectorAll('.addOn');
    setPlanData(planSelected, planCost) {
        this.planSelected = planSelected;
        this.planCost = planCost;
    }
    _generateMarkup() {
        if ((0, _selectPlanVeiwDefault.default).optionSelected == 'month') return `<section class="add-on">
  <div class="heading">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
<div class="addon-container">
<div class="addon-description"'>
  <input type="checkbox" name="" id="" value='online-service' class='addOn'>
  <div class="addon-type">
    <h3>Online service</h3>
    <p>Access to multiplayer games</p>
  </div>
  <div class="cost"><p class="online-service">+$1/mo</p>
  <p class="hide online-service">+$10/yr</p>
  </div>
</div>
<div class="addon-description" value='larger-storage'>
  <input type="checkbox" name="" id="" value='larger-storage' class='addOn'>
  <div class="addon-type type2">
   <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
  </div>
  <div class="cost"><p class='larger-storage'>+$2/mo</p>
    <p class="hide larger-storage">+$20/yr</p>
  </div>
</div>
<div class="addon-description" value='customizable-profile'>
  <input type="checkbox" name="" id="" value='customizable-profile' class='addOn'>
  <div class="addon-type">
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
  </div>
  <div class="cost"><p class='customizable-profile'>+$2/mo</p>
    <p class="hide customizable-profile">+$20/yr</p>
  </div>
</div>

</div>
</section> 
<div class="back-btn">
  <button class='selectPlan'>Go Back</button>
</div>
<div class="button">
  <button class="summary">Next Step</button>
</div>`;
        if ((0, _selectPlanVeiwDefault.default).optionSelected == 'year') return ` <section class="add-on">
  <div class="heading">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
<div class="addon-container">
<div class="addon-description">
  <input type="checkbox" name="" id="" value='online-service' class='addOn'>
  <div class="addon-type">
    <h3>Online service</h3>
    <p>Access to multiplayer games</p>
  </div>
  <div class="cost">
  <p class="online-service">+$10/yr</p>
  </div>
</div>
<div class="addon-description">
  <input type="checkbox" name="" id="" value='larger-storage' class='addOn'>
  <div class="addon-type type2">
   <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
  </div>
  <div class="cost">
    <p class='larger-storage'>+$20/yr</p>
  </div>
</div>
<div class="addon-description">
  <input type="checkbox" name="" id="" value='customizable-profile' class='addOn'>
  <div class="addon-type">
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
  </div>
  <div class="cost">
    <p class='customizable-profile'>+$20/yr</p>
  </div>
</div>

</div>
</section><div class="back-btn">
  <button class='selectPlan'>Go Back</button>
</div>
<div class="button">
  <button class="summary">Next Step</button>
</div> `;
    }
    addHandlerRenderAddOn(handler) {
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('select-plan')) {
                e.preventDefault();
                let activeCard = document.querySelector('.active-card');
                if (activeCard) {
                    handler((0, _infoVeiwDefault.default)._parentEl);
                    console.log(this._selectedAddOn);
                    this._selectedAddOn.forEach((addon)=>{
                        if (addon.checked) alert(addon.value);
                    });
                }
            }
        });
    }
    addHandlerRenderSelectPlan(handler) {
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('selectPlan')) handler((0, _infoVeiwDefault.default)._parentEl);
        });
    }
    onClickCheckBox() {
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('selectPlan')) {
                let container = document.querySelectorAll('.addon-description');
                container.forEach((el)=>{
                    console.log(el);
                    el.addEventListener('click', ()=>{
                        alert('Clicked');
                    });
                });
            }
        });
    }
}
exports.default = new AddOnVeiw();

},{"./veiw":"fjehN","./selectPlanVeiw":"enGlT","./infoVeiw":"gp6od","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OOIn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _selectPlanVeiw = require("./selectPlanVeiw");
var _selectPlanVeiwDefault = parcelHelpers.interopDefault(_selectPlanVeiw);
var _addOnVeiw = require("./addOnVeiw");
var _addOnVeiwDefault = parcelHelpers.interopDefault(_addOnVeiw);
var _infoVeiw = require("./infoVeiw");
var _infoVeiwDefault = parcelHelpers.interopDefault(_infoVeiw);
var _veiw = require("./veiw");
var _veiwDefault = parcelHelpers.interopDefault(_veiw);
class Addon extends (0, _veiwDefault.default) {
    _addonSelected = [];
    _addOnMap = new Map();
    addHandlerGetData() {
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (e.target.closest('.add-on')) {
                const addOns = document.querySelectorAll('.addOn');
                addOns.forEach((addon)=>{
                    if (addon.checked && !this._addonSelected.includes(addon.value)) this._addonSelected.push(addon.value);
                    if (!addon.checked && this._addonSelected.includes(addon.value)) {
                        const index = this._addonSelected.indexOf(addon.value);
                        console.log(this._addonSelected[index]);
                        this._addOnMap.delete(this._addonSelected[index]);
                        this._addonSelected.splice(index, 1);
                    }
                });
                console.log(this._addonSelected);
                for(let i = 0; i < this._addonSelected.length; i++){
                    let addonEl = document.querySelector(`.${this._addonSelected[i]}`);
                    this._addOnMap.set(`${this._addonSelected[i]}`, `${addonEl.innerHTML}`);
                }
                console.log(this._addOnMap);
            }
        });
    }
}
exports.default = new Addon();

},{"./selectPlanVeiw":"enGlT","./addOnVeiw":"2H5aB","./infoVeiw":"gp6od","./veiw":"fjehN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"goTV8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _veiw = require("./veiw");
var _veiwDefault = parcelHelpers.interopDefault(_veiw);
var _addOnVeiw = require("./addOnVeiw");
var _addOnVeiwDefault = parcelHelpers.interopDefault(_addOnVeiw);
var _infoVeiw = require("./infoVeiw");
var _infoVeiwDefault = parcelHelpers.interopDefault(_infoVeiw);
var _addon = require("./addon");
var _addonDefault = parcelHelpers.interopDefault(_addon);
var _selectPlanVeiw = require("./selectPlanVeiw");
var _selectPlanVeiwDefault = parcelHelpers.interopDefault(_selectPlanVeiw);
var _iconThankYouSvg = require("url:../assets/images/icon-thank-you.svg");
var _iconThankYouSvgDefault = parcelHelpers.interopDefault(_iconThankYouSvg);
class Summary extends (0, _veiwDefault.default) {
    _currentSection = document.querySelectorAll('.summary-section');
    _load = true;
    _getStringFormat(plan) {
        return plan.charAt(0).toUpperCase() + plan.slice(1);
    }
    _generateMarkup() {
        return ` <section class="finishing-up">
  <div class="heading">
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>
  </div>
  <div class="summary-container">
<div class="selected-plan">
  <div class="plan">
  <p class="plan-name">${this._getStringFormat((0, _selectPlanVeiwDefault.default)._planSelected).replace('-card', '')} (${this._getStringFormat((0, _selectPlanVeiwDefault.default).optionSelected)}ly)</p>
  <a href="#" class="change">Change</a>
</div>
<p class="price pmonthly">${(0, _selectPlanVeiwDefault.default)._planCost}</p>
<p class="price pyearly hide">$90/yr</p>
</div>
<div class="break"></div>

  </div>
  
  </section>
  <div class="total-month">
    <p class="totalM">Total(per ${(0, _selectPlanVeiwDefault.default).optionSelected})</p>
    <p class="totalM-cost tmonthly tcost ">+$12/mo</p>
    <p class="totalM-cost tyearly hide">+$120/yr</p>
  </div>
  <div class="back-btn">
  <button class='addon'>Go Back</button>
</div>
  <div class="button">
  <button class="btn-confirm">Confirm</button>
</div>
  `;
    }
    _generateSucessMarkUp() {
        return `<section class="sucess-container">
  <div class="sucess">
<img src="${0, _iconThankYouSvgDefault.default}" alt="">
<h1>Thank you!</h1>
<p class="sucess-msg">Thanks for confirming your subscription!We hope you have fun using our platform.If you ever need support,please feel free to email us at support@hanan.com.</p>
</div>
</section>`;
    }
    addHandlerRender(handler) {
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('summary')) handler((0, _infoVeiwDefault.default)._parentEl);
        });
    }
    addHandlerRenderAddOn(handler) {
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('addon')) {
                handler((0, _infoVeiwDefault.default)._parentEl);
                this._load = true;
            }
        });
    }
    //function to insert html in the table based on the adddons selected
    insertAddonsSelected() {
        // window.addEventListener('load',(e)=>{
        //   if(document.querySelector('.summary-container')){
        //     alert("page loaded sucessfully");
        //   }
        // })
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (document.querySelector('.finishing-up') && this._load) {
                let totalSum = this.getNumber((0, _selectPlanVeiwDefault.default)._planCost, 1);
                let container = document.querySelector('.summary-container');
                let total = document.querySelector('.tcost');
                // total.innerHTML=this.getNumber(selectPlanVeiw._planCost);
                console.log(container);
                if (this._load) (0, _addonDefault.default)._addOnMap.forEach((value, key)=>{
                    const row = document.createElement('div');
                    totalSum += this.getNumber(value, 2);
                    row.classList.add('storage-type');
                    row.innerHTML = `<p class="service-name">${key}</p>
  <p class="service-cost smonthly">${value}</p>`;
                    container.appendChild(row);
                });
                this._load = false;
                if ((0, _selectPlanVeiwDefault.default).optionSelected == 'month') total.innerHTML = `+$${totalSum}/mo`;
                else total.innerHTML = `+$${totalSum}/yr`;
            }
        });
    }
    getNumber(str, startIndex) {
        let endIndex = str.indexOf('/');
        let amount = +str.slice(startIndex, endIndex);
        return amount;
    }
    //load select plan
    renderSelectPlanOnClick(handler) {
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('change')) {
                handler((0, _infoVeiwDefault.default)._parentEl);
                this._load = true;
            }
        });
    }
    //render sucess message
    renderSucessMessage(handler) {
        (0, _selectPlanVeiwDefault.default)._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('btn-confirm')) {
                console.log('Hello');
                handler((0, _selectPlanVeiwDefault.default)._parentEl);
            }
        });
    }
}
exports.default = new Summary();

},{"./veiw":"fjehN","./addOnVeiw":"2H5aB","./infoVeiw":"gp6od","./addon":"7OOIn","./selectPlanVeiw":"enGlT","url:../assets/images/icon-thank-you.svg":"7kkXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kkXk":[function(require,module,exports,__globalThis) {
module.exports = require("859a7b69c3eaaecb").getBundleURL('kIO2i') + "icon-thank-you.1ebd1db2.svg" + "?" + Date.now();

},{"859a7b69c3eaaecb":"lgJ39"}]},["9GzPh","3rStQ"], "3rStQ", "parcelRequire94c2")

//# sourceMappingURL=index.7604f81c.js.map
