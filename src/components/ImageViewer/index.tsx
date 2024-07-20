import { Swiper, SwiperSlide } from 'swiper/react'

import classNames from 'classnames/bind'

import 'swiper/css'

import styles from './ImageViewer.module.scss'

import './swiper.css'
import CloseIcon from '@/assets/svg/CloseIcon'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  if (open === false) {
    return null
  }

  return (
    <div className={cx('dimmed')}>
      <CloseIcon onClose={onClose} className={cx('icon-close')} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.png`} alt="이미지" />
              </picture>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ImageViewer
