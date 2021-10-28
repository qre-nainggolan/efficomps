import React from 'react';
import './NavMenu.css';

import { ContainerComponent } from '../collaborator/ContainerComponents';
import '../collaborator/CollaboratorComponent.css';

export default props => (
    <ContainerComponent
        leftColumn={[
            { name: 'home', label: 'Home', target: '/', show: true },
            { name: 'transaksi', label: 'Transaksi', target: '/transaksiTimbangMuat', show: true },
            { name: 'counter', label: 'Master Data', target: '/counter', show: true },
            {
                name: 'sampleChildMenu',
                label: '5 Child Menu',
                target: '#',
                show: true,
                childMenu: [{
                    name: 'javascript',
                    label: '1st Children',
                    target: '/transaksiTimbangMuat',
                    show: true,
                }, {
                    name: 'css',
                    label: '2st Children',
                    target: '#',
                    show: true,
                }]
            },
            {
                name: 'fetchData',
                label: 'Laporan',
                target: '/fetch-data',
                show: true,
                childMenu: [{
                    name: 'javascript',
                    label: '1st Children',
                    target: '/transaksiTimbangMuat',
                    show: true,
                }, {
                    name: 'css',
                    label: '2st Children',
                    target: '#',
                    show: true,
                }]
            }
        ]}
    >
        {props.children}
    </ContainerComponent>
);
