import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Api from '@/components/Api'
import MobileCodeShow from '@/components/MobileCodeShow'
import Navbar from '@/outComponents/navbar'

function App() {

  const code = `
  import React from 'react';
  import { PageContainer } from '@ant-design/pro-layout';
  import Api from '@/components/Api'
  import CodeShow from '@/components/CodeShow'
  import Navbar from '@/outComponents/Navbar'
  
  function App() {
    return (
      <PageContainer>
        <Navbar title='标题' showIcon={true} onLeftClick={() => {
          console.log('点击左边');
        }}></Navbar>
      </PageContainer>
    )
  }
  
  export default App `
  const dataSource = [
    {
      param: 'title',
      desc: '中间标题',
      type: "string",
      default: 'null',
    },
    {
      param: 'showIcon',
      desc: '左边返回按钮',
      type: "boolean",
      default: 'false',
    }
  ]
  return (
    <PageContainer>
      <MobileCodeShow code={code} showDemo={
        <div>
          <Navbar title='标题' showIcon={true} onLeftClick={() => {
            console.log('点击左边');
          }}></Navbar>
          <div style={{ height: '20px' }}></div>
          <Navbar title='标题' ></Navbar>
        </div>
      }></MobileCodeShow>
      <Api dataSource={dataSource}></Api>
    </PageContainer>
  )
}

export default App