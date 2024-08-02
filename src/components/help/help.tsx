import Image from 'next/image'
import styles from  './help.module.css'
import { girl } from '../../../public'
import Send from '../send/send'
const Help = () => {
  return (
    <div className={styles.help}>
      <div className={styles.container}>
         <div className={styles.help_information}>
          <h1 className={styles.help_title}>
            Dunyo sizni 
            Kutmoqda
          </h1>
       <Send/>

         </div>
       <div className={styles.help_images}>
       <Image className={styles.help_image} src={girl} alt='girl' />
       </div>
      </div>
    </div>
  )
}

export default Help
