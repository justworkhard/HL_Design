import React from 'react'
import styles from './index.less'

function App() {

    return (
        <div className={styles.app}>
            <section className={styles.summer}>
                <p className={styles.title}>今日计划</p>
                <div className={styles.needStudy}>
                    <span>需复习</span>
                    <p className={styles.acountBox}>
                        <span className={styles.acountFont}>3</span>
                        个
                    </p>
                </div>
                <div className={styles.startBtn}>
                    开始复习
                </div>
            </section>
            <section className={styles.wordList}>
                <div className={styles.alTitle}>所有笔记</div>
                <img src={require('@/assets/allList.png')} alt="" />
            </section>
        </div>
    )
}

export default App