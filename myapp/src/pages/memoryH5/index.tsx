import React, { useEffect, useState } from 'react'
import styles from './helper.less'
import { getEnglishList, addNewWord } from '@/services/helper'
import Word from './word'
import { Toast } from 'antd-mobile'
import { history } from 'umi'

function App(props: any) {

    const [wordList, setWordList] = useState([
        {}
    ])
    const [total, setTotal] = useState<number>(0)
    const [wordIndex, setWordIndex] = useState<number>(0)

    useEffect(() => {
        getEnglishList().then(res => {
            setWordList(res.data.record)
            setTotal(res.data.total)
        })
    }, [])

    return (
        <div className={styles.app}>
            <section className={styles.header}>
                可忆
           </section>
            {
                wordIndex <= total - 1 ? (
                    <section className={styles.withoutData}>
                        <section className={styles.finish}>
                            <img src={require('@/assets/finish.png')} alt="" />
                            <span>本次复习完毕！请继续坚持！</span>
                        </section>
                        <section className={styles.backBtn} onClick={() => {
                            history.push('/wordList')
                        }}>查看题库</section>
                    </section>
                ) : (
                    <section className={styles.wordList}>
                        <Word nextWord={() => {
                            if (wordIndex >= total - 1) {
                                return Toast.success('今日已复习完毕')
                            }
                            setWordIndex(wordIndex + 1)
                        }} data={wordList[wordIndex]} total={total - wordIndex}></Word>
                    </section>
                )
            }

        </div>
    )
}

export default App