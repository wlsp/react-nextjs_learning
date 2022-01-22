import styles from '../../styles/TravelJournal.module.scss'
import TravelData from '../../data/travelJournal.json'

function TravelHeader() {
  return (
    <header className={styles['tj--header']}>
      <div className={styles['tj--logo-container']}>
        <img className={styles['tj--logo']} src={'/images/globus.svg'} alt='my travel-journal logo' />
        <p>my travel journal.</p>
      </div>
    </header>
  )
}

function TravelCard({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <div className={styles['tj--card']}>
      <figure className={styles['tj--image-container']}>
        <img src={`/images/${imageUrl}`} alt={`spot in ${location}`} />
      </figure>
      <div className={styles['tj--card-content']}>
      <div className={styles['tj--stats']}>
      <img src='/images/location.svg' alt='location icon' />
      <span className={styles['tj--location']}>{location}</span>
      <span className={styles['tj--location-map']}><a href={googleMapsUrl}>View on Google Maps</a></span>
      </div>
      <h1 className={styles['tj--title']}>{title}</h1>
      <p className={styles['tj--date']}>{startDate} - {endDate}</p>
      <p className={styles['tj--descrip']}>{description}</p>
      </div>
    </div>
  )
}

export default function traveljournal() {
  return (
    <section className={styles['tj']}>
      <TravelHeader />
      <main className={styles['tj--main']}>
        {TravelData.map((item) =>
          <TravelCard
            key={item.id}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )}
      </main>
    </section>
  );
}
