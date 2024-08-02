import Image from 'next/image'
import styles from './list.module.css'
import { BaaImage, infoGroup } from '../../../public'
function List() {
  return (
    <div className={styles.list}>
            <div className={styles.list_container}>
                <Image className={styles.list_images} src={BaaImage} alt='listImage' />
                <div className={styles.list_wrapper}>
                    <div className={styles.list_left}>
                        <h3 className={styles.list_title}>
                            Turkiya
                        </h3>
                        <h4 className={styles.list_subtitle}>
                            Istanbul: Asrlar Kesisgan Abadiy Shahar
                        </h4>
                        <p className={styles.list_paragraph}>
                            Istanbulga xush kelibsiz – Sharq va G&#39;arb kesisadigan, sehr va tarixiy
                            atmosfera yaratgan shahar.Siz Sultonahmetning jozibali dunyosiga
                            sho&#39;ng&#39;ishingiz, u yerda tor ko&#39;chalar sizni buyuk Ko&#39;k masjid va Aya Sofiyaga
                            olib boradi
                        </p>
                        <p className={styles.list_text}>
                            Sultonahmet bo&#39;ylab sayohat sizni Vizantiya va Usmoniy
                            imperiyasining uzoq davrlariga olib boradi.  Shahar ramzi bo&#39;lgan Topqapi
                            saroyi, Usmoniy sultonlarining rezidensiyasi, sizni boylik va haremning
                            intrigalariga cho&#39;mdiradi.
                        </p>
                        <p className={styles.list_subtext}>
                            Mashhur Katta Bozor bo&#39;ylab yuring, bu yerda siz noyob suvenirlar, ziravorlar
                            va antikvar buyumlarni topasiz. Bosfor bo&#39;yidagi ajoyib manzaralardan
                            bahramand bo&#39;ling va Istanbulning ruhini his eting. Turni Dolmabahche
                            saroyi, Usmoniy davrining boylik va nafislik ramzi, bilan yakunlang
                        </p>
                    </div>
                    <Image className={styles.list_group} src={infoGroup} alt='image'/>
                </div>
            </div>
        </div>
  )
}

export default List
