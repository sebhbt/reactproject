import { Form, Col, Row, Input, Button, Checkbox, message } from 'antd';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../lib/base';
import Dashboard from './Dashboard';
import { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


const Login = (props) => {
    const [loading, setLoading] = useState(false)
    const onFinish = (values) => {
        setLoading(<LoadingOutlined />)
        signInWithEmailAndPassword(auth, values.username, values.password).then((credential) => {
            console.log(credential)
            setLoading(false)
            props.setActiveComponemt(<Dashboard />);
        })
            .catch((err) => {
                setLoading(false)
                message.error(err.message)
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Col offset={2} span={20} style={{ margin: 20 }}>
            <Row justify="center">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email "
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mot De Passe"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit {loading}
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Col>
    );
};

export default Login;