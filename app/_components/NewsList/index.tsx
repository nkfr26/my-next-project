import Image from 'next/image'
import Link from 'next/link'

import styles from './index.module.css'

import NewsCategory from '@/_components/NewsCategory'
import NewsDate from '@/_components/NewsDate'
import type { News } from '@/_libs/microcms'

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
          <Link className={styles.link} href={`/news/${article.id}`}>
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
                <NewsCategory category={article.category} />
                <NewsDate date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  )
}
