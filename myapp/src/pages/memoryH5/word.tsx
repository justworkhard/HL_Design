import React, { useRef } from 'react'
import styles from './word.less'
import ScatchCard from '@/components/ScratchCard'
import { checkWord, forgetWord } from '@/services/helper'
import { Toast } from 'antd-mobile'

function app(props: any) {

    const { data, nextWord, total } = props
    const acatRef = useRef<any>(null)

    function onClickCheck() {
        Toast.loading('loading', 0)
        checkWord({
            wordId: data.uid
        }).then(res => {
            Toast.hide()
            if (res.code !== 200) {
                return
            }
            nextWord()
            acatRef.current ? acatRef.current.initCanvas() : ''
        })
    }
    function onClickForget() {
        Toast.loading('loading', 0)
        forgetWord({
            wordId: data.uid
        }).then(res => {
            Toast.hide()
            if (res.code !== 200) {
                return
            }
            nextWord()
            acatRef.current ? acatRef.current.initCanvas() : ''
        })
    }

    return (
        <div className={styles.word}>
            <p className={styles.title}>
                {data.word}
                <p className={styles.acount}>剩余：{total}</p>
            </p>
            <div className={styles.content}>
                <ScatchCard ref={acatRef} translate={data.translate}></ScatchCard>
            </div>
            <div className={styles.btns}>
                <div className={styles.imgBox} onClick={onClickCheck}>
                    <img src={require('@/assets/check.png')} alt="" />
                </div>
                <div className={styles.imgBox} onClick={onClickForget}>
                    <img src={require('@/assets/forget.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default app