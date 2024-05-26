import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './App.module.scss'
import FullScreenMessage from './components/common/FullScreenMessage'
const cx = classNames.bind(styles)

function App() {
  const [party, setParty] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  //1. 파티 데이터
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8080/party')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('no party data...')
        }
        return response.json()
      })
      .then((data) => {
        setParty(data)
      })
      .catch((e) => {
        console.error(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (error) {
    return <FullScreenMessage type="error" />
  }
  if (loading) {
    return <FullScreenMessage type="loading" />
  }
  return <div className={cx('container')}>{JSON.stringify(party)}</div>
}

export default App
