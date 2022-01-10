import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd'; 
import React from "react";
import {UserOutlined} from '@ant-design/icons';
import Login from './Login';
import Page from './Page';
import Profile from './Profile';
import { useEffect } from 'react/cjs/react.development';


const Navbar = (props) => {
const {setActiveComponemt} = props;

    useEffect(()=>{
        console.log("UE");
        props.setActiveComponemt(<Page title="Item1"/>);
    }, [setActiveComponemt]);


    const labels = [
        {
            key: "Connexion",
            action: () => setActiveComponemt(<Login setActiveComponemt={setActiveComponemt}/>),
            title: "Connexion",
            icon: <UserOutlined/>
        },
        {
            key: "Profile",
            action: () => setActiveComponemt(<Profile setActiveComponemt={setActiveComponemt}/>),
            title: "inscription"
        }
    ];

    const createMenuItem = (label) => {
        return (<Menu.Item key= {label.key} onClick= {label.action}>
            {label.icon} {label.title}
        </Menu.Item>);

    };
    
    return ( 
        <Layout.Header>
 
            <Menu mode="horizontal" defaultSelectedKeys={['Item1']}>
                {labels.map(label => createMenuItem(label))}
            </Menu>
        </Layout.Header>
    )
}

export default Navbar;