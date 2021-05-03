import React, { useState } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs


export default function ShopScreen() {
    const [tab, setTab] = useState("category")
    const [categoryFilter, setCategoryFilter] = useState("all")
    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">
                    Category
    </TabPane>
                <TabPane tab="Tab 2" disabled key="2">
                    My shop
    </TabPane>
            </Tabs>
        </div>
    )
}
