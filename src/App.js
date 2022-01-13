import { React, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';


const App = () => {

    const [state] = useState();
    const [activeComponent, setActiveComponent] = useState(<Home title="Accueil" />);

    return (
        <Layout>
            <Layout.Header>
                <Navbar
                    setActiveComponent={setActiveComponent}
                />
            </Layout.Header>
            <Layout.Content>
                {state}
                {activeComponent}
            </Layout.Content>
        </Layout>
    );
};


export default App;
