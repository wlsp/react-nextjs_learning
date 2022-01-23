import styles from '../../styles/MemeGenerator.module.scss'

function MemeHeader() {
  return (
    <header className={styles['meme--header']}>
      <div className={styles['meme--logo-container']}>
        <img src='/images/trollface.svg' alt='troll face' />
        <h1>MemeGenerator</h1>
      </div>
      <div>
      <p>React Course - Project 3</p>
      </div>
    </header>
  )
}

export default function memegenerator() {
  return (
    <section className={styles['meme--main']}>
    <MemeHeader />
    </section>
  );
}