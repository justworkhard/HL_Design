import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Api from '@/components/Api'
import CodeShow from '@/components/CodeShow'
import Cell from '@/outComponents/cell'

function App() {

  const code = `import React from 'react';
  import { PageContainer } from '@ant-design/pro-layout';
  import Api from '@/components/Api'
  import CodeShow from '@/components/CodeShow'
  import Cell from '@/outComponents/cell'
  
  function App() {
  
   
    return (
      <PageContainer>
  
        <CodeShow code={code} showDemo={<Cell title='标题' value='值'></Cell>}></CodeShow>
        <Api></Api>
      </PageContainer>
    )
  }
  
  export default App `
  const dataSource = [
    {
      param: 'title',
      desc: '左边标题',
      type: "string",
      default: 'null',
    },
    {
      param: 'value',
      desc: '右边值',
      type: "string",
      default: 'null',
    },
    {
      param: 'ifIcon',
      desc: '右边小图标',
      type: "boolean",
      default: 'true',
    },
  ]
  return (
    <PageContainer>
      <CodeShow code={code} showDemo={
        <div>
          <Cell title='标题' value='值'></Cell>
          <Cell title='标题' value='值'></Cell>
          <Cell title='标题' value='值'></Cell>
        </div>
      }></CodeShow>
      <Api dataSource={dataSource}></Api>
    </PageContainer>
  )
}

export default App