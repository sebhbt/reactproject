import { Form, Col, Row, Input, Checkbox, Button, message } from 'antd';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Dashboard from './Dashboard';

const auth = getAuth();

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Register = (props) => {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                message.success("Bravo vous êtes inscrits");
                props.setActiveComponent(<Dashboard />);

            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };


    return (
        <Col offset={2} span={20} style={{ margin: 20 }}>
            <Row justify="center">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    scrollToFirstError
                >

                    <Form.Item
                        name="lastname"
                        label="Last name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="firstname"
                        label="First name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your First name',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="age"
                        label="Age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your age',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the agreement
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Col>
    );
}

export default Register;