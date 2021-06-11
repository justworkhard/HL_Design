import React, { useEffect, useState } from 'react';
import styles from './index.less'
import { testApi } from '@/services/user'

function App() {
  const [projectList, setProjectList] = useState([1, 2, 3, 4])
  useEffect(() => {
    // testApi().then(res => {
    //   console.log('request', res);
    // }).catch(error => {
    //   console.log('errr', error);
    // })
  }, [])
  return (
    <div className={styles.app}>
      <div className={styles.projectList}>
        {
          projectList.map((item, index) => {
            return (
              <div className={styles.project} key={index}>
                <p className={styles.name}>通联商城</p>
                <p>开发人员：小岑</p>
                <p>错误：10</p>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default App