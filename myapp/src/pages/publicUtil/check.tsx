import { PageContainer } from '@ant-design/pro-layout'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/theme/monokai.css'
import 'codemirror/lib/codemirror.css'
import { Card } from 'antd'
import React, { useEffect } from 'react'
import styles from './style.less'

function DesignPanel() {
	const code = `
	checkPhone(16608974358) // true
	checkPhone(1660897458) // false

	checkEmail(2454025615@qq.com) // true
	checkEmail(2454025615@.com) // false
	`
	useEffect(() => {
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
				<h1>checkPhone(phone: string)</h1>
				<section className={styles.desc}>
					验证手机号是否合格，合格返回true，反之返回false
				</section>
				<section className={styles.params}>
					<p className={styles.title}>参数</p>
					<p>1.待检查的手机号</p>
				</section>

			</Card>
			<Card className={styles.app}>
				<h1>checkEmail(str: string)</h1>
				<section className={styles.desc}>
					检查邮箱是否合理，合格返回true，反之返回false
				</section>
				<section className={styles.params}>
					<p className={styles.title}>参数</p>
					<p>1.待检查的邮箱</p>
				</section>
			</Card>
			<Card className={styles.app}>
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