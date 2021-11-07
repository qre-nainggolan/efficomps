"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerComponent = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.parse-float.js");

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

    this.marginTop = 0;
    let body = document.body,
        html = document.documentElement;
    this.browserCanvasHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
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
  getMenuCounter: function getMenuCounter() {
    this.menuCounter = this.menuCounter || 0;
    this.menuCounter++;
    return this.menuCounter;
  },
  setAndGetMarginTop: function setAndGetMarginTop(definedMargin) {
    this.marginTop = this.marginTop > 0 ? this.nextMarginTop : 44;
    this.nextMarginTop = this.marginTop ? this.marginTop + definedMargin : 44;
    return this.marginTop;
  },
  renderContainer: function renderContainer() {
    const [leftColumnClassnameState, setLeftColumnClassnameState] = (0, _react.useState)("EfficompsContainerLeftColumnFirstLoad");
    const [toggleButtonPadClassnameState, setToggleButtonPadClassnameState] = (0, _react.useState)("EfficompsLeftColumnToggleButtonPad");
    const [contentColumnClassnameState, setContentColumnClassnameState] = (0, _react.useState)("EfficompsContainerContentColumnFirstLoad");
    const [toggleButtonClassnameState, setToggleButtonClassnameState] = (0, _react.useState)("EfficompsLeftColumnToggleButtonUnhide");
    const [progressBarClassnameState, setProgressBarClassnameState] = (0, _react.useState)("EfficompsLeftColumnProgressBarHide");
    const [progressBarContainerClassnameState, setProgressBarContainerClassnameState] = (0, _react.useState)("EfficompsLeftColumnProgressBarContainerHide");
    const [progressBarMovementPositionState, setProgressBarMovementPositionState] = (0, _react.useState)(0);
    const [progressBarMovementCounterState, setProgressBarMovementCounterState] = (0, _react.useState)(0);
    const [menuListState, setMenuListState] = (0, _react.useState)(this.leftColumn);
    const [heightOfLeftColumnState, setHeightOfLeftColumnState] = (0, _react.useState)(0);
    const [scaleOfProgressBarWithMenuHeightState, setScaleOfProgressBarWithMenuHeightState] = (0, _react.useState)(0);
    const [marginEveryMoveDownState, setMarginEveryMoveDownState] = (0, _react.useState)(0);
    const [progressBarHeightState, setProgressBarHeightState] = (0, _react.useState)(0);
    let progressBarContainerHeight = parseInt(this.browserCanvasHeight) - 44;
    const [scrollPositionState, setScrollPositionState] = (0, _react.useState)(0);
    let timer;
    let initialMarginTop = 44; // Height of box of main menu item

    let childHeight = 34; // Height of box of children' main menu item

    const getLength = (menuItemTemp, expectedMargin) => {
      expectedMargin = expectedMargin || initialMarginTop;
      menuItemTemp = menuItemTemp || menuListState;
      let componentLengthTemp = 0;
      let iTemp = 0,
          lengthTemp = menuItemTemp.length;

      while (iTemp < lengthTemp) {
        componentLengthTemp += menuItemTemp[iTemp].show ? expectedMargin : 0;

        if (menuItemTemp[iTemp].childMenu && menuItemTemp[iTemp].displayChild) {
          componentLengthTemp += getLength(menuItemTemp[iTemp].childMenu, childHeight);
        }

        iTemp++;
      }

      return componentLengthTemp;
    };

    (0, _react.useEffect)(() => {
      let currentLeftMenuHeight = getLength();
      console.log(currentLeftMenuHeight);

      if (this.browserCanvasHeight > currentLeftMenuHeight) {
        setHeightOfLeftColumnState(this.browserCanvasHeight - 44);
        setProgressBarHeightState(currentLeftMenuHeight > progressBarContainerHeight ? scaleOfProgressBarWithMenuHeightState * progressBarContainerHeight : progressBarContainerHeight);
      } else {
        setHeightOfLeftColumnState(currentLeftMenuHeight);
        let currentLeftMenuHeightTemp = currentLeftMenuHeight;
        setScaleOfProgressBarWithMenuHeightState(parseFloat(progressBarContainerHeight / currentLeftMenuHeightTemp));
        let scaleTemp = parseFloat(progressBarContainerHeight / currentLeftMenuHeightTemp);
        setProgressBarHeightState(currentLeftMenuHeightTemp > progressBarContainerHeight ? scaleTemp * progressBarContainerHeight : progressBarContainerHeight);
        let progressBarHeightStateTemp = currentLeftMenuHeightTemp > progressBarContainerHeight ? scaleTemp * progressBarContainerHeight : progressBarContainerHeight;
        let marginEveryMoveDownStateTemp = 10 / (progressBarContainerHeight - progressBarHeightStateTemp) * (currentLeftMenuHeightTemp - progressBarContainerHeight);
        setMarginEveryMoveDownState(marginEveryMoveDownStateTemp);
        setScrollPositionState(marginEveryMoveDownStateTemp * progressBarMovementCounterState * -1);
      }
    }, [menuListState]);

    const executeSwap = e => {
      let eventType = e.type;

      switch (eventType) {
        case "mouseenter":
          clearTimeout(timer);

          if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
            timer = setTimeout(() => {
              setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
              setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
              setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPad");
              setContentColumnClassnameState("EfficompsContainerContentColumn");
              setProgressBarClassnameState("EfficompsLeftColumnProgressBar");
              setProgressBarContainerClassnameState("EfficompsLeftColumnProgressBarContainer");
            }, 250);
          }

          if (leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad") {
            setProgressBarClassnameState("EfficompsLeftColumnProgressBar");
            setProgressBarContainerClassnameState("EfficompsLeftColumnProgressBarContainer");
          }

          break;

        case "mouseout":
          clearTimeout(timer);

          if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
            timer = setTimeout(() => {
              setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
              setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
              setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPadHide");
              setContentColumnClassnameState("EfficompsContainerContentColumnWider");
              setProgressBarClassnameState("EfficompsLeftColumnProgressBarHide");
              setProgressBarContainerClassnameState("EfficompsLeftColumnProgressBarContainerHide");
            }, 250);
          }

          if (leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad") {
            setProgressBarClassnameState("EfficompsLeftColumnProgressBarHide");
            setProgressBarContainerClassnameState("EfficompsLeftColumnProgressBarContainerHide");
          }

          break;
      }
    };

    const executeMouseWheel = e => {
      if (this.browserCanvasHeight < heightOfLeftColumnState || progressBarMovementPositionState > 0) {
        if (e.deltaY > 0) {
          if (progressBarMovementPositionState < progressBarContainerHeight - progressBarHeightState) {
            setScrollPositionState(scrollPositionState - marginEveryMoveDownState);
            setProgressBarMovementPositionState(progressBarMovementPositionState + 10);
            setProgressBarMovementCounterState(progressBarMovementCounterState + 1);
          }
        }

        if (e.deltaY < 0) {
          if (progressBarMovementPositionState > 0) {
            setScrollPositionState(scrollPositionState + marginEveryMoveDownState);
            setProgressBarMovementPositionState(progressBarMovementPositionState - 10);
            setProgressBarMovementCounterState(progressBarMovementCounterState - 1);
          } else {
            setScrollPositionState(0);
          }
        }
      }
    };

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "EfficompsContainerWrapper",
      name: "EfficompsContainerWrapper_" + this.getName(),
      style: {
        height: this.browserCanvasHeight + 'px',
        overflowY: 'hidden'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: progressBarContainerClassnameState,
      style: {
        height: progressBarContainerHeight + 'px'
      },
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: progressBarClassnameState,
      style: {
        marginTop: progressBarMovementPositionState + 'px',
        height: progressBarHeightState + 'px'
      },
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: leftColumnClassnameState,
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap,
      style: leftColumnClassnameState === "EfficompsContainerLeftColumnHide" ? {
        height: this.browserCanvasHeight + 'px'
      } : parseInt(heightOfLeftColumnState) > parseInt(this.browserCanvasHeight) ? {
        height: this.browserCanvasHeight + 'px',
        overflow: '-moz-scrollbars-none',
        scrollbarWidth: 'none'
      } : {
        height: this.browserCanvasHeight + 'px'
      },
      onWheel: executeMouseWheel
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: toggleButtonPadClassnameState,
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: toggleButtonClassnameState,
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap,
      onClick: () => {
        clearTimeout(timer);
        this.setLeftColumnClassname(leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad" ? "EfficompsContainerLeftColumnHide" : "EfficompsContainerLeftColumnUnhide");
        setToggleButtonClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsLeftColumnToggleButtonUnhide" : "EfficompsLeftColumnToggleButton");
        setToggleButtonPadClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsLeftColumnToggleButtonPad" : "EfficompsLeftColumnToggleButtonPadHide");
        setLeftColumnClassnameState(leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad" ? "EfficompsContainerLeftColumnHide" : "EfficompsContainerLeftColumnUnhide");
        setProgressBarClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsLeftColumnProgressBar" : "EfficompsLeftColumnProgressBarHide");
        setProgressBarContainerClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsLeftColumnProgressBarContainer" : "EfficompsLeftColumnProgressBarContainerHide");
        setTimeout(() => {
          setContentColumnClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsContainerContentColumn" : "EfficompsContainerContentColumnWider");
        }, 250);
      }
    }), leftColumnClassnameState === "EfficompsContainerLeftColumnHide" ? menuListState.map((mappedData, j) => mappedData.show ? /*#__PURE__*/_react.default.createElement("div", {
      className: "MenuListStateHide",
      key: "menuListState2_" + j,
      style: {
        marginTop: this.setAndGetMarginTop(initialMarginTop) + 'px',
        overflowY: 'hidden'
      },
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap,
      onWheel: executeMouseWheel
    }, mappedData.label.substring(0, 1)) : null) // end of looping menuListState.map((...
    : menuListState.map((mappedData, j) => mappedData.show ? mappedData.childMenu ? /*#__PURE__*/_react.default.createElement("div", {
      onWheel: executeMouseWheel,
      style: {
        overflowY: 'hidden'
      },
      key: "Container_menuListState2_" + j
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "MenuListState",
      key: "menuListStateLink_" + j,
      style: {
        marginTop: this.setAndGetMarginTop(initialMarginTop) + scrollPositionState + 'px'
      },
      to: mappedData.target,
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap,
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
        });
        setMenuListState(newMenuListTemp);
      }
    }, '\u281B', '\u00A0', mappedData.label), mappedData.displayChild ? mappedData.childMenu.map((mappedData2, k) => mappedData2.show && mappedData.displayChild === true ? /*#__PURE__*/_react.default.createElement("div", {
      key: "menuListState3_" + k,
      style: {
        overflowY: 'hidden'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "MenuListStateFirstChildren",
      style: {
        marginTop: this.setAndGetMarginTop(childHeight) + scrollPositionState + 'px'
      },
      to: mappedData2.target,
      key: "menuListStateLink3_" + k,
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap,
      onClick: () => {
        let newMenuListTemp = [];
        let tempMenuItem;
        menuListState.map((mappedDataTemp, j) => {
          tempMenuItem = mappedDataTemp;

          if (mappedDataTemp.childMenu && mappedDataTemp.name == mappedData.name) {
            if (mappedData.displayChild) {
              mappedDataTemp.childMenu.map((mappedDataTemp2, k) => {
                if (mappedDataTemp2.childMenu && mappedDataTemp2.name === mappedData2.name) {
                  if (mappedDataTemp2.displayChild) {
                    tempMenuItem.childMenu[k].displayChild = !mappedDataTemp2.displayChild;
                  } else {
                    tempMenuItem.childMenu[k].displayChild = true;
                  }
                }
              });
            }
          }

          newMenuListTemp[j] = tempMenuItem;
        });
        setMenuListState(newMenuListTemp);
      }
    }, mappedData2.label), mappedData2.displayChild ? mappedData2.childMenu.map((mappedData3, k) => mappedData3.show && mappedData2.displayChild === true ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: mappedData3.target,
      className: "MenuListStateGrandChildren",
      style: {
        marginTop: this.setAndGetMarginTop(childHeight) + scrollPositionState + 'px'
      },
      key: "menuListState4_" + k,
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap
    }, mappedData3.label) : null) : null) : null) : null) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "MenuListState",
      style: {
        marginTop: this.setAndGetMarginTop(initialMarginTop) + scrollPositionState + 'px'
      },
      to: mappedData.target,
      key: "menuListState5_" + j,
      onMouseEnter: executeSwap,
      onMouseOut: executeSwap,
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
        });
        setMenuListState(newMenuListTemp);
      }
    }, '\u281B', '\u00A0', mappedData.label) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: contentColumnClassnameState
    }, this.getChildren()));
  }
});

const ContainerComponent = props => {
  let containerWrapper = new ContainerWrapper(props);
  return containerWrapper.renderContainer();
};

exports.ContainerComponent = ContainerComponent;