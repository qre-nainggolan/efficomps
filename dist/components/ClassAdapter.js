"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ClassAdapter;

function ClassAdapter(Parent, Properties) {
  let _NewCreatedClass, F, i;

  _NewCreatedClass = function NewCreatedClass() {
    if (_NewCreatedClass.prototype.hasOwnProperty("__init")) {
      _NewCreatedClass.prototype.__init.apply(this, arguments);
    }

    if (_NewCreatedClass.uber && _NewCreatedClass.uber.hasOwnProperty("__init")) {
      _NewCreatedClass.uber.__init.apply(this, arguments);
    }
  };

  Parent = Parent || Object;

  F = function F() {};

  F.prototype = Parent.prototype;
  _NewCreatedClass.prototype = new F();
  _NewCreatedClass.uber = Parent.prototype;

  for (i in Properties) {
    if (Properties.hasOwnProperty(i)) {
      _NewCreatedClass.prototype[i] = Properties[i];
    }
  }

  return _NewCreatedClass;
}