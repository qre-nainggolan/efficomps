import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import Draggable from "react-draggable";
import ClassAdapter from './ClassAdapter';
import './CollaboratorComponent.css';

const FormComponents = ClassAdapter(null, {
    __init: function () {
        for (let i in arguments[0]){
            this[i] = arguments[0][i];
        }
    },
    getName: function () {
        return this.name || "UnnamedComponent";
    },
    getLabel: function () {
        return this.label || "CustomComponent";
    },
    getClassname: function () {
        return this.className || "EmptyClassnameComponent";
    },
    getDirectStyle: function () {
        return this.directStyle || {};
    },
    getElementPosition: function (elemId) {
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
        }

        //It has been noticed that offsetTop if 69 pixels more for IE 6
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            let ieversion = new Number(RegExp.$1)
            //if (ieversion=6 && ieversion<7)getClassname            // {
            //if(offsetTop&gt;78) offsetTop -= 79;
            //}
        }
        return { left: offsetLeft, top: offsetTop };
    }
});

const ButtonComponent = ClassAdapter(FormComponents, {
    getStateAttribute: function () {
        return this.stateAttr || null;
    },
    executeOnClick: function () {
        return this.clickMethod || null;
    },
    renderComponent: function () {
        return (<Button className={this.getClassname()} style={this.getDirectStyle()} onClick={this.executeOnClick()} color="primary">{this.getLabel()}</Button>)
    }
});

const InputComponents = ClassAdapter(FormComponents, {
    __init: function () {
        InputComponents.uber.__init.apply(this, arguments);
    },
    getEditableState: function () {
        return this.editable || true;
    },
    getDefaultValue: function () {
        return this.defaultValue || "";
    },
    getStateAttribute: function () {
        return this.stateAttr || null;
    },
    getPlaceholder: function () {
        return this.placeholder || 'Please type any input';
    },
    getValue: function () {
        return this.value || "";
    },
    executeOnChange: function () {
        return this.changeMethod || null;
    }
});

const InputText = ClassAdapter(InputComponents, {
    renderComponent: function () {
        return (
            <Input type="text" style={this.getDirectStyle()} value={this.getValue()} onChange={this.executeOnChange()} placeholder={this.getPlaceholder()} />
        )
    }
});

const InputGroupComponent = ClassAdapter(InputComponents, {
    getInputDirectStyle: function () {
        return this.inputDirectStyle || {};
    },
    renderComponent: function () {
        return (
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={this.getDirectStyle()}>
                <Label for="exampleEmail" className="mr-sm-2">{this.getLabel()}</Label>
                <Input type="text" value={this.getValue()} onChange={this.executeOnChange()} placeholder={this.getPlaceholder()} style={this.getInputDirectStyle()}/>
            </FormGroup>
        )
    }
})

const ModalComponents = ClassAdapter(FormComponents, {
    __init: function () {
        ModalComponents.uber.__init.apply(this, arguments);
    },
    getHeaderTitle: function () {
        return this.headerTitle || "ModalComponent";
    },
    getBodyHeaderText: function () {
        return this.bodyHeaderText || "ModalComponent";
    },
    executeOnToggle: function () {
        return this.onToggleMethod || null;
    },
    getIsOpen: function () {
        return this.isOpen || false;
    },
    getContent: function () {
        return this.content || (<div></div>);
    }
})

const NotificationPopup = ClassAdapter(ModalComponents, {
    renderComponent: function () {
        return (
            <Draggable>
                <Modal isOpen={this.getIsOpen()} toggle={this.executeOnToggle()} name={this.getName()}>
                    <ModalHeader toggle={this.executeOnToggle()}>{this.getHeaderTitle()}</ModalHeader>
                    <ModalBody>
                        {this.getBodyHeaderText()}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.executeOnToggle()}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.executeOnToggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Draggable>
        )
    }
})

const FormModal = ClassAdapter(ModalComponents, {
    renderComponent: function () {
        return (
            <Draggable>
                <Modal isOpen={this.getIsOpen()} toggle={this.executeOnToggle()} name={this.getName()} style={{ maxWidth: '100%', width: '90%', maxHeight: '100%', height: '90%' }} size="lg">
                    <ModalHeader toggle={this.executeOnToggle()}>{this.getHeaderTitle()}</ModalHeader>
                    {this.getContent()}
                </Modal>
            </Draggable>
        )
    }
});

const FormModalWrapperClass = ClassAdapter(ModalComponents, {
    getChildren: function () {
        return this.children || (<div></div>);
    },
    renderComponent: function () {
        return (
            <Draggable>
                <Modal
                    isOpen={this.getIsOpen()}
                    toggle={this.executeOnToggle()}
                    name={this.getName()}
                    style={{ maxWidth: '100%', width: '95%' }}
                    size="lg"
                >
                    <ModalHeader toggle={this.executeOnToggle()}>{this.getHeaderTitle()}</ModalHeader>
                    {this.getChildren()}
                </Modal>
            </Draggable>
        )
    }
});

const LinkWrapperClass = ClassAdapter(FormComponents, {
    __init: function () {
        LinkWrapperClass.uber.__init.apply(this, arguments);
    },
    getLinkTarget: function () {
        return this.to || "";
    },
    executeMouseEnter: function () {
        return this.mouseOver || null;
    },
    executeMouseLeave: function () {
        return this.mouseOver || null;
    },
    renderComponent: function () {
        return (
            <div onMouseEnter={() => this.executeMouseEnter()} onMouseLeave={() => this.executeMouseLeave()}>
                <Link to={this.getLinkTarget()} className={this.getClassname()}>{'ab'}</Link>
            </div>
        )
    }
});

const TableComponent = ClassAdapter(FormComponents, {
    getFields: function () {
        return this.fields || [];
    },
    getData: function () {
        let defaultData = [
            { fetchingData: true }
        ]
        return this.data || defaultData;
    },
    getTableWidth: function () {
        return this.tableWidth || "1000px";
    },
    getDisplayedFields: function () {
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
    executeOnDoubleClick: function (e) {

        if (this.doubleClickEvent) {
            let fields = this.getFields();
            let counter = 0;
            let rowData = {};
            while (counter < e.currentTarget.childElementCount) {
                rowData[fields[counter].name] = e.currentTarget.children[counter].innerText
                counter++;
            }
            this.doubleClickEvent(e, rowData)
        } else {
            return false;
        }

    },
    getBrowserScrollbarWidth: function () {
        return this.browserScrollWidth || 0;
    },
    adjustHeaderStyle: function () 
    {
        if (document.getElementsByName("Table_" + this.getName()))
        {
            let tableComp = document.getElementsByName("Table_" + this.getName());
            for (let i in tableComp)
            {
                if (typeof tableComp[i] === "object" && tableComp[i].id != "Table_" + this.getName() + "_" + i)
                {
                    let tdWidth, headerWidth, tableContainerWidth;

                    if (!document.getElementById("Table_" + this.getName() + "_CellWidth")) {
                        headerWidth = parseInt(window.getComputedStyle(tableComp[i].parentNode).getPropertyValue("width"));
                        console.log("a." + headerWidth);
                        headerWidth = headerWidth - parseInt(window.getComputedStyle(tableComp[i].parentNode).getPropertyValue("padding-left"));
                        console.log("b." + headerWidth + "," + parseInt(window.getComputedStyle(tableComp[i].parentNode).getPropertyValue("padding-left")));
                        headerWidth = headerWidth - parseInt(window.getComputedStyle(tableComp[i].parentNode).getPropertyValue("padding-right"));
                        console.log("c." + headerWidth + "," + parseInt(window.getComputedStyle(tableComp[i].parentNode).getPropertyValue("padding-right")));

                        tdWidth = ((headerWidth - (6 * this.getDisplayedFields()) - this.getBrowserScrollbarWidth()) / this.getDisplayedFields()) + "px";

                        let hiddenInputContainer = document.createElement("input")
                        hiddenInputContainer.id = "Table_" + this.getName() + "_CellWidth";
                        hiddenInputContainer.type = "hidden";
                        hiddenInputContainer.value = tdWidth;
                        document.getElementById('root').appendChild(hiddenInputContainer);

                        let hiddenHeaderWidth = document.createElement("input")
                        hiddenHeaderWidth.id = "Table_" + this.getName() + "_HeaderWidth";
                        hiddenHeaderWidth.type = "hidden";
                        hiddenHeaderWidth.value = headerWidth;
                        document.getElementById('root').appendChild(hiddenHeaderWidth);

                        tableContainerWidth = parseInt(window.getComputedStyle(tableComp[i].parentNode.parentNode).getPropertyValue("width"));

                        let tableContainerWidthInput = document.createElement("input")
                        tableContainerWidthInput.id = "TableContainer_" + this.getName() + "_HeaderWidth";
                        tableContainerWidthInput.type = "hidden";
                        tableContainerWidthInput.value = tableContainerWidth;
                        document.getElementById('root').appendChild(tableContainerWidthInput);
                        console.log("1. tableContainerWidth: " + tableContainerWidth + "," + headerWidth);
                    } else {
                        tdWidth = document.getElementById("Table_" + this.getName() + "_CellWidth").value;
                        headerWidth = document.getElementById("Table_" + this.getName() + "_HeaderWidth").value;
                        tableContainerWidth = document.getElementById("TableContainer_" + this.getName() + "_HeaderWidth").value;
                        console.log("2. tableContainerWidth: " + tableContainerWidth + "," + headerWidth);
                    }
                    /*
                    document.getElementsByName("TableHead_" + this.getName())[i].setAttribute("style", "margin-left:" + ((tableContainerWidth - headerWidth) / 2) + "px;margin-right:" + ((tableContainerWidth - headerWidth) / 2) + "; border-right:1px solid #ccc;");
                    document.getElementsByName("TableHeadTR_" + this.getName())[i].setAttribute("style", "width:" + (headerWidth - this.getBrowserScrollbarWidth()) + "px");
                    document.getElementsByName("Table_" + this.getName())[i].setAttribute("style", "max-width:" + headerWidth + "px");
                    */
                    document.getElementsByName("TableHead_" + this.getName())[i].setAttribute("style", "width:" + headerWidth + "px; border-right:1px solid #ccc;");
                    document.getElementsByName("TableHeadTR_" + this.getName())[i].setAttribute("style", "width:" + (headerWidth - this.getBrowserScrollbarWidth()) + "px");
                    document.getElementsByName("Table_" + this.getName())[i].setAttribute("style", "max-width:" + headerWidth + "px");

                    for (let j in tableComp[i].childNodes) { // thead only, tbody cell width is adjusted after state of API fetch is done
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
    renderTable: function ()
    {
        if (document.getElementById("BrowserScrollbarWidthHidden")){
            this.browserScrollWidth = document.getElementById("BrowserScrollbarWidthHidden").value;
        }
        else
        {
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
                let tempTableTd = document.createElement("div")
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

            let hiddenInputContainer = document.createElement("input")
            hiddenInputContainer.id = "BrowserScrollbarWidthHidden";
            hiddenInputContainer.type = "hidden";
            hiddenInputContainer.value = this.browserScrollWidth;
            document.getElementById('root').appendChild(hiddenInputContainer);
        }

        return (
            <div className="CollaboratorTable" name={'Table_' + this.getName()} onLoad={this.adjustHeaderStyle(this)} style={{ align:'center' }}>
                <div className="thead" name={'TableHead_' + this.getName()}>
                {
                    <div
                        className="tr"
                        key={'0_' + this.getName()}
                        name={'TableHeadTR_' + this.getName()}
                    >
                    {
                        this.getFields().map((mappedData, i) => (
                            (mappedData.showHeader)
                            ? 
                                (
                                    <div
                                        className="td"
                                        key={this.getName() + '_' + i}
                                        style={{ width: '10.5%' }}
                                    >
                                        {mappedData.header}
                                    </div>
                                )
                            : 
                                null
                        ))
                    }
                    </div>
                }
                </div>
                <div className="tbody" name={'TableBody_' + this.getName()}>
                {
                    (this.getData()[0].fetchingData === true)
                    ? 
                        <div><h1>Loading...</h1></div> 
                    : 
                        this.getData().map((mappedData, i) =>
                        (
                            <div 
                                className="tr"
                                key={this.getName() + '_' + this.getName() + '_' + i}
                                name={'TableBodyTR_' + this.getName()}
                                onDoubleClick={this.executeOnDoubleClick.bind(this)}
                            >
                            {
                                this.getFields().map((mappedData2, j) => (
                                    (mappedData2.showHeader)
                                    ? 
                                        (
                                            <div
                                                className="td"
                                                key={this.getName() + '_' + j}
                                                style={{ width: document.getElementById("Table_" + this.getName() + "_CellWidth").value }}
                                            >
                                                {mappedData[mappedData2.name]}
                                            </div>
                                        )
                                    : 
                                    null
                                ))
                            }
                            </div>
                        ))
                }
                </div>                
            </div>
        )
    }
});
    
export const GenerateButton = (props) => {
    let NewButton = new ButtonComponent(props);
    return NewButton.renderComponent();
}

export const GenerateInputText = (props) => {
    let NewInputText = new InputText(props);
    return NewInputText.renderComponent();
}

export const GenerateNotificationPopup = (props) => {
    let NotificationPopUp = new NotificationPopup(props);
    return NotificationPopUp.renderComponent();
}

export const GenerateModalForm = (props) => {
    let formModal = new FormModal(props);
    return formModal.renderComponent();
}

export const GenerateInputGroup = (props) => {
    let inputGroupComponent = new InputGroupComponent(props);
    return inputGroupComponent.renderComponent();
}

export const LinkWrapper = (props) => {
    let linkWrapper = new LinkWrapperClass(props);
    return linkWrapper.renderComponent();
}

export const FormModalWrapper = (props) => {
    let formModalWrapper = new FormModalWrapperClass(props);
    return formModalWrapper.renderComponent();
}

export const TableWrapper = (props) => {
    let tableComponent = new TableComponent(props);
    return tableComponent.renderTable();
}