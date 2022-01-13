import { Menu } from 'antd';
import React from "react";
import { HomeOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import Login from './Login';
import Accueil from './Accueil';
import Profile from './Profile';


const Navbar = (props) => {
    const { setActiveComponemt } = props;

    const labels = [
        {
            key: "Accueil",
            action: () => setActiveComponemt(<Accueil setActiveComponemt={setActiveComponemt} />),
            title: "Accueil",
            icon: <HomeOutlined />
        },
        {
            key: "Connexion",
            action: () => setActiveComponemt(<Login setActiveComponemt={setActiveComponemt} />),
            title: "Connexion",
            icon: <UserOutlined />
        },
        {
            key: "Inscription",
            action: () => setActiveComponemt(<Profile setActiveComponemt={setActiveComponemt} />),
            title: "Inscription",
            icon: <UserAddOutlined />
        }
    ];

    const createMenuItem = (label) => {
        return (
            <Menu.Item key={label.key} onClick={label.action}>
                {label.icon} {label.title}
            </Menu.Item>
        );

    };

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Accueil']}>
            {labels.map(label => createMenuItem(label))}
        </Menu>
    )
}

export default Navbar;