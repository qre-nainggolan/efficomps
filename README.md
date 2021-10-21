# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is yet in experimental environtment, the purpose of this package is to provide as many as self customeable react component which is easy to be implemented.

## Available Scripts

To install the package 

npm install efficomps



import { GenerateInputText, GenerateButton, GenerateNotificationPopup, GenerateInputGroup, TableWrapper, FormModalWrapper } from 'efficomps';
import { HTTPProxy } from 'efficomps';
import { DataModelling } from 'efficomps';
import './CollaboratorComponent.css';

this.CommodityDataModel = DataModelling({
    fields:[
        {name:'komoditi', header:'Komoditi', type:'string', showHeader:true },
        {name:'komoditi_Group', header:'Komoditi_Group', type:'string', showHeader:true },
        {name:'kode_Tiket', header:'Kode_Tiket', type:'string', showHeader:true },
        {name:'sumber', header:'Sumber', type:'string', showHeader:true },
        {name:'type_Spesifikasi', header:'Type_Spesifikasi', type:'string', showHeader:true },
        {name:'type_Pengangkutan', header:'Type_Pengangkutan', type:'string', showHeader:true },
        {name:'sales_ProductCode', header:'Sales_ProductCode', type:'string', showHeader:true },
        {name:'type_Storage', header:'Type_Storage', type:'string', showHeader:true },
        {name:'sorageLocation', header:'SorageLocation', type:'string', showHeader:true },
        {name:'segel', header:'Segel', type:'string', showHeader:true },
        {name:'keterangan_Komoditi', header:'Keterangan Komoditi', type:'string', showHeader:true },
        {name: 'userID', header: 'UserID', type: 'string', showHeader: false },
        {name:'user_Profile', header:'User_Profile', type:'string', showHeader:false },
        {name: 'lastChange', header: 'LastChange', type: 'string', showHeader: false }
    ]
})

loadSelectedData(e, selectedRowData) {

    let commodityValue = selectedRowData.komoditi;
    let groupValue = selectedRowData.komoditi_Group;
    let pengangkutanValue = selectedRowData.type_Pengangkutan;

    this.setState(state => ({
        commoditiy: commodityValue,
        group: groupValue,
        pengangkutan: pengangkutanValue,
        modalCommodity: false
    }))
}

<TableWrapper
    fields={this.CommodityDataModel}
    data={this.state.listCommodity}
    name={'CommodityTable'}
    doubleClickEvent={this.loadSelectedData}
/>