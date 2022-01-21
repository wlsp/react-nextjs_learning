import styles from "./Nav.module.scss"
import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Nav() {
  const [listOpen, setListOpen] = useState(false);

  useEffect(() => {
    document.querySelector('#__dropdown').addEventListener('mouseenter', () => {
      setListOpen(true);
    })


    return () => {
      
    }
  }, []);

  return (
    <nav className={styles['nav']}>
      <img className={styles['nav--logo']} src={'../images/react.svg'} alt='react logo' />
      <h3 className={styles['nav--logo-text']}>
        <Link href="/" passHref>
          <a>ReactFacts</a>
        </Link>
      </h3>
      <h4 className={styles['nav--title']}>React Course -
        <span id={'__dropdown'} onClick={() => setListOpen(!listOpen)}> Projects</span></h4>
      <ul className={listOpen ? styles['nav--open'] : styles['nav--list']}>
        <li>
          <Link href="/projects/digitalbusinesscard" passHref>
            <a>Digital Business Card</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/airbnb" passHref>
            <a>Airbnb</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}