import BoomIcon from '@/assets/svg/BoomIcon'
import NeonIcon from '@/assets/svg/NeonIcon'
import classNames from 'classnames/bind'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import Section from '../common/Section'
import Text from '../common/Text'

import styles from './Intro.module.scss'

const cx = classNames.bind(styles)

interface IntroProps {
  date: string
  location: string
  message: string
}

function Intro({ date, location, message }: IntroProps) {
  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-persons')}>
        <BoomIcon className={cx('icon-boom')} />
        <span>칵테일 파티</span>
      </div>

      <div className={cx('wrap-location')}>
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
        </span>
        <span>{location}</span>
      </div>

      <NeonIcon className={cx('icon-neon')} />

      <Text>{message}</Text>
    </Section>
  )
}

export default Intro
