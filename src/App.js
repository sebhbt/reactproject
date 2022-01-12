import { React, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'antd/dist/antd.css';
import { Col, Row, Button, Layout } from 'antd';


const App = () => {

  const [state, setState] = useState();
  const [activeComponemt, setActiveComponemt] = useState("hello");

  return (
    <Layout>
      <Navbar
        setActiveComponemt={setActiveComponemt}
      />
      <Layout.Content>
            {state}
            {activeComponemt}
      </Layout.Content>
    </Layout>
  );
};


export default App;
