import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Api from '@/components/Api'
import MobileCodeShow from '@/components/MobileCodeShow'
import ScrollList from '@/outComponents/scrollList'
import Cell from '@/outComponents/cell'
import { cloneDeep } from 'lodash'

function App() {
  const code = `
  function App() {
    return (
      <ScrollList getMoreData={() => {
        let temp = cloneDeep(data)
        temp.push(1)
        setData(temp.concat([11, 21, 31, 41, 51, 61, 71, 81, 91, 1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 0]))
      }}
        data={data}
        maxData={40}
        noMoreDate={false}
      >
        {
          data.map((item, index) => {
            return (
              <Cell title={item}></Cell>
            )
          })
        }
      </ScrollList>
    )
  }
  
  export default App `
  const dataSource = [
    {
      param: 'getMoreData',
      desc: '上拉加载函数',
      type: "function",
      default: 'null',
    },
    {
      param: 'data',
      desc: '数据列表',
      type: "数组",
      default: 'false',
    },
    {
      param: 'maxData',
      desc: '数组最大值',
      type: "number",
      default: 'false',
    },
    {
      param: 'noMoreDate',
      desc: '是否显示无更多数据',
      type: "boolean",
      default: 'false',
    }
  ]
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  return (
    <PageContainer>
      <MobileCodeShow code={code} showDemo={
        <div style={{ height: '100%' }}>
          <ScrollList getMoreData={() => {
            let temp = cloneDeep(data)
            temp.push(1)
            setData(temp.concat([11, 21, 31, 41, 51, 61, 71, 81, 91, 1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 0]))
          }}
            data={data}
            maxData={40}
            noMoreDate={false}
          >
            {
              data.map((item, index) => {
                return (
                  <Cell title={item}></Cell>
                )
              })
            }
          </ScrollList>
          <div style={{ height: '20px' }}></div>

        </div>
      }></MobileCodeShow >
      <Api dataSource={dataSource}></Api>
    </PageContainer >
  )
}

export default App