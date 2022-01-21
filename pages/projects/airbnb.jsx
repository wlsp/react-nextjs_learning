import styles from '../../styles/Airbnb.module.scss'
import AirbnbData from '../../data/airbnbClone.json'

// Nav Component
function AirbnbNav() {
  return (
    <nav className={styles['airbnb--nav']}>
      <img className={styles['airbnb--logo']} src={'/images/airbnb.svg'} alt='Airbnb logo' />
    </nav>
  )
}

// Card Component
function AirbnbCard({ img, rating, reviewCount, location, title, price, openSpots }) {
  let badgeText
  if (openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className={styles['airbnb--card']}>
      {badgeText && <span className={styles['airbnb--badge']}>{badgeText}</span>}
      <img src={`/images/${img}`} alt={'activity'} className={styles['airbnb--card-image']} />
      <div className={styles['airbnb--card-stats']}>
        <img src={'/images/star.svg'} alt='star' className={styles['airbnb--card-star']} />
        <span>{rating}</span>
        <span className={styles['airbnb--grey']}>({reviewCount}) • </span>
        <span className={styles['airbnb--grey']}> {location}</span>
      </div>
      <p>{title}</p>
      <p><span className={styles['airbnb--bold']}>From ${price}</span> / person</p>
    </div>
  )
}

// Hero Component
function AirbnbHero() {
  return (
    <section className={styles['airbnb--hero']}>
      <img src={'/images/photo-grid.png'} alt='Grid Gallery' className={styles['airbnb--photo']} />
      <h1 className={styles['airbnb--headline']}>Online Experiences</h1>
      <p className={styles['airbnb--text']}>Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.</p>
      <div className={styles['airbnb--cards-container']}>
        {AirbnbData.map((item) =>
          <AirbnbCard
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
          />)}
      </div>
    </section>
  )
}

// Main Component for this Project
export default function Airbnb() {
  return (
    <section className={styles['airbnb']}>
      <AirbnbNav />
      <AirbnbHero />
    </section>
  )
}