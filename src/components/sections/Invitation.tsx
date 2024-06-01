import styles from './Invitation.module.scss'
import classNames from 'classnames/bind'
import Section from '../common/Section'
import Text from '../common/Text'
import CocktailIcon from '@/assets/svg/CocktailIcon'

const cx = classNames.bind(styles)

function Invitation({ message }: { message: string }) {
  return (
    <Section className={cx('container')}>
      <CocktailIcon className={cx('icon-cocktail')} />
      <Text>{message}</Text>
    </Section>
  )
}

export default Invitation
