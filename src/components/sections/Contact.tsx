import MoneyIcon from '@/assets/svg/MoneyIcon'
import { Party, Person } from '@/models/party'
import classNames from 'classnames/bind'
import CopyToClipboard from 'react-copy-to-clipboard'
import Accordion from '../common/Accordion'
import Section from '../common/Section'

import styles from './Contact.module.scss'

const cx = classNames.bind(styles)

function Contact({ organizer }: { organizer: Party['organizer'] }) {
  return (
    <Section title="연락처 및  후원금 전달">
      <Accordion label="주최자 정보">
        <ContactInfo
          name={organizer.name}
          account={organizer.account}
          phoneNumber={organizer.phoneNumber}
        />
      </Accordion>
    </Section>
  )
}

function ContactInfo({ name, account, phoneNumber }: Person) {
  return (
    <div className={cx('wrap-contact')}>
      {/* 정보표현 */}
      <div className={cx('wrap-contact-info')}>
        <MoneyIcon className={cx('icon-money')} />
        {` ${name} |  ${account.bankName} | ${account.accountNumber}`}
      </div>
      {/* 버튼들 */}
      <ul className={cx('wrap-buttons')}>
        <li>
          <a href={`tel: ${phoneNumber}`} className={cx('button')}>
            전화
          </a>
        </li>
        <li>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사가 완료되었습니다.')
            }}
          >
            <button className={cx('button')}>복사</button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink != null ? (
          <li>
            <a
              href={account.kakaopayLink}
              className={cx('button')}
              target="_blank"
              rel="noreferrer"
            >
              송금
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Contact
