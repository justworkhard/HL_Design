import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import styles from './index.less'

function App(props: any, acatRef: any) {
    const { translate } = props
    const [canvasOffsetX, setcanvasOffsetX] = useState(0)
    const [canvasOffsetY, setcanvasOffsetY] = useState(0)
    const [ifDown, setIfDown] = useState(false)
    const myCanvas = useRef<any>(null);
    const [ctx, setCtx] = useState()
    const [c, setC] = useState()


    useImperativeHandle(acatRef, () => (
        {
            initCanvas: init
        }
    ))

    useEffect(() => {
        let tempC = myCanvas.current
        let tempCtx = tempC.getContext("2d")
        // tempCtx.clearRect(0, 0, c.width, c.height)
        setCtx(tempCtx)
        setC(tempC)
        setcanvasOffsetX(tempC.getBoundingClientRect().left)
        setcanvasOffsetY(tempC.getBoundingClientRect().top)

        tempCtx.fillStyle = 'gray';
        tempCtx.fillRect(0, 0, tempC.width, tempC.height);
        // tempCtx.globalCompositeOperation = 'destination-out';

    }, [])

    function init() {
        console.log('init');

        // tempCtx.clearRect(0, 0, c.width, c.height)
        // setCtx(tempCtx)
        // ctx.clearRect(0, 0, c.width, c.height)
        // ctx.fillStyle = 'gray';
        // ctx.fillRect(0, 0, c.width, c.height);
        // ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, 0, c.width, c.height);
        // ctx.globalCompositeOperation = 'destination-out';
    }
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
        // console.log(e, e.clientX, '====');

        var x = (e.clientX + document.body.scrollLeft || e.pageX) - canvasOffsetX || 0,
            y = (e.clientY || document.body.scrollTop || e.pageY) - canvasOffsetY || 0;
        console.log(x, );

        ctx.clearRect(x - 10, (y / 2) - 10, 20, 20)
        // ctx.clearRect(0, y / 2, 20, 20)
        // ctx.clearRect(150, y / 2, 20, 20)
        // ctx.clearRect(280, y / 2, 20, 20)

        // ctx.clearRect(335, y / 2, 20, 20)


        // return
        // ctx.beginPath();

        // ctx.arc(x, y / 2, 20, 0, Math.PI * 2);
        // ctx.fill();
    }
    return (
        <div className={styles.scatch}>
            <span className={styles.text} style={{ height: '300px', width: '330px' }}>{translate}</span>
            <canvas
                ref={myCanvas}
                style={{ height: '300px', width: '330px' }}
                className={styles.canvas}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                onTouchStart={onMouseDown}
                onTouchEnd={onMouseUp}
                onTouchMove={onMouseMove}
            ></canvas>
        </div>
    )
}
export default forwardRef(App)
