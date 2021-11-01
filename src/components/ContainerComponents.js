import React, { useState, useEffect } from 'react';
import ClassAdapter from './ClassAdapter';
import { Link } from 'react-router-dom';
import './CollaboratorComponent.css';

const ContainerWrapper = ClassAdapter(null, {
    __init: function () {
        for (let i in arguments[0]) { this[i] = arguments[0][i]; }

        this.marginTop = 0;

        let body = document.body,
            html = document.documentElement;

        this.browserCanvasHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
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
    getMenuCounter: function () {
        this.menuCounter = this.menuCounter || 0;
        this.menuCounter++;
        return this.menuCounter;
    },
    setAndGetMarginTop: function (definedMargin) {
        this.marginTop = (this.marginTop > 0) ? this.nextMarginTop : 44;
        this.nextMarginTop = (this.marginTop) ? (this.marginTop + definedMargin) : 44;

        return this.marginTop;
    },
    renderContainer: function () {
        const [leftColumnClassnameState, setLeftColumnClassnameState] = useState("EfficompsContainerLeftColumnFirstLoad");
        const [toggleButtonPadClassnameState, setToggleButtonPadClassnameState] = useState("EfficompsLeftColumnToggleButtonPad");
        const [contentColumnClassnameState, setContentColumnClassnameState] = useState("EfficompsContainerContentColumnFirstLoad");
        const [toggleButtonClassnameState, setToggleButtonClassnameState] = useState("EfficompsLeftColumnToggleButtonUnhide");
        const [menuListState, setMenuListState] = useState(this.leftColumn);
        const [heightOfLeftColumnState, setHeightOfLeftColumnState] = useState(0)
        const [browserCanvasHeightState, setBrowserCanvasHeightState] = useState(this.browserCanvasHeight);
        const [scrollPositionState, setScrollPositionState] = useState(0);

        let timer;
        let initialMarginTop = 44; // Height of box of main menu item
        let childHeight = 34; // Height of box of children' main menu item

        const getLength = (menuItemTemp, expectedMargin) => {

            expectedMargin = expectedMargin || initialMarginTop;
            menuItemTemp = menuItemTemp || menuListState;

            let componentLengthTemp = 0;
            let iTemp = 0, lengthTemp = menuItemTemp.length;

            while (iTemp < lengthTemp) {
                componentLengthTemp += (menuItemTemp[iTemp].show) ? expectedMargin : 0;
                if (menuItemTemp[iTemp].childMenu && menuItemTemp[iTemp].displayChild) {
                    componentLengthTemp += getLength(menuItemTemp[iTemp].childMenu, childHeight);
                }
                iTemp++
            }
            return componentLengthTemp;
        }

        useEffect(() => {
            let currentLeftMenuHeight = getLength();
            if (browserCanvasHeightState > currentLeftMenuHeight) {
                setHeightOfLeftColumnState(browserCanvasHeightState);
            } else {
                setHeightOfLeftColumnState(currentLeftMenuHeight + 44);
            }
        }, [menuListState]);

        return (
            <div
                className="EfficompsContainerWrapper"
                name={"EfficompsContainerWrapper_" + this.getName()}
                style={{ height: { browserCanvasHeightState } + 'px', overflowY: 'hidden' }}
            >
                <div
                    className="EfficompsLeftColumnProgressBarContainer"
                    style={{
                        height: leftColumnClassnameState === "EfficompsContainerLeftColumnHide" ? (this.browserCanvasHeight) : (heightOfLeftColumnState)
                    }}
                >
                </div>
                <div className="EfficompsLeftColumnProgressBar"></div>
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
                    style={
                        leftColumnClassnameState === "EfficompsContainerLeftColumnHide"
                            ?
                            { height: browserCanvasHeightState + 'px' }
                            :
                            (
                                parseInt(heightOfLeftColumnState) > parseInt(browserCanvasHeightState)
                                    ?
                                    { height: browserCanvasHeightState + 'px', overflow: '-moz-scrollbars-none', scrollbarWidth: 'none' }
                                    :
                                    { height: browserCanvasHeightState + 'px' }
                            )
                    }
                >
                </div>
                <div
                    className={toggleButtonPadClassnameState}
                    onMouseEnter={() => {
                        clearTimeout(timer);
                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                            timer = setTimeout(() => {
                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                setContentColumnClassnameState("EfficompsContainerContentColumn");
                                setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPad");
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
                                setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPadHide");
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
                                setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPad");
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
                                setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPadHide");
                            }, 250)
                        }
                    }}
                    onClick={() => {
                        clearTimeout(timer);
                        this.setLeftColumnClassname(leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad" ? "EfficompsContainerLeftColumnHide" : "EfficompsContainerLeftColumnUnhide");
                        setToggleButtonClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsLeftColumnToggleButtonUnhide" : "EfficompsLeftColumnToggleButton");
                        setToggleButtonPadClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsLeftColumnToggleButtonPad" : "EfficompsLeftColumnToggleButtonPadHide");

                        setLeftColumnClassnameState(leftColumnClassnameState === "EfficompsContainerLeftColumnUnhide" || leftColumnClassnameState === "EfficompsContainerLeftColumnFirstLoad" ? "EfficompsContainerLeftColumnHide" : "EfficompsContainerLeftColumnUnhide");
                        setTimeout(() => {
                            setContentColumnClassnameState(this.getLeftColumnClassname() === "EfficompsContainerLeftColumnUnhide" ? "EfficompsContainerContentColumn" : "EfficompsContainerContentColumnWider");
                        }, 250);
                    }}
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
                                    key={"menuListState2_" + j}
                                    style={{ marginTop: (this.setAndGetMarginTop(initialMarginTop) + 'px'), overflowY: 'hidden' }}
                                    onMouseEnter={() => {
                                        clearTimeout(timer);
                                        if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                                            timer = setTimeout(() => {
                                                setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                                setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                                setContentColumnClassnameState("EfficompsContainerContentColumn");
                                                setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPad");
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
                                                setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPadHide");
                                            }, 250)
                                        }
                                    }}
                                    onWheel={(e) => {
                                        // Wheel up will make deltaY as positive number, wheel up will make deltaY as negative number
                                        if (browserCanvasHeightState < heightOfLeftColumnState || scrollPositionState !== 0) {
                                            if (e.deltaY < 0) {
                                                if (scrollPositionState >= (browserCanvasHeightState - heightOfLeftColumnState)) {
                                                    setScrollPositionState(scrollPositionState + e.deltaY);
                                                }
                                            } else {
                                                if (scrollPositionState <= -20)
                                                    setScrollPositionState(scrollPositionState + e.deltaY);
                                            }
                                        }
                                    }}
                                >
                                    {mappedData.label.substring(0, 1)}
                                </div>
                            )
                            :
                            null
                        )
                        ) // end of looping menuListState.map((...
                        :
                        menuListState.map((mappedData, j) => ((mappedData.show)
                            ?
                            (mappedData.childMenu)
                                ?
                                (
                                    <div
                                        onWheel={(e) => {
                                            // Wheel up will make deltaY as positive number, wheel up will make deltaY as negative number
                                            if (browserCanvasHeightState < heightOfLeftColumnState || scrollPositionState !== 0) {
                                                if (e.deltaY < 0) {
                                                    if (scrollPositionState >= (browserCanvasHeightState - heightOfLeftColumnState)) {
                                                        setScrollPositionState(scrollPositionState + e.deltaY);
                                                    }
                                                } else {
                                                    if (scrollPositionState <= -20)
                                                        setScrollPositionState(scrollPositionState + e.deltaY);
                                                }
                                            }
                                            console.log(scrollPositionState)
                                        }}
                                        style={{ overflowY: 'hidden' }}
                                    >
                                        <Link
                                            className="MenuListState"
                                            key={"menuListStateLink_" + j}
                                            style={{ marginTop: ((this.setAndGetMarginTop(initialMarginTop) + scrollPositionState) + 'px') }}
                                            to={mappedData.target}
                                            onMouseEnter={() => {
                                                clearTimeout(timer);
                                                if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                                                    timer = setTimeout(() => {
                                                        setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                                        setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                                        setContentColumnClassnameState("EfficompsContainerContentColumn");
                                                        setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPad");
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
                                                        setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPadHide");
                                                    }, 250)
                                                }
                                            }}
                                            onClick={() => {
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
                                                })
                                                setMenuListState(newMenuListTemp);
                                            }}
                                        >
                                            {'\u281B'}{'\u00A0'}{mappedData.label}
                                        </Link>
                                        {
                                            (mappedData.displayChild)
                                                ?
                                                mappedData.childMenu.map((mappedData2, k) => (
                                                    ((mappedData2.show) && mappedData.displayChild === true)
                                                        ?
                                                        <div
                                                            key={"menuListState3_" + k}
                                                            style={{ overflowY: 'hidden' }}
                                                        >
                                                            <Link
                                                                className="MenuListStateFirstChildren"
                                                                style={{ marginTop: ((this.setAndGetMarginTop(childHeight) + scrollPositionState) + 'px') }}
                                                                to={mappedData2.target}
                                                                key={"menuListStateLink3_" + k}
                                                                onMouseEnter={() => {
                                                                    clearTimeout(timer);
                                                                    if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                                                                        timer = setTimeout(() => {
                                                                            setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                                                            setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                                                            setContentColumnClassnameState("EfficompsContainerContentColumn");
                                                                            setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPad");
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
                                                                            setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPadHide");
                                                                        }, 250)
                                                                    }
                                                                }}
                                                                onClick={() => {
                                                                    let newMenuListTemp = [];
                                                                    let tempMenuItem;
                                                                    menuListState.map((mappedDataTemp, j) => {
                                                                        tempMenuItem = mappedDataTemp;
                                                                        if (mappedDataTemp.childMenu && mappedDataTemp.name == mappedData.name) {
                                                                            if (mappedData.displayChild) {
                                                                                mappedDataTemp.childMenu.map((mappedDataTemp2, k) => {
                                                                                    if ((mappedDataTemp2.childMenu) && mappedDataTemp2.name === mappedData2.name) {
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
                                                                    })
                                                                    setMenuListState(newMenuListTemp);
                                                                }}
                                                            >
                                                                {mappedData2.label}
                                                            </Link>
                                                            {
                                                                (mappedData2.displayChild)
                                                                    ?
                                                                    mappedData2.childMenu.map((mappedData3, k) => (
                                                                        ((mappedData3.show) && mappedData2.displayChild === true)
                                                                            ?
                                                                            <Link
                                                                                to={mappedData3.target}
                                                                                className="MenuListStateGrandChildren"
                                                                                style={{ marginTop: ((this.setAndGetMarginTop(childHeight) + scrollPositionState) + 'px') }}
                                                                                key={"menuListState4_" + k}
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
                                                                                {mappedData3.label}
                                                                            </Link>
                                                                            :
                                                                            null
                                                                    ))
                                                                    :
                                                                    null
                                                            }
                                                        </div>
                                                        :
                                                        null
                                                ))
                                                :
                                                null
                                        }
                                    </div>
                                )
                                :
                                (
                                    <Link
                                        className="MenuListState"
                                        style={{ marginTop: ((this.setAndGetMarginTop(initialMarginTop) + scrollPositionState) + 'px') }}
                                        to={mappedData.target}
                                        key={"menuListState5_" + j}
                                        onMouseEnter={() => {
                                            clearTimeout(timer);
                                            if (leftColumnClassnameState === "EfficompsContainerLeftColumnHide") {
                                                timer = setTimeout(() => {
                                                    setLeftColumnClassnameState("EfficompsContainerLeftColumnHideHover");
                                                    setToggleButtonClassnameState("EfficompsLeftColumnToggleButtonUnhide");
                                                    setContentColumnClassnameState("EfficompsContainerContentColumn");
                                                    setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPad");
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
                                                    setToggleButtonPadClassnameState("EfficompsLeftColumnToggleButtonPadHide");
                                                }, 250)
                                            }
                                        }}
                                        onClick={() => {
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
                                            })
                                            setMenuListState(newMenuListTemp);
                                        }}
                                    >
                                        {'\u281B'}{'\u00A0'}{mappedData.label}
                                    </Link>
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