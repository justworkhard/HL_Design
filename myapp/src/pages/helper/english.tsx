import { PageContainer } from '@ant-design/pro-layout'
import { Card, Button, Modal, Form, Input, Space, message } from 'antd'
import { useEffect, useState } from 'react'
import Word from './word'
import React from 'react'
import { connect } from 'umi';
import { getEnglishList, addNewWord } from '@/services/helper'

function DesignPanel(props: any) {

    const [visibleAdd, setVisibleAdd] = useState(false)
    const [params, setParams] = useState({
        word: '',
        translate: ''
    })
    const [wordList, setWordList] = useState([])
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        getEnglishList().then(res => {
            setWordList(res.data.record)
            setTotal(res.data.total)
        })
    }, [])
    return (
        <PageContainer>
            <Card>

                <Space>
                    <Button style={{ marginBottom: 20 }} type='primary' >查看全部词库</Button>
                    <Button style={{ marginBottom: 20 }} type='primary' onClick={() => {
                        setVisibleAdd(true)
                    }}>添加词汇</Button>
                    <Button style={{ marginBottom: 20 }} type='primary' onClick={() => {

                    }} >H5版本</Button>
                </Space>
                <div>今日待复习：{total} </div>
                {
                    wordList.map((item: any, index) => (
                        <Word wordId={item.uid} text={item.word} translate={item.translate}></Word>
                    ))
                }
            </Card>
            <Modal
                visible={visibleAdd}
                title='添加词汇'
                onOk={() => {
                    addNewWord(params).then(res => {
                        if (res.code !== 200) {
                            message.error(res.msg)
                        } else {
                            message.success('添加成功！')
                        }
                    })
                    setVisibleAdd(false)
                }}
                onCancel={() => {
                    setVisibleAdd(false)
                }}
            >
                <Form>
                    <Form.Item label='英文'>
                        <Input placeholder='请输入词条' onChange={(evnet) => {
                            setParams({
                                ...params,
                                word: evnet.target.value
                            })
                        }}></Input>
                    </Form.Item>
                    <Form.Item label='翻译'>
                        <Input placeholder='请输入翻译' onChange={(evnet) => {
                            setParams({
                                ...params,
                                translate: evnet.target.value
                            })
                        }}></Input>
                    </Form.Item>
                </Form>
            </Modal>
        </PageContainer>
    )
}
export default connect(({ global }: any) => ({
    loading: global.loading,
}))(DesignPanel);
