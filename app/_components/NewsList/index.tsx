import Image from 'next/image'

import styles from './index.module.css'

import Category from '@/app/_components/Category'
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Date from '@/app/_components/Date'
import type { News } from '@/app/_libs/microcms'

type Props = {
  news: News[]
}

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>
  }
  return (
    <ul>
      {news.map((article) => (
        <li className={styles.list} key={article.id}>
          <div className={styles.link}>
            <Image
              alt="No Image"
              className={styles.image}
              height={630}
              src="/no-image.png"
              width={1200}
            />
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  )
}
