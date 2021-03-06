import React from 'react';
import styles from './index.less'

interface Props {
    showDemo: React.ReactElement<any>,
    code: string
}

function Cell(props: Props) {
    const { showDemo, code } = props


    return (
        <div className={styles.app}>
            <section className={styles.header}>代码演示</section>
            <section className={styles.content}>
                <pre className={styles.code}>
                    <code>
                        {code}
                    </code>
                </pre>
                <div className={styles.demo}>
                    {showDemo}
                </div>
            </section>
        </div>
    )
}
export default Cell