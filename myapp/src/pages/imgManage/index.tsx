import React from 'react';
import { Table, Badge, Menu, Dropdown, Space, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './index.less'

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

function App() {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: '项目', dataIndex: 'name', key: 'name' },
    { title: '终端', dataIndex: 'platform', key: 'platform' },
    { title: '版本', dataIndex: 'version', key: 'version' },
    { title: '发布者', dataIndex: 'creator', key: 'creator' },
    { title: '日期', dataIndex: 'createdAt', key: 'createdAt' },
    { title: '仓库', dataIndex: 'Warehouse', key: 'Warehouse' },
    { title: '操作', key: 'operation', render: () => <a>发布</a> },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <div>
      <div className={styles.btnBox}>
         <Button type='primary'>添加</Button>
      </div>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        // expandable={{ expandedRowRender }}
        dataSource={data}
      />
    </div>
  )
}

export default App