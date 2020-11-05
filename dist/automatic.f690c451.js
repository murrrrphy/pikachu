// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\u4ECA\u5929\u6211\u4EEC\u6765\u753B\u4E00\u53EA\u9EC4\u76AE\u8017\u5B50\n\u9996\u5148\u6211\u4EEC\u5C06\u4ED6\u7684\u76AE\u6D82\u6210\u9EC4\u8272*/\n\n#html {\n    background: #ffe600;\n}\n.skin {\n    position: relative;\n}\n\n/*\u7136\u540E\n\u6211\u4EEC\u7ED9\u4ED6\u6309\u4E0A\u4E00\u4E2A\u9F3B\u5B50*/\n\n.nose {\n    border: 14px solid;\n    border-color: black transparent transparent transparent;\n    width: 0;\n    height: 0;\n    border-radius: 10px;\n    position: relative;\n    left: 50%;\n    top: 105px;\n    margin-left: -14px;\n    z-index: 10;\n}\n\n/*\u5F53\u6211\u4EEC\u628A\u624B\u653E\u5728\u9F3B\u5B50\u4E0A\u65F6\n\u8BA9\u4ED6\u7684\u9F3B\u5B50\u53EF\u4EE5\u5DE6\u53F3\u6643\u52A8*/\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(8deg);\n    }\n    66% {\n        transform: rotate(-8deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.nose:hover {\n    transform-origin: 14px 7px;\n    animation: wave 250ms infinite linear;\n}\n\n/*\u73B0\u5728\u6211\u4EEC\u7ED9\u4ED6\u4E00\u53CC\u773C\u775B\n\u8BA9\u4ED6\u80FD\u591F\u770B\u89C1\u4E1C\u897F*/\n\n.eye {\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    margin-left: -32px;\n    top: 60px;\n    border-radius: 50%;\n    background: #2e2e2e;\n}\n\n.eye::before {\n    content: '';\n    border: 3px solid black;\n    display: block;\n    width: 31px;\n    height: 31px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n}\n\n.eye.left {\n    transform: translateX(-132px);\n}\n\n.eye.right {\n    transform: translateX(132px);\n}\n\n/*\u4E3A\u4E86\u8BA9\u76AE\u5361\u4E18\u5403\u5230\u7F8E\u5473\u7684\u82F9\u679C\n\u6211\u4EEC\u518D\u7ED9\u4ED6\u4E00\u5F20\u5634*/\n\n.mouth {\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    left: 50%;\n    top: 130px;\n    margin-left: -100px;\n}\n\n.mouth .up {\n    position: relative;\n}\n\n.mouth > .up > .lip {\n    border: 3px solid black;\n    position: absolute;\n    width: 100px;\n    height: 30px;\n    border-top: none;\n    background: #ffe600;\n    z-index: 1\n}\n\n.mouth > .up > .left {\n    border-radius: 0 0 0 50px;\n    border-right: none;\n    transform: rotate(-24deg);\n}\n\n\n.mouth > .up > .right {\n    left: 50%;\n    border-radius: 0 0 50px 0;\n    border-left: none;\n    transform: rotate(24deg);\n}\n\n.mouth > .down {\n    position: absolute;\n    height: 180px;\n    width: 100%;\n    top: 9px;\n    overflow: hidden;\n}\n\n.mouth .down .circle1 {\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    left: 50%;\n    margin-left: -75px;\n    bottom: 0;\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;\n}\n\n.mouth .down .circle1 .circle2 {\n    width: 100%;\n    height: 300px;\n    background: #ff485f;\n    position: absolute;\n    bottom: -153px;\n    border-radius: 200px/210px;\n}\n\n/*\u6700\u540E\u522B\u5FD8\u4E86\u76AE\u5361\u4E18\u7684\u6740\u4F24\u6027\u6B66\u5668\n\u80FD\u653E\u7535\u7684\u8138\u988A*/\n\n.face {\n    position: absolute;\n    left: 50%;\n    top: 182px;\n    margin-left: -41px;\n    border: 3px solid black;\n    background: red;\n    width: 82px;\n    height: 82px;\n    border-radius: 50%;\n}\n\n.face > img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}\n\n.face.left {\n    transform: translateX(-180px);\n}\n\n.face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}\n\n.face.right {\n    transform: translateX(180px);\n}\n\n/*\u597D\u4E86\n\u53EF\u7231\u7684\u76AE\u5361\u4E18\u753B\u5B8C\u4E86\n\u8C22\u8C22\u89C2\u770B*/\n";
var _default = string;
exports.default = _default;
},{}],"tVDE":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  string2: '',
  n: 0,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'destroy',
    '#btnPlay': 'create',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.create();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  create: function create() {
    player.id = setInterval(player.play, player.time);
  },
  destroy: function destroy() {
    window.clearInterval(player.id);
  },
  play: function play() {
    if (player.n > _css.default.length - 1) {
      window.clearInterval(player.id);
      return;
    }

    if (_css.default[player.n] === " ") {
      player.string2 += "&nbsp;";
    } else if (_css.default[player.n] === '\n') {
      player.string2 += "<br>";
    } else {
      player.string2 += _css.default[player.n];
    }

    player.ui.demo.innerHTML = player.string2;
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    ++player.n;
  },
  slow: function slow() {
    player.destroy();
    player.time = 200;
    player.create();
  },
  normal: function normal() {
    player.destroy();
    player.time = 100;
    player.create();
  },
  fast: function fast() {
    player.destroy();
    player.time = 0;
    player.create();
  }
};
player.init();
},{"./css":"K4Xi"}]},{},["tVDE"], null)
//# sourceMappingURL=automatic.f690c451.js.map