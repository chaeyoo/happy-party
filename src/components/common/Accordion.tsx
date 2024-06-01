import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { PropsWithChildren, useState } from 'react'
import ArrowDownIcon from '@/assets/svg/ArrowDownIcon'

const cx = classNames.bind(styles)

// <Accordion label="신랑측">컨텐츠</Accordion>

interface AccordionProps {
  label: string
}

function Accordion({ label, children }: PropsWithChildren<AccordionProps>) {
  const [expanded, setExpanded] = useState(true)

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <div className={cx(['wrap-accoridon', expanded ? 'open' : ''])}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <ArrowDownIcon className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

export default Accordion
