import styles from '../../styles/MemeGenerator.module.scss'
import memesData from '../../data/memesData.json'
import { useState } from 'react'

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

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <section className={styles.meme}>
      <MemeHeader />
      <div className={styles['meme--form']}>
        <input type='text' className={styles['meme--input']} placeholder='Top Text' />
        <input type='text' className={styles['meme--input']} placeholder='Bottom Text' />
        <button className={styles['meme--btn']} onClick={getMemeImage} >Get a new meme image 🌠</button>
        <img src={meme.randomImage} className={styles['meme--img']} alt='meme' />
      </div>
    </section>
  );
}