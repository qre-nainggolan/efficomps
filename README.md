# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is yet in experimental environment, the purpose of this package is to provide as many as self customizeable react component which is easy to be implemented.

## Available Scripts


To install the package 

    npm install efficomps

Some snippets:

    import { GenerateInputText, GenerateButton, GenerateNotificationPopup, GenerateInputGroup, TableWrapper, FormModalWrapper } from 'efficomps';
    import { HTTPProxy } from 'efficomps';
    import { DataModelling } from 'efficomps';
    import './CollaboratorComponent.css';

    this.sampleDataModel = DataModelling({
        fields:[
            {name:'a', header:'A', type:'string', showHeader:true },
            {name:'b', header:'B', type:'string', showHeader:true },
            {name:'c', header:'C', type:'string', showHeader:true },
            {name:'d', header:'D', type:'string', showHeader:true },
            {name:'e', header:'E', type:'string', showHeader:false },
            {name: 'f', header: 'F', type: 'string', showHeader: false }
        ]
    })


    loadSelectedData(e, selectedRowData) {

        let valueA = selectedRowData.a;
        let valueB = selectedRowData.b;
        let valueC = selectedRowData.c;

        this.setState(state => ({
            stateA: valueA,
            stateB: valueB,
            stateC: valueC,
            modalCommodity: false
        }))
    }

    <TableWrapper
        fields={this.sampleDataModel}
        data={this.state.sampleList}
        name={'CommodityTable'}
        doubleClickEvent={this.loadSelectedData}
    />

https://user-images.githubusercontent.com/940036/138558093-04844185-a4ac-4f73-b6be-5765d2db73b7.mp4

