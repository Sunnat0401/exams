import Image from 'next/image'
import styles from './product.module.css';
import { OkImage } from '../../../public'
function Product() {

  return (
    <div className={styles.product}>
    <div className={styles.product_container}>
      <div className={styles.product_card}>
          <h3 className={styles.product_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.product_title}>
          TOSHKENT – ISTANBUL
          </h2>
          <div className={styles.product_hr}></div>
          <ul className={styles.product_lists}>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Istanbul aeroportiga kelish.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Transfer va mehmonxonaga joylashish.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Gid bilan uchrashuv.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Bo&#39;sh vaqt.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Istanbulda tunash.</li>
          </ul>
      </div>
      <div className={styles.product_card}>
          <h3 className={styles.product_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.product_title}>
          DUBAY EKSKURSIYASI
          </h2>
          <div className={styles.product_hr}></div>
          <ul className={styles.product_lists}>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Istanbul aeroportiga kelish.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Transfer va mehmonxonaga joylashish.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Gid bilan uchrashuv.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Bo'sh vaqt.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Istanbulda tunash.</li>
          </ul>
      </div>
      <div className={styles.product_card}>
          <h3 className={styles.product_subtitle}>Tur Istanbul: Dastur</h3>
          <h2 className={styles.product_title}>
          DUBAY – ABU DABI
          </h2>
          <div className={styles.product_hr}></div>
          <ul className={styles.product_lists}>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada nonushta.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Abu Dabiga transfer.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Mehmonxonaga joylashish.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/>  Tushlik.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Luvr Abu Dabi muzeyini ziyorat qilish</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Shayx Zayd masjidini ziyorat qilish.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada kechki ovqat.</li>
              <li className={styles.product_list}><Image src={OkImage} alt='okImage'/>Bo&#39;sh vaqt.</li>
          </ul>
      </div>
    </div>
  </div>
  )
}

export default Product
