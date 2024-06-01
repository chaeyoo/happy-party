import classNames from 'classnames/bind'
import styles from './Share.module.scss'
import { useEffect } from 'react'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import Section from '../common/Section'
import ClipboardIcon from '@/assets/svg/ClipboardIcon'
import KakaoIcon from '@/assets/svg/KakaoIcon'

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  organizerName: string
  date: string
}

const cx = classNames.bind(styles)

function Share({ organizerName, date }: ShareProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${organizerName}이 여는 칵테일 파티에 초대합니다.`,
        description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', {
          locale: ko,
        })}`,
        imageUrl:
          'https://img.freepik.com/premium-photo/celebrating-happy-friendship-day-flat-illustration-generated-by-ai_421953-5045.jpg?size=626&ext=jpg&ga=GA1.1.175703537.1717067880&semt=ais_user',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '초대장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button className={cx('share-btn')} onClick={handleShareKakao}>
          <KakaoIcon />
          {'카카오톡 공유'}
        </button>
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            window.alert('복사가 완료되었습니다.')
          }}
        >
          <button className={cx('share-btn')}>
            <ClipboardIcon />
            링크복사
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}
export default Share
