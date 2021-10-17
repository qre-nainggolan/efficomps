"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataModelling = void 0;

var _ClassAdapter = _interopRequireDefault(require("./ClassAdapter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DataModellingClass = (0, _ClassAdapter.default)(null, {
  __init: function __init() {
    for (let i in arguments[0]) {
      this[i] = arguments[0][i];
    }
  },
  getName: function getName() {
    return this.name || "UnnamedDataModellingComponent";
  },
  getFields: function getFields() {
    return this.fields || [];
  }
});

const DataModelling = props => {
  let dataModelling = new DataModellingClass(props);
  return dataModelling.getFields();
};

exports.DataModelling = DataModelling;