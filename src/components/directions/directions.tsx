import Image from 'next/image'
import styles from './directions.module.css'
import { person1, person2, person3, person4, person5, person6 } from '../../../public'
function Directions() {
  return (
    <div className={styles.direction}>
      <div className={styles.direction_container}>
        <div className={styles.direction_cards}>
           <div className={styles.direction_card}>
            <Image className={styles.direction_image} src={person1} alt='person'/>
            <p className={styles.direction_text}>
            Individual
            yondashuv
            </p>

           </div>
           <div className={styles.direction_blog}></div>
        </div>
        <div className={styles.direction_cards}>
           <div className={styles.direction_card}>
            <Image className={styles.direction_image} src={person2} alt='person'/>
            <p className={styles.direction_text}>
            Tajriba va professionallik
            </p>

           </div>
           <div className={styles.direction_blog}></div>
        </div>
        <div className={styles.direction_cards}>
           <div className={styles.direction_card}>
            <Image className={styles.direction_image} src={person3} alt='person'/>
            <p className={styles.direction_text}>
            Keng yo&#39;nalishlar tanlovi
            </p>

           </div>
           <div className={styles.direction_blog}></div>
        </div>
        <div className={styles.direction_cards}>
           <div className={styles.direction_card}>
            <Image className={styles.direction_image} src={person4} alt='person'/>
            <p className={styles.direction_text}>
            Ishonchlilik va xavfsizlik
            </p>

           </div>
           <div className={styles.direction_blog}></div>
        </div>
        <div className={styles.direction_cards}>
           <div className={styles.direction_card}>
            <Image className={styles.direction_image} src={person5} alt='person'/>
            <p className={styles.direction_text}>
            Raqobatbardosh narxlar
            </p>

           </div>
           <div className={styles.direction_blog}></div>
        </div>
        <div className={styles.direction_cards}>
           <div className={styles.direction_card}>
            <Image className={styles.direction_image} src={person6} alt='person'/>
            <p className={styles.direction_text}>
            24/7 qo&#39;llab-quvvatlash
            </p>

        </div>
           <div className={styles.direction_blog}></div>
           </div>
      </div>
    </div>
  )
}

export default Directions
