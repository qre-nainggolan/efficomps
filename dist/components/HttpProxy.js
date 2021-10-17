"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTPProxy = void 0;

var _ClassAdapter = _interopRequireDefault(require("./ClassAdapter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HTTPProxyClass = (0, _ClassAdapter.default)(null, {
  __init: function __init() {
    for (let i in arguments[0]) {
      this[i] = arguments[0][i];
    }
  },
  getName: function getName() {
    return this.name || "UnnamedHTTPProxyComponent";
  },
  getUrlTarget: function getUrlTarget() {
    return this.urlTarget || "UrlTargetUndefined";
  },
  executeOnSuccessMethod: function executeOnSuccessMethod(dataResponse) {
    return this.onSuccess(dataResponse) || null;
  },
  getOnFailedMethod: function getOnFailedMethod() {
    return this.onFailed || null;
  },
  getParameter: function getParameter() {
    return this.params || "";
  },
  getRequestMethod: function getRequestMethod() {
    return this.method || null;
  },
  setXHR: function setXHR(xhr) {
    this.xhr = xhr || null;
  },
  getXHR: function getXHR() {
    return this.xhr;
  },
  executeStateChange: function executeStateChange() {
    let xhr = this.getXHR();

    if (xhr.readyState === 4 && xhr.status === 200) {
      let ResponseContent = xhr.responseText;
      let JSONData = JSON.parse(ResponseContent);
      let total = JSONData.data.length;
      this.executeOnSuccessMethod(JSONData.data);
    }
  },
  processRequest: function processRequest() {
    let createXHR = () => {
      try {
        return new XMLHttpRequest();
      } catch (e) {}

      try {
        return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
      } catch (e) {}

      try {
        return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (e) {}

      try {
        return new window.ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {}

      try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}

      return null;
    };

    let xhr = createXHR();

    if (xhr) {
      this.setXHR(xhr);
      xhr.open(this.getRequestMethod(), this.getUrlTarget(), true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.send(this.getParameter());
      xhr.onreadystatechange = this.executeStateChange.bind(this);
    }
  }
});

const HTTPProxy = props => {
  let httpProxy = new HTTPProxyClass(props);
  return httpProxy.processRequest();
};

exports.HTTPProxy = HTTPProxy;