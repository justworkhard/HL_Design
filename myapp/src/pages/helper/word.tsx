import { CheckOutlined, QuestionOutlined } from '@ant-design/icons';
import React from 'react'
import { connect } from 'umi';
import styles from './index.less'
import ScatchCard from '@/components/ScratchCard'
import { checkWord, forgetWord } from '@/services/helper'

function DesignPanel(props: any) {
  const { wordId, text, translate } = props


  return (
    <div className={styles.wordCell}>
      <span className={styles.text}>{text}</span>
      <span className={styles.answer}>
        <ScatchCard translate={translate}></ScatchCard>
      </span>
      <div>
        <QuestionOutlined onClick={() => {
          console.log(wordId);
          forgetWord({
            wordId: wordId
          }).then(res => {

          })
        }} style={{ cursor: 'pointer' }} />
        <CheckOutlined onClick={() => {
          checkWord({
            wordId: wordId
          }).then(res => {

          })
        }} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  )
}
export default connect(({ global }: any) => ({
  loading: global.loading,
}))(DesignPanel);
