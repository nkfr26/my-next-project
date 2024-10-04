import Image from 'next/image'

import styles from './index.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="/">
        <Image
          alt="SIMPLE"
          className={styles.logo}
          height={133}
          priority
          src="/logo.svg"
          width={348}
        />
      </a>
    </header>
  )
}
