import Image from 'next/image'

import styles from './page.module.css'

export default function Home() {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテックカンパニーです。
        </p>
      </div>
      <Image
        alt=""
        className={styles.bgimg}
        height={1200}
        priority
        src="/img-mv.jpg"
        width={4000}
      />
    </section>
  )
}
