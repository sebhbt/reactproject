import { Menu } from 'antd';
import {React, useEffect} from "react";
import { HomeOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import Login from './Login';
import Home from './Home';
import Register from './Register';


const Navbar = (props) => {
    const { setActiveComponent } = props;

    useEffect(() => {
        setActiveComponent(<Home setActiveComponent={setActiveComponent}/>);
    }, [setActiveComponent]);

    const labels = [
        {
            key: "Accueil",
            action: () => setActiveComponent(<Home setActiveComponent={setActiveComponent} />),
            title: "Accueil",
            icon: <HomeOutlined />
        },
        {
            key: "Connexion",
            action: () => setActiveComponent(<Login setActiveComponent={setActiveComponent} />),
            title: "Connexion",
            icon: <UserOutlined />
        },
        {
            key: "Inscription",
            action: () => setActiveComponent(<Register setActiveComponent={setActiveComponent} />),
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