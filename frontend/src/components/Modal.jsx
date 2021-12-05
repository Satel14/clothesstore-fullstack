import React from 'react'
import '../style/style.scss'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts'


const Modal = ({ active, setActive, children }) => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
                <h2>{isLogin ? 'Авторизація' : "Регістрація"}</h2>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"

                        />
                    </Form.Item>
                    {isLogin ? <div>
                        Немає аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструватися</NavLink>
                    </div>
                        :
                        <div>
                            Є аккаунт? <NavLink to={LOGIN_ROUTE}>Увійти</NavLink>
                        </div>}

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {isLogin ? 'Увійти' : "Реєстрація"}
                    </Button>
                </Form>
            </div>
        </div>

    )
}

export default Modal
