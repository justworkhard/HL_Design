import React, { useEffect, useRef, useState } from 'react'
import styles from './index.less'

interface Props {
  getMoreData: Function,
  data: Array<any>,
  children: React.ReactNode,
  maxData: number,
  noMoreDate?: boolean
}
function Cell(props: Props) {
  const { getMoreData, data, maxData, noMoreDate } = props
  let scroll: any = useRef();

  useEffect(() => {
    if (scroll.current) {
      scroll.current.addEventListener("scroll", (e: any) => {
        const { clientHeight, scrollHeight, scrollTop } = e.target;
        const isBottom = scrollTop + clientHeight == scrollHeight;
        if (isBottom && maxData > props.data.length) {
          console.log('getMoreDatagetMoreData', maxData, props.data);
          getMoreData()
        }

      })
    }
  }, [data])
  return (
    <div ref={scroll} className={styles.contentBody} >
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