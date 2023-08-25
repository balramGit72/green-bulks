import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

export default function PublicHeader() {
  return (
    <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          {/* Add more menu items here */}
        </Menu>
      </Header>
  )
}
