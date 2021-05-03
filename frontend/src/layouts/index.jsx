import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function AntLayout(props) {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className="row">
                    <Menu.Item key="1"><a href="/">amazona</a></Menu.Item>
                    <Menu.Item key="2"><a href="/cart">Cart</a></Menu.Item>
                    <Menu.Item key="3"><a href="/signin">Sign In</a></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">{props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}