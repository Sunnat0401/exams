import Image from 'next/image'
import styles from './items.module.css'
import { OkImage } from '../../../public'
function Items() {
  return (
    <div className={styles.items}>
    <div className={styles.items_container}>
      <div className={styles.items_card}>
          <h3 className={styles.items_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.items_title}>
          TOSHKENT – DUBAY
          </h2>
          <div className={styles.items_hr}></div>
          <ul className={styles.items_lists}>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Istanbul aeroportiga kelish.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Transfer va mehmonxonaga joylashish.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Gid bilan uchrashuv.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Bo&#39;sh vaqt.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Istanbulda tunash.</li>
          </ul>
      </div>
      <div className={styles.items_card}>
          <h3 className={styles.items_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.items_title}>
          DUBAY EKSKURSIYASI
          </h2>
          <div className={styles.items_hr}></div>
          <ul className={styles.items_lists}>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada nonushta.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Ko&#39;k Masjid va Aya Sofiyani ziyorat qilish</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Topqapi saroyini ko&#39;rish.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Tushlik</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Dolmabahche saroyini ziyorat qilish.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada kechki ovqat.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Bo&#39;sh vaqt.</li>
          </ul>
      </div>
      <div className={styles.items_card}>
          <h3 className={styles.items_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.items_title}>
          DUBAY – ABU DABI
          </h2>
          <div className={styles.items_hr}></div>
          <ul className={styles.items_lists}>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada nonushta.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Ko&#39;k Masjid va Aya Sofiyani ziyorat qilish</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Topqapi saroyini ko&#39;rish.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Tushlik</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Dolmabahche saroyini ziyorat qilish.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada kechki ovqat.</li>
              <li className={styles.items_list}><Image src={OkImage} alt='okImage'/> Bo&#39;sh vaqt.</li>
          </ul>
      </div>
    </div>
  </div>
  )
}

export default Items
