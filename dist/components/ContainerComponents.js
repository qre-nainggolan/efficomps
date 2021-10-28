"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerComponent = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _ClassAdapter = _interopRequireDefault(require("./ClassAdapter"));

var _reactRouterDom = require("react-router-dom");

require("./CollaboratorComponent.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ContainerWrapper = (0, _ClassAdapter.default)(null, {
  __init: function __init() {
    for (let i in arguments[0]) {
      this[i] = arguments[0][i];
    }
  },
  getName: function getName() {
    return this.name || "UnnamedContainerComponent";
  },
  getLabel: function getLabel() {
    return this.label || "CustomContainerComponent";
  },
  getClassname: function getClassname() {
    return this.className || "EmptyClassnameContainerComponent";
  },
  getDirectStyle: function getDirectStyle() {
    return this.directStyle || {};
  },
  getNavigatorMenu: function getNavigatorMenu() {
    return this.getNavigatorMenu();
  },
  getChildren: function getChildren() {
    return this.children || /*#__PURE__*/_react.default.createElement("div", null);
  },
  getLeftColumnClassname: function getLeftColumnClassname() {
    return this.leftColumnStatus || "EfficompsContainerLeftColumnFirstLoad";
  },
  setLeftColumnClassname: function setLeftColumnClassname(newClassname) {
    this.leftColumnStatus = newClassname;
  },
  getContentColumnClassname: function getContentColumnClassname() {
    return this.leftColumnStatus === "unhide" || !this.leftColumnStatus ? "EfficompsContainerContentColumn" : "EfficompsContainerContentColumnWider";
  },
  getLeftColumn: function getLeftColumn() {
    return this.leftColumn || /*#__PURE__*/_react.default.createElement("div", null);
  },
  getFullMenu: function getFullMenu(menu) {
    let tempObj = [];
    let initialMarginTop = 44;
    menu.map((mappedData, j) => mappedData.show ? tempObj.push( /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "MenuListState",
      style: {
        marginTop: (j + 1) * initialMarginTop + 'px'
      },
      to: mappedData.target,
      onMouseEnter: () => {
        clearTimeout();
      },
      onMouseOut: () => {
        clearTimeout();
      }
    }, mappedData.label)) : null);
    return tempObj;
  },
  getMenuCounter: function getMenuCounter() {
    this.menuCounter = this.menuCounter || 0;
    this.menuCounter++;
    return this.menuCounter;
  },
  renderContainer: function renderContainer() {
    const [leftColumnClassnameState, setLeftColumnClassnameState] = (0, _react.useState)("EfficompsContainerLeftColumnFirstLoad");
    const [contentColumnClassnameState, setContentColumnClassnameState] = (0, _react.useState)("EfficompsContainerContentColumnFirstLoad");
    const [toggleButtonClassnameState, setToggleButtonClassnameState] = (0, _react.useState)("EfficompsLeftColumnToggleButtonUnhide");
    const [menuListState, setMenuListState] = (0, _react.useState)(this.leftColumn);
    let timer;
    let initialMarginTop = 44;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "EfficompsContainerWrapper",
      name: "EfficompsContainerWrapper_" + this.getName()
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: leftColumnClassnameState,
      onMouseEnter: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
            setContentColumnClassnameState("EfficompsContainerContentColumn");
          }, 250);
        }
      },
      onMouseOut: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
            setContentColumnClassnameState("EfficompsContainerContentColumnWider");
          }, 250);
        }
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: toggleButtonClassnameState,
      onMouseEnter: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
            setContentColumnClassnameState("EfficompsContainerContentColumn");
          }, 250);
        }
      },
      onMouseOut: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
            setContentColumnClassnameState("EfficompsContainerContentColumnWider");
          }, 250);
        }
      },
      onClick: () => {
        clearTimeout(timer);
        this.setLeftColumnClassname(leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad" ? "EfficompsContainerLeftColumnHide" : "EfficompsContainerLeftColumnUnhide");
        setToggleButtonClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsLeftColumnToggleButtonUnhide" : "EfficompsLeftColumnToggleButton");
        setLeftColumnClassnameState(leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad" ? "EfficompsContainerLeftColumnHide" : "EfficompsContainerLeftColumnUnhide");
        setTimeout(() => {
          setContentColumnClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsContainerContentColumn" : "EfficompsContainerContentColumnWider");
        }, 250);
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: leftColumnClassnameState === "EfficompsContainerLeftColumnHide" ? "EfficompsLeftColumnMenuContainerHide" : "EfficompsLeftColumnMenuContainerUnhide",
      onMouseEnter: () => {
        clearTimeout(timer);
      },
      onMouseOut: () => {
        clearTimeout(timer);
      }
    }), leftColumnClassnameState === "EfficompsContainerLeftColumnHide" ? menuListState.map((mappedData, j) => mappedData.show ? /*#__PURE__*/_react.default.createElement("div", {
      className: "MenuListStateHide",
      style: {
        marginTop: (j + 1) * initialMarginTop + 'px'
      },
      onMouseEnter: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
            setContentColumnClassnameState("EfficompsContainerContentColumn");
          }, 250);
        }
      },
      onMouseOut: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
            setContentColumnClassnameState("EfficompsContainerContentColumnWider");
          }, 250);
        }
      }
    }, mappedData.label.substring(0, 1)) : null) : menuListState.map((mappedData, j) => mappedData.show ? mappedData.childMenu ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "MenuListState",
      style: {
        marginTop: this.getMenuCounter() * initialMarginTop + 'px'
      },
      to: mappedData.target,
      onMouseEnter: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
            setContentColumnClassnameState("EfficompsContainerContentColumn");
          }, 250);
        }
      },
      onMouseOut: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
            setContentColumnClassnameState("EfficompsContainerContentColumnWider");
          }, 250);
        }
      },
      onClick: () => {
        let newMenuListTemp = [];
        let tempMenuItem;
        menuListState.map((mappedDataTemp, j) => {
          tempMenuItem = mappedDataTemp;

          if (mappedDataTemp.childMenu && mappedDataTemp.name == mappedData.name) {
            if (mappedData.displayChild) {
              tempMenuItem.displayChild = !mappedDataTemp.displayChild;
            } else {
              tempMenuItem.displayChild = true;
            }
          }

          newMenuListTemp[j] = tempMenuItem;
          console.log("ya 2 : " + JSON.stringify(tempMenuItem));
        });
        setMenuListState(newMenuListTemp);
        console.log("ya 3 : " + JSON.stringify(newMenuListTemp));
      }
    }, mappedData.label), mappedData.displayChild ? mappedData.childMenu.map((mappedData2, k) => mappedData2.show && mappedData.displayChild === true ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "MenuListStateFirstChildren",
      style: {
        marginTop: this.getMenuCounter() * initialMarginTop + 'px'
      },
      to: mappedData2.target,
      onMouseEnter: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
            setContentColumnClassnameState("EfficompsContainerContentColumn");
          }, 250);
        }
      },
      onMouseOut: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
            setContentColumnClassnameState("EfficompsContainerContentColumnWider");
          }, 250);
        }
      }
    }, '\u281B', '\u00A0', mappedData2.label) : null) : null) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "MenuListState",
      style: {
        marginTop: this.getMenuCounter() * initialMarginTop + 'px'
      },
      to: mappedData.target,
      onMouseEnter: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
            setContentColumnClassnameState("EfficompsContainerContentColumn");
          }, 250);
        }
      },
      onMouseOut: () => {
        clearTimeout(timer);

        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
          timer = setTimeout(() => {
            setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
            setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
            setContentColumnClassnameState("EfficompsContainerContentColumnWider");
          }, 250);
        }
      },
      onClick: () => {
        console.log("ye");
        let newMenuListTemp = [];
        let tempMenuItem;
        menuListState.map((mappedData, j) => {
          tempMenuItem = mappedData;

          if (mappedData.childMenu) {
            tempMenuItem.displayChild = false;

            if (mappedData.displayChild) {
              tempMenuItem.displayChild = !mappedData.displayChild;
            }
          }

          newMenuListTemp[j] = tempMenuItem;
        });
        setMenuListState(newMenuListTemp);
      }
    }, mappedData.label) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: contentColumnClassnameState
    }, this.getChildren()));
  }
});

const ContainerComponent = props => {
  let containerWrapper = new ContainerWrapper(props);
  return containerWrapper.renderContainer();
};

exports.ContainerComponent = ContainerComponent;