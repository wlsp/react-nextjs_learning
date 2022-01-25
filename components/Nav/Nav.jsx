import styles from "./Nav.module.scss"
import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Nav() {
  const [listOpen, setListOpen] = useState(false);

  const handleDropdown = () => setListOpen(!listOpen);


  return (
    <nav className={styles['nav']}>
      <img className={styles['nav--logo']} src={'../images/react.svg'} alt='react logo' />
      <h3 className={styles['nav--logo-text']}>
        <Link href="/" passHref>
          <a>ReactFacts</a>
        </Link>
      </h3>
      <h4 className={styles['nav--title']}>React Course -
        <span onClick={handleDropdown}> Projects</span></h4>
      <ul className={listOpen ? styles['nav--open'] : styles['nav--list']}>
        <li onClick={handleDropdown}>
          <Link href="/projects/digitalbusinesscard" passHref>
            <a>Digital Business Card</a>
          </Link>
        </li>
        <li onClick={handleDropdown}>
          <Link href="/projects/airbnb" passHref>
            <a>Airbnb</a>
          </Link>
        </li>
        <li onClick={handleDropdown}>
          <Link href="/projects/traveljournal" passHref>
            <a>My Travel-Journal</a>
          </Link>
        </li>
        <li onClick={handleDropdown}>
          <Link href="/projects/memegenerator" passHref>
            <a>Meme Generator</a>
          </Link>
        </li>
        </ul>
    </nav>
  )
}