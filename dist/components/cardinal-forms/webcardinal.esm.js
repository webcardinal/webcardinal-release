import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-8ac0a813.js';
import './index-84d7ff7a.js';
import { g as globalScripts } from './app-globals-26515fc3.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-424264d0.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["psk-date-input",[[0,"psk-date-input",{"label":[1],"value":[1],"name":[1],"placeholder":[1],"required":[1],"readOnly":[4,"read-only"],"type":[1],"invalidValue":[4,"invalid-value"],"dataFormat":[1,"data-format"]}]]],["psk-email-input",[[0,"psk-email-input",{"label":[1],"value":[1],"name":[1],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"invalidValue":[4,"invalid-value"]}]]],["psk-number-input",[[0,"psk-number-input",{"label":[1],"value":[1],"name":[1],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"invalidValue":[4,"invalid-value"]}]]],["psk-password-input",[[0,"psk-password-input",{"label":[1],"value":[1],"name":[1],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"invalidValue":[4,"invalid-value"]}]]],["psk-radio-group",[[4,"psk-radio-group",{"label":[1],"value":[1537],"name":[1],"required":[4],"invalid":[4],"options":[32]},[[0,"onChangeRadio","onChangeRadioHandler"]]]]],["psk-text-input",[[0,"psk-text-input",{"label":[1],"value":[8],"name":[1],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"invalidValue":[4,"invalid-value"]}]]],["psk-checkbox",[[0,"psk-checkbox",{"label":[1],"name":[1],"checkboxLabel":[8,"checkbox-label"],"required":[4],"checked":[1],"value":[1544],"checkedValue":[1,"checked-value"],"uncheckedValue":[1,"unchecked-value"]}]]],["psk-img-input",[[0,"psk-img-input",{"src":[8],"alt":[1],"placeholder":[1],"label":[1],"eventName":[1,"event-name"],"imageSource":[32]}]]],["psk-select",[[0,"psk-select",{"selectOptions":[1,"select-options"],"label":[1],"value":[1],"selectionType":[1,"selection-type"],"placeholder":[1],"required":[4],"disabled":[4],"invalidValue":[4,"invalid-value"],"eventName":[1,"event-name"],"eventData":[8,"event-data"],"options":[32]}]]],["psk-textarea",[[0,"psk-textarea",{"label":[1],"value":[1],"name":[1],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"invalidValue":[4,"invalid-value"]}]]],["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["psk-form",[[4,"psk-form",{"history":[16],"controllerName":[1,"controller-name"],"formActions":[1,"form-actions"],"controller":[32],"disconnected":[32]}]]],["psk-form-row",[[0,"psk-form-row",{"layout":[1]}]]],["stencil-async-content",[[0,"stencil-async-content",{"documentLocation":[1,"document-location"],"content":[32]}]]],["stencil-route",[[0,"stencil-route",{"group":[513],"componentUpdated":[16],"match":[1040],"url":[1],"component":[1],"componentProps":[16],"exact":[4],"routeRender":[16],"scrollTopOffset":[2,"scroll-top-offset"],"routeViewsUpdated":[16],"location":[16],"history":[16],"historyType":[1,"history-type"]}]]],["stencil-route-link",[[4,"stencil-route-link",{"url":[1],"urlMatch":[1,"url-match"],"activeClass":[1,"active-class"],"exact":[4],"strict":[4],"custom":[1],"anchorClass":[1,"anchor-class"],"anchorRole":[1,"anchor-role"],"anchorTitle":[1,"anchor-title"],"anchorTabIndex":[1,"anchor-tab-index"],"anchorId":[1,"anchor-id"],"history":[16],"location":[16],"root":[1],"ariaHaspopup":[1,"aria-haspopup"],"ariaPosinset":[1,"aria-posinset"],"ariaSetsize":[2,"aria-setsize"],"ariaLabel":[1,"aria-label"],"match":[32]}]]],["stencil-route-switch",[[4,"stencil-route-switch",{"group":[513],"scrollTopOffset":[2,"scroll-top-offset"],"location":[16],"routeViewsUpdated":[16]}]]],["stencil-route-title",[[0,"stencil-route-title",{"titleSuffix":[1,"title-suffix"],"pageTitle":[1,"page-title"]}]]],["stencil-router",[[4,"stencil-router",{"root":[1],"historyType":[1,"history-type"],"titleSuffix":[1,"title-suffix"],"scrollTopOffset":[2,"scroll-top-offset"],"location":[32],"history":[32]}]]],["stencil-router-prompt",[[0,"stencil-router-prompt",{"when":[4],"message":[1],"history":[16],"unblock":[32]}]]],["stencil-router-redirect",[[0,"stencil-router-redirect",{"history":[16],"root":[1],"url":[1]}]]],["psk-label",[[4,"psk-label",{"label":[1],"for":[1]}]]],["psk-radio",[[0,"psk-radio",{"label":[1],"value":[1],"name":[1],"readOnly":[4,"read-only"],"invalidValue":[4,"invalid-value"],"checked":[1540]}]]],["psk-input",[[0,"psk-input",{"dataDate":[1,"data-date"],"type":[1],"label":[1],"value":[1],"name":[1],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"invalidValue":[4,"invalid-value"],"dataDateFormat":[1,"data-date-format"],"specificProps":[8,"specific-props"]}]]]], options);
});
