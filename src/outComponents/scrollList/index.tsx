import React, { useEffect, useRef, useState } from 'react'
import styles from './index.less'

interface Props {
  getMoreData: Function,
  data: Array<any>,
  children: React.ReactNode,
  maxData: number,
  noMoreDate?: boolean,
  className?: string,
  offsetHeight?: number
}
function Cell(props: Props) {
  const { getMoreData, data, maxData, noMoreDate, className, offsetHeight } = props
  let scroll: any = useRef();

  return (
    <div ref={scroll} className={`${styles.contentBody} ${className}`} onScroll={(e) => {
      if (!(e.currentTarget.scrollHeight - e.currentTarget.clientHeight > e.currentTarget.scrollTop) && maxData > data.length) {
        getMoreData()
      }
    }}>
      {
        props.children
      }
      {
        noMoreDate && maxData <= data.length ? (
          <div className={styles.noData}>
            无更多数据
          </div>
        ) : ''
      }
    </div>
  )
}

export default Cell