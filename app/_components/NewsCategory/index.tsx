import styles from './index.module.css'

import type { Category } from '@/_libs/microcms'

type Props = {
  category: Category
}

export default function NewsCategory({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>
}
