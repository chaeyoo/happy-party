import classNames from 'classnames/bind'
import styles from './Heading.module.scss'
import Section from '../common/Section'
import { format, getDay, parseISO } from 'date-fns'

const cx = classNames.bind(styles)
const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
function Heading({ date }: { date: string }) {
  const partyDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}> {format(partyDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(date)]}</div>
    </Section>
  )
}

export default Heading
