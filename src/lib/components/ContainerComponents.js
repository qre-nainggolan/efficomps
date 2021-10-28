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
        let initialMarginTop = 44;
        menu.map((mappedData, j) => ((mappedData.show)
            ?
            (
                tempObj.push(
                    <Link
                        className="MenuListState"
                        style={{ marginTop: (((j + 1) * initialMarginTop) + 'px') }}
                        to={mappedData.target}
                        onMouseEnter={() => { clearTimeout(); }}
                        onMouseOut={() => { clearTimeout(); }}
                    >
                        {mappedData.label}
                    </Link>
                )
            )
            :
            null
        ));
        return tempObj;
    },
    getMenuCounter: function () {
        this.menuCounter = this.menuCounter || 0;
        this.menuCounter++;
        return this.menuCounter;
    },
    renderContainer: function () {
        const [leftColumnClassnameState, setLeftColumnClassnameState] = useState("EfficompsContainerLeftColumnFirstLoad");
        const [contentColumnClassnameState, setContentColumnClassnameState] = useState("EfficompsContainerContentColumnFirstLoad");
        const [toggleButtonClassnameState, setToggleButtonClassnameState] = useState("EfficompsLeftColumnToggleButtonUnhide");
        const [menuListState, setMenuListState] = useState(this.leftColumn);

        let timer;
        let initialMarginTop = 44;

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
                                setContentColumnClassnameState("EfficompsContainerContentColumn");
                            }, 250);
                        }
                    }}
                    onMouseOut={() => {
                        clearTimeout(timer);
                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
                            timer = setTimeout(() => {
                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
                                setContentColumnClassnameState("EfficompsContainerContentColumnWider");
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
                                setContentColumnClassnameState("EfficompsContainerContentColumn");
                            }, 250);
                        }
                    }}
                    onMouseOut={() => {
                        clearTimeout(timer);
                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
                            timer = setTimeout(() => {
                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
                                setContentColumnClassnameState("EfficompsContainerContentColumnWider");
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
                </div>
                {
                    (leftColumnClassnameState === "EfficompsContainerLeftColumnHide")
                        ?
                        menuListState.map((mappedData, j) => ((mappedData.show)
                            ?
                            (
                                <div
                                    className="MenuListStateHide"
                                    style={{ marginTop: (((j + 1) * initialMarginTop) + 'px') }}
                                    onMouseEnter={() => {
                                        clearTimeout(timer);
                                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                                            timer = setTimeout(() => {
                                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                                setContentColumnClassnameState("EfficompsContainerContentColumn");
                                            }, 250);
                                        }
                                    }}
                                    onMouseOut={() => {
                                        clearTimeout(timer);
                                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
                                            timer = setTimeout(() => {
                                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
                                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
                                                setContentColumnClassnameState("EfficompsContainerContentColumnWider");
                                            }, 250)
                                        }
                                    }}
                                >
                                    {mappedData.label.substring(0, 1)}
                                </div>
                            )
                            :
                            null
                        ))
                        :
                        menuListState.map((mappedData, j) => ((mappedData.show)
                            ?
                            ( 
                                (mappedData.childMenu)
                                    ?
                                    (
                                        <div>
                                            <Link
                                                className="MenuListState"
                                                style={{ marginTop: (((this.getMenuCounter()) * initialMarginTop) + 'px') }}
                                                to={mappedData.target}
                                                onMouseEnter={() => {
                                                    clearTimeout(timer);
                                                    if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                                                        timer = setTimeout(() => {
                                                            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                                            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                                            setContentColumnClassnameState("EfficompsContainerContentColumn");
                                                        }, 250);
                                                    }
                                                }}
                                                onMouseOut={() => {
                                                    clearTimeout(timer);
                                                    if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
                                                        timer = setTimeout(() => {
                                                            setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
                                                            setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
                                                            setContentColumnClassnameState("EfficompsContainerContentColumnWider");
                                                        }, 250)
                                                    }
                                                }}
                                                onClick={() => {
                                                    let newMenuListTemp = [];
                                                    let tempMenuItem;
                                                    menuListState.map((mappedDataTemp, j) => {
                                                        tempMenuItem = mappedDataTemp;
                                                        if (mappedDataTemp.childMenu && mappedDataTemp.name == mappedData.name ) {
                                                            if (mappedData.displayChild) {
                                                                tempMenuItem.displayChild = !mappedDataTemp.displayChild;
                                                            } else {
                                                                tempMenuItem.displayChild = true;
                                                            }
                                                        }
                                                        newMenuListTemp[j] = tempMenuItem;
                                                        console.log("ya 2 : " + JSON.stringify(tempMenuItem));
                                                    })
                                                    setMenuListState(newMenuListTemp);
                                                    console.log("ya 3 : " + JSON.stringify(newMenuListTemp));
                                                }}
                                            >
                                                {mappedData.label}
                                            </Link>
                                            {
                                                (mappedData.displayChild)
                                                ?
                                                    mappedData.childMenu.map((mappedData2, k) => (
                                                        ((mappedData2.show) && mappedData.displayChild === true)
                                                            ?
                                                            <Link
                                                                className="MenuListStateFirstChildren"
                                                                style={{ marginTop: (((this.getMenuCounter()) * initialMarginTop) + 'px') }}
                                                                to={mappedData2.target}
                                                                onMouseEnter={() => {
                                                                    clearTimeout(timer);
                                                                    if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                                                                        timer = setTimeout(() => {
                                                                            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                                                            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                                                            setContentColumnClassnameState("EfficompsContainerContentColumn");
                                                                        }, 250);
                                                                    }
                                                                }}
                                                                onMouseOut={() => {
                                                                    clearTimeout(timer);
                                                                    if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
                                                                        timer = setTimeout(() => {
                                                                            setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
                                                                            setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
                                                                            setContentColumnClassnameState("EfficompsContainerContentColumnWider");
                                                                        }, 250)
                                                                    }
                                                                }}
                                                            >
                                                                {'\u281B'}{'\u00A0'}{mappedData2.label}
                                                            </Link>
                                                            :
                                                            null
                                                        )
                                                    )
                                                :
                                                    null
                                            }
                                        </div>
                                    )
                                    :
                                    (
                                        <Link
                                            className="MenuListState"
                                            style={{ marginTop: (((this.getMenuCounter()) * initialMarginTop) + 'px') }}
                                            to={mappedData.target}
                                            onMouseEnter={() => {
                                                clearTimeout(timer);
                                                if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                                                    timer = setTimeout(() => {
                                                        setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                                        setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                                        setContentColumnClassnameState("EfficompsContainerContentColumn");
                                                    }, 250);
                                                }
                                            }}
                                            onMouseOut={() => {
                                                clearTimeout(timer);
                                                if (leftColumnClassnameState === "EfficompsContainerLeftColumnHideHover") {
                                                    timer = setTimeout(() => {
                                                        setLeftColumnClassnameState("EfficompsContainerLeftColumnHide");
                                                        setToggleButtonClassnameState("EfficompsLeftColumnToggleButton");
                                                        setContentColumnClassnameState("EfficompsContainerContentColumnWider");
                                                    }, 250)
                                                }
                                            }}
                                            onClick={() => {
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
                                                })
                                                setMenuListState(newMenuListTemp);
                                            }}
                                        >
                                            {mappedData.label}
                                        </Link>
                                    )
                            )
                            :
                            null
                        ))
                }
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