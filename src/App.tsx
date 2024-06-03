import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './App.module.scss'
import FullScreenMessage from './components/common/FullScreenMessage'
import Video from './components/sections/Video'
import Heading from './components/sections/Heading'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import useParty from './hooks/useParty'
const cx = classNames.bind(styles)

function App() {
  const { party, isLoading, error } = useParty()

  if (error) {
    return <FullScreenMessage type="error" />
  }
  if (isLoading) {
    return <FullScreenMessage type="loading" />
  }

  if (party == null) {
    return null
  }

  const { date, galleryImages, organizer, location, message } = party
  return (
    <div className={cx('container')}>
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
