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
            urlTarget: 'https://goasn.id/APIAPI/GetListBongkarMuat.php',
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
        this.setState(state => ({ modal: modalState }));
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

    updateListPengangkutan(newData) {
        this.setState(state => ({ listPengangkutan: newData }))
    }

    updateListBongkarMuat(newData) {
        this.setState(state => ({ listBongkarMuat: newData }))
    }

    toggleCommodity() {

        HTTPProxy({
            urlTarget: 'https://goasn.id/APIAPI/GetListCommodity.php',
            params: "?username=erik",
            method: 'GET',
            onSuccess: this.updateListCommodity
        });

        let modalState = !this.state.modalCommodity;
        this.setState(state => ({ modalCommodity: modalState }));
    }

    togglePengangkutan() {

        HTTPProxy({
            urlTarget: 'https://goasn.id/APIAPI/GetListPengangkutan.php',
            params: "?username=erik",
            method: 'GET',
            onSuccess: this.updateListPengangkutan
        });

        let modalState = !this.state.modalPengangkutan;
        this.setState(state => ({ modalPengangkutan: modalState }));
    }

    checkDoubleClick(e, textValue) {

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

    processModalPengangkutan(e, textValue) {

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

    constructor(props)
    {
        super(props);
        this.state =
        {
            modal: false,
            modalExitTransaction: false,
            modalCommodity: false,
            modalTimbang: false,
            value: '',
            commoditiy: '',
            pengangkutan: '',
            group: '',
            nomorKendaraan: '',
            SP: '',
            listCommodity: [{ fetchingData: true }],
            listPengangkutan: [{ fetchingData: true }],
            listBongkarMuat: [{ fetchingData: true }]
        };
        this.toggle = this.toggle.bind(this);
        this.toggleExitTransaction = this.toggleExitTransaction.bind(this);
        this.togglePrintTransaction = this.togglePrintTransaction.bind(this);
        this.toggleCommodity = this.toggleCommodity.bind(this);
        this.togglePengangkutan = this.togglePengangkutan.bind(this);
        this.toggleTimbang = this.toggleTimbang.bind(this);
        this.updateListCommodity = this.updateListCommodity.bind(this);
        this.updateListPengangkutan = this.updateListPengangkutan.bind(this);
        this.updateListBongkarMuat = this.updateListBongkarMuat.bind(this);
        this.checkDoubleClick = this.checkDoubleClick.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.nomorKendaraanChanged = this.nomorKendaraanChanged.bind(this);
        this.SPChanged = this.SPChanged.bind(this);

        this.BongkarMuatDataModel = DataModelling({
            fields: [
                { name: 'no_Kendaraan', header: 'No.Kendaraan', type: 'string', showHeader: true },
                { name: 'no_Masuk', header: 'No.Masuk', type: 'string', showHeader: true },
                { name: 'berat_Masuk', header: 'Berat Masuk', type: 'string', showHeader: true },
                { name: 'komoditi', header: 'Komoditi', type: 'string', showHeader: true },
                { name: 'no_Tiket', header: 'No.Tiket', type: 'string', showHeader: true },
                { name: 'no_Keluar', header: 'No.Keluar', type: 'string', showHeader: true },
                { name: 'tanggal_Keluar', header: 'Tanggal Keluar', type: 'string', showHeader: true },
                { name: 'berat_Keluar', header: 'Berat Keluar', type: 'string', showHeader: true },
                { name: 'berat_Netto', header: 'Berat Bersih', type: 'string', showHeader: true },
                { name: 'potongan', header: 'Potongan', type: 'string', showHeader: false },
                { name: 'sumber_Komoditi', header: 'Sumber_Komoditi', type: 'string', showHeader: false },
                { name: 'spesifikasi_Komoditi', header: 'Spesifikasi_Komoditi', type: 'string', showHeader: false },
                { name: 'komoditi_Group', header: 'Komoditi_Group', type: 'string', showHeader: false },
                { name: 'storage_Location', header: 'Storage_Location', type: 'string', showHeader: false },
                { name: 'pengangkutan', header: 'Pengangkutan', type: 'string', showHeader: false },
                { name: 'no_SP', header: 'No_SP', type: 'string', showHeader: false },
                { name: 'nama_Supir', header: 'Nama_Supir', type: 'string', showHeader: false },
                { name: 'no_SIM', header: 'No_SIM', type: 'string', showHeader: false },
                { name: 'data_STNK_Kendaraan', header: 'Data_STNK_Kendaraan', type: 'string', showHeader: false },
                { name: 'dataTarra_Kendaraan', header: 'DataTarra_Kendaraan', type: 'string', showHeader: false },
                { name: 'jumlah_Segel', header: 'Jumlah_Segel', type: 'string', showHeader: false },
                { name: 'keterangan_Muatan', header: 'Keterangan_Muatan', type: 'string', showHeader: false },
                { name: 'userID', header: 'UserID', type: 'string', showHeader: false },
                { name: 'user_Profile', header: 'User_Profile', type: 'string', showHeader: false },
                { name: 'last_Change', header: 'Last_Change', type: 'string', showHeader: false },
                { name: 'tahun_Tanam', header: 'Tahun_Tanam', type: 'string', showHeader: false },
                { name: 'comp_Name', header: 'Comp_Name', type: 'string', showHeader: false },
                { name: 'fCQueueNo', header: 'FCQueueNo', type: 'string', showHeader: false }
            ]
        });

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
                {name:'keterangan_Komoditi', header:'Keterangan_Komoditi', type:'string', showHeader:true },
                {name: 'userID', header: 'UserID', type: 'string', showHeader: false },
                {name:'user_Profile', header:'User_Profile', type:'string', showHeader:false },
                {name: 'lastChange', header: 'LastChange', type: 'string', showHeader: false }
            ]
        })

        this.PengangkutanDataModel = DataModelling({
            fields:[
                {name:'pengangkutan_ID', header:'Pengangkutan_ID', type:'string', showHeader:true },
                {name:'nama_Pengangkutan', header:'Nama_Pengangkutan', type:'string', showHeader:true },
                {name:'initial', header:'Initial', type:'string', showHeader:true },
                {name:'alamat', header:'Alamat', type:'string', showHeader:true },
                {name:'telephone', header:'Telephone', type:'string', showHeader:true },
                {name:'contact_Person', header:'Contact_Person', type:'string', showHeader:true },
                {name:'komoditi_Group', header:'Komoditi_Group', type:'string', showHeader:true },
                {name:'keterangan', header:'Keterangan', type:'string', showHeader:true },
                {name:'user_ID', header:'User_ID', type:'string', showHeader:true },
                {name:'user_Profile', header:'User_Profile', type:'string', showHeader:true },
                {name: 'last_Change', header: 'Last_Change', type: 'string', showHeader: true }
            ]
        })
    }

    render() {
        return (
            <div className='ModuleContainer'>
                <FormModalWrapper
                    className={''}
                    headerTitle={'Form Transaksi Masuk'}
                    onToggleMethod={this.toggle}
                    name={'EntryForm'}
                    isOpen={this.state.modal}
                >
                    <ModalBody style={{paddingLeft:'25px'}}>
                        <Row style={{ marginTop: '10px' }}>
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'TicketNumber'}
                                placeholder={'no.tiket'}
                                directStyle={{ marginRight: '5px' }}
                                inputDirectStyle={{ width: '250px' }}
                                label={"No.Tiket"}
                                value={this.state.ticketNumber}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'TransactionStatus'}
                                placeholder={'status'}
                                directStyle={{ marginLeft: '4px', marginRight: '5px' }}
                                label={"Status"}
                                value={this.state.transactionStatus}
                                inputDirectStyle={{ width: '84px' }}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'UserID'}
                                placeholder={'user id'}
                                directStyle={{ marginLeft: '2px', marginRight: '5px' }}
                                label={"User ID"}
                                value={this.state.userId}
                                inputDirectStyle={{ width: '108px' }}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NomorTimbangMasuk'}
                                placeholder={'no timb. masuk'}
                                directStyle={{ marginLeft: '5px', marginRight: '5px' }}
                                label={'No.Timbang Masuk'}
                                value={this.state.inNumber}
                                inputDirectStyle={{ width: '143px' }}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NomorTimbangKeluar'}
                                placeholder={'no timb. keluar'}
                                directStyle={{ marginLeft: '3px', marginRight: '5px' }}
                                label={"No.Timbang Keluar"}
                                value={this.state.outNumber}
                                inputDirectStyle={{ width: '143px' }}
                            />
                        </Row>
                        <Row style={{ marginTop: '7px' }}>
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'Komoditi'}
                                placeholder={'Komoditi'}
                                directStyle={{ marginRight: '5px' }}
                                label={"Komoditi"}
                                value={this.state.commoditiy}
                            />
                            <GenerateButton
                                className={'btn btn-primary'}
                                name={'LookupButton'}
                                clickMethod={this.toggleCommodity}
                                label={"..."}
                                directStyle={{ marginLeft: '1px', marginRight: '5px', height:'35px', bottom:'0', marginTop:'34px' }}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'Komoditi'}
                                placeholder={'Group'}
                                directStyle={{ marginLeft: '7px', marginRight: '5px'}}
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
                                directStyle={{ marginLeft: '7px', marginRight: '5px', height: '35px', bottom: '0', marginTop: '34px' }}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NomorSP'}
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
                                label={"Timbang Berat"}
                                directStyle={{ marginLeft: '5px', marginRight: '5px', height: '35px', bottom: '0', marginTop: '34px' }}
                            />
                        </Row>
                        <Row style={{marginTop:'7px'}}>
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NomorKendaraanFront'}
                                placeholder={'bk'}
                                directStyle={{ marginLeft:'0px', marginRight: '5px' }}
                                label={"No.Kendaraan"}
                                value={this.state.nomorKendaraan}
                                inputDirectStyle={{ marginLeft: '0px', marginRight: '5px', width: '52px' }}
                                changeMethod={this.nomorKendaraanChanged}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NomorKendaraanMiddle'}
                                placeholder={'0000'}
                                directStyle={{ marginLeft: '-48px', marginRight: '5px', marginTop:'9px' }}
                                value={this.state.nomorKendaraan}
                                label={" "}
                                inputDirectStyle={{ marginLeft: '0px', marginRight: '5px', width: '90px' }}
                                changeMethod={this.nomorKendaraanChanged}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NomorKendaraanEnd'}
                                placeholder={'zzz'}
                                directStyle={{ marginLeft: '2px', marginRight: '5px', marginTop: '9px' }}
                                value={this.state.nomorKendaraan}
                                label={" "}
                                inputDirectStyle={{ width: '57px' }}
                                changeMethod={this.nomorKendaraanChanged}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'JenisOrModel'}
                                placeholder={'jenis/model'}
                                directStyle={{ marginLeft: '24px', marginRight: '5px' }}
                                label={"Jenis/Model"}
                                value={this.state.jenisOrModel}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'NamaSupir'}
                                placeholder={'nama supir'}
                                directStyle={{ marginLeft: '7px', marginRight: '5px' }}
                                label={"Nama Supir"}
                                value={this.state.namaSupir}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'SIM'}
                                placeholder={'sim'}
                                directStyle={{ marginLeft: '5px', marginRight: '5px' }}
                                label={"SIM"}
                                value={this.state.SIM}
                            />
                            <GenerateInputGroup
                                className={'btn btn-primary'}
                                name={'Sumber'}
                                placeholder={'sumber'}
                                directStyle={{ marginLeft: '5px', marginRight: '5px' }}
                                label={"Sumber"}
                                value={this.state.SIM}
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
                            doubleClickEvent={this.checkDoubleClick}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleCommodity}>Cancel</Button>
                    </ModalFooter>
                </FormModalWrapper>
                <FormModalWrapper
                    className={''}
                    headerTitle={'Daftar Agen Pengangkutan'}
                    onToggleMethod={this.togglePengangkutan}
                    name={'ModalPengangkutan'}
                    isOpen={this.state.modalPengangkutan}
                >
                    <ModalBody>
                        <TableWrapper
                            fields={this.PengangkutanDataModel}
                            data={this.state.listPengangkutan}
                            name={'PengangkutanTable'}
                            // doubleClickEvent={this.processModalPengangkutan}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.togglePengangkutan}>Cancel</Button>
                    </ModalFooter>
                </FormModalWrapper>
                {renderCompanyNameHeader(this.props)}
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
                    height={'350px'}
                />
            </div>
        );
    }
}

function renderCompanyNameHeader(props) {
    return (
        <div>
            <h1>{props.companyName.companyName}</h1>
        </div>
    )
}

export default connect(
    state => state.generalInfo,
    dispatch => bindActionCreators(actionCreatorsGeneralInfo, dispatch)
)(ImplementationExample);