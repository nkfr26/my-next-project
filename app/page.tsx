import Image from 'next/image'

import styles from './page.module.css'

import ButtonLink from '@/_components/ButtonLink'
import NewsList from '@/_components/NewsList'
import type { News } from '@/_libs/microcms'

const data: { contents: News[] } = {
  contents: [
    {
      id: '1',
      title: '渋谷にオフィスを移転しました',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '2',
      title: '当社CEOが業界リーダーTOP30に選出されました',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '3',
      title: 'テストの記事です',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/04/19',
      createdAt: '2023/04/19',
    },
  ],
}

export default function Home() {
  const sliceData: News[] = data.contents.slice(0, 2)

  return (
    <>
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
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  )
}
