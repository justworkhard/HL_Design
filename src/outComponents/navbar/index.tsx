import React from 'react';
import styles from './index.less';

interface ComponentPros {
  title?: string,
  showIcon?: boolean
  onLeftClick?: Function
}
export default function (props: ComponentPros) {
  return (
    <div className={styles.navBar}>
      <div className={styles.iconfont} onClick={() => {
        props.onLeftClick ? props.onLeftClick() : ''
      }}
      >
        {
          props.showIcon ? (
            <span className={`iconfont icon-houtui`}></span>
          ) : ''
        }

      </div>
      <span className={styles.title}>
        {props.title}
      </span>
      <div className={styles.rightBox}>
      </div>
    </div>
  );
}
