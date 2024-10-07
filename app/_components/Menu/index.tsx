'use client'

import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import styles from './index.module.css'

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news" onClick={close}>
              ニュース
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={close}>
              メンバー
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={close}>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button
          className={cx(styles.button, styles.close)}
          onClick={close}
          type="button"
        >
          <Image
            alt="閉じる"
            height={24}
            priority
            src="/close.svg"
            width={24}
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open} type="button">
        <Image alt="メニュー" height={24} src="/menu.svg" width={24} />
      </button>
    </div>
  )
}
