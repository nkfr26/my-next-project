import styles from './index.module.css'

import type { Category } from '@/app/_libs/microcms'

type Props = {
  category: Category
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>
}
