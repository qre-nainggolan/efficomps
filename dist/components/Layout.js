"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./NavMenu.css");

var _ContainerComponents = require("../collaborator/ContainerComponents");

require("../collaborator/CollaboratorComponent.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = props => /*#__PURE__*/_react.default.createElement(_ContainerComponents.ContainerComponent, {
  leftColumn: [{
    name: 'home',
    label: 'Home',
    target: '/',
    show: true
  }, {
    name: 'transaksi',
    label: 'Transaksi',
    target: '#',
    show: true,
    childMenu: [{
      name: '1',
      label: 'Timbang Muat',
      target: '/transaksiTimbangMuat',
      show: true
    }, {
      name: '2',
      label: 'Bongkar Muat',
      target: '/transaksiTimbangMuat',
      show: true
    }, {
      name: '3',
      label: 'Timbang JANKOS',
      target: '#',
      show: true,
      childMenu: [{
        name: '10',
        label: 'Kendaraan Kebun',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '4',
        label: 'Kendaraan Kontrak',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '5',
        label: 'Kendaraan Umum',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }, {
      name: '6',
      label: 'Daftar Timbangan',
      target: '#',
      show: true
    }]
  }, {
    name: '7',
    label: 'Master Data',
    target: '/counter',
    show: true,
    childMenu: [{
      name: '8',
      label: 'Komoditi',
      target: '/daftarKomoditi',
      show: true
    }, {
      name: '9',
      label: 'Daftar Supplier',
      target: '/transaksiTimbangMuat',
      show: true,
      childMenu: [{
        name: '10',
        label: 'TBS',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '11',
        label: 'General 3rd Party',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '12',
        label: 'General Interko',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '13',
        label: 'Supplier PK',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }, {
      name: '14',
      label: 'Daftar Buyer',
      target: '/transaksiTimbangMuat',
      show: true,
      childMenu: [{
        name: '15',
        label: '3rd Party',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '16',
        label: 'Interko',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }, {
      name: '17',
      label: 'Delivery Order',
      target: '/transaksiTimbangMuat',
      show: true,
      childMenu: [{
        name: '18',
        label: 'Kirim',
        target: '/kirim',
        show: true
      }, {
        name: '19',
        label: 'Terima',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }, {
      name: '20',
      label: 'Agen',
      target: '/transaksiTimbangMuat',
      show: true,
      childMenu: [{
        name: '21',
        label: 'Agen Pengangkutan',
        target: '/kirim',
        show: true
      }, {
        name: '22',
        label: 'Kendaraan Agen Pengangkutan',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '23',
        label: 'Supir Agen Pengangkutan',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }, {
      name: '24',
      label: 'Pengangkutan Internal',
      target: '/transaksiTimbangMuat',
      show: true,
      childMenu: [{
        name: '25',
        label: 'Kendaraan',
        target: '/kirim',
        show: true
      }, {
        name: '26',
        label: 'Supir',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }, {
      name: '27',
      label: 'Kendaraan TBS',
      target: '/transaksiTimbangMuat',
      show: true,
      childMenu: [{
        name: '28',
        label: '3rd Party',
        target: '/kirim',
        show: true
      }, {
        name: '29',
        label: '3rd Party By DO',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '30',
        label: 'Plasma',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }, {
      name: '31',
      label: 'Block Kebun',
      target: '/transaksiTimbangMuat',
      show: true
    }]
  }, {
    name: 'sampleChildMenu',
    label: 'Laporan',
    target: '#',
    show: true,
    childMenu: [{
      name: '32',
      label: 'Timbang Harian',
      target: '/transaksiTimbangMuat',
      show: true
    }, {
      name: '33',
      label: 'Monitoring DO',
      target: '/transaksiTimbangMuat',
      show: true
    }, {
      name: '34',
      label: 'Monitoring EPA',
      target: '/transaksiTimbangMuat',
      show: true
    }, {
      name: '35',
      label: 'Penerimaan',
      target: '#',
      show: true,
      childMenu: [{
        name: '36',
        label: 'TBS',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '37',
        label: 'Material & lain-lain',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '38',
        label: 'FOB PMKS',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }, {
      name: '39',
      label: 'Pengiriman',
      target: '#',
      show: true,
      childMenu: [{
        name: '40',
        label: 'Delivery Order',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '41',
        label: 'DO/Agen Pengangkutan',
        target: '/transaksiTimbangMuat',
        show: true
      }, {
        name: '42',
        label: 'Lain-lain',
        target: '/transaksiTimbangMuat',
        show: true
      }]
    }]
  }]
}, props.children);

exports.default = _default;