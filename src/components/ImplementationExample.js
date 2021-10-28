import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreatorsGeneralInfo } from '../store/GeneralInfo';
import { Button, ModalBody, ModalFooter, Row } from 'reactstrap';
import './Button.css';

import { GenerateInputText, GenerateButton, GenerateNotificationPopup, GenerateInputGroup, TableWrapper, FormModalWrapper } from '../collaborator/FormComponents';
import { HTTPProxy } from '../collaborator/HttpProxy';
import { DataModelling } from '../collaborator/DataModelling';
import '../collaborator/CollaboratorComponent.css';

class ImplementationExample extends Component {

    componentDidMount() {
        this.props.getCompanyInfo('erik');
        HTTPProxy({
            urlTarget: 'api/SampleData/GetListBongkarMuat',
            params: "?username=erik",
            method: 'GET',
            onSuccess: this.updateListBongkarMuat
        });
    }

    componentDidUpdate() {
        this.props.getCompanyInfo('erik');
    }

    toggle() {
        let modalState = !this.state.modal;
        this.setState(state => ({ modal: modalState, tableWidth: 950 }));
    }

    toggleTimbang() {
        let modalState = !this.state.modalTimbang;
        this.setState(state => ({ modalTimbang: modalState }));
    }

    toggleExitTransaction() {
        let modalState = !this.state.modalExitTransaction;
        this.setState(state => ({ modalExitTransaction: modalState }));
    }

    togglePrintTransaction() {
        let modalState = !this.state.modalPrintTransaction;
        this.setState(state => ({ modalPrintTransaction: modalState }));
    }

    updateListCommodity(newData) {
        this.setState(state => ({ listCommodity: newData }))
    }

    updateListBongkarMuat(newData) {
        this.setState(state => ({ listBongkarMuat: newData }))
    }

    toggleCommodity() {

        HTTPProxy({
            urlTarget: 'api/SampleData/GetListCommodity',
            params: "?username=erik",
            method: 'GET',
            onSuccess: this.updateListCommodity
        });

        let modalState = !this.state.modalCommodity;
        this.setState(state => ({ modalCommodity: modalState }));
    }

    togglePengangkutan() {

        HTTPProxy({
            urlTarget: 'api/SampleData/GetListCommodity',
            params: "?username=erik",
            method: 'GET',
            onSuccess: this.updateListCommodity
        });

        let modalState = !this.state.modalCommodity;
        this.setState(state => ({ modalCommodity: modalState }));
    }

    loadSelectedData(e, textValue) {

        let commodityValue = textValue.komoditi;
        let groupValue = textValue.komoditi_Group;
        let pengangkutanValue = textValue.type_Pengangkutan;

        this.setState(state => ({
            commoditiy: commodityValue,
            group: groupValue,
            pengangkutan: pengangkutanValue,
            modalCommodity: false
        }))
    }

    textChanged(e) {
        const targetValue = e.target.value;
        this.setState(state => ({
            value: targetValue
        }));
    }

    nomorKendaraanChanged(e) {
        const targetValue = e.target.value;
        this.setState(state => ({
            nomorKendaraan: targetValue
        }));
    }

    SPChanged(e) {
        const targetValue = e.target.value;
        this.setState(state => ({
            SP: targetValue
        }));
    }

    updateTableWidth() {
        this.setState(state => ({
            tableWidth: 800
        }));
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalExitTransaction: false,
            modalCommodity: false,
            modalTimbang: false,
            value: '',
            commoditiy: '',
            pengangkutan: '',
            group: '',
            nomorKendaraan: '',
            tableWidth: 500,
            SP: '',
            listCommodity: [],
            listBongkarMuat: []
        };

        this.updateTableWidth = this.updateTableWidth.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleExitTransaction = this.toggleExitTransaction.bind(this);
        this.togglePrintTransaction = this.togglePrintTransaction.bind(this);
        this.toggleCommodity = this.toggleCommodity.bind(this);
        this.togglePengangkutan = this.togglePengangkutan.bind(this);
        this.toggleTimbang = this.toggleTimbang.bind(this);
        this.updateListCommodity = this.updateListCommodity.bind(this);
        this.updateListBongkarMuat = this.updateListBongkarMuat.bind(this);
        this.loadSelectedData = this.loadSelectedData.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.nomorKendaraanChanged = this.nomorKendaraanChanged.bind(this);
        this.SPChanged = this.SPChanged.bind(this);

        this.BongkarMuatDataModel = DataModelling({
            fields: [
                { name: 'no_Kendaraan', header: 'Header 1', type: 'string', showHeader: true },
                { name: 'no_Masuk', header: 'Header 2', type: 'string', showHeader: true },
                { name: 'berat_Masuk', header: 'Header 3', type: 'string', showHeader: true },
                { name: 'komoditi', header: 'Header 4', type: 'string', showHeader: true },
                { name: 'no_Keluar', header: 'Header 6', type: 'string', showHeader: true },
                { name: 'no_Tiket', header: 'Header 5', type: 'string', showHeader: true },
                { name: 'tanggal_Keluar', header: 'Header 7', type: 'string', showHeader: true },
                { name: 'berat_Keluar', header: 'Header 8', type: 'string', showHeader: true },
                { name: 'berat_Netto', header: 'Header 9', type: 'string', showHeader: true },
                { name: 'potongan', header: 'Header 10', type: 'string', showHeader: false }
            ]
        });

        this.CommodityDataModel = DataModelling({

            fields:[
                { name:'komoditi', header:'Header 1', type:'string', showHeader:true },
                { name: 'komoditi_Group', header:'Header 2', type:'string', showHeader:true },
                { name: 'kode_Tiket', header:'Header 3', type:'string', showHeader:true },
                { name: 'sumber', header:'Header 4', type:'string', showHeader:true },
                { name: 'type_Spesifikasi', header:'Header 5', type:'string', showHeader:true },
                { name: 'type_Pengangkutan', header:'Header 6', type:'string', showHeader:true },
                { name: 'sales_ProductCode', header:'Header 7', type:'string', showHeader:true },
                { name: 'type_Storage', header:'Header 8', type:'string', showHeader:true },
                { name: 'sorageLocation', header:'Header 9', type:'string', showHeader:true },
                { name: 'segel', header:'Header 10', type:'string', showHeader:true },
                { name: 'keterangan_Komoditi', header:'Header 11', type:'string', showHeader:true },
                { name: 'userID', header: 'Header 12', type: 'string', showHeader: false },
                { name: 'user_Profile', header:'Header 13', type:'string', showHeader:false },
                { name: 'lastChange', header: 'Header 14', type: 'string', showHeader: false }
            ]
        })
    }

    render() {
        return (
            <div>
                <FormModalWrapper
                    className={''}
                    headerTitle={'Form Transaksi Masuk'}
                    onToggleMethod={this.toggle}
                    name={'EntryForm'}
                    isOpen={this.state.modal}
                >
                    <ModalBody>
                        <Row>
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'Komoditi'}
                                placeholder={'Komoditi'}
                                directStyle={{ marginLeft: '25px', marginRight: '5px' }}
                                label={"Komoditi"}
                                value={this.state.commoditiy}
                            />
                            <GenerateButton
                                className={'btn btn-primary'}
                                name={'LookupButton'}
                                clickMethod={this.toggleCommodity}
                                label={"..."}
                                directStyle={{ marginLeft: '5px', marginRight: '5px', height:'35px', bottom:'0', marginTop:'34px' }}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'Komoditi'}
                                placeholder={'Group'}
                                directStyle={{ marginLeft: '5px', marginRight: '5px'}}
                                label={"Group"}
                                value={this.state.group}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'Pengangkutan'}
                                placeholder={'Pengangkutan'}
                                directStyle={{ marginLeft: '5px', marginRight: '5px'}}
                                label={"Pengangkutan"}
                                inputDirectStyle={{width:'300px'}}
                                value={this.state.pengangkutan}
                            />
                            <GenerateButton
                                className={'btn btn-primary'}
                                name={'PengangkutanButton'}
                                clickMethod={this.togglePengangkutan}
                                label={"..."}
                                directStyle={{ marginLeft: '5px', marginRight: '5px', height: '35px', bottom: '0', marginTop: '34px' }}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NomorKendaraan'}
                                placeholder={'No.SP'}
                                directStyle={{ marginLeft: '5px', marginRight: '5px' }}
                                label={"No.SP"}
                                value={this.state.SP}
                                changeMethod={this.SPChanged}
                            />
                            <GenerateButton
                                className={'btn btn-primary'}
                                name={'TimbangButton'}
                                clickMethod={this.toggleTimbang}
                                label={"Check"}
                                directStyle={{ marginLeft: '5px', marginRight: '5px', height: '35px', bottom: '0', marginTop: '34px' }}
                            />
                        </Row>
                        <Row style={{marginTop:'10px'}}>
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NomorKendaraan'}
                                placeholder={'No.Kendaraan'}
                                directStyle={{ marginLeft: '25px', marginRight: '5px' }}
                                label={"No.Kendaraan"}
                                value={this.state.nomorKendaraan}
                                inputDirectStyle={{ width: '140px' }}
                                changeMethod={this.nomorKendaraanChanged}
                            />
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.togglePrintTransaction}>Simpan</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </FormModalWrapper>
                <FormModalWrapper 
                    className={''}
                    headerTitle={'Daftar Komoditi Timbang Muat'}
                    onToggleMethod={this.modalCommodity}
                    name={'ModalCommodity'}
                    isOpen={this.state.modalCommodity}
                >
                    <ModalBody>
                        <TableWrapper
                            fields={this.CommodityDataModel}
                            data={this.state.listCommodity}
                            name={'CommodityTable'}
                            doubleClickEvent={this.loadSelectedData}
                            height={'375px'}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.togglePrintTransaction}>Cetak</Button>
                        <Button color="secondary" onClick={this.toggleCommodity}>Cancel</Button>
                    </ModalFooter>
                </FormModalWrapper>
                <GenerateNotificationPopup
                    className={''}
                    headerTitle={'Form Transaksi Keluar'}
                    bodyHeaderText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    onToggleMethod={this.toggleExitTransaction}
                    name={'ExitForm'}
                    isOpen={this.state.modalExitTransaction}
                />
                <GenerateNotificationPopup
                    className={''}
                    headerTitle={'Form Cetak'}
                    bodyHeaderText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    onToggleMethod={this.togglePrintTransaction}
                    name={'CetakForm'}
                    isOpen={this.state.modalPrintTransaction}
                />
                <GenerateNotificationPopup
                    className={''}
                    headerTitle={'Timbang Berat'}
                    bodyHeaderText={'10,000'}
                    onToggleMethod={this.toggleTimbang}
                    name={'TimbangBerat'}
                    isOpen={this.state.modalTimbang}
                />
                <GenerateButton
                    className={'btn btn-primary'}
                    name={'ButtonComponent'}
                    clickMethod={this.toggle}
                    directStyle={{ marginLeft: '13px', marginRight: '2px' }} 
                    label={"Masuk"}
                />
                <GenerateButton
                    className={'btn btn-primary'}
                    name={'ButtonComponent'}
                    clickMethod={this.toggleExitTransaction}
                    directStyle={{ marginLeft: '2px', marginRight: '2px' }}
                    label={"Keluar"}
                />
                <GenerateButton
                    className={'btn btn-primary'}
                    name={'ButtonComponent'}
                    clickMethod={this.togglePrintTransaction}
                    directStyle={{ marginLeft: '2px', marginRight: '2px' }} 
                    label={"Cetak Tiket"}
                />
                <GenerateInputText
                    className={'btn btn-primary'}
                    name={'InputTextComponent'}
                    changeMethod={this.textChanged}
                    label={"Tikets"}
                    directStyle={{ marginLeft: '5px', width: '350px', borderRadius: '3px', borderWidth: '1px' }}
                    placeholder={"@Kata Kunci Pencarian"}
                    label={"OK"}
                    value={this.state.value}
                />
                <TableWrapper
                    fields={this.BongkarMuatDataModel}
                    data={this.state.listBongkarMuat}
                    name={'TableBongkarMuat'}
                    height={'375px'}
                />
            </div>
        );
    }
}

export default connect(
    state => state.generalInfo,
    dispatch => bindActionCreators(actionCreatorsGeneralInfo, dispatch)
)(ImplementationExample);