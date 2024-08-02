import Image from 'next/image'
import styles from './program.module.css'
import { OkImage } from '../../../public'
function Program() {
  return (
    <div className={styles.propgram}>
      <div className={styles.propgram_container}>
        <div className={styles.propgram_card}>
            <h3 className={styles.propgram_subtitle}>Tur Istanbul: Dastur</h3>
            <h2 className={styles.program_title}>
            TOSHKENT – ISTANBUL
            </h2>
            <div className={styles.program_hr}></div>
            <ul className={styles.program_lists}>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Istanbul aeroportiga kelish.</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Transfer va mehmonxonaga joylashish.</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Gid bilan uchrashuv.</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Bo&#39;sh vaqt.</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Istanbulda tunash.</li>
            </ul>
        </div>
        <div className={styles.propgram_card}>
            <h3 className={styles.propgram_subtitle}>Tur Istanbul: Dastur</h3>
            <h2 className={styles.program_title}>
            DUBAY EKSKURSIYASI
            </h2>
            <div className={styles.program_hr}></div>
            <ul className={styles.program_lists}>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada nonushta.</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Ko&#39;k Masjid va Aya Sofiyani ziyorat qilish</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Topqapi saroyini ko'rish.</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Tushlik</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Dolmabahche saroyini ziyorat qilish.</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Mehmonxonada kechki ovqat.</li>
                <li className={styles.program_list}><Image src={OkImage} alt='okImage'/> Bo&#39;sh vaqt.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Program
