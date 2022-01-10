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

        <Col offset={2} span={20} style={{margin:10}}>
        <Row justify="center">

        </Row>
          <Row justify="center" style={{margin:10}}>

            {state}
            {activeComponemt}

          </Row>
        </Col>

      </Layout.Content>
    </Layout>
  );
};


export default App;
