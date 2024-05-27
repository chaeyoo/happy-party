import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './App.module.scss'
import FullScreenMessage from './components/common/FullScreenMessage'
import Video from './components/sections/Video'
import Heading from './components/sections/Heading'
import { Party } from './models/party'
const cx = classNames.bind(styles)

function App() {
  const [party, setParty] = useState<Party | null>(null)
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

  if (party == null) {
    return null
  }

  const { date } = party
  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      {JSON.stringify(party)}
    </div>
  )
}

export default App
