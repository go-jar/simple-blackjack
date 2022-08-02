
(function () {
var scripts = [{"deps":{"./assets/script/client":51,"./assets/script/config":99,"./assets/script/help":95,"./assets/script/menu":2,"./assets/script/pokerUI":3,"./assets/script/game":1,"./assets/script/achievement":4,"./assets/script/entity/poker":97,"./assets/script/entity/achievementItem":98,"./assets/script/proto/score":50,"./assets/script/achievementItemUI":96},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./pokerUI":3,"./client":51,"./config":99,"./entity/poker":97},"path":"preview-scripts/assets/script/game.js"},{"deps":{},"path":"preview-scripts/assets/script/menu.js"},{"deps":{"./entity/poker":97},"path":"preview-scripts/assets/script/pokerUI.js"},{"deps":{"./achievementItemUI":96,"./client":51,"./config":99,"./entity/achievementItem":98},"path":"preview-scripts/assets/script/achievement.js"},{"deps":{"./src/index-light":6},"path":"preview-scripts/__node_modules/protobufjs/light.js"},{"deps":{"./encoder":8,"./decoder":10,"./verifier":9,"./object":11,"./enum":12,"./oneof":20,"./mapfield":13,"./method":15,"./service":14,"./types":19,"./wrappers":18,"./converter":22,"./namespace":23,"./root":21,"./field":24,"./type":25,"./index-minimal":7,"./message":17,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/index-light.js"},{"deps":{"./util/minimal":32,"./roots":29,"./writer_buffer":27,"./reader_buffer":28,"./writer":30,"./reader":31,"./rpc":26},"path":"preview-scripts/__node_modules/protobufjs/src/index-minimal.js"},{"deps":{"./enum":12,"./types":19,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/encoder.js"},{"deps":{"./enum":12,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/verifier.js"},{"deps":{"./enum":12,"./types":19,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/decoder.js"},{"deps":{"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/object.js"},{"deps":{"./object":11,"./namespace":23,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/enum.js"},{"deps":{"./field":24,"./types":19,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/mapfield.js"},{"deps":{"./namespace":23,"./method":15,"./util":16,"./rpc":26},"path":"preview-scripts/__node_modules/protobufjs/src/service.js"},{"deps":{"./object":11,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/method.js"},{"deps":{"./roots":29,"./type":25,"./enum":12,"./root":21,"./util/minimal":32,"@protobufjs/codegen":35,"@protobufjs/path":37,"@protobufjs/fetch":36},"path":"preview-scripts/__node_modules/protobufjs/src/util.js"},{"deps":{"./util/minimal":32},"path":"preview-scripts/__node_modules/protobufjs/src/message.js"},{"deps":{"./message":17},"path":"preview-scripts/__node_modules/protobufjs/src/wrappers.js"},{"deps":{"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/types.js"},{"deps":{"./object":11,"./field":24,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/oneof.js"},{"deps":{"./namespace":23,"./field":24,"./enum":12,"./oneof":20,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/root.js"},{"deps":{"./enum":12,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/converter.js"},{"deps":{"./object":11,"./field":24,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/namespace.js"},{"deps":{"./object":11,"./enum":12,"./types":19,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/field.js"},{"deps":{"./namespace":23,"./enum":12,"./oneof":20,"./field":24,"./mapfield":13,"./service":14,"./message":17,"./reader":31,"./writer":30,"./util":16,"./encoder":8,"./decoder":10,"./verifier":9,"./converter":22,"./wrappers":18},"path":"preview-scripts/__node_modules/protobufjs/src/type.js"},{"deps":{"./rpc/service":33},"path":"preview-scripts/__node_modules/protobufjs/src/rpc.js"},{"deps":{"./writer":30,"./util/minimal":32},"path":"preview-scripts/__node_modules/protobufjs/src/writer_buffer.js"},{"deps":{"./reader":31,"./util/minimal":32},"path":"preview-scripts/__node_modules/protobufjs/src/reader_buffer.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/roots.js"},{"deps":{"./util/minimal":32},"path":"preview-scripts/__node_modules/protobufjs/src/writer.js"},{"deps":{"./util/minimal":32},"path":"preview-scripts/__node_modules/protobufjs/src/reader.js"},{"deps":{"./longbits":34,"@protobufjs/aspromise":41,"@protobufjs/base64":40,"@protobufjs/inquire":39,"@protobufjs/utf8":42,"@protobufjs/eventemitter":38,"@protobufjs/pool":43,"@protobufjs/float":44},"path":"preview-scripts/__node_modules/protobufjs/src/util/minimal.js"},{"deps":{"../util/minimal":32},"path":"preview-scripts/__node_modules/protobufjs/src/rpc/service.js"},{"deps":{"../util/minimal":32},"path":"preview-scripts/__node_modules/protobufjs/src/util/longbits.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/codegen/index.js"},{"deps":{"@protobufjs/aspromise":41,"@protobufjs/inquire":39},"path":"preview-scripts/__node_modules/@protobufjs/fetch/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/path/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/eventemitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/inquire/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/base64/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/aspromise/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/utf8/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/pool/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@protobufjs/float/index.js"},{"deps":{"./src/index":46},"path":"preview-scripts/__node_modules/protobufjs/index.js"},{"deps":{"./tokenize":47,"./common":48,"./parse":49,"./index-light":6},"path":"preview-scripts/__node_modules/protobufjs/src/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/tokenize.js"},{"deps":{},"path":"preview-scripts/__node_modules/protobufjs/src/common.js"},{"deps":{"./tokenize":47,"./root":21,"./type":25,"./field":24,"./mapfield":13,"./oneof":20,"./enum":12,"./service":14,"./method":15,"./types":19,"./util":16},"path":"preview-scripts/__node_modules/protobufjs/src/parse.js"},{"deps":{},"path":"preview-scripts/assets/script/proto/score.js"},{"deps":{},"path":"preview-scripts/assets/script/client.js"},{"deps":{"./lib/axios":53},"path":"preview-scripts/__node_modules/axios/index.js"},{"deps":{"./helpers/bind":59,"./helpers/spread":58,"./cancel/isCancel":63,"./env/data":61,"./utils":65,"./helpers/isAxiosError":57,"../lib/core/AxiosError":55,"./core/mergeConfig":60,"./cancel/CancelToken":56,"./cancel/CanceledError":64,"./helpers/toFormData":54,"./core/Axios":62,"./defaults":66},"path":"preview-scripts/__node_modules/axios/lib/axios.js"},{"deps":{"../utils":65,"buffer":67},"path":"preview-scripts/__node_modules/axios/lib/helpers/toFormData.js"},{"deps":{"../utils":65},"path":"preview-scripts/__node_modules/axios/lib/core/AxiosError.js"},{"deps":{"./CanceledError":64},"path":"preview-scripts/__node_modules/axios/lib/cancel/CancelToken.js"},{"deps":{"./../utils":65},"path":"preview-scripts/__node_modules/axios/lib/helpers/isAxiosError.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/spread.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/bind.js"},{"deps":{"../utils":65},"path":"preview-scripts/__node_modules/axios/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/env/data.js"},{"deps":{"./../utils":65,"./mergeConfig":60,"../helpers/buildURL":71,"./InterceptorManager":72,"../helpers/validator":73,"./buildFullPath":75,"./dispatchRequest":74},"path":"preview-scripts/__node_modules/axios/lib/core/Axios.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/cancel/isCancel.js"},{"deps":{"../core/AxiosError":55,"../utils":65},"path":"preview-scripts/__node_modules/axios/lib/cancel/CanceledError.js"},{"deps":{"./helpers/bind":59},"path":"preview-scripts/__node_modules/axios/lib/utils.js"},{"deps":{"../../../../../../../Applications/CocosCreator.app/Contents/Resources/app.asar/node_modules/process/browser.js":68,"../utils":65,"../core/AxiosError":55,"../helpers/toFormData":54,"./transitional":78,"../adapters/xhr":79,"./env/FormData":80,"../helpers/normalizeHeaderName":77,"../adapters/http":79},"path":"preview-scripts/__node_modules/axios/lib/defaults/index.js"},{"deps":{"base64-js":69,"ieee754":70,"isarray":76},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./../utils":65},"path":"preview-scripts/__node_modules/axios/lib/helpers/buildURL.js"},{"deps":{"./../utils":65},"path":"preview-scripts/__node_modules/axios/lib/core/InterceptorManager.js"},{"deps":{"../env/data":61,"../core/AxiosError":55},"path":"preview-scripts/__node_modules/axios/lib/helpers/validator.js"},{"deps":{"./../utils":65,"../cancel/isCancel":63,"../cancel/CanceledError":64,"../defaults":66,"./transformData":82},"path":"preview-scripts/__node_modules/axios/lib/core/dispatchRequest.js"},{"deps":{"../helpers/isAbsoluteURL":81,"../helpers/combineURLs":83},"path":"preview-scripts/__node_modules/axios/lib/core/buildFullPath.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"../utils":65},"path":"preview-scripts/__node_modules/axios/lib/helpers/normalizeHeaderName.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/defaults/transitional.js"},{"deps":{"./../utils":65,"./../helpers/buildURL":71,"../core/buildFullPath":75,"../defaults/transitional":78,"../core/AxiosError":55,"../cancel/CanceledError":64,"../helpers/parseProtocol":87,"./../core/settle":84,"./../helpers/cookies":85,"./../helpers/parseHeaders":88,"./../helpers/isURLSameOrigin":86},"path":"preview-scripts/__node_modules/axios/lib/adapters/xhr.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/null.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/isAbsoluteURL.js"},{"deps":{"./../utils":65,"../defaults":66},"path":"preview-scripts/__node_modules/axios/lib/core/transformData.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/combineURLs.js"},{"deps":{"./AxiosError":55},"path":"preview-scripts/__node_modules/axios/lib/core/settle.js"},{"deps":{"./../utils":65},"path":"preview-scripts/__node_modules/axios/lib/helpers/cookies.js"},{"deps":{"./../utils":65},"path":"preview-scripts/__node_modules/axios/lib/helpers/isURLSameOrigin.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/parseProtocol.js"},{"deps":{"./../utils":65},"path":"preview-scripts/__node_modules/axios/lib/helpers/parseHeaders.js"},{"deps":{"./models":91,"./server-and-client":90,"./client":92,"./server":93},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/index.js"},{"deps":{"./models":91},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/server-and-client.js"},{"deps":{},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/models.js"},{"deps":{"./models":91,"./internal":94},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/client.js"},{"deps":{"./models":91,"./internal":94},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/server.js"},{"deps":{},"path":"preview-scripts/__node_modules/json-rpc-2.0/dist/internal.js"},{"deps":{},"path":"preview-scripts/assets/script/help.js"},{"deps":{},"path":"preview-scripts/assets/script/achievementItemUI.js"},{"deps":{},"path":"preview-scripts/assets/script/entity/poker.js"},{"deps":{},"path":"preview-scripts/assets/script/entity/achievementItem.js"},{"deps":{},"path":"preview-scripts/assets/script/config.js"}];
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
    