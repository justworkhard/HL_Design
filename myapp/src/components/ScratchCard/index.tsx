import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'umi';
import styles from './index.less'

function App(props: any) {
    const { translate } = props
    const [canvasOffsetX, setcanvasOffsetX] = useState(0)
    const [canvasOffsetY, setcanvasOffsetY] = useState(0)
    const [ifDown, setIfDown] = useState(false)
    const myCanvas = useRef<any>(null);
    const [ctx, setCtx] = useState()


    useEffect(() => {
        console.log('myCanvas', myCanvas.current);

        let c = myCanvas.current
        let tempCtx = c.getContext("2d")
        setCtx(tempCtx)
        setcanvasOffsetX(c.getBoundingClientRect().left)
        setcanvasOffsetY(c.getBoundingClientRect().top)

        tempCtx.fillStyle = 'gray';
        tempCtx.fillRect(0, 0, 100, 40);
        tempCtx.globalCompositeOperation = 'destination-out';
    }, [])
    function onMouseDown(e: any) {
        setIfDown(true)
    }
    function onMouseUp(e: any) {
        setIfDown(false)
    }
    function onMouseMove(e: any) {
        e.preventDefault();
        if (!ifDown) {
            return
        }
        if (e.changedTouches) {
            e = e.changedTouches[0];
        }

        var x = (+ document.body.scrollLeft || e.pageX) - canvasOffsetX || 0,
            y = (e.clientY + document.body.scrollTop || e.pageY) - canvasOffsetY || 0;
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
    return (
        <div className={styles.scatch}>
            <span className={styles.text}>{translate}</span>
            <canvas
                ref={myCanvas}
                width="100" height="40"
                className={styles.canvas}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            ></canvas>
        </div>
    )
}
export default connect(({ global }: any) => ({
    loading: global.loading,
}))(App);
