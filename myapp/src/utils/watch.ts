function watch() {
    /**
     * @param event 事件名
     * @param function 回调函数
     * @param useCapture 回调函数是否在捕获阶段执行，默认是false，在冒泡阶段执行
     */
    window.addEventListener('error', (event) => {
        // addEventListener 回调函数的离散参数全部聚合在 error 对象中
        // 上报错误
        console.log('scriptError', event);
    }, true)
    window.addEventListener("unhandledrejection", err => {
        console.log('unhandledrejection', err.reason)

        err.preventDefault();
    }, false);

}

export default watch