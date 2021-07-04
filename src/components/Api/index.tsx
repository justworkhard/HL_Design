import React from 'react';
import styles from './index.less'
import { Table } from 'antd'

interface Props {
    dataSource: Array<Data>
}
interface Data {
    param: string,
    desc: string,
    type: string,
    default: string,
}
function Cell(props: Props) {
    const { dataSource } = props

    const columns = [
        {
            title: '参数',
            dataIndex: 'param',
            key: 'param',
        },
        {
            title: '说明',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '默认值',
            dataIndex: 'default',
            key: 'default',
        },
    ];
    return (
        <div>
            <div className={styles.header}>API</div>
            <Table pagination={false} dataSource={dataSource} columns={columns} />
        </div>
    )
}
export default Cell