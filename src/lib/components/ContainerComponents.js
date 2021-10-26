import React, { useState } from 'react';
import ClassAdapter from './ClassAdapter';
import { Link } from 'react-router-dom';
import './CollaboratorComponent.css';

const ContainerWrapper = ClassAdapter(null, {
    __init: function () {
        for (let i in arguments[0]) {
            this[i] = arguments[0][i];
        }
    },
    getName: function () {
        return this.name || "UnnamedContainerComponent";
    },
    getLabel: function () {
        return this.label || "CustomContainerComponent";
    },
    getClassname: function () {
        return this.className || "EmptyClassnameContainerComponent";
    },
    getDirectStyle: function () {
        return this.directStyle || {};
    },
    getNavigatorMenu: function () {
        return this.getNavigatorMenu();
    },
    getChildren: function () {
        return this.children || (<div></div>);
    },
    getLeftColumnClassname: function () {
        return this.leftColumnStatus || "EfficompsContainerLeftColumnFirstLoad";
    },
    setLeftColumnClassname: function (newClassname) {
        this.leftColumnStatus = newClassname;
    },
    getContentColumnClassname: function () {
        return (this.leftColumnStatus === "unhide" || (!this.leftColumnStatus)) ? "EfficompsContainerContentColumn" : "EfficompsContainerContentColumnWider";
    },
    getLeftColumn: function () {
        return this.leftColumn || (<div></div>);
    },
    getFullMenu: function (menu) {
        let tempObj = [];
        menu.map((mappedData, j) => ((mappedData.show)
            ?
            (
                tempObj.push(<Link to={mappedData.target} onMouseEnter={() => { clearTimeout(); }} onMouseOut={() => { clearTimeout(); }}>{mappedData.label}</Link>)
            )
            :
            null
        ));
        return tempObj;
    },
    renderContainer: function () {
        const [leftColumnClassnameState, setLeftColumnClassnameState] = useState("EfficompsContainerLeftColumnFirstLoad");
        const [contentColumnClassnameState, setContentColumnClassnameState] = useState("EfficompsContainerContentColumnFirstLoad");
        const [toggleButtonClassnameState, setToggleButtonClassnameState] = useState("EfficompsLeftColumnToggleButtonUnhide");
        const [menuContainerClassnameState, setMenuContainerClassnameState] = useState("EfficompsLeftColumnMenuContainerFirstLoad");
        const [menuListState, setMenuListState] = useState(this.leftColumn);
        
        let timer;

        return (
            <div
                className="EfficompsContainerWrapper"
                name={"EfficompsContainerWrapper_" + this.getName()}
            >
                <div
                    className={leftColumnClassnameState}
                    onMouseEnter={() => {
                        clearTimeout(timer);
                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                            timer = setTimeout(() => {
                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                            }, 250);
                        }
                    }}
                    onMouseOut={() => {
                        clearTimeout(timer);
                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
                            timer = setTimeout(() => {
                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
                            }, 250)
                        }
                    }}
                >
                </div>
                <div
                    className={toggleButtonClassnameState}
                    onMouseEnter={() => {
                        clearTimeout(timer);
                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                            timer = setTimeout(() => {
                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                            }, 250);
                        }
                    }}
                    onMouseOut={() => {
                        clearTimeout(timer);
                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
                            timer = setTimeout(() => {
                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
                            }, 250)
                        }
                    }}
                    onClick={() => {
                        clearTimeout(timer);
                        this.setLeftColumnClassname(leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad" ? "EfficompsContainerLeftColumnHide" : "EfficompsContainerLeftColumnUnhide");
                        setToggleButtonClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsLeftColumnToggleButtonUnhide" : "EfficompsLeftColumnToggleButton");

                        setLeftColumnClassnameState(leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad" ? "EfficompsContainerLeftColumnHide" : "EfficompsContainerLeftColumnUnhide");
                        setTimeout(() => {
                            setContentColumnClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsContainerContentColumn" : "EfficompsContainerContentColumnWider");
                        }, 250);
                    }}
                ></div>
                <div
                    className={leftColumnClassnameState === "EfficompsContainerLeftColumnHide" ? "EfficompsLeftColumnMenuContainerHide" : "EfficompsLeftColumnMenuContainerUnhide"}
                    onMouseEnter={() => { clearTimeout(timer); }}
                    onMouseOut={() => { clearTimeout(timer); }}
                >
                {
                    (leftColumnClassnameState === "EfficompsContainerLeftColumnHide")
                    ?
                        menuListState.map((mappedData, j) => ((mappedData.show)
                            ?
                            (
                                <Link to={mappedData.target} onMouseEnter={() => { clearTimeout(timer); }} onMouseOut={() => { clearTimeout(timer); }}>{mappedData.label.substring(0, 1)}</Link>
                            )
                            :
                            null
                        ))
                    :
                        this.getFullMenu(menuListState)
                }
                </div>
                <div className={contentColumnClassnameState}>
                    {this.getChildren()}
                </div>
            </div>
        )
    }
});

export const ContainerComponent = (props) => {
    let containerWrapper = new ContainerWrapper(props);
    return containerWrapper.renderContainer();
}