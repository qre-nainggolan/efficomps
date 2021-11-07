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
        width={'350px'}
    />

To build left navigation on layout, Menu items are specified in JSON format to make the setup is more configureable

    <ContainerComponent
        leftColumn={[
            { name: 'home', label: 'Home', target: '/', show: true },
            {
                name: 'transaksi',
                label: 'Transaksi',
                target: '#',
                show: true,
                childMenu: [
                    { name: '11', label: 'Timbang Muat', target: '/transaksiTimbangMuat', show: true }, 
                    { name: '12', label: 'Bongkar Muat', target: '/transaksiTimbangMuat', show: true }, 
                    {
                        name: '22',
                        label: 'Timbang JANKOS',
                        target: '#',
                        show: true,
                        childMenu: [{
                            name: '10',
                            label: 'Kendaraan Kebun',
                            target: '/transaksiTimbangMuat',
                            show: true
                        }, {
                            name: '9',
                            label: 'Kendaraan Kontrak',
                            target: '/transaksiTimbangMuat',
                            show: true
                        }, {
                            name: '8',
                            label: 'Kendaraan Umum',
                            target: '/transaksiTimbangMuat',
                            show: true
                        }]
                    }, 
                    { name: '21', label: 'Daftar Timbangan', target: '#', show: true }
                ]
            },
            { name: 'counter', label: 'Master Data', target: '/counter', show: true }
        ]}
    >
        {props.children}
    </ContainerComponent>




![Weighbridge_FE - Google Chrome 2021-11-07 09-44-56](https://user-images.githubusercontent.com/940036/140630445-11eaab03-0ae8-4f3a-931c-4e6ba5aa2a3a.gif)
