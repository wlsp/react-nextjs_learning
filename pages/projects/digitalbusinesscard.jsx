import { useState } from 'react';

import GitHubIcon from '../../public/icons/GitHubIcon';
import LinkedinIcon from '../../public/icons/LinkedInIcon';
import MailIcon from '../../public/icons/MailIcon';

import styles from '../../styles/DigitalBusinessCard.module.scss'

export default function DigitalBusinessCard() {
  const [color, setColor] = useState();
  return (
    <section className={styles['dbc']}>
      <div className={styles['dbc--container']}>
        <figure className={styles['dbc--img-container']} style={{ background: color }}>
          <img src={'../images/wlsp.png'} alt='wlsp' />
          <div className={styles['dbc--dots-container']}>
            <div className={styles['dbc--dots']} style={{ backgroundColor: '#5A6583' }} onClick={() => { setColor('#5A6583') }}></div>
            <div className={styles['dbc--dots']} style={{ backgroundColor: '#809CF5' }} onClick={() => { setColor('#809CF5') }}></div>
            <div className={styles['dbc--dots']} style={{ backgroundColor: '#D2D2D7' }} onClick={() => { setColor('#D2D2D7') }}></div>
          </div>
        </figure>
        <article className={styles['dbc--content-container']}>
          <div className={styles['dbc--card-header']}>
            <p className={styles['dbc--headline']}>Wadson Lucas Santos Pereira</p>
            <p className={styles['dbc--subline']}>Frontend Developer</p>
            <p className={styles['dbc--page-link']}><a href={'https://www.wlsp.dev/'} target='_blank' rel="noreferrer">wlsp.dev</a></p>
          </div>
          <div className={styles['dbc--btn-container']}>
            <button className={`${styles['dbc--btn']} ${styles['mail']}`}><MailIcon className={styles['icon']} /> Email</button>
            <button className={`${styles['dbc--btn']} ${styles['linkedin']}`}><LinkedinIcon className={styles['icon']} />  LinkedIn</button>
          </div>
          <div className={styles['dbc--about']}>
            <h2>About</h2>
            <p>I am a frontend developer with a deep passion and interest in making things
              simple and automating daily tasks. I try to keep up with security and best practices,
              and am always looking for new things to learn.</p>
          </div>
          <div className={styles['dbc--interests']}>
            <h2>Interests</h2>
            <p>React, Next.js, Typescript, Redux, JavaScript, Sass, CSS, SVG...</p>
          </div>
        </article>
        <footer className={styles['dbc--footer']}>
          <GitHubIcon />
        </footer>
      </div>
    </section>
  )
}

