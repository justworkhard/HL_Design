import React, { useState, CSSProperties, useEffect, ReactChild, useRef } from "react"
import "./index.less"

interface Props {
  style?: CSSProperties,
  children: ReactChild
}

function suspendButton(props: Props) {
  const { style, children } = props
  const [oLeft, setOLeft] = useState<number>(0)
  const [oTop, setOTop] = useState<number>(0)
  const [moving, setMoving] = useState<boolean>(false)
  const [usedDefault, setUsedDefault] = useState<boolean>(true)

  let $vm: any = useRef();

  const [oW, setoW] = useState<number>(0)
  const [oH, setoH] = useState<number>(0)

  let htmlWidth: number = document.documentElement.clientWidth // 页面宽度
  let htmlHeight: number = document.documentElement.clientHeight

  const [bWidth, setbWidth] = useState<number>(0)
  const [bHeight, setbHeight] = useState<number>(0)

  let click = false // 是否是点击

  // 移动触发
  function onTouchStart(e: any) {
    e = e.touches[0]
    click = true
    console.log('start');

    setoW(e.clientX - $vm.current.getBoundingClientRect().left)
    setoH(e.clientY - $vm.current.getBoundingClientRect().top)

    setbWidth($vm.current.offsetWidth)
    setbHeight($vm.current.offsetHeight)

    setOLeft( $vm.current.getBoundingClientRect().left)
    setOTop($vm.current.getBoundingClientRect().top)
    setUsedDefault(false)
    setMoving(true)
  }

  // 移动结束
  function onTouchEnd() {
    setMoving(false)

    $vm.current.className = $vm.current.className + " t-suspend-button-animate"

    // 左侧距离
    let leftTemp = oLeft
    if (leftTemp < (htmlWidth - bWidth) / 2) {
      leftTemp = 0
    } else {
      leftTemp = htmlWidth - bWidth
    }
    setOLeft(leftTemp)

  }



  // 开始移动
  function onTouchMove(e: any) {
    $vm.current.className = "t-suspend-button"
    moving && onMove(e)
  }

  // 移动中
  function onMove(e: any) {
    e = e.touches[0]
    click = false

    // 左侧距离
    let oLeftTemp = e.clientX - oW
    let oTopTemp = e.clientY - oH
    if (oLeftTemp < 0) {
      oLeftTemp = 0
    } else if (oLeftTemp > htmlWidth - bWidth) {
      oLeftTemp = htmlWidth - bWidth
    }
    if (oTopTemp < 0) {
      oTopTemp = 0
    } else if (oTopTemp > htmlHeight - bHeight) {
      oTopTemp = htmlHeight - bHeight
    }

    setOLeft(oLeftTemp)
    setOTop(oTopTemp)
  }

  useEffect(() => {
    $vm.current.addEventListener(
      "touchmove",
      (e: any) => {
        if (e.cancelable) {
          e.preventDefault()
        }
      },
      {
        passive: false
      }
    )
  }, [])

  return (
    <span
      className="t-suspend-button"
      ref={$vm}
      onTouchStart={e => onTouchStart(e)}
      onTouchMove={e => onTouchMove(e)}
      onTouchEnd={e => onTouchEnd(e)}
      style={{
        ...style,
        left: usedDefault && style?.left ? style?.left : `${oLeft}px`,
        top: usedDefault && style?.top ? style?.top : `${oTop}px`,
      }}
    >
      {children}
    </span>
  )
}

export default suspendButton
