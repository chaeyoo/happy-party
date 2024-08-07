import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './ImageGallery.module.scss'

import Section from '../common/Section'
import ImageViewer from '../ImageViewer'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="갤러리">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              {/* <img src={src} alt="사진첩 이미지" /> */}
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.png`} alt="이미지" />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
