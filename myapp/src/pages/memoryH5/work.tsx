import React from 'react'
import styles from './index.less'

function app(props: any) {

    const { data } = props
    console.log(data);

    return (
        <div className={styles.word}>
            <p className={styles.title}>{data.word}</p>
            <div className={styles.content}>
                {data.translate}
            </div>
            <div>
                {/* <img src={requ} alt="" /> */}
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default app