import { PageContainer } from '@ant-design/pro-layout'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/theme/monokai.css'
import 'codemirror/lib/codemirror.css'
import { Card } from 'antd'
import React, { useEffect } from 'react'
import styles from './style.less'
import { accDiv, accSub } from 'hltautils'

function DesignPanel() {
	const code = `
	accAdd(0.1 + 0.2) // 0.3
	0.1 + 0.2 // 0.30000000000000004

	accSub(0.3 - 0.1) // 0.2
	0.3 - 0.1 // 0.19999999999999998

	accDiv(0.3,0.2) // 1.5
    0.3/0.2 // 1.4999999999999998

	accMul(0.2,0.1) // 0.02
	0.2 * 0.1 // 0.020000000000000004

	`
	useEffect(() => {

		console.log(accDiv(0.3, 0.2));

		let myTextarea = document.getElementById('editor');
		CodeMirror.fromTextArea(myTextarea, {
			mode: 'javascript',//编辑器语言
			theme: 'monokai', //编辑器主题
			readOnly: 'true',
			extraKeys: { "Ctrl": "autocomplete" },//ctrl可以弹出选择项 
		});
	}, [])
	return (
		<PageContainer>
			<Card className={styles.app}>
				<h1>accAdd(num1,num2)</h1>
				<section className={styles.desc}>
					解决精度相加计算问题
				</section>
				<section className={styles.params}>
					<p className={styles.title}>参数</p>
					<p>1.num1 相加的数</p>
					<p>2.num2 相加的数</p>
				</section>

			</Card>
			<Card className={styles.app}>
				<h1>accSub(num1,num2)</h1>
				<section className={styles.desc}>
					解决精度相减计算问题
				</section>
				<section className={styles.params}>
					<p className={styles.title}>参数</p>
					<p>1.num1 相减的数</p>
					<p>2.num2 相减的数</p>
				</section>
			</Card>
			<Card className={styles.app}>
				<h1>accDiv(num1,num2)</h1>
				<section className={styles.desc}>
					解决精度相除计算问题
				</section>
				<section className={styles.params}>
					<p className={styles.title}>参数</p>
					<p>1.num1 相除的数</p>
					<p>2.num2 相除的数</p>
				</section>
			</Card>
			<Card className={styles.app}>
				<h1>accMul(num1,num2)</h1>
				<section className={styles.desc}>
					解决精度相乘计算问题
				</section>
				<section className={styles.params}>
					<p className={styles.title}>参数</p>
					<p>1.num1 相乘的数</p>
					<p>2.num2 相乘的数</p>
				</section>
				<section className={styles.example}>
					<p className={styles.title}>例子</p>
					<div className={styles.code}>
						<textarea disabled={true} className="form-control" value={code} id="editor" name="code"></textarea>
					</div>
				</section>
			</Card>
		</PageContainer>
	)
}
export default DesignPanel