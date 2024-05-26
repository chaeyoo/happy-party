import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'
import PartyIcon from '../../assets/svg/PartyIcon'
import ErrorIcon from '../../assets/svg/ErrorIcon'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <PartyIcon />
      ) : (
        <>
          <ErrorIcon />
          <div className={cx('err-msg')}>
            에러가 발생했어요 <br />
            잠시후 다시 시도해주세요
          </div>
        </>
      )}
    </div>
  )
}

export default FullScreenMessage
