import Image from 'next/image'
import styles from './collection.module.css'
import { OkImage } from '../../../public'
function Collection() {
  return (
  
    
        <div className={styles.collection}>
        <div className={styles.collection_container}>
          <div className={styles.collection_card}>
              <h3 className={styles.collection_subtitle}>Tur Istanbul: Dastur</h3>
              <h2 className={styles.collection_title}>
              TOSHKENT – PARIJ
              </h2>
              <div className={styles.collection_hr}></div>
              <ul className={styles.collection_lists}>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Istanbul aeroportiga kelish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Transfer va mehmonxonaga joylashish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Gid bilan uchrashuv.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Bo&#39;sh vaqt.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Istanbulda tunash.</li>
              </ul>
          </div>
          <div className={styles.collection_card}>
              <h3 className={styles.collection_subtitle}>Tur Istanbul: Dastur</h3>
              <h2 className={styles.collection_title}>
              PARIJ EKSKURSIYASI
              </h2>
              <div className={styles.collection_hr}></div>
              <ul className={styles.collection_lists}>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Istanbul aeroportiga kelish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Transfer va mehmonxonaga joylashish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Gid bilan uchrashuv.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Bo&#39;sh vaqt.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Istanbulda tunash.</li>
              </ul>
          </div>
          <div className={styles.collection_card}>
              <h3 className={styles.collection_subtitle}>Tur Istanbul: Dastur</h3>
              <h2 className={styles.collection_title}>
              PARIJ – RIM
              </h2>
              <div className={styles.collection_hr}></div>
              <ul className={styles.collection_lists}>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada nonushta.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Abu Dabiga transfer.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Mehmonxonaga joylashish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/>  Tushlik.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Luvr Abu Dabi muzeyini ziyorat qilish</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Shayx Zayd masjidini ziyorat qilish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada kechki ovqat.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/>Bo'sh vaqt.</li>
              </ul>
          </div>
          <div className={styles.collection_card}>
              <h3 className={styles.collection_subtitle}>Tur Istanbul: Dastur</h3>
              <h2 className={styles.collection_title}>
              PARIJ – RIM
              </h2>
              <div className={styles.collection_hr}></div>
              <ul className={styles.collection_lists}>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada nonushta.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Abu Dabiga transfer.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Mehmonxonaga joylashish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/>  Tushlik.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Shayx Zayd masjidini ziyorat qilish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/> Kolizey va Rim forumini ziyorat qilish.</li>
                  <li className={styles.collection_list}><Image src={OkImage} alt='okImage'/>Bo&#39;sh vaqt.</li>
              </ul>
          </div>
        </div>
      </div>
    
    
  )
}

export default Collection
