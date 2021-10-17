"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableWrapper = exports.LinkWrapper = exports.GenerateNotificationPopup = exports.GenerateModalForm = exports.GenerateInputText = exports.GenerateInputGroup = exports.GenerateButton = exports.FormModalWrapper = void 0;

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.parse-int.js");

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _ClassAdapter = _interopRequireDefault(require("./ClassAdapter"));

require("./CollaboratorComponent.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormComponents = (0, _ClassAdapter.default)(null, {
  __init: function __init() {
    for (let i in arguments[0]) {
      this[i] = arguments[0][i];
    }
  },
  getName: function getName() {
    return this.name || "UnnamedComponent";
  },
  getLabel: function getLabel() {
    return this.label || "CustomComponent";
  },
  getClassname: function getClassname() {
    return this.className || "EmptyClassnameComponent";
  },
  getDirectStyle: function getDirectStyle() {
    return this.directStyle || {};
  },
  getElementPosition: function getElementPosition(elemId) {
    let offsetLeft = 0;
    let offsetTop = 0;
    let offsetTrail = document.getElementById(elemId);

    while (offsetTrail) {
      offsetLeft += offsetTrail.offsetLeft;
      offsetTop += offsetTrail.offsetTop;
      offsetTrail = offsetTrail.offsetParent;
    }

    if (navigator.userAgent.indexOf('Mac') !== -1 && typeof document.body.leftMargin !== 'undefined') {
      offsetLeft += document.body.leftMargin;
      offsetTop += document.body.topMargin;
    } //It has been noticed that offsetTop if 69 pixels more for IE 6


    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
      let ieversion = new Number(RegExp.$1); //if (ieversion=6 && ieversion<7)getClassname            // {
      //if(offsetTop&gt;78) offsetTop -= 79;
      //}
    }

    return {
      left: offsetLeft,
      top: offsetTop
    };
  }
});
const ButtonComponent = (0, _ClassAdapter.default)(FormComponents, {
  getStateAttribute: function getStateAttribute() {
    return this.stateAttr || null;
  },
  executeOnClick: function executeOnClick() {
    return this.clickMethod || null;
  },
  renderComponent: function renderComponent() {
    return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
      className: this.getClassname(),
      style: this.getDirectStyle(),
      onClick: this.executeOnClick(),
      color: "primary"
    }, this.getLabel());
  }
});
const InputComponents = (0, _ClassAdapter.default)(FormComponents, {
  __init: function __init() {
    InputComponents.uber.__init.apply(this, arguments);
  },
  getEditableState: function getEditableState() {
    return this.editable || true;
  },
  getDefaultValue: function getDefaultValue() {
    return this.defaultValue || "";
  },
  getStateAttribute: function getStateAttribute() {
    return this.stateAttr || null;
  },
  getPlaceholder: function getPlaceholder() {
    return this.placeholder || 'Please type any input';
  },
  getValue: function getValue() {
    return this.value || "";
  },
  executeOnChange: function executeOnChange() {
    return this.changeMethod || null;
  }
});
const InputText = (0, _ClassAdapter.default)(InputComponents, {
  renderComponent: function renderComponent() {
    return /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
      type: "text",
      style: this.getDirectStyle(),
      value: this.getValue(),
      onChange: this.executeOnChange(),
      placeholder: this.getPlaceholder()
    });
  }
});
const InputGroupComponent = (0, _ClassAdapter.default)(InputComponents, {
  getInputDirectStyle: function getInputDirectStyle() {
    return this.inputDirectStyle || {};
  },
  renderComponent: function renderComponent() {
    return /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, {
      className: "mb-2 mr-sm-2 mb-sm-0",
      style: this.getDirectStyle()
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
      for: "exampleEmail",
      className: "mr-sm-2"
    }, this.getLabel()), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
      type: "text",
      value: this.getValue(),
      onChange: this.executeOnChange(),
      placeholder: this.getPlaceholder(),
      style: this.getInputDirectStyle()
    }));
  }
});
const ModalComponents = (0, _ClassAdapter.default)(FormComponents, {
  __init: function __init() {
    ModalComponents.uber.__init.apply(this, arguments);
  },
  getHeaderTitle: function getHeaderTitle() {
    return this.headerTitle || "ModalComponent";
  },
  getBodyHeaderText: function getBodyHeaderText() {
    return this.bodyHeaderText || "ModalComponent";
  },
  executeOnToggle: function executeOnToggle() {
    return this.onToggleMethod || null;
  },
  getIsOpen: function getIsOpen() {
    return this.isOpen || false;
  },
  getContent: function getContent() {
    return this.content || /*#__PURE__*/_react.default.createElement("div", null);
  }
});
const NotificationPopup = (0, _ClassAdapter.default)(ModalComponents, {
  renderComponent: function renderComponent() {
    return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.getIsOpen(),
      toggle: this.executeOnToggle(),
      name: this.getName()
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, {
      toggle: this.executeOnToggle()
    }, this.getHeaderTitle()), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, this.getBodyHeaderText()), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalFooter, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
      color: "primary",
      onClick: this.executeOnToggle()
    }, "Do Something"), ' ', /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
      color: "secondary",
      onClick: this.executeOnToggle()
    }, "Cancel"))));
  }
});
const FormModal = (0, _ClassAdapter.default)(ModalComponents, {
  renderComponent: function renderComponent() {
    return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.getIsOpen(),
      toggle: this.executeOnToggle(),
      name: this.getName(),
      style: {
        maxWidth: '100%',
        width: '90%',
        maxHeight: '100%',
        height: '90%'
      },
      size: "lg"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, {
      toggle: this.executeOnToggle()
    }, this.getHeaderTitle()), this.getContent()));
  }
});
const FormModalWrapperClass = (0, _ClassAdapter.default)(ModalComponents, {
  getChildren: function getChildren() {
    return this.children || /*#__PURE__*/_react.default.createElement("div", null);
  },
  renderComponent: function renderComponent() {
    return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.getIsOpen(),
      toggle: this.executeOnToggle(),
      name: this.getName(),
      style: {
        maxWidth: '100%',
        width: '95%'
      },
      size: "lg"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, {
      toggle: this.executeOnToggle()
    }, this.getHeaderTitle()), this.getChildren()));
  }
});
const LinkWrapperClass = (0, _ClassAdapter.default)(FormComponents, {
  __init: function __init() {
    LinkWrapperClass.uber.__init.apply(this, arguments);
  },
  getLinkTarget: function getLinkTarget() {
    return this.to || "";
  },
  executeMouseEnter: function executeMouseEnter() {
    return this.mouseOver || null;
  },
  executeMouseLeave: function executeMouseLeave() {
    return this.mouseOver || null;
  },
  renderComponent: function renderComponent() {
    return /*#__PURE__*/_react.default.createElement("div", {
      onMouseEnter: () => this.executeMouseEnter(),
      onMouseLeave: () => this.executeMouseLeave()
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: this.getLinkTarget(),
      className: this.getClassname()
    }, 'ab'));
  }
});
const TableComponent = (0, _ClassAdapter.default)(FormComponents, {
  getFields: function getFields() {
    return this.fields || [];
  },
  getData: function getData() {
    let defaultData = [{
      fetchingData: true
    }];
    return this.data || defaultData;
  },
  getTableWidth: function getTableWidth() {
    return this.tableWidth || "1000px";
  },
  getDisplayedFields: function getDisplayedFields() {
    let fields = this.getFields();
    let counter = 0;
    let totalDisplayed = 0;

    while (counter < fields.length) {
      if (fields[counter].showHeader) {
        totalDisplayed++;
      }

      counter++;
    }

    return totalDisplayed;
  },
  executeOnDoubleClick: function executeOnDoubleClick(e) {
    if (this.doubleClickEvent) {
      let fields = this.getFields();
      let counter = 0;
      let rowData = {};

      while (counter < e.currentTarget.childElementCount) {
        rowData[fields[counter].name] = e.currentTarget.children[counter].innerText;
        counter++;
      }

      this.doubleClickEvent(e, rowData);
    } else {
      return false;
    }
  },
  getBrowserScrollbarWidth: function getBrowserScrollbarWidth() {
    return this.browserScrollWidth || 0;
  },
  adjustHeaderStyle: function adjustHeaderStyle() {
    if (document.getElementsByName("Table_" + this.getName())) {
      let tableComp = document.getElementsByName("Table_" + this.getName());

      for (let i in tableComp) {
        if (typeof tableComp[i] === "object" && tableComp[i].id != "Table_" + this.getName() + "_" + i) {
          let tdWidth, headerWidth;

          if (!document.getElementById("Table_" + this.getName() + "_CellWidth")) {
            headerWidth = parseInt(window.getComputedStyle(tableComp[i].parentNode).getPropertyValue("width"));
            headerWidth = headerWidth - parseInt(window.getComputedStyle(tableComp[i].parentNode).getPropertyValue("padding-left"));
            headerWidth = headerWidth - parseInt(window.getComputedStyle(tableComp[i].parentNode).getPropertyValue("padding-right"));
            tdWidth = (headerWidth - 6 * this.getDisplayedFields() - this.getBrowserScrollbarWidth()) / this.getDisplayedFields() + "px";
            let hiddenInputContainer = document.createElement("input");
            hiddenInputContainer.id = "Table_" + this.getName() + "_CellWidth";
            hiddenInputContainer.type = "hidden";
            hiddenInputContainer.value = tdWidth;
            document.getElementById('root').appendChild(hiddenInputContainer);
            let hiddenHeaderWidth = document.createElement("input");
            hiddenHeaderWidth.id = "Table_" + this.getName() + "_HeaderWidth";
            hiddenHeaderWidth.type = "hidden";
            hiddenHeaderWidth.value = headerWidth;
            document.getElementById('root').appendChild(hiddenHeaderWidth);
          } else {
            tdWidth = document.getElementById("Table_" + this.getName() + "_CellWidth").value;
            headerWidth = document.getElementById("Table_" + this.getName() + "_HeaderWidth").value;
          }

          document.getElementsByName("TableHead_" + this.getName())[i].setAttribute("style", "width:" + headerWidth + "px");
          document.getElementsByName("TableHeadTR_" + this.getName())[i].setAttribute("style", "width:" + (headerWidth - this.getBrowserScrollbarWidth()) + "px");

          for (let j in tableComp[i].childNodes) {
            // thead only, tbody cell width is adjusted after state of API fetch is done
            for (let k in tableComp[i].childNodes[j].childNodes) {
              if (tableComp[i].childNodes[j].childNodes[k].childNodes) {
                for (let l in tableComp[i].childNodes[j].childNodes[k].childNodes) {
                  if (tableComp[i].childNodes[j].childNodes[k].childNodes[l].className) {
                    tableComp[i].childNodes[j].childNodes[k].childNodes[l].setAttribute("style", "width:" + tdWidth);
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  renderTable: function renderTable() {
    if (document.getElementById("BrowserScrollbarWidthHidden")) {
      this.browserScrollWidth = document.getElementById("BrowserScrollbarWidthHidden").value;
    } else {
      let tempTable = document.createElement("div");
      tempTable.className = "CollaboratorTable";
      tempTable.id = "TableTemp_" + this.getName();
      tempTable.style.visibility = "hidden";
      let tempTableBody = document.createElement("div");
      tempTableBody.className = "tbody";
      let tempTableTr = document.createElement("div");
      tempTableTr.className = "tr";
      tempTableTr.id = "TableTempTR_" + this.getName();
      let counter = 0;
      let totalDisplayed = this.getDisplayedFields();

      while (counter < totalDisplayed) {
        let tempTableTd = document.createElement("div");
        tempTableTd.className = "td";
        tempTableTr.appendChild(tempTableTd);
        counter++;
      }

      tempTableBody.appendChild(tempTableTr);
      tempTable.appendChild(tempTableBody);
      document.getElementById('root').appendChild(tempTable);
      let bodyWidth = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('width');
      let TRWidth = window.getComputedStyle(document.getElementById("TableTempTR_" + this.getName())).getPropertyValue('width');
      this.browserScrollWidth = parseInt(bodyWidth) - parseInt(TRWidth);
      document.getElementById('root').removeChild(tempTable);
      let hiddenInputContainer = document.createElement("input");
      hiddenInputContainer.id = "BrowserScrollbarWidthHidden";
      hiddenInputContainer.type = "hidden";
      hiddenInputContainer.value = this.browserScrollWidth;
      document.getElementById('root').appendChild(hiddenInputContainer);
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "CollaboratorTable",
      name: 'Table_' + this.getName(),
      onLoad: this.adjustHeaderStyle(this)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "thead",
      name: 'TableHead_' + this.getName()
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tr",
      key: '0_' + this.getName(),
      name: 'TableHeadTR_' + this.getName()
    }, this.getFields().map((mappedData, i) => mappedData.showHeader ? /*#__PURE__*/_react.default.createElement("div", {
      className: "td",
      key: this.getName() + '_' + i,
      style: {
        width: '10.5%'
      }
    }, mappedData.header) : null))), /*#__PURE__*/_react.default.createElement("div", {
      className: "tbody",
      name: 'TableBody_' + this.getName()
    }, this.getData()[0].fetchingData === true ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Loading...")) : this.getData().map((mappedData, i) => /*#__PURE__*/_react.default.createElement("div", {
      className: "tr",
      key: this.getName() + '_' + this.getName() + '_' + i,
      name: 'TableBodyTR_' + this.getName(),
      onDoubleClick: this.executeOnDoubleClick.bind(this)
    }, this.getFields().map((mappedData2, j) => mappedData2.showHeader ? /*#__PURE__*/_react.default.createElement("div", {
      className: "td",
      key: this.getName() + '_' + j,
      style: {
        width: document.getElementById("Table_" + this.getName() + "_CellWidth").value
      }
    }, mappedData[mappedData2.name]) : null)))));
  }
});

const GenerateButton = props => {
  let NewButton = new ButtonComponent(props);
  return NewButton.renderComponent();
};

exports.GenerateButton = GenerateButton;

const GenerateInputText = props => {
  let NewInputText = new InputText(props);
  return NewInputText.renderComponent();
};

exports.GenerateInputText = GenerateInputText;

const GenerateNotificationPopup = props => {
  let NotificationPopUp = new NotificationPopup(props);
  return NotificationPopUp.renderComponent();
};

exports.GenerateNotificationPopup = GenerateNotificationPopup;

const GenerateModalForm = props => {
  let formModal = new FormModal(props);
  return formModal.renderComponent();
};

exports.GenerateModalForm = GenerateModalForm;

const GenerateInputGroup = props => {
  let inputGroupComponent = new InputGroupComponent(props);
  return inputGroupComponent.renderComponent();
};

exports.GenerateInputGroup = GenerateInputGroup;

const LinkWrapper = props => {
  let linkWrapper = new LinkWrapperClass(props);
  return linkWrapper.renderComponent();
};

exports.LinkWrapper = LinkWrapper;

const FormModalWrapper = props => {
  let formModalWrapper = new FormModalWrapperClass(props);
  return formModalWrapper.renderComponent();
};

exports.FormModalWrapper = FormModalWrapper;

const TableWrapper = props => {
  let tableComponent = new TableComponent(props);
  return tableComponent.renderTable();
};

exports.TableWrapper = TableWrapper;