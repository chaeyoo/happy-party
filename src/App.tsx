import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './App.module.scss'
import FullScreenMessage from './components/common/FullScreenMessage'
import Video from './components/sections/Video'
import Heading from './components/sections/Heading'
import { Party } from './models/party'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import { getParty } from './remote/party'
import DataAddButton from './components/test/DataAddBtn'
const cx = classNames.bind(styles)

function App() {
  const [party, setParty] = useState<Party | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  //1. 파티 데이터
  useEffect(() => {
    setLoading(true)
    // fetch('http://localhost:8080/party')
    //   .then((response) => {
    //     if (response.ok === false) {
    //       throw new Error('no party data...')
    //     }
    //     return response.json()
    //   })
    //   .then((data) => {
    //     setParty(data)
    //   })
    //   .catch((e) => {
    //     console.error(e)
    //     setError(true)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
    getParty('Iypv1hNiIMiI7IZmkolU')
      .then((response) => {
        // console.log(response)
        setParty(response)
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

  const { date, galleryImages, organizer, location, message } = party
  return (
    <div className={cx('container')}>
      {/* <DataAddButton /> */}
      <Heading date={date} />
      <Video />
      <Intro location={location.name} date={date} message={message.intro} />
      <Invitation message={message.invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact organizer={organizer} />
      <Share organizerName={organizer.name} date={date} />
    </div>
  )
}

export default App
