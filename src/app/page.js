import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.bookNames}>
        <h1><Link href="/164">164</Link> -- <Link href="/82">82</Link></h1>
        <h1>X2 PUBLICATIONS</h1>
    </div>
  )
}
