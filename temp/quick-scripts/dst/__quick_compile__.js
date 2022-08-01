
(function () {
var scripts = [{"deps":{"./assets/script/client":52,"./assets/script/game":1,"./assets/script/help":96,"./assets/script/menu":2,"./assets/script/pokerUI":3,"./assets/script/start":4,"./assets/script/achievement":5,"./assets/script/entity/poker":98,"./assets/script/entity/achievementItem":99,"./assets/script/proto/score":51,"./assets/script/achievementItemUI":97},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./pokerUI":3,"./entity/poker":98},"path":"preview-scripts/assets/script/game.js"},{"deps":{},"path":"preview-scripts/assets/script/menu.js"},{"deps":{"./entity/poker":98},"path":"preview-scripts/assets/script/pokerUI.js"},{"deps":{},"path":"preview-scripts/assets/script/start.js"},{"deps":{"./achievementItemUI":97,"./entity/achievementItem":99},"path":"preview-scripts/assets/script/achievement.js"},{"deps":{"./src/index-light":7},"path":"preview-scripts/__node_modules/protobufjs/light.js"},{"deps":{"./encoder":9,"./decoder":11,"./verifier":10,"./object":12,"./enum":13,"./oneof":21,"./mapfield":14,"./method":16,"./service":15,"./types":20,"./wrappers":19,"./converter":23,"./namespace":24,"./root":22,"./field":25,"./type":26,"./index-minimal":8,"./message":18,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/index-light.js"},{"deps":{"./util/minimal":33,"./roots":30,"./writer_buffer":28,"./reader_buffer":29,"./writer":31,"./reader":32,"./rpc":27},"path":"preview-scripts/__node_modules/protobufjs/src/index-minimal.js"},{"deps":{"./enum":13,"./types":20,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/encoder.js"},{"deps":{"./enum":13,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/verifier.js"},{"deps":{"./enum":13,"./types":20,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/decoder.js"},{"deps":{"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/object.js"},{"deps":{"./object":12,"./namespace":24,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/enum.js"},{"deps":{"./field":25,"./types":20,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/mapfield.js"},{"deps":{"./namespace":24,"./method":16,"./util":17,"./rpc":27},"path":"preview-scripts/__node_modules/protobufjs/src/service.js"},{"deps":{"./object":12,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/method.js"},{"deps":{"./roots":30,"./type":26,"./enum":13,"./root":22,"./util/minimal":33,"@protobufjs/codegen":36,"@protobufjs/path":38,"@protobufjs/fetch":37},"path":"preview-scripts/__node_modules/protobufjs/src/util.js"},{"deps":{"./util/minimal":33},"path":"preview-scripts/__node_modules/protobufjs/src/message.js"},{"deps":{"./message":18},"path":"preview-scripts/__node_modules/protobufjs/src/wrappers.js"},{"deps":{"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/types.js"},{"deps":{"./object":12,"./field":25,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/oneof.js"},{"deps":{"./namespace":24,"./field":25,"./enum":13,"./oneof":21,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/root.js"},{"deps":{"./enum":13,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/converter.js"},{"deps":{"./object":12,"./field":25,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/namespace.js"},{"deps":{"./object":12,"./enum":13,"./types":20,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/field.js"},{"deps":{"./namespace":24,"./enum":13,"./oneof":21,"./field":25,"./mapfield":14,"./service":15,"./message":18,"./reader":32,"./writer":31,"./util":17,"./encoder":9,"./decoder":11,"./verifier":10,"./converter":23,"./wrappers":19},"path":"preview-scripts/__node_modules/protobufjs/src/type.js"},{"deps":{"./rpc/service":34},"path":"preview-scripts/__node_modules/protobufjs/src/rpc.js"},{"deps":{"./writer":31,"./util/minimal":33},"path":"preview-scripts/__node_modules/protobufjs/src/writer_buffer.js"},{"deps":{"./reader":32,"./util/minimal":33},"path":"preview-scripts/__node_modules/protobufjs/src/reader_buffer.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/roots.js"},{"deps":{"./util/minimal":33},"path":"preview-scripts/__node_modules/protobufjs/src/writer.js"},{"deps":{"./util/minimal":33},"path":"preview-scripts/__node_modules/protobufjs/src/reader.js"},{"deps":{"./longbits":35,"@protobufjs/aspromise":42,"@protobufjs/base64":41,"@protobufjs/inquire":40,"@protobufjs/utf8":43,"@protobufjs/eventemitter":39,"@protobufjs/pool":44,"@protobufjs/float":45},"path":"preview-scripts/__node_modules/protobufjs/src/util/minimal.js"},{"deps":{"../util/minimal":33},"path":"preview-scripts/__node_modules/protobufjs/src/rpc/service.js"},{"deps":{"../util/minimal":33},"path":"preview-scripts/__node_modules/protobufjs/src/util/longbits.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/codegen/index.js"},{"deps":{"@protobufjs/aspromise":42,"@protobufjs/inquire":40},"path":"preview-scripts/__node_modules/@protobufjs/fetch/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/path/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/eventemitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/inquire/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/base64/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/aspromise/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/utf8/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/pool/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/float/index.js"},{"deps":{"./src/index":47},"path":"preview-scripts/__node_modules/protobufjs/index.js"},{"deps":{"./tokenize":48,"./common":49,"./parse":50,"./index-light":7},"path":"preview-scripts/__node_modules/protobufjs/src/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/tokenize.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/common.js"},{"deps":{"./tokenize":48,"./root":22,"./type":26,"./field":25,"./mapfield":14,"./oneof":21,"./enum":13,"./service":15,"./method":16,"./types":20,"./util":17},"path":"preview-scripts/__node_modules/protobufjs/src/parse.js"},{"deps":{},"path":"preview-scripts/assets/script/proto/score.js"},{"deps":{"json-rpc-2.0":90},"path":"preview-scripts/assets/script/client.js"},{"deps":{"./lib/axios":54},"path":"preview-scripts/__node_modules/axios/index.js"},{"deps":{"./helpers/bind":60,"./helpers/spread":59,"./cancel/isCancel":64,"./env/data":62,"./utils":66,"./helpers/isAxiosError":58,"../lib/core/AxiosError":56,"./core/mergeConfig":61,"./cancel/CancelToken":57,"./cancel/CanceledError":65,"./helpers/toFormData":55,"./core/Axios":63,"./defaults":67},"path":"preview-scripts/__node_modules/axios/lib/axios.js"},{"deps":{"../utils":66,"buffer":68},"path":"preview-scripts/__node_modules/axios/lib/helpers/toFormData.js"},{"deps":{"../utils":66},"path":"preview-scripts/__node_modules/axios/lib/core/AxiosError.js"},{"deps":{"./CanceledError":65},"path":"preview-scripts/__node_modules/axios/lib/cancel/CancelToken.js"},{"deps":{"./../utils":66},"path":"preview-scripts/__node_modules/axios/lib/helpers/isAxiosError.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/spread.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/bind.js"},{"deps":{"../utils":66},"path":"preview-scripts/__node_modules/axios/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/env/data.js"},{"deps":{"./../utils":66,"./mergeConfig":61,"../helpers/buildURL":72,"./InterceptorManager":73,"../helpers/validator":74,"./buildFullPath":76,"./dispatchRequest":75},"path":"preview-scripts/__node_modules/axios/lib/core/Axios.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/cancel/isCancel.js"},{"deps":{"../core/AxiosError":56,"../utils":66},"path":"preview-scripts/__node_modules/axios/lib/cancel/CanceledError.js"},{"deps":{"./helpers/bind":60},"path":"preview-scripts/__node_modules/axios/lib/utils.js"},{"deps":{"../../../../../../../Applications/CocosCreator.app/Contents/Resources/app.asar/node_modules/process/browser.js":69,"../utils":66,"../core/AxiosError":56,"../helpers/toFormData":55,"./transitional":79,"../adapters/xhr":80,"./env/FormData":81,"../helpers/normalizeHeaderName":78,"../adapters/http":80},"path":"preview-scripts/__node_modules/axios/lib/defaults/index.js"},{"deps":{"base64-js":70,"ieee754":71,"isarray":77},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./../utils":66},"path":"preview-scripts/__node_modules/axios/lib/helpers/buildURL.js"},{"deps":{"./../utils":66},"path":"preview-scripts/__node_modules/axios/lib/core/InterceptorManager.js"},{"deps":{"../env/data":62,"../core/AxiosError":56},"path":"preview-scripts/__node_modules/axios/lib/helpers/validator.js"},{"deps":{"./../utils":66,"../cancel/isCancel":64,"../cancel/CanceledError":65,"../defaults":67,"./transformData":83},"path":"preview-scripts/__node_modules/axios/lib/core/dispatchRequest.js"},{"deps":{"../helpers/isAbsoluteURL":82,"../helpers/combineURLs":84},"path":"preview-scripts/__node_modules/axios/lib/core/buildFullPath.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"../utils":66},"path":"preview-scripts/__node_modules/axios/lib/helpers/normalizeHeaderName.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/defaults/transitional.js"},{"deps":{"./../utils":66,"./../helpers/buildURL":72,"../core/buildFullPath":76,"../defaults/transitional":79,"../core/AxiosError":56,"../cancel/CanceledError":65,"../helpers/parseProtocol":88,"./../core/settle":85,"./../helpers/cookies":86,"./../helpers/parseHeaders":89,"./../helpers/isURLSameOrigin":87},"path":"preview-scripts/__node_modules/axios/lib/adapters/xhr.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/null.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/isAbsoluteURL.js"},{"deps":{"./../utils":66,"../defaults":67},"path":"preview-scripts/__node_modules/axios/lib/core/transformData.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/combineURLs.js"},{"deps":{"./AxiosError":56},"path":"preview-scripts/__node_modules/axios/lib/core/settle.js"},{"deps":{"./../utils":66},"path":"preview-scripts/__node_modules/axios/lib/helpers/cookies.js"},{"deps":{"./../utils":66},"path":"preview-scripts/__node_modules/axios/lib/helpers/isURLSameOrigin.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/parseProtocol.js"},{"deps":{"./../utils":66},"path":"preview-scripts/__node_modules/axios/lib/helpers/parseHeaders.js"},{"deps":{"./models":92,"./server-and-client":91,"./client":93,"./server":94},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/index.js"},{"deps":{"./models":92},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/server-and-client.js"},{"deps":{},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/models.js"},{"deps":{"./models":92,"./internal":95},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/client.js"},{"deps":{"./models":92,"./internal":95},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/server.js"},{"deps":{},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/internal.js"},{"deps":{},"path":"preview-scripts/assets/script/help.js"},{"deps":{},"path":"preview-scripts/assets/script/achievementItemUI.js"},{"deps":{},"path":"preview-scripts/assets/script/entity/poker.js"},{"deps":{},"path":"preview-scripts/assets/script/entity/achievementItem.js"}];
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
    