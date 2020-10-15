import React from 'react'
import styles from './index.less'

function Cell(props: any) {
    const { title, value } = props
    return (
        <div className={styles.cell}>
           <span>{title}</span>
           <span>{value}
             <span className='iconfont icon-qianjin'></span>
           </span>
        </div>
    )
}

export default Cell