import { React, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil'
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';


const App = () => {

    const [state] = useState();
    const [activeComponemt, setActiveComponemt] = useState(<Accueil title="Accueil" />);

    return (
        <Layout>
            <Layout.Header>
                <Navbar
                    setActiveComponemt={setActiveComponemt}
                />
            </Layout.Header>
            <Layout.Content>
                {state}
                {activeComponemt}
            </Layout.Content>
        </Layout>
    );
};


export default App;
