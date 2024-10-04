import Image from 'next/image'

import styles from './index.module.css'

type Props = {
  date: string
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Date({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image alt="" height={16} loading="eager" src="/clock.svg" width={16} />
      {date}
    </span>
  )
}
