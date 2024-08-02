import Image from 'next/image'
import { OkImage } from '../../../public'
import styles from './collections.module.css'
const Collectionss = () => {
  return (
      
    <div className={styles.collections}>
    <div className={styles.collections_container}>
      <div className={styles.collections_card}>
          <h3 className={styles.collections_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.collections_title}>
          TOSHKENT – BANGKOK
          </h2>
          <div className={styles.collections_hr}></div>
          <ul className={styles.collections_lists}>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Istanbul aeroportiga kelish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Transfer va mehmonxonaga joylashish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Gid bilan uchrashuv.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Bo'sh vaqt.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Istanbulda tunash.</li>
          </ul>
      </div>
      <div className={styles.collections_card}>
          <h3 className={styles.collections_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.collections_title}>
          BANGKOK EKSKURSIYASI
          </h2>
          <div className={styles.collections_hr}></div>
          <ul className={styles.collections_lists}>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Istanbul aeroportiga kelish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Transfer va mehmonxonaga joylashish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Gid bilan uchrashuv.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Bo'sh vaqt.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Istanbulda tunash.</li>
          </ul>
      </div>
      <div className={styles.collections_card}>
          <h3 className={styles.collections_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.collections_title}>
          CHIANG MAY – PHUKET
          </h2>
          <div className={styles.collections_hr}></div>
          <ul className={styles.collections_lists}>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada nonushta.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Abu Dabiga transfer.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Mehmonxonaga joylashish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Shayx Zayd masjidini ziyorat qilish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada kechki ovqat.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/>Bo'sh vaqt.</li>
          </ul>
      </div>
      <div className={styles.collections_card}>
          <h3 className={styles.collections_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.collections_title}>
          BANGKOK – CHIANG MAY
          </h2>
          <div className={styles.collections_hr}></div>
          <ul className={styles.collections_lists}>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada nonushta.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Abu Dabiga transfer.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Mehmonxonaga joylashish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/>  Tushlik.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Shayx Zayd masjidini ziyorat qilish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/> Kolizey va Rim forumini ziyorat qilish.</li>
              <li className={styles.collections_list}><Image src={OkImage} alt='okImage'/>Bo'sh vaqt.</li>
          </ul>
      </div>
    </div>
  </div>
  )
}

export default Collectionss
