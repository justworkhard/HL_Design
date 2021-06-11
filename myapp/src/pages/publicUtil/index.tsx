import { PageContainer } from '@ant-design/pro-layout'
import { Card } from 'antd'
import React from 'react'
import { connect, Dispatch, history } from 'umi';

function DesignPanel(props: any) {
	const { loading } = props

	return (
		<PageContainer>
			<Card>
				<div style={{ fontSize: 20 }}>
					github仓库：https://github.com/justworkhard/hltaUtils.git
				</div>
				<div style={{ fontSize: 20 }}>
					npm包： https://www.npmjs.com/package/hltautils
				</div>
				<div>
					{loading}
				</div>
				<button >change</button>
			</Card>
		</PageContainer>
	)
}
export default connect(({ global }: any) => ({
	loading: global.loading,
}))(DesignPanel);
