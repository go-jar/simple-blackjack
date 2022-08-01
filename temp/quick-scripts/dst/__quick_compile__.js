
(function () {
var scripts = [{"deps":{"./assets/script/game":1,"./assets/script/instruction":6,"./assets/script/menu":2,"./assets/script/poker":3,"./assets/script/pokerUI":4,"./assets/script/start":5,"./assets/script/achievement":7,"./assets/script/proto/score":53,"./assets/script/client":54},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./poker":3,"./pokerUI":4,"./client":54},"path":"preview-scripts/assets/script/game.js"},{"deps":{},"path":"preview-scripts/assets/script/menu.js"},{"deps":{},"path":"preview-scripts/assets/script/poker.js"},{"deps":{"./poker":3},"path":"preview-scripts/assets/script/pokerUI.js"},{"deps":{},"path":"preview-scripts/assets/script/start.js"},{"deps":{},"path":"preview-scripts/assets/script/instruction.js"},{"deps":{},"path":"preview-scripts/assets/script/achievement.js"},{"deps":{"./src/index-light":9},"path":"preview-scripts/__node_modules/protobufjs/light.js"},{"deps":{"./encoder":11,"./decoder":13,"./verifier":12,"./object":14,"./enum":15,"./oneof":23,"./mapfield":16,"./method":18,"./service":17,"./types":22,"./wrappers":21,"./converter":25,"./namespace":26,"./root":24,"./field":27,"./type":28,"./index-minimal":10,"./message":20,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/index-light.js"},{"deps":{"./util/minimal":35,"./roots":32,"./writer_buffer":30,"./reader_buffer":31,"./writer":33,"./reader":34,"./rpc":29},"path":"preview-scripts/__node_modules/protobufjs/src/index-minimal.js"},{"deps":{"./enum":15,"./types":22,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/encoder.js"},{"deps":{"./enum":15,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/verifier.js"},{"deps":{"./enum":15,"./types":22,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/decoder.js"},{"deps":{"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/object.js"},{"deps":{"./object":14,"./namespace":26,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/enum.js"},{"deps":{"./field":27,"./types":22,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/mapfield.js"},{"deps":{"./namespace":26,"./method":18,"./util":19,"./rpc":29},"path":"preview-scripts/__node_modules/protobufjs/src/service.js"},{"deps":{"./object":14,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/method.js"},{"deps":{"./roots":32,"./type":28,"./enum":15,"./root":24,"./util/minimal":35,"@protobufjs/codegen":38,"@protobufjs/path":40,"@protobufjs/fetch":39},"path":"preview-scripts/__node_modules/protobufjs/src/util.js"},{"deps":{"./util/minimal":35},"path":"preview-scripts/__node_modules/protobufjs/src/message.js"},{"deps":{"./message":20},"path":"preview-scripts/__node_modules/protobufjs/src/wrappers.js"},{"deps":{"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/types.js"},{"deps":{"./object":14,"./field":27,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/oneof.js"},{"deps":{"./namespace":26,"./field":27,"./enum":15,"./oneof":23,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/root.js"},{"deps":{"./enum":15,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/converter.js"},{"deps":{"./object":14,"./field":27,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/namespace.js"},{"deps":{"./object":14,"./enum":15,"./types":22,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/field.js"},{"deps":{"./namespace":26,"./enum":15,"./oneof":23,"./field":27,"./mapfield":16,"./service":17,"./message":20,"./reader":34,"./writer":33,"./util":19,"./encoder":11,"./decoder":13,"./verifier":12,"./converter":25,"./wrappers":21},"path":"preview-scripts/__node_modules/protobufjs/src/type.js"},{"deps":{"./rpc/service":36},"path":"preview-scripts/__node_modules/protobufjs/src/rpc.js"},{"deps":{"./writer":33,"./util/minimal":35},"path":"preview-scripts/__node_modules/protobufjs/src/writer_buffer.js"},{"deps":{"./reader":34,"./util/minimal":35},"path":"preview-scripts/__node_modules/protobufjs/src/reader_buffer.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/roots.js"},{"deps":{"./util/minimal":35},"path":"preview-scripts/__node_modules/protobufjs/src/writer.js"},{"deps":{"./util/minimal":35},"path":"preview-scripts/__node_modules/protobufjs/src/reader.js"},{"deps":{"./longbits":37,"@protobufjs/aspromise":44,"@protobufjs/base64":43,"@protobufjs/inquire":42,"@protobufjs/utf8":45,"@protobufjs/eventemitter":41,"@protobufjs/pool":46,"@protobufjs/float":47},"path":"preview-scripts/__node_modules/protobufjs/src/util/minimal.js"},{"deps":{"../util/minimal":35},"path":"preview-scripts/__node_modules/protobufjs/src/rpc/service.js"},{"deps":{"../util/minimal":35},"path":"preview-scripts/__node_modules/protobufjs/src/util/longbits.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/codegen/index.js"},{"deps":{"@protobufjs/aspromise":44,"@protobufjs/inquire":42},"path":"preview-scripts/__node_modules/@protobufjs/fetch/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/path/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/eventemitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/inquire/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/base64/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/aspromise/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/utf8/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/pool/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/float/index.js"},{"deps":{"./src/index":49},"path":"preview-scripts/__node_modules/protobufjs/index.js"},{"deps":{"./tokenize":50,"./common":51,"./parse":52,"./index-light":9},"path":"preview-scripts/__node_modules/protobufjs/src/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/tokenize.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/common.js"},{"deps":{"./tokenize":50,"./root":24,"./type":28,"./field":27,"./mapfield":16,"./oneof":23,"./enum":15,"./service":17,"./method":18,"./types":22,"./util":19},"path":"preview-scripts/__node_modules/protobufjs/src/parse.js"},{"deps":{},"path":"preview-scripts/assets/script/proto/score.js"},{"deps":{"json-rpc-2.0":92},"path":"preview-scripts/assets/script/client.js"},{"deps":{"./lib/axios":56},"path":"preview-scripts/__node_modules/axios/index.js"},{"deps":{"./helpers/bind":62,"./helpers/spread":61,"./cancel/isCancel":66,"./env/data":64,"./utils":68,"./helpers/isAxiosError":60,"../lib/core/AxiosError":58,"./core/mergeConfig":63,"./cancel/CancelToken":59,"./cancel/CanceledError":67,"./helpers/toFormData":57,"./core/Axios":65,"./defaults":69},"path":"preview-scripts/__node_modules/axios/lib/axios.js"},{"deps":{"../utils":68,"buffer":70},"path":"preview-scripts/__node_modules/axios/lib/helpers/toFormData.js"},{"deps":{"../utils":68},"path":"preview-scripts/__node_modules/axios/lib/core/AxiosError.js"},{"deps":{"./CanceledError":67},"path":"preview-scripts/__node_modules/axios/lib/cancel/CancelToken.js"},{"deps":{"./../utils":68},"path":"preview-scripts/__node_modules/axios/lib/helpers/isAxiosError.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/spread.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/bind.js"},{"deps":{"../utils":68},"path":"preview-scripts/__node_modules/axios/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/env/data.js"},{"deps":{"./../utils":68,"./mergeConfig":63,"../helpers/buildURL":74,"./InterceptorManager":75,"../helpers/validator":76,"./buildFullPath":78,"./dispatchRequest":77},"path":"preview-scripts/__node_modules/axios/lib/core/Axios.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/cancel/isCancel.js"},{"deps":{"../core/AxiosError":58,"../utils":68},"path":"preview-scripts/__node_modules/axios/lib/cancel/CanceledError.js"},{"deps":{"./helpers/bind":62},"path":"preview-scripts/__node_modules/axios/lib/utils.js"},{"deps":{"../../../../../../../Applications/CocosCreator.app/Contents/Resources/app.asar/node_modules/process/browser.js":71,"../utils":68,"../core/AxiosError":58,"../helpers/toFormData":57,"./transitional":81,"../adapters/xhr":82,"./env/FormData":83,"../helpers/normalizeHeaderName":80,"../adapters/http":82},"path":"preview-scripts/__node_modules/axios/lib/defaults/index.js"},{"deps":{"base64-js":72,"ieee754":73,"isarray":79},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./../utils":68},"path":"preview-scripts/__node_modules/axios/lib/helpers/buildURL.js"},{"deps":{"./../utils":68},"path":"preview-scripts/__node_modules/axios/lib/core/InterceptorManager.js"},{"deps":{"../env/data":64,"../core/AxiosError":58},"path":"preview-scripts/__node_modules/axios/lib/helpers/validator.js"},{"deps":{"./../utils":68,"../cancel/isCancel":66,"../cancel/CanceledError":67,"../defaults":69,"./transformData":85},"path":"preview-scripts/__node_modules/axios/lib/core/dispatchRequest.js"},{"deps":{"../helpers/isAbsoluteURL":84,"../helpers/combineURLs":86},"path":"preview-scripts/__node_modules/axios/lib/core/buildFullPath.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"../utils":68},"path":"preview-scripts/__node_modules/axios/lib/helpers/normalizeHeaderName.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/defaults/transitional.js"},{"deps":{"./../utils":68,"./../helpers/buildURL":74,"../core/buildFullPath":78,"../defaults/transitional":81,"../core/AxiosError":58,"../cancel/CanceledError":67,"../helpers/parseProtocol":90,"./../core/settle":87,"./../helpers/cookies":88,"./../helpers/parseHeaders":91,"./../helpers/isURLSameOrigin":89},"path":"preview-scripts/__node_modules/axios/lib/adapters/xhr.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/null.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/isAbsoluteURL.js"},{"deps":{"./../utils":68,"../defaults":69},"path":"preview-scripts/__node_modules/axios/lib/core/transformData.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/combineURLs.js"},{"deps":{"./AxiosError":58},"path":"preview-scripts/__node_modules/axios/lib/core/settle.js"},{"deps":{"./../utils":68},"path":"preview-scripts/__node_modules/axios/lib/helpers/cookies.js"},{"deps":{"./../utils":68},"path":"preview-scripts/__node_modules/axios/lib/helpers/isURLSameOrigin.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/parseProtocol.js"},{"deps":{"./../utils":68},"path":"preview-scripts/__node_modules/axios/lib/helpers/parseHeaders.js"},{"deps":{"./models":94,"./server":96,"./server-and-client":93,"./client":95},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/index.js"},{"deps":{"./models":94},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/server-and-client.js"},{"deps":{},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/models.js"},{"deps":{"./models":94,"./internal":97},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/client.js"},{"deps":{"./models":94,"./internal":97},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/server.js"},{"deps":{},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/internal.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    