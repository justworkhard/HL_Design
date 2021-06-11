import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Api from '@/components/Api'
import MobileCodeShow from '@/components/MobileCodeShow'
import SuspendButton from '@/outComponents/suspendButton'

function App() {

  const code = `
  import React from 'react';
  import { PageContainer } from '@ant-design/pro-layout';
  import Api from '@/components/Api'
  import CodeShow from '@/components/CodeShow'
  import Cell from '@/outComponents/cell'
  
  function App() {
    return (
      <PageContainer>
      <SuspendButton style={{ left: '90vw', top: '70vh' }}>
         <p style={{ backgroundColor: '#000', height: '60px', width: "60px" }}>test</p>
      </SuspendButton>
      </PageContainer>
    )
  }
  
  export default App `
  const dataSource = [
    {
      param: 'style',
      desc: 'css样式',
      type: "CSSProperties",
      default: 'null',
    },
    {
      param: 'children',
      desc: '展示内容',
      type: "ReactChild",
      default: 'null',
    }
  ]
  return (
    <PageContainer>
      <h2>可拖拽悬浮吸边按钮</h2>
      <MobileCodeShow code={code} showDemo={
        <div>
          <SuspendButton style={{ left: '90vw', top: '70vh' }}>
            <p style={{ backgroundColor: '#000', height: '80px', width: "80px", color: '#fff' }}>切换成移动模式体验</p>
          </SuspendButton>
        </div>
      }></MobileCodeShow>
      <Api dataSource={dataSource}></Api>
    </PageContainer>
  )
}

export default App