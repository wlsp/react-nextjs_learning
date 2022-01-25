import styles from './MainContent.module.scss'

export default function MainContent() {
  return (
    <main className={styles['main']}>
      <div className={styles['main--container']}>
        <h1 className={styles['main--title']}>Fun facts about React</h1>
        <ul className={styles['main--facts']}>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  )
}