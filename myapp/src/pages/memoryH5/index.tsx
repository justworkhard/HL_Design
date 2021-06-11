import React, { useEffect, useState } from 'react'
import styles from './helper.less'
import { getEnglishList, addNewWord } from '@/services/helper'
import Word from './work'

function App(props: any) {

    const [visibleAdd, setVisibleAdd] = useState(false)
    const [params, setParams] = useState({
        word: '',
        translate: ''
    })
    const [wordList, setWordList] = useState([])
    const [total, setTotal] = useState<number>(0)

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
            <section className={styles.content}>
                {
                    wordList.map((item, index) => (
                        <Word data={item}></Word>
                    ))
                }
            </section>
        </div>
    )
}

export default App